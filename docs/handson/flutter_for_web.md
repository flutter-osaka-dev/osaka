

# flutter_atomic_handson

当日までに以下の準備を進めてください。



【当日までに事前に準備していただくもの】

・Zoom

・Slack(Flutter Osakaへの加入)

・chromeのインストール

・Gitのインストール（macの方のみ）

・Flutterの環境開発（ ver1.23.0-18.1.pre＆1.24.0-10.2.preにて確認）　※

・AndroidStudio（Windowsの方のみ）　※

・Flutter for Webの設定（Windowsの方のみ）　※



※は、下記に詳細を記載しております。(「開発環境に必要なもの一覧」にて。)



【当日の開発の流れ】

雛型コードをダウンロードしAndroidSudio（Macの方はIntelliJ）で開き、レジュメとYoutubeLiveの進行に応じて、レジュメコードを参考に貼り付け、アプリを完成させる。



【当日使用するURL】

①雛型コード：https://github.com/YujiOnishi/flutter_atomic_handson_hinagata

②レジュメ：https://docs.google.com/presentation/d/1fPNGFQLCMzOlHE9YqsP_aQ2G0LDqqsAsFsMTMB6MdxA/edit#slide=id.g8821f73e74_1_5

③レジュメコード：https://github.com/YujiOnishi/-flutter_atomic_handson_resume

④YoutubeLive (メインの進行はこちら)※当日発表



※開始時には、AndroidStudioとFlutter for Webの起動をお願いします。（詳細は以下を参照ください。）





## 開発環境に必要なもの一覧

AndroidStudio（Macの方はIntelliJ）…プログラムを書くために必要

flutter…今回の主役。モバイルアプリ作成のために必要。




## 環境構築

※flutterでFlutter for Webの起動が確認できる方は【アプリ起動】の項目を飛ばしてください※



### 【flutter】

### ※windowsとMacに項目を分けています



#### ・windowsの方

1. Flutter SDKのダウンロード
2. flutterを起動する
3. AndroidStudioのインストール
4. flutter doctor --android-licenses
5. Flutterプラグインのインストール
6. Flutter for Webの設定



#### 1,Flutter SDKのダウンロード

①以下より任意の場所にダウンロード

https://storage.googleapis.com/flutter_infra/releases/beta/windows/flutter_windows_1.23.0-18.1.pre-beta.zip

※バージョンによっては上手くいかない可能性があるため、上記URLよりダウンロードをお願いします。

※リンク切れなら[こちら](https://flutter.dev/docs/get-started/install/windows)の指示に従ってSDKをダウンロードしてください。



#### 2,flutterを起動する

※以下の作業をC:\Program Filesのようなアクセス許可が必要な場所で行うと失敗しますので注意してください※

①C直下に[src]フォルダ作成

②1でダウンロードしたファイルをC:\src直下に解凍



#### 3,AndroidStudioのインストール

①以下より任意の場所に.exeをダウンロード

https://developer.android.com/studio/?hl=ja

②インストールウィザードの指示に従ってインストール

※初回起動時にSDKのインストールウィザードが出るがStandardを選択肢デフォルトの設定でインストール

※HAXMのインストールでエラーが出る場合以下参照※

①コマンドプロンプトを管理者権限で開く
②以下コマンドを叩いて再起動
bcdedit/set hypervisorlaunchtype off

③BIOSを起動してVT-xを有効化

④configureからsdk managerを起動しSDK ToolsからHAXMにチェックを入れokを押下。

※HAXMにチェックがすでに入っていたら一旦外してApplyする



#### 4,flutter doctor --android-licenses

①以下コマンドを叩く

※Windowsの方はC:\src\flutterflutter_console.batを起動しそちらで叩く

```
flutter doctor --android-licenses
```



#### 5,Flutterプラグインのインストール

※flutterプラグインのインストールの際、Dartプラグインもインストールするか尋ねられるので合わせてインストールする※

①AndroidStudioを起動する

※初回起動時にSDKのインストールウィザードが出るがStandardを選択肢デフォルトの設定でインストール

②configureを押下。メニュー一覧が表示されるはずなのでPluginを選択する。

③検索ボックスからflutterと検索し、公式のflutter.ioが提供するflutterプラグインを選択しインストールを押してFlutterプラグインとDartプラグインをインストールする。



#### 6,Flutter for Webの設定

①以下コマンドを叩き、設定を行う。

```
flutter channel beta
```

```
flutter config --enable-web
```



#### ・macの方

##### ***以下の環境構築はFlutter Osakaのスタッフであるroboさんに多大なるご協力を頂いております。roboさんありがとうございました！***

また、以下からの環境構築はご本人が作られたものの簡易版です。詳細が気になる方は以下のURLをご覧になってください。
https://cch-robo.github.io/DevFest-Kyoto-2020/install_flutter_sdk.html#%E7%8B%AC%E8%87%AA%E8%87%AA%E5%8B%95%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89%E6%89%8B%E9%A0%86



1. 環境構築用のスクリプトダウンロード
2. スクリプトを利用して環境をインストール
3. IntelliJの起動
4. flutter 体験環境を復元



#### 0,はじめに

スクリプト実行要件は以下となっています。

必ずこれらを満たしてから実行してください。

・git コマンドを利用できること。
・Chrome ブラウザがインストールされていること。
・macOSがBig Surであること。（Catalinaは未確認。Mojavaでは動きません。）



#### 1,環境構築用のスクリプトダウンロード

①環境構築用のフォルダを用意する

Desktopに「handson」フォルダを新規作成


②以下よりスクリプトファイルをダウンロード

https://cch-robo.github.io/DevFest-Kyoto-2020/scripts/flenv.sh


③①で作成したフォルダの直下に配置




#### 2,スクリプトを利用して環境をインストール

①ターミナルを起動し「１－①」で作成した「handson」フォルダに移動

```
cd «スクリプト配置先ディレクトリ»
```

②flenv.sh スクリプトに実行権限を付与
以下コマンドを叩く

```
chmod +x flenv.sh
```

③インストール

以下コマンドを叩く

```
./flenv.sh -install
```

インストール完了後、`flutter_experience コンソール`が開く



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

#### ※flutter 体験環境を復元

　インストール時のターミナルを閉じてから、新たにターミナルを起動した場合は、
　新たなターミナルで、以下の flutter 体験環境復元手順を行ってください。

```
# flutter 体験環境ディレクトリに移動
cd «スクリプト配置先ディレクトリ»/flutter_experience# flutter 体験環境を復元する
./flenv.sh -resume
```



## アプリ起動

1. 今回使用するファイルのダウンロード
2. Packages get
3. アプリ起動



#### 1,今回使用するファイルのダウンロード

①以下URLにアクセスし、緑色の「Code」を押下、「Download ZIP」を選択。

https://github.com/YujiOnishi/flutter_atomic_handson_hinagata

②デスクトップに保存し、解凍をする。

③AndroidStudioを起動（Macの方はIntelliJIDEA）、ダウンロードしたフォルダを開く。



#### 2, Packages get

①AndroidStudio（Macの方はIntelliJIDEA）にて、フォルダ内のpubspec.yamlを開く

②画面上のPackages getを押下



#### 3,Flutter for Web起動

①上部の工具のようなアイコンのとなりにあるターゲットデバイスにWeb Serverを選択（もし、ChromeがあるならWeb ServerではなくChromeを選択）

②ターゲットデバイスの2つとなりにある再生ボタンを押下しFlutter for Webを起動。(Webページが表示されます)
※結構時間がかかります※



## 困ったら…

 [公式ドキュメントを読みましょう](http://flutter.io/)

