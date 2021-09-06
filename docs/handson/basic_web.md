# Flutter for Web 環境構築

## Mac をお使いの方

### 1. パスを通す

1-1. `.bash_profile` を vi で開いて以下コマンドを叩く。

```bash
mkdir ~/development
```

1-2. 以下を追加。

```bash
export PATH="$PATH:/Users/[User名に置き換えて[]を削除]/development/flutter/bin"
```

1-3. path を更新して以下コマンドを叩く。

```bash
source ~/.bash_profile
```

### 2. AndroidStudio のインストール

2-1. [DOWNLOAD ANDROID STUDIO](https://developer.android.com/studio/?hl=ja) より任意の場所に `.dmg` をダウンロード。

2-2. インストールウィザードの指示に従ってインストール。初回起動時に SDK のインストールウィザードが出るが Standard を選択肢デフォルトの設定でインストール。

### 3. OS 共通へ進む

[OS共通へ進む](#os共通)

## Windows をお使いの方

### 1. パスを通す

以下の作業を `C:\Program Files` のようなアクセス許可が必要な場所で行うと失敗しますので注意してください。

1-1. C 直下に `src` フォルダ作成。

1-2. 1-1 でダウンロードした `C:\src` 直下に解凍。

1-3.bin フォルダを環境変数に追加。

### 2. AndroidStudio のインストール

2-1. [DOWNLOAD ANDROID STUDIO](https://developer.android.com/studio/?hl=ja) より任意の場所に `.exe` をダウンロード。

2-2. インストールウィザードの指示に従ってインストール。初回起動時に SDK のインストールウィザードが出るが `Standard` を選択しデフォルトの設定でインストール。

::: warning HAXM のインストールでエラーが出る場合。

2-2-1. コマンドプロンプトを管理者権限で開く。

2-2-2. 以下コマンドを叩いて再起動 `bcdedit/set hypervisorlaunchtype off`

2-2-3. BIOS を起動して VT-x を有効化。

2-2-4. `configure` から sdk manager を起動し、SDK Tools から HAXM にチェックを入れ `ok` を押下。

2-2-5. HAXM にチェックがすでに入っていたら一旦外して Apply する。

:::

### 3. OS 共通へ進む

[OS共通へ進む](#os共通)

## OS 共通

### 1. `flutter doctor --android-licenses`

Windows をお使いの方は `C:\src\flutterflutter_console.bat` を起動しそちらで叩く。

```bash
flutter doctor --android-licenses
```

### 2. Flutter プラグインのインストール

2-1. Flutter プラグインのインストールの際、Dart プラグインもインストールするか尋ねられるので合わせてインストール。

2-2. AndroidStudio を起動する。初回起動時に SDK のインストールウィザードが出るが Standard を選択肢デフォルトの設定でインストール AndroidStudio を起動。

![](https://i.imgur.com/1Eqwm4n.jpg)

2-3. `configure` を押下。メニュー一覧が表示されるはずなので Plugin を選択する。

![](https://i.imgur.com/NI9E46H.jpg)

2-4. 検索ボックスから `flutter` と検索し、公式の flutter.io が提供する Flutter プラグインを選択しインストールを押してインストール。

![](https://i.imgur.com/bSPTVY5.png)

2-5. Dart プラグインについても同様。

![](https://i.imgur.com/3uZ1lPx.png)

### 3. Flutter for Web の設定

3-1. 以下コマンドを叩き、設定する。

```bash
flutter channel beta
```

```bash
flutter config --enable-web
```
