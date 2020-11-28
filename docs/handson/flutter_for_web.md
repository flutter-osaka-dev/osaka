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

※flutterでFlutter for Webの起動が確認できる方は【アプリ起動】の項目を飛ばしてください※



### Windowsをお使いの方

環境構築する場合は [Flutter環境構築](/handson/basic) を確認しましょう (以下に示す `1. Flutter SDKのダウンロード` から `5. Flutterプラグインのインストール` まではリンクと同じ内容です)

※ FlutterでAndroidのシミュレータが確認できる方はFlutterの項目を飛ばしてください

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

2-1. Flutterプラグインのインストールの際、Dartプラグインもインストールするか尋ねられるので合わせてインストール

2-2. AndroidStudioを起動する。初回起動時にSDKのインストールウィザードが出るがStandardを選択肢デフォルトの設定でインストールAndroidStudioを起動

2-3. `configure` を押下。メニュー一覧が表示されるはずなのでPluginを選択する

2-4. 検索ボックスから `flutter` と検索し、公式のflutter.ioが提供するFlutterプラグインを選択しインストールを押してFlutterプラグインとDartプラグインをインストール



#### 6. Flutter for Webの設定

6-1. 以下コマンドを叩き、設定を行う。

```bash
flutter channel beta
```

```bash
flutter config --enable-web
```



### Macをお使いの方

**以下の環境構築は Flutter Osaka のスタッフである兼高さんの多大なご協力がありました mm**

兼高さんより提供くださいました [独自自動スクリプトを使った環境構築手順](https://cch-robo.github.io/DevFest-Kyoto-2020/install_flutter_sdk.html#%E7%8B%AC%E8%87%AA%E8%87%AA%E5%8B%95%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89%E6%89%8B%E9%A0%86) を確認しましょう

#### 0. はじめに

スクリプト実行要件は以下となっています。必ずこれらを満たしてから実行してください。

- git コマンドを利用できること。
- Chrome ブラウザがインストールされていること。
- MacOSがBig Surであること（Catalinaは未確認。Mojavaでは動きません）



#### 1. 環境構築用のスクリプトダウンロード

1-1. 環境構築用のフォルダを用意する

1-2. Desktopに `handson` フォルダを新規作成

1-3. [スクリプトファイル](https://cch-robo.github.io/DevFest-Kyoto-2020/scripts/flenv.sh) をダウンロード

1-4. 1-1 で作成したフォルダの直下に配置



#### 2. スクリプトを利用して環境をインストール

2-1. ターミナルを起動し 1-1 で作成した `handson` フォルダに移動

```bash
cd «スクリプト配置先ディレクトリ»
```

2-2. `flenv.sh` スクリプトに実行権限を付与

以下コマンドを叩く

```bash
chmod +x flenv.sh
```

2-3. インストール

以下コマンドを叩く

```bash
./flenv.sh -install
```

インストール完了後、`flutter_experience コンソール` が開く

ネットワーク速度に依存するが、およそ20分ほどで、flenv.sh 配置先に flutter_experience ディレクトリが新規作成され、flutter sdk および、flutter for web 設定の実行と dhttpd ツール、IntelliJ IDEA Community Edition、および Dart+Flutter プラグインのインストールが完了。

補足：flenv.sh ファイルは、インストール完了後に flutter_experience ディレクトリに移動。

補足：flutter 体験環境をアンインストールする場合は、flutter_experience ディレクトリでflenv.sh -uninstall を実行。



#### 3.IntelliJの起動

①コマンドを叩く

インストールが終了しflutter_experienceコンソールが開いたのを確認し、以下コマンドを叩く。

```
idea
```

少し待つと起動するので外観などの初期設定を行う。

#### Flutter体験環境を復元

インストール時のターミナルを閉じてから、新たにターミナルを起動した場合は、新たなターミナルで、以下の Flutter 体験環境復元手順を行ってください。

```bash
# Flutter体験環境ディレクトリに移動
cd «スクリプト配置先ディレクトリ»/flutter_experience# flutter 体験環境を復元する
./flenv.sh -resume
```


## アプリ起動

1. 今回使用するファイルのダウンロード
2. Packages get
3. アプリ起動



### 1. 今回使用するファイルのダウンロード

1-1. 以下 [URL](https://github.com/YujiOnishi/flutter_atomic_handson_hinagata) にアクセスし、緑色の `Code` を押下、`Download ZIP` を選択

1-2. デスクトップに保存し、解凍する

1-3. AndroidStudioを起動（Macの方はIntelliJIDEA）、ダウンロードしたフォルダを開く



### 2. Packages get

2-1. AndroidStudio（Macの方はIntelliJIDEA）にて、フォルダ内の pubspec.yaml を開く

2-2. 画面上の `Packages get` を押下する



### 3. Flutter for Web 起動

3-1. 上部の工具のようなアイコンのとなりにあるターゲットデバイスに `Web Server` を選択（もし、ChromeがあるならWeb Serverではなく `Chrome` を選択）

3-2. ターゲットデバイスの2つとなりにある再生ボタンを押下し Flutter for Web を起動 (Webページが表示されます)

※結構時間がかかります※



## 困ったら…

 [公式ドキュメントを読みましょう](http://flutter.io/)
