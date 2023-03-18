# Supabaseチャットアプリ

<HistoryTags :tags="['Flutter', 'Supabase']" />

今回はSupabaseとFlutterを使ってチャットアプリを作っていきます。

SupabaseはPostgresデータベースが裏側にくっついたBack end as a Serviceで、リアルタイムにデータベースのデータを取得する機能もあるので今回はそちらを使って簡単なチャットアプリを作っていきます。

## アプリの全体像

繰り返しになりますが、今回作るのはリアルタイムチャットアプリです。ユーザーは登録・ログインができて、それが済んだらチャット画面に飛びそこから他の人とメッセージのやり取りをピコンピコンできる形になります。

![アプリビジュアル](https://supabase.com/images/blog/flutter-chat/chat-app-screenshot.png)

アプリの流れはこのような形になっています。Flutterから[supabase_flutter](https://pub.dev/packages/supabase_flutter)を使ってログインしたり、データベースのデータにアクセスします。

![アーキテクチャー全体像](https://supabase.com/images/blog/flutter-chat/architecture-diagram.png)

## もろもろの準備

### Flutterアプリ作成

まず最初に空のFlutterアプリを作りましょう。

ターミナルから以下のコマンドを打ってください。

```bash
flutter create my_chat_app
```

スタートアプリができたら普段使っているコードエディターを開いてコーディングに入りましょう！

### パッケージのインストール

pubspec.yamlを開いて以下のパッケージを追加しましょう！

```yaml
supabase_flutter: ^1.5.0
timeago: ^3.1.0
```

[supabase_flutter](https://pub.dev/packages/supabase_flutter)はSupabase上でログインしたり、データの読み書きをしたりする際に使います。`timeago`は`DateTime`型の値を渡すと自動的に現在時刻と比較して「1d」みたいにどれくらい前に投稿されたかのテキストを出してくれます。これはチャットの送信時刻を表示するところで使います。

`flutter pub get`を実行してパッケージのインストールを完了させましょう。先ほどローカルでFlutterのアプリを実行していましたが、そちらも一度閉じて再実行する必要があります。

### Supabaseプロジェクトの作成

今度はSupabase側の設定に入っていきましょう。「まだSupabaseプロジェクト作ったことがないよ」という方もご心配なく！Githubアカウントさえあれば誰でも無料で簡単にプロジェクトが作れます！まずは[こちら](https://app.supabase.com/)にアクセス。

Githubアカウントでログインすることを促されるので緑のボタンを押してログインしてしまいましょう。あとはGithub側でもろもろ許可してしまえばログインできます！ログインが完了してSupabaseの画面に戻ってきたら左上の「New Project」ボタンを押しましょう！

![Supabaseの新規プロジェクト作成](https://supabase.com/images/blog/flutter-chat/create-new-supabase-project.png)

このボタンを押したあとプロジェクト名などを設定します。プロジェクト名はとりあえず「chat」とでも呼んでおきましょう。Detabaseのパスワードに関しては特に今回は使いませんし、後々何かで必要になっても上書きはできるので`Generate a password`ボタンを押してランダムでセキュアなパスワードを自動生成しちゃいましょう。Pricing planはデフォルトの無料版でOKです。ここまで済んだら「Create new Project」ボタンを押しましょう。Supabaseが裏側で新しいプロジェクトを１、2分ほどでセットアップしてくれます。

プロジェクトのセットアップが完了したら実際に設定に入っていきましょう！

### Supabase内でテーブルの作成

今回のアプリで使うテーブルは以下の二つです。
- profiles - ユーザーのプロフィールデータを保存する
- messages - 送信されたチャットデータを保存する

それぞれのメッセージは外部キーによってユーザーのプロフィールに紐づけられています。

![profilesテーブルとmessagesテーブルの関係](https://supabase.com/images/blog/flutter-chat/entity-relations.png)

こちらのSQLをSupabaseダッシュボード内のSQLエディターから実行しましょう。

![SQLエディター](https://supabase.com/images/blog/flutter-chat/sql-editor.png)

```sql
-- プロフィールテーブル
create table if not exists public.profiles (
    id uuid references auth.users on delete cascade not null primary key,
    username varchar(24) not null unique,
    created_at timestamp with time zone default timezone('utc' :: text, now()) not null,

    -- username should be 3 to 24 characters long containing alphabets, numbers and underscores
    constraint username_validation check (username ~* '^[A-Za-z0-9_]{3,24}$')
);
comment on table public.profiles is 'Holds all of users profile information';

-- メッセージテーブル
create table if not exists public.messages (
    id uuid not null primary key default uuid_generate_v4(),
    profile_id uuid default auth.uid() references public.profiles(id) on delete cascade not null,
    content varchar(500) not null,
    created_at timestamp with time zone default timezone('utc' :: text, now()) not null
);
comment on table public.messages is 'Holds individual messages sent on the app.';
```

実行が完了したらテーブルエディターに行って実際に作成されたテーブルを確認してみましょう。空のテーブルが二つ作成されているはずです。

![テーブルエディターでテーブルを確認](https://supabase.com/images/blog/flutter-chat/table-editor.png)

Supabaseにはリアルタイムにデータを引っ張ってくる機能があるのですが、デフォルトでこちらの機能はオフになっており、テーブル単位でオンにしてあげる必要があります。こちらのSQLを同じようにSQLエディターから実行して、messagesテーブルからリアルタイムにデータを引っ張って来れるようにしましょう。

```sql
-- *** Add tables to the publication to enable real time subscription ***
alter publication supabase_realtime add table public.messages;
```

ここまできたらあとは実際にFlutterのコードを書いていきましょう！

## Flutterでのアプリ開発

### Step 1: constantsファイルの作成

まずはサクッとにconstantsファイルを作成しましょう。このファイルではアプリのあちこちで使う便利な変数や関数を定義しています。

```dart:lib/utils/constants.dart
import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

/// Supabaseクライアント
final supabase = Supabase.instance.client;

/// プロローダー
const preloader =
    Center(child: CircularProgressIndicator(color: Colors.orange));

/// ちょっとしたスペースを作るためのウィジェット
const formSpacer = SizedBox(width: 16, height: 16);

/// Form用のパディング
const formPadding = EdgeInsets.symmetric(vertical: 20, horizontal: 16);

/// 予期せぬエラーが起きた時に表示するメッセージ
const unexpectedErrorMessage = '予期せぬエラーが起きました';

/// Snackbarを楽に表示するためのエクステンションメソッド
extension ShowSnackBar on BuildContext {
  /// 標準的なスナックバーを表示する
  void showSnackBar({
    required String message,
    Color backgroundColor = Colors.white,
  }) {
    ScaffoldMessenger.of(this).showSnackBar(SnackBar(
      content: Text(message),
      backgroundColor: backgroundColor,
    ));
  }

  /// エラー用のスナックバーを表示する
  void showErrorSnackBar({required String message}) {
    showSnackBar(message: message, backgroundColor: Colors.red);
  }
}
```

### Step 2: Supabaseを初期化

Supabaseを使うにはmain関数で[initialize()](https://supabase.com/docs/reference/dart/initializing#flutter-initialize)してあげる必要があります。
`main.dart`を編集してSupabaseをinitializeしてあげましょう。ついでに、アプリのhomeを`SplashPage()`に設定してあげます。このページは後々作るので一旦今はエラーが出ていても気にせず進みましょう。

SupabaseをinitializeするときにSupabase URLとSupabase Anon Keyが必要になるのですが、これらはSupabaseダッシュボードのsettings -> APIから探すことができます。これらの情報は外部に漏れても全く問題ないものなのでそのままGitにコミットしてしまっても大丈夫です！

![SupabaseのAPI関連情報の探し場所](https://supabase.com/images/blog/flutter-chat/supabase-credentials.png)

```dart:lib/main.dart
import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:my_chat_app/pages/splash_page.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await Supabase.initialize(
    // TODO: 自分のSupabaseのURLとAnon Keyに置き換える
    url: 'SUPABASE_URL',
    anonKey: 'SUPABASE_ANON_KEY',
  );
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'チャット',
      home: const SplashPage(),
    );
  }
}
```

### Step 3: ユーザーのログイン状態に応じてSplashPageからリダイレクトする

ユーザーがアプリを立ち上げたときにそのユーザーがログインしているかどうかに応じて適切なページにリダイレクトしてあげましょう。これをするにはSplashPageというページを作り、その中でログイン状態を判別し適切なページにリダイレクトしてあげます。UIはただ単に真ん中でローダーがくるくる回っているだけのものになります。ここでは`supabase_flutter`の中にある`onAuthenticated`と`onUnauthenticated`メソッドを使います。

```dart:lib/pages/splash_page.dart
import 'package:flutter/material.dart';
import 'package:my_chat_app/pages/chat_page.dart';
import 'package:my_chat_app/pages/register_page.dart';
import 'package:my_chat_app/utils/constants.dart';

/// ログイン状態に応じてユーザーをリダイレクトするウィジェット
class SplashPage extends StatefulWidget {
  const SplashPage({Key? key}) : super(key: key);

  @override
  SplashPageState createState() => SplashPageState();
}

class SplashPageState extends State<SplashPage> {
  @override
  void initState() {
    super.initState();
    _redirect();
  }

  Future<void> _redirect() async {
    // ウィジェットがマウントするのを待つ
    await Future.delayed(Duration.zero);

    final session = supabase.auth.currentSession;
    if (session == null) {
      Navigator.of(context)
          .pushAndRemoveUntil(RegisterPage.route(), (route) => false);
    } else {
      Navigator.of(context)
          .pushAndRemoveUntil(ChatPage.route(), (route) => false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return const Scaffold(body: preloader);
  }
}
```

### Step 4: モデルの定義

アプリ内でデータを扱う際に型を効かせられるようにモデルを定義しましょう。ここでは`profiles`と`messages`テーブル用のモデルを作ります。その際に`fromMap`コンストラクターを作って簡単にSupabaseから帰ってきたデータからインスタンスを作れるようにします。

```dart:lib/models/profile.dart
class Profile {
  Profile({
    required this.id,
    required this.username,
    required this.createdAt,
  });

  /// ユーザー固有のID
  final String id;

  /// ユーザー名
  final String username;

  /// ユーザーのタイムスタンプ
  final DateTime createdAt;

  Profile.fromMap(Map<String, dynamic> map)
      : id = map['id'],
        username = map['username'],
        createdAt = DateTime.parse(map['created_at']);
}
```

```dart:lib/models/message.dart
class Message {
  Message({
    required this.id,
    required this.profileId,
    required this.content,
    required this.createdAt,
    required this.isMine,
  });

  /// メッセージの固有ID
  final String id;

  /// 投稿者のユーザーID
  final String profileId;

  /// メッセージのテキスト
  final String content;

  /// メッセージのタイムスタンプ
  final DateTime createdAt;

  /// メッセージの投稿者が自分かどうか
  final bool isMine;

  Message.fromMap({
    required Map<String, dynamic> map,
    required String myUserId,
  })  : id = map['id'],
        profileId = map['profile_id'],
        content = map['content'],
        createdAt = DateTime.parse(map['created_at']),
        isMine = myUserId == map['profile_id'];
}
```

### Step 5: 登録ページの作成

一通り下準備が整ったのでページの作成に入っていきましょう！まずは登録ページに取り掛かります。今回はシンプルにメールアドレスとパスワード、そしてユーザーネームを設定して登録する形にしましょう。ユーザー名はアプリ内でそのユーザーのアイデンティティとして表示されます。こちらの登録ページから登録が完了するとユーザーは自動的にチャットページにナビゲーションされる形になります。

```dart:lib/pages/register_page.dart
import 'package:flutter/material.dart';
import 'package:my_chat_app/pages/chat_page.dart';
import 'package:my_chat_app/pages/login_page.dart';
import 'package:my_chat_app/utils/constants.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class RegisterPage extends StatefulWidget {
  const RegisterPage({Key? key, required this.isRegistering}) : super(key: key);

  static Route<void> route({bool isRegistering = false}) {
    return MaterialPageRoute(
      builder: (context) => RegisterPage(isRegistering: isRegistering),
    );
  }

  final bool isRegistering;

  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final bool _isLoading = false;

  final _formKey = GlobalKey<FormState>();

  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _usernameController = TextEditingController();

  Future<void> _signUp() async {
    final isValid = _formKey.currentState!.validate();
    if (!isValid) {
      return;
    }
    final email = _emailController.text;
    final password = _passwordController.text;
    final username = _usernameController.text;
    try {
      await supabase.auth.signUp(
          email: email, password: password, data: {'username': username});
      Navigator.of(context)
          .pushAndRemoveUntil(ChatPage.route(), (route) => false);
    } on AuthException catch (error) {
      context.showErrorSnackBar(message: error.message);
    } catch (error) {
      context.showErrorSnackBar(message: unexpectedErrorMessage);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('登録')),
      body: Form(
        key: _formKey,
        child: ListView(
          padding: formPadding,
          children: [
            TextFormField(
              controller: _emailController,
              decoration: const InputDecoration(
                label: Text('Email'),
              ),
              validator: (val) {
                if (val == null || val.isEmpty) {
                  return 'Required';
                }
                return null;
              },
              keyboardType: TextInputType.emailAddress,
            ),
            formSpacer,
            TextFormField(
              controller: _passwordController,
              obscureText: true,
              decoration: const InputDecoration(
                label: Text('Password'),
              ),
              validator: (val) {
                if (val == null || val.isEmpty) {
                  return '必須';
                }
                if (val.length < 6) {
                  return '6文字以上入力してください';
                }
                return null;
              },
            ),
            formSpacer,
            TextFormField(
              controller: _usernameController,
              decoration: const InputDecoration(
                label: Text('ユーザー名'),
              ),
              validator: (val) {
                if (val == null || val.isEmpty) {
                  return '必須';
                }
                final isValid = RegExp(r'^[A-Za-z0-9_]{3,24}$').hasMatch(val);
                if (!isValid) {
                  return '3-24文字にしてください';
                }
                return null;
              },
            ),
            formSpacer,
            ElevatedButton(
              onPressed: _isLoading ? null : _signUp,
              child: const Text('登録'),
            ),
            formSpacer,
            TextButton(
              onPressed: () {
                Navigator.of(context).push(LoginPage.route());
              },
              child: const Text('すでにアカウントがある方はこちら'),
            )
          ],
        ),
      ),
    );
  }
}
```

ユーザー名の`TextFormField`の`validation`の部分を見ていただくと、テーブル定義でユーザー名のフィールドに使っていたものと同じ正規表現を使ってユーザー名のフォーマットを制限していることがわかると思います。

さらに、`_signup()`メソッドを見てみると、ユーザー名をここでは`userMetadata`としてSupabaseに保存していることがわかるかと思います。この`userMetadata`とはSupabaseがデフォルトで用意してくれている`auth.users`テーブル内に存在する`jsonb`型のカラムで、今回はこのユーザー名を他のユーザーもロードしてきて閲覧できるようにしたいので`profiles`テーブルにコピーしてあげる必要があります。ここで役立つのが[`Postgresトリガー`](https://www.youtube.com/watch?v=0N6M5BBe9AE)と[`Postgres Function`](https://supabase.com/docs/guides/database/functions)です。Postgres Functionはデータベース内に定義できる関数のことで、任意で引数を渡してあげて特定のSQL、を実行させることができるものになっています。Postgresトリガーはデータベース内に任意の変更があった際に特定のPostgres Functionを実行する機能になっております。この二つを組み合わせて、`auth.users`テーブルにユーザーが新しく追加された際にその中身を`profiles`テーブルにコピーしてあげることができます。下記のSQLを実行してトリガーとFunctionを定義してあげましょう！その際便利なのが、`profiles`テーブルの`username`カラムには`unique`な制限をかけてあげているので、Flutterのアプリ側でユーザーが選んだユーザー名が既に登録済みの場合はエラーが出て登録が失敗し、ユーザーに違うユーザー名を選ぶことを促すことができる点です。データベースレベルでユニークさが定義されているので、アプリを作る際はあまりそこらへんに神経を使うことなく簡単に裏側のデータをきれいに保つことができます。


```sql
-- ユーザーのメタデータのユーザー名をprofilesテーブルにコピーするfunction
create or replace function public.handle_new_user() returns trigger as $$
    begin
        insert into public.profiles(id, username)
        values(new.id, new.raw_user_meta_data->>'username');

        return new;
    end;
$$ language plpgsql security definer;

-- アカウント作成時に上記functionを呼び起こすトリガー
create trigger on_auth_user_created
    after insert on auth.users
    for each row
    execute function handle_new_user();
```

最後に、SupabaseはデフォルトでEmailで登録した際にそのメールアドレスに確認メールを送り、その確認が済まないときちんと登録完了したことにならない仕様になっているのですが、今回は簡単なサンプルアプリということで一旦こちらはオフにしてしまいましょう。後々続編の記事で認証認可についてはもう少し深堀するので、その際にここら辺はカバーさせてください。ということで、Supabase管理画面のauthentication -> settingsから'Enable email confirmations'のスイッチをオフにしてください。

![メールアドレスの確認をオフにする](https://supabase.com/images/blog/flutter-chat/turn-off-email-confirmation.png)

### Step 6: ログインページの作成

ログインページはシンプルにメールアドレスとパスワードを入力する`TextFormField`があるくらいで、特に捻りはないです。登録ページと同じく、ログインが完了したらチャットページに飛ぶ形になっています。

```dart:lib/pages/login_page.dart
import 'package:flutter/material.dart';
import 'package:my_chat_app/pages/chat_page.dart';
import 'package:my_chat_app/utils/constants.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({Key? key}) : super(key: key);

  static Route<void> route() {
    return MaterialPageRoute(builder: (context) => const LoginPage());
  }

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  bool _isLoading = false;
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  Future<void> _signIn() async {
    setState(() {
      _isLoading = true;
    });
    try {
      await supabase.auth.signInWithPassword(
        email: _emailController.text,
        password: _passwordController.text,
      );
      Navigator.of(context)
          .pushAndRemoveUntil(ChatPage.route(), (route) => false);
    } on AuthException catch (error) {
      context.showErrorSnackBar(message: error.message);
    } catch (_) {
      context.showErrorSnackBar(message: unexpectedErrorMessage);
    }
    if (mounted) {
      setState(() {
        _isLoading = true;
      });
    }
  }

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('ログイン')),
      body: ListView(
        padding: formPadding,
        children: [
          TextFormField(
            controller: _emailController,
            decoration: const InputDecoration(labelText: 'Email'),
            keyboardType: TextInputType.emailAddress,
          ),
          formSpacer,
          TextFormField(
            controller: _passwordController,
            decoration: const InputDecoration(labelText: 'Password'),
            obscureText: true,
          ),
          formSpacer,
          ElevatedButton(
            onPressed: _isLoading ? null : _signIn,
            child: const Text('Login'),
          ),
        ],
      ),
    );
  }
}
```

### Step 7: メッセージのやり取りができるチャットページの作成

いよいよ最後のページ、メインのチャットページを作成しましょう。このページはリアルタイムにメッセージがロードされ、さらに誰でも他の人に向けてメッセージを送信することができるページになります。ここではsupabase-flutterの[stream()](https://supabase.com/docs/reference/dart/stream)メソッドを使ってメッセージテーブルからデータをロードしてきています。メッセージを読み込んだ際に、そのメッセージの送信者情報を`profiles`テーブルから適宜ロードしてきています。その際、ロードされたメッセージはすぐにUI上に表示させ、後から遅れてロードされてくるプロフィール情報は、一旦くるくる回るローダーを表示させたのちにプロフィール情報がロードされ次第ユーザー名の最初の二文字を表示したプロフィール画像的なものを表示させている形になります。


```dart:lib/pages/chat_page.dart
import 'dart:async';

import 'package:flutter/material.dart';

import 'package:my_chat_app/models/message.dart';
import 'package:my_chat_app/models/profile.dart';
import 'package:my_chat_app/utils/constants.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:timeago/timeago.dart';

/// チャットの表示と入力をするページ
class ChatPage extends StatefulWidget {
  const ChatPage({Key? key}) : super(key: key);

  static Route<void> route() {
    return MaterialPageRoute(
      builder: (context) => const ChatPage(),
    );
  }

  @override
  State<ChatPage> createState() => _ChatPageState();
}

class _ChatPageState extends State<ChatPage> {
  late final Stream<List<Message>> _messagesStream;
  final Map<String, Profile> _profileCache = {};

  @override
  void initState() {
    final myUserId = supabase.auth.currentUser!.id;
    _messagesStream = supabase
        .from('messages')
        .stream(primaryKey: ['id'])
        .order('created_at')
        .map((maps) => maps
            .map((map) => Message.fromMap(map: map, myUserId: myUserId))
            .toList());
    super.initState();
  }

  Future<void> _loadProfileCache(String profileId) async {
    if (_profileCache[profileId] != null) {
      return;
    }
    final data =
        await supabase.from('profiles').select().eq('id', profileId).single();
    final profile = Profile.fromMap(data);
    setState(() {
      _profileCache[profileId] = profile;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Chat')),
      body: StreamBuilder<List<Message>>(
        stream: _messagesStream,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            final messages = snapshot.data!;
            return Column(
              children: [
                Expanded(
                  child: messages.isEmpty
                      ? const Center(
                          child: Text('Start your conversation now :)'),
                        )
                      : ListView.builder(
                          reverse: true,
                          itemCount: messages.length,
                          itemBuilder: (context, index) {
                            final message = messages[index];

                            // Flutter的にbuild内でデータのロードをしない方がいいのは
                            // 承知の上で、コードを長くしたくないのでここでロードしちゃう 😂
                            _loadProfileCache(message.profileId);

                            return _ChatBubble(
                              message: message,
                              profile: _profileCache[message.profileId],
                            );
                          },
                        ),
                ),
                const _MessageBar(),
              ],
            );
          } else {
            return preloader;
          }
        },
      ),
    );
  }
}

/// チャットを書くてきすボトックスと送信ボタン
class _MessageBar extends StatefulWidget {
  const _MessageBar({
    Key? key,
  }) : super(key: key);

  @override
  State<_MessageBar> createState() => _MessageBarState();
}

class _MessageBarState extends State<_MessageBar> {
  late final TextEditingController _textController;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.grey[200],
      child: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Row(
            children: [
              Expanded(
                child: TextFormField(
                  keyboardType: TextInputType.text,
                  maxLines: null,
                  autofocus: true,
                  controller: _textController,
                  decoration: const InputDecoration(
                    hintText: 'メッセージを入力',
                    border: InputBorder.none,
                    focusedBorder: InputBorder.none,
                    contentPadding: EdgeInsets.all(8),
                  ),
                ),
              ),
              TextButton(
                onPressed: () => _submitMessage(),
                child: const Text('送信'),
              ),
            ],
          ),
        ),
      ),
    );
  }

  @override
  void initState() {
    _textController = TextEditingController();
    super.initState();
  }

  @override
  void dispose() {
    _textController.dispose();
    super.dispose();
  }

  void _submitMessage() async {
    final text = _textController.text;
    final myUserId = supabase.auth.currentUser!.id;
    if (text.isEmpty) {
      return;
    }
    _textController.clear();
    try {
      await supabase.from('messages').insert({
        'profile_id': myUserId,
        'content': text,
      });
    } on PostgrestException catch (error) {
      context.showErrorSnackBar(message: error.message);
    } catch (_) {
      context.showErrorSnackBar(message: unexpectedErrorMessage);
    }
  }
}

class _ChatBubble extends StatelessWidget {
  const _ChatBubble({
    Key? key,
    required this.message,
    required this.profile,
  }) : super(key: key);

  final Message message;
  final Profile? profile;

  @override
  Widget build(BuildContext context) {
    List<Widget> chatContents = [
      if (!message.isMine)
        CircleAvatar(
          child: profile == null
              ? preloader
              : Text(profile!.username.substring(0, 2)),
        ),
      const SizedBox(width: 12),
      Flexible(
        child: Container(
          padding: const EdgeInsets.symmetric(
            vertical: 8,
            horizontal: 12,
          ),
          decoration: BoxDecoration(
            color: message.isMine
                ? Theme.of(context).primaryColor
                : Colors.grey[300],
            borderRadius: BorderRadius.circular(8),
          ),
          child: Text(message.content),
        ),
      ),
      const SizedBox(width: 12),
      Text(format(message.createdAt, locale: 'en_short')),
      const SizedBox(width: 60),
    ];
    if (message.isMine) {
      chatContents = chatContents.reversed.toList();
    }
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 18),
      child: Row(
        mainAxisAlignment:
            message.isMine ? MainAxisAlignment.end : MainAxisAlignment.start,
        children: chatContents,
      ),
    );
  }
}
```

以上でアプリの作成は完了です！実際に`flutter run`を実行してみてアプリを起動させましょう！ウェブ版とシミュレーター版を同時に起動させてみてぜひリアルタイムにチャットのやり取りをして楽しんでみてください！

今回作ったアプリのコードは[こちら](https://github.com/supabase-community/flutter-chat)になります。
