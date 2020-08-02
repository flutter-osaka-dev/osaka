# Flutter環境構築

## Macをお使いの方

### 1. Flutter SDKのダウンロード

https://storage.googleapis.com/flutter_infra/releases/stable/windows/flutter_windows_1.17.2-stable.zip

※ リンク切れなら[こちら](https://flutter.dev/docs/get-started/install/macos)の指示に従ってSDKをダウンロードしてください

### 2. Flutterを起動する

2-1. `.bash_profile` をviで開いて以下コマンドを叩く

```bash
mkdir ~/development
```

2-2. 以下を追加

```bash
export PATH="$PATH:/Users/[User名に置き換えて[]を削除]/development/flutter/bin"
```

2-3. pathを更新して以下コマンドを叩く

```bash
source ~/.bash_profile
```

### 3. AndroidStudioのインストール

3-1. [DOWNLOAD ANDROID STUDIO](https://developer.android.com/studio/?hl=ja)より任意の場所に.exeをダウンロード

3-2. インストールウィザードの指示に従ってインストール。初回起動時にSDKのインストールウィザードが出るがStandardを選択肢デフォルトの設定でインストール

### 4. OS共通へ進む

OS共通へ進む

## Windowsをお使いの方

### 1. Flutter SDKのダウンロード&解凍

https://storage.googleapis.com/flutter_infra/releases/stable/windows/flutter_windows_1.17.2-stable.zip

※ リンク切れなら[こちら](https://flutter.dev/docs/get-started/install/windows)の指示に従ってSDKをダウンロードしてください

### 2. パスを通す

以下の作業を `C:\Program Files` のようなアクセス許可が必要な場所で行うと失敗しますので注意してください

2-1. C直下に `src` フォルダ作成

2-2. 2-1でダウンロードした `C:\src` 直下に解凍

2-3.binフォルダを環境変数に追加

### 3. AndroidStudioのインストール

3-1. [DOWNLOAD ANDROID STUDIO](https://developer.android.com/studio/?hl=ja)より任意の場所に.exeをダウンロード

3-2. インストールウィザードの指示に従ってインストール。初回起動時にSDKのインストールウィザードが出るが `Standard` を選択しデフォルトの設定でインストール

::: warning HAXMのインストールでエラーが出る場合

3-2-1. コマンドプロンプトを管理者権限で開く

3-2-2. 以下コマンドを叩いて再起動 `bcdedit/set hypervisorlaunchtype off`

3-2-3. BIOSを起動してVT-xを有効化

3-2-4. `configure` からsdk managerを起動し、SDK ToolsからHAXMにチェックを入れ `ok` を押下

3-2-5. HAXMにチェックがすでに入っていたら一旦外してApplyする
:::

### 4. OS共通へ進む

OS共通へ進む

## OS共通

### 1. `flutter doctor --android-licenses`

Windowsをお使いの方は `C:\src\flutterflutter_console.bat` を起動しそちらで叩く

```bash
flutter doctor --android-licenses
```

### 2. Flutterプラグインのインストール

2-1. Flutterプラグインのインストールの際、Dartプラグインもインストールするか尋ねられるので合わせてインストール

2-2. AndroidStudioを起動する。初回起動時にSDKのインストールウィザードが出るがStandardを選択肢デフォルトの設定でインストールAndroidStudioを起動

2-3. `configure` を押下。メニュー一覧が表示されるはずなのでPluginを選択する

2-4. 検索ボックスから `flutter` と検索し、公式のflutter.ioが提供するFlutterプラグインを選択しインストールを押してFlutterプラグインとDartプラグインをインストール

### 3. エミュレータの作成

3-1. `configure` を押下しAVD Managerを起動

3-2. `create virtual device` を押下

3-3. `Pixel2` を選択し `next` を押下

3-4. システムイメージのAPIレベルを求められるので `29(Q)` を選択し `next` を押下。この際、SystemImageが未ダウンロードであれば、ReleaseNameに `Download` と表示されているはずなのでダウンロード

3-5. `finish` を押下
