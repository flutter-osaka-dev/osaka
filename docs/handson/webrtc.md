# 通話アプリ

::: tip 配信動画を見られます！

2020/08/21 オンラインで開催した Flutter Handson Osaka [#5](https://flutter-jp.connpass.com/event/180326/) で当日配信した動画はこちらからご覧になれます。[レジュメ](https://github.com/YujiOnishi/WebRtc_flutter_handson_handout/) と [解説書](https://docs.google.com/spreadsheets/d/1LvBX3iR5ZOpBjU6mrn1zf0us4KTxKG51ZEKxSl0wTBY/edit#gid=2031444284https://docs.google.com/spreadsheets/d/1LvBX3iR5ZOpBjU6mrn1zf0us4KTxKG51ZEKxSl0wTBY/edit#gid=2031444284) と合わせてご確認いただければ、と思います。

<youtube video-id="tfoLJdzAWfk" />

<!--
[https://www.youtube.com/watch?v=tfoLJdzAWfk](https://www.youtube.com/watch?v=tfoLJdzAWfk)
-->
:::

<Environment />

### Flutter環境構築

環境構築する場合は [Flutter環境構築](/handson/basic) を確認しましょう

※ FlutterでAndroidのシミュレータが確認できる方はFlutterの項目を飛ばしてください

### 当日までに以下の準備を進めてください。

当日使うレジュメ: [https://github.com/YujiOnishi/WebRtc_flutter_handson/](https://github.com/YujiOnishi/WebRtc_flutter_handson/)

## サンプルアプリ起動

1. フォルダ作成
2. プロジェクト作成
3. エミュレータ起動
4. アプリ起動

### 1. フォルダ作成

1.1 デスクトップにhands_onフォルダを作成

### 2. プロジェクト作成

2.1 AndroidStudioを起動し、「Start a new Flutter project」を選択

2.2 `Flutter Application` を選択し、Nextを押下

2.3 `Configure the new Flutter application` の Project name を `webrtc` へ変更

2.4 同じく `Configure the new Flutter application` の Project location を [1. フォルダ作成] で作成したhands_onフォルダのパスに変更

2.5 `Set the package name` はそのまま `Finish` を押下して main.dart のコードが表示されれば成功です。

### 3. エミュレータ起動

3.1 AndroidStudioで `webrtc` フォルダを開く ※プロジェクト作成直後であれば自動で開いているはずです※

3.2 AVDマネージャーから作成したエミュレータを起動する

### 4. アプリ起動

4.1 上部の再生ボタンを押下しアプリを起動。 ※結構時間がかかります※

4.2 アプリが無事起動できたら完了です。ボタンを触って動かしたりなど、ウォーミングアップをしていただけると幸いです。

## 困ったら…

[公式ドキュメントを読みましょう](http://flutter.io/)
