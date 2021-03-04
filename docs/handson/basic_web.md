# Flutter for Web 環境構築

## Macをお使いの方

### 1. パスを通す

1-1. `.bash_profile` をviで開いて以下コマンドを叩く

```bash
mkdir ~/development
```

1-2. 以下を追加

```bash
export PATH="$PATH:/Users/[User名に置き換えて[]を削除]/development/flutter/bin"
```

1-3. pathを更新して以下コマンドを叩く

```bash
source ~/.bash_profile
```

### 2. AndroidStudioのインストール

2-1. [DOWNLOAD ANDROID STUDIO](https://developer.android.com/studio/?hl=ja)より任意の場所に `.dmg` をダウンロード

2-2. インストールウィザードの指示に従ってインストール。初回起動時にSDKのインストールウィザードが出るがStandardを選択肢デフォルトの設定でインストール

### 3. OS共通へ進む

[OS共通へ進む](#os共通)

## Windowsをお使いの方

### 1. パスを通す

以下の作業を `C:\Program Files` のようなアクセス許可が必要な場所で行うと失敗しますので注意してください

1-1. C直下に `src` フォルダ作成

1-2. 1-1でダウンロードした `C:\src` 直下に解凍

1-3.binフォルダを環境変数に追加

### 2. AndroidStudioのインストール

2-1. [DOWNLOAD ANDROID STUDIO](https://developer.android.com/studio/?hl=ja)より任意の場所に `.exe` をダウンロード

2-2. インストールウィザードの指示に従ってインストール。初回起動時にSDKのインストールウィザードが出るが `Standard` を選択しデフォルトの設定でインストール

::: warning HAXMのインストールでエラーが出る場合

2-2-1. コマンドプロンプトを管理者権限で開く

2-2-2. 以下コマンドを叩いて再起動 `bcdedit/set hypervisorlaunchtype off`

2-2-3. BIOSを起動してVT-xを有効化

2-2-4. `configure` からsdk managerを起動し、SDK ToolsからHAXMにチェックを入れ `ok` を押下

2-2-5. HAXMにチェックがすでに入っていたら一旦外してApplyする
:::

### 3. OS共通へ進む

[OS共通へ進む](#os共通)

## OS共通

### 1. `flutter doctor --android-licenses`

Windowsをお使いの方は `C:\src\flutterflutter_console.bat` を起動しそちらで叩く

```bash
flutter doctor --android-licenses
```

### 2. Flutterプラグインのインストール

2-1. Flutterプラグインのインストールの際、Dartプラグインもインストールするか尋ねられるので合わせてインストール

2-2. AndroidStudioを起動する。初回起動時にSDKのインストールウィザードが出るがStandardを選択肢デフォルトの設定でインストールAndroidStudioを起動

![](https://i.imgur.com/1Eqwm4n.jpg)

2-3. `configure` を押下。メニュー一覧が表示されるはずなのでPluginを選択する

![](https://i.imgur.com/NI9E46H.jpg)

2-4. 検索ボックスから `flutter` と検索し、公式のflutter.ioが提供するFlutterプラグインを選択しインストールを押してFlutterプラグインとDartプラグインをインストール

![](https://i.imgur.com/bSPTVY5.png)

2-5. Dart プラグインについても同様。

![](https://i.imgur.com/3uZ1lPx.png)

### 3. Flutter for Web の設定

3-1. 以下コマンドを叩き、設定を行う。

```bash
flutter channel beta
```

```bash
flutter config --enable-web
```
