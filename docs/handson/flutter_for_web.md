# Atomic Design (Flutter for Web)

当日までに以下の準備を進めてください。

雛型コードをダウンロードし AndroidStudio (Macの方はIntelliJ) で開き、レジュメとYoutubeLiveの進行に応じて、レジュメコードを参考に貼り付け、アプリを完成させる流れで当日進めます。

【当日使用するURL】

メインの進行に使う YoutubeLive URL は当日発表します

- [雛形コード](https://github.com/YujiOnishi/flutter_atomic_handson_hinagata)
- [レジュメ](https://docs.google.com/presentation/d/1fPNGFQLCMzOlHE9YqsP_aQ2G0LDqqsAsFsMTMB6MdxA/edit#slide=id.g8821f73e74_1_5)
- [レジュメコード](https://github.com/YujiOnishi/-flutter_atomic_handson_resume)

※ 開始時には、AndroidStudioとFlutter for Webの起動をお願いします (詳細は以下をご参照ください)



<Environment />



## 環境構築

※flutter(ver1.23.0-18.1.pre)でFlutter for Webの起動が確認できる方は【アプリ起動】の項目に飛んでください※



### Windowsをお使いの方

1. Flutter SDKのダウンロード
2. flutterを起動する
3. AndroidStudioのインストール
4. flutter doctor --android-licenses
5. Flutterプラグインのインストール
6. Flutter for Webの設定

#### 1. Flutter SDK のダウンロード

https://storage.googleapis.com/flutter_infra/releases/beta/windows/flutter_windows_1.23.0-18.1.pre-beta.zip

※ リンク切れなら[こちら](https://flutter.dev/docs/get-started/install/macos)の指示に従ってSDKをダウンロードしてください

※ バージョンによっては上手くいかない可能性があるため、上記URLよりダウンロードをお願いします。



#### 2. Flutterを起動する

以下の作業を `C:\Program Files` のようなアクセス許可が必要な場所で行うと失敗しますので注意してください

2-1. C直下に `src` フォルダ作成

2-2. 2-1でダウンロードした `C:\src` 直下に解凍



#### 3. AndroidStudioのインストール

3-1. [DOWNLOAD ANDROID STUDIO](https://developer.android.com/studio/?hl=ja)より任意の場所に.exeをダウンロード

3-2. インストールウィザードの指示に従ってインストール。初回起動時にSDKのインストールウィザードが出るが `Standard` を選択しデフォルトの設定でインストール

::: warning HAXMのインストールでエラーが出る場合

3-2-1. コマンドプロンプトを管理者権限で開く

3-2-2. 以下コマンドを叩いて再起動 `bcdedit/set hypervisorlaunchtype off`

3-2-3. BIOSを起動してVT-xを有効化

3-2-4. `configure` からsdk managerを起動し、SDK ToolsからHAXMにチェックを入れ `ok` を押下

3-2-5. HAXMにチェックがすでに入っていたら一旦外してApplyする
:::



#### 4. `flutter doctor --android-licenses`

Windowsをお使いの方は `C:\src\flutterflutter_console.bat` を起動しそちらで叩く

```bash
flutter doctor --android-licenses
```



#### 5. Flutterプラグインのインストール

※ Flutterプラグインのインストールの際、Dartプラグインもインストールするか尋ねられるので合わせてインストール

5-1. AndroidStudioを起動する。初回起動時にSDKのインストールウィザードが出るがStandardを選択肢デフォルトの設定でインストールAndroidStudioを起動

5-2. `configure` を押下。メニュー一覧が表示されるはずなのでPluginを選択する

5-3. 検索ボックスから `flutter` と検索し、公式のflutter.ioが提供するFlutterプラグインを選択しインストールを押してFlutterプラグインとDartプラグインをインストール



#### 6. Flutter for Webの設定

6-1. 以下コマンドを叩き、設定を行う。

```bash
flutter channel beta
```

```bash
flutter config --enable-web
```



### macをお使いの方

1. Flutter SDKのダウンロード＆解凍
2. パスを通す
3. AndroidStudioのインストール
4. Flutterプラグインのインストール
5. Flutter for Webの設定
   
   


#### 1,Flutter SDKのダウンロード＆解凍

①以下より「Downloads」にダウンロード＆解凍

https://storage.googleapis.com/flutter_infra/releases/beta/macos/flutter_macos_1.23.0-18.1.pre-beta.zip

※バージョンによっては上手くいかない可能性があるため、上記URLよりダウンロードをお願いします。

※リンク切れなら[こちら](https://flutter.dev/docs/get-started/install/windows)の指示に従ってSDKをダウンロードしてください。



②以下コマンドを叩く

```
mkdir ~/development
```

先程のzipを解答してdevelopmentフォルダに移動




#### 2,パスを通す

①bash_profileをviで開く

以下コマンドを叩く

```
vi ~/.bash_profile
```

②以下を追加

```
export PATH="$PATH:/Users/[User名に置き換えて[]を削除]/development/flutter/bin"
```

③pathを更新

以下コマンドを叩く

```
source ~/.bash_profile
```



#### 3.AndroidStudioのインストール

①以下より任意の場所にインストールファイルをダウンロード

https://developer.android.com/studio/?hl=ja

②インストールウィザードの指示に従ってインストール

※初回起動時にSDKのインストールウィザードが出るがStandardを選択肢デフォルトの設定でインストール



#### 4. Flutterプラグインのインストール

※ Flutterプラグインのインストールの際、Dartプラグインもインストールするか尋ねられるので合わせてインストール

① AndroidStudioを起動する。初回起動時にSDKのインストールウィザードが出るがStandardを選択肢デフォルトの設定でインストールAndroidStudioを起動

② `configure` を押下。メニュー一覧が表示されるはずなのでPluginを選択する

③ 検索ボックスから `flutter` と検索し、公式のflutter.ioが提供するFlutterプラグインを選択しインストールを押してFlutterプラグインとDartプラグインをインストール



#### 5. Flutter for Webの設定

① 以下コマンドを叩き、設定を行う。

```bash
flutter channel beta
```

```bash
flutter config --enable-web
```



## アプリ起動

1. 今回使用するファイルのダウンロード
2. Packages get
3. アプリ起動



### 1. 今回使用するファイルのダウンロード

1-1. 以下 [URL](https://github.com/YujiOnishi/flutter_atomic_handson_hinagata) にアクセスし、緑色の `Code` を押下、`Download ZIP` を選択

1-2. デスクトップに保存し、解凍する

1-3. AndroidStudioを起動、ダウンロードしたフォルダを開く



### 2. Packages get

2-1. AndroidStudioにて、フォルダ内の pubspec.yaml を開く

2-2. 画面上の `Packages get` を押下する



### 3. Flutter for Web 起動

3-1. 上部の工具のようなアイコンのとなりにあるターゲットデバイスに `Web Server` を選択（もし、ChromeがあるならWeb Serverではなく `Chrome` を選択）

3-2. ターゲットデバイスの2つとなりにある再生ボタンを押下し Flutter for Web を起動 (Webページが表示されます)

※ 結構時間がかかります



## 困ったら…

 [公式ドキュメントを読みましょう](http://flutter.io/)
