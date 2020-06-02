# Picture Edit

当日までに以下の準備を進めてください。



当日使うレジュメ：https://github.com/YujiOnishi/flutter_picture_edit_hands_on/



## 開発環境に必要なもの一覧

AndroidStudio…プログラムを書くために必要

flutter…今回の主役。モバイルアプリ作成のために必要。




## 環境構築

※flutterでAndroidのシミュレーターが確認できる方はflutterの項目を飛ばしてください※



### 【flutter】

#### ・windowsの方

1. Flutter SDKのダウンロード
2. flutterを起動する
3. AndroidStudioのインストール
4. OS共通の作業へ



#### 1,Flutter SDKのダウンロード

①以下より任意の場所にダウンロード

https://storage.googleapis.com/flutter_infra/releases/stable/windows/flutter_windows_1.17.2-stable.zip

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



#### 4,OS共通の作業へ

①下部「macの方」項目を飛ばして「OS共通」項目の作業へ。



#### ・macの方

1. Flutter SDKのダウンロード＆解凍
2. パスを通す
3. AndroidStudioのインストール
4. OS共通の作業へ



#### 1,Flutter SDKのダウンロード＆解凍

①以下より「Downloads」にダウンロード＆解凍

https://storage.googleapis.com/flutter_infra/releases/stable/windows/flutter_windows_1.17.2-stable.zip

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



#### 4.OS共通の作業へ

①「OS共通」項目の作業へ。



#### ・OS共通

1. flutter doctor --android-licenses
2. Flutterプラグインのインストール
3. エミュレータの作成



#### 1,flutter doctor --android-licenses

①以下コマンドを叩く

※Windowsの方はC:\src\flutterflutter_console.batを起動しそちらで叩く

```
flutter doctor --android-licenses
```



#### 2,Flutterプラグインのインストール

※flutterプラグインのインストールの際、Dartプラグインもインストールするか尋ねられるので合わせてインストールする※

①AndroidStudioを起動する

※初回起動時にSDKのインストールウィザードが出るがStandardを選択肢デフォルトの設定でインストール

②configureを押下。メニュー一覧が表示されるはずなのでPluginを選択する。

③検索ボックスからflutterと検索し、公式のflutter.ioが提供するflutterプラグインを選択しインストールを押してFlutterプラグインとDartプラグインをインストールする。



#### 3,エミュレータの作成

①configureを押下し、AVD Managerを起動
②create virtual deviceを押下
③Pixel3を選択しnextを押下
④システムイメージのAPIレベルを求められるので29(Q)を選択しnextを押下。
※この際、SystemImageが未ダウンロードであればReleaseNameにDownloadと表示されているはずなのでダウンロードする。
⑤finishを押下



## サンプルアプリ起動

1. フォルダ作成
2. プロジェクト作成
3. エミュレータ起動
4. アプリ起動



#### 1,フォルダ作成

①デスクトップにhands_onフォルダを作成



#### 2, プロジェクト作成

①AndroidStudioを起動し、「Start a new Flutter project」を選択

②「Flutter Application」を選択し、Nextを押下

③「Configure the new Flutter application」のProject nameを「picture_edit 」へ変更

④同じく「Configure the new Flutter application」のProject locationを
1,フォルダ作成で作成したhands_onフォルダのパスに変更

⑤「Set the package name」はそのままFinishを押下
main.dartのコードが表示されれば成功です。



#### 3,エミュレータ起動

①AndroidStudioで「picture_edit」フォルダを開く
※プロジェクト作成直後であれば自動で開いているはずです※

②AVDマネージャーから作成したエミュレータを起動する



#### 4,アプリ起動

①上部の再生ボタンを押下しアプリを起動。
※結構時間がかかります※



## 困ったら…

 [公式ドキュメントを読みましょう](http://flutter.io/)
