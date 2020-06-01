# 雛形リポジトリ

上から順に操作してください

## クローンしてください

[https://github.com/YujiOnishi/dictionary_hands_on_hinagata](https://github.com/YujiOnishi/dictionary_hands_on_hinagata)

## Macをお使いの方

### 1. Flutter SDKのダウンロード

[https://storage.googleapis.com/flutter_infra/releases/stable/macos/flutter_macos_v1.9.1+hotfix.6-stable.zip](https://storage.googleapis.com/flutter_infra/releases/stable/macos/flutter_macos_v1.9.1+hotfix.6-stable.zip)

※リンク切れなら[こちら](https://flutter.dev/docs/get-started/install/macos)の指示に従ってSDKをダウンロードしてください

### 2. Flutterを起動する

2-1. `.bash_profile` をviで開く
    
以下コマンドを叩く

```bash
mkdir ~/development
```

2-2. 以下を追加

```bash
export PATH="$PATH:/Users/[User名に置き換えて[]を削除]/development/flutter/bin"
```

2-3. pathを更新
    
以下コマンドを叩く

```bash
source ~/.bash_profile
```

### 3. AndroidStudioのインストール

3-1. [DOWNLOAD ANDROID STUDIO](https://developer.android.com/studio/?hl=ja)より任意の場所に.exeをダウンロード

3-2. インストールウィザードの指示に従ってインストール。初回起動時にSDKのインストールウィザードが出るがStandardを選択肢デフォルトの設定でインストール

## Windowsをお使いの方

### 1. Flutter SDKのダウンロード&解凍

[https://storage.googleapis.com/flutter_infra/releases/stable/macos/flutter_macos_v1.9.1+hotfix.6-stable.zip](https://storage.googleapis.com/flutter_infra/releases/stable/macos/flutter_macos_v1.9.1+hotfix.6-stable.zip)

※リンク切れなら[こちら](https://flutter.dev/docs/get-started/install/windows)の指示に従ってSDKをダウンロードしてください

### 2. パスを通す

以下の作業を `C:\Program Files` のようなアクセス許可が必要な場所で行うと失敗しますので注意してください

2-1. C直下に `src` フォルダ作成

2-2. 2-1でダウンロードした `C:\src` 直下に解凍

### 3. AndroidStudioのインストール

3-1. [DOWNLOAD ANDROID STUDIO](https://developer.android.com/studio/?hl=ja)より任意の場所に.exeをダウンロード

3-2. インストールウィザードの指示に従ってインストール。初回起動時にSDKのインストールウィザードが出るがStandardを選択肢デフォルトの設定でインストール

#### HAXMのインストールでエラーが出る場合

(1) コマンドプロンプトを管理者権限で開く

(2) 以下コマンドを叩いて再起動 `bcdedit/set hypervisorlaunchtype off`

(3) BIOSを起動してVT-xを有効化

(4) `configure` からsdk managerを起動し、SDK ToolsからHAXMにチェックを入れ `ok` を押下

HAXMにチェックがすでに入っていたら一旦外してApplyする

## OS共通

### 1. `flutter doctor --android-licenses`

Windowsをお使いの方は `C:\src\flutterflutter_console.bat` を起動しそちらで叩く

```bash
flutter doctor --android-licenses
```

### 2. Flutterプラグインのインストール

Flutterプラグインのインストールの際、Dartプラグインもインストールするか尋ねられるので合わせてインストール

2-1. AndroidStudioを起動する。初回起動時にSDKのインストールウィザードが出るがStandardを選択肢デフォルトの設定でインストールAndroidStudioを起動

2-2. `configure` を押下。メニュー一覧が表示されるはずなのでPluginを選択する

2-3. 検索ボックスから `flutter` と検索し、公式のflutter.ioが提供するFlutterプラグインを選択しインストールを押してFlutterプラグインとDartプラグインをインストール

### 3. エミュレータの作成

3-1. `configure` を押下しAVD Managerを起動

3-2. `create virtual device` を押下

3-3. `Pixel2` を選択し `next` を押下

3-4. システムイメージのAPIレベルを求められるので `29(Q)` を選択し `next` を押下。この際、SystemImageが未ダウンロードであれば、ReleaseNameに `Download` と表示されているはずなのでダウンロード

3-5. `finish` を押下

## Firebase

**前提としてグーグルアカウントを取得していること**

### 1. Firebaseの登録

1-1. [Firebase Console](https://firebase.google.com/?hl=jahttps://firebase.google.com/?hl=ja)にアクセスし `使ってみる` を押下

1-2. プロジェクトに `氏名(ローマ字)-dictionary-hands-on` と名前をつけて続行を押下

1-3. `Googleアナリティクスを有効にする` にチェックを入れ続行を押下

1-4. `Googleアナリティクスの構成` 全てチェックしてプロジェクト作成を押下

### 2. データベースの作成

2-1. 作成したプロジェクトページを開いてサイドメニューの `開発` を押下

2-2. `Database` を押下

2-3. `データベースの作成` を押下

2-4. テストモードで開始にチェックを入れ `次へ` を押下

2-5. Cloud Firestoreのロケーションを `asia-northeast1` にして `完了` を押下

2-6. `インデックス` を押下

2-7. `インデックスを追加` を押下

2-8. 以下を参考に設定を行いインデックスを作成

```
コレクションID → dictionary
フィールドのパス1 → type,Ascending
フィールドのパス2 → created_at,Descending
クエリのスコープ → コレクション
```

### 3. Firebase Extentionsの登録

**お支払い情報を入力する作業がありますが個人で普通に使っている分だと無料枠を超えることはありません**

3-1. 作成したプロジェクトページを開いてサイドメニューの `Extentions` を押下

3-2. Translate Textの `インストール` を押下

3-3. `次へ` を押下

3-4. `プロジェクトをアップグレード` を押下

3-5. 指示に従ってお支払い情報を入力

### 4. アプリ登録

4-1. Project Overviewの `Android` を押下し、Androidを選択。次回以降はProject Overview上部の `アプリ追加` を押下し、Androidを選択

4-2. Androidパッケージ名に `com.example.dictionary` と入力し `登録` を押下

4-3. `google-services.json` をダウンロード

### 5. `Translate text` のインストール

5-1. 作成したプロジェクトページを開いてサイドメニューの `extentions` を押下

5-2. `Translate Text` を探してインストール

5-3. translation language for ～の設定を `en,ja` に設定 (`fr` や `es`などをプラスしても問題ありません)

5-4. collection pathを `dictionary`と設定

5-5. input fieldnameを `word` と設定

5-6. output fieldnameを `translated` と設定

## サンプルアプリ起動

### 1. `git clone`

```bash
git clone https://github.com/YujiOnishi/dictionary_hands_on_hinagata.git
```

### 2. Get dependencies

2-1. AndroidStudioで `dictionary_hands_on_hinagata` フォルダを開く

2-2. `dictionary_hands_on_hinagata/lib/main.dart` を開くと上部に `Get dependency` と表示されているはずなので押下

### 3. gradle sync

3-1. Firebaseの設定項目でダウンロードした `google.service.json` を `dictionary_hands_on_hinagata/android/app` に移動

3-2. AndroidStudioで `dictionary_hands_on_hinagata/android` フォルダを開くと自動でgradle syncが始まる

### 4. エミュレータ起動

4-1. AndroidStudioで `dictionary_hands_on_hinagata` フォルダを開く

4-2. AVDマネージャーから作成したエミュレータを起動

### 5. アプリ起動

5-1. 上部の再生ボタンを押下しアプリを起動 **結構時間がかかります**
