# カレンダーアプリ

<HistoryTags :tags="['Flutter', 'Plugins']" />

今回は以下を目指していただきます。

[@preview](https://zenn.dev/chooyan/books/calendar-package)

なお、今回は Zenn book を利用しています。

### ロジック

カレンダーのロジックを置きます。

[@preview](https://github.com/chooyan-eng/calendar_logic)

### ウィジェット

カレンダーのウィジェットを置きます。

[@preview](https://github.com/chooyan-eng/calendar_widget)

### メインとなるアプリ

メインとなるアプリを置きます。

[@preview](https://github.com/chooyan-eng/flutter_calendar)

## Flutter 環境構築

当日までに Flutter の開発環境の構築をお願いします。

`flutter create` でプロジェクトを作成し、最初のカウンターアプリが起動できたら OK です。

まだ環境構築ができていない方は、以下の公式ドキュメントを参考に進めてください。

[https://docs.flutter.dev/get-started/install](https://docs.flutter.dev/get-started/install)

いろいろ書いてありますが、大まかな手順は以下の通りです。

- SDK をインストールする
- パスを通す
- エディタ (今回使う Visual Studio Code) をインストールする

このうち上 2 つについては以下でも詳しく書いております。参考にしてみてください。

### SDK をインストールする

各自の環境に合わせて SDK をダウンロード、それぞれの環境でインストールしてください。

なお、今回の Flutter バージョンは `3.0.0-stable` を使う予定です。

* macOS - [SDK for Intel](https://storage.googleapis.com/flutter_infra_release/releases/stable/macos/flutter_macos_3.0.0-stable.zip) / [SDK for Apple Silicon](https://storage.googleapis.com/flutter_infra_release/releases/stable/macos/flutter_macos_arm64_3.0.0-stable.zip)
* Windows - [SDK](https://storage.googleapis.com/flutter_infra_release/releases/stable/windows/flutter_windows_3.0.0-stable.zip)

### パスを通す

#### Mac をお使いの方

`.bash_profile` を vi で開いて以下コマンドを叩きます。

```bash
mkdir ~/project
```

`<USER>` を個別のユーザー名に置き換えて `PATH` を追加します。

```bash
export PATH="$PATH:/Users/<USER>/project/flutter/bin"
```

`PATH` を更新して以下コマンドを叩きます。

```bash
source ~/.bash_profile
```

#### Windows をお使いの方

`C:\Program Files` のようにアクセス許可が必要な場所で行うと失敗する可能性があるので注意してください。

C 直下に `project` フォルダを作成、ダウンロードした `C:\project` 直下に解凍します。そして `bin` フォルダを環境変数に追加します。

## 環境構築を少し楽にする

Flutter のテンプレートリポジトリを作成しています。

[@preview](https://github.com/jiyuujin/template_flutter/tree/release/flutter3.0.0-stable)

## 配信動画

2022/07/02 オンラインで開催した Flutter Handson Osaka [#10](https://flutter-jp.connpass.com/event/250745/) で当日配信した動画はこちらからご覧になれます。

<YouTubeVideo video-id="dlAKk1VAQyA" title="カレンダーアプリ" />

<!--
[https://www.youtube.com/watch?v=dlAKk1VAQyA](https://www.youtube.com/watch?v=dlAKk1VAQyA)
-->

## 困ったら

[公式ドキュメントを読みましょう](http://flutter.io/)
