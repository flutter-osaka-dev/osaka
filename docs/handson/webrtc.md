# 通話アプリ (WebRTC)

<HistoryTags :tags="['Flutter', 'Agora', 'WebRTC']" />

当日までに [アプリ起動](#アプリ起動) を完了、以下を目指していただく。

[@preview](https://github.com/YujiOnishi/WebRtc_flutter_handson/)

## 開発環境に必要なもの一覧

<Environment />

## Flutter SDK のダウンロード

#### Mac OS をお使いの方は、

<SDKInstall os="macos" version="1.17.2-stable" />

#### Windows をお使いの方は、

<SDKInstall os="windows" version="1.17.2-stable" />

### Flutter 環境構築

環境構築する場合は [Flutter環境構築](/handson/basic) を確認しましょう。

※ Flutter で Android のシミュレータが確認できる方は Flutter の項目を飛ばしてください。

## アプリ起動

1. フォルダ作成
2. プロジェクト作成
3. エミュレータ起動
4. アプリ起動

### 1. フォルダ作成

1.1 デスクトップに hands_on フォルダを作成。

### 2. プロジェクト作成

2.1 AndroidStudio を起動し、「Start a new Flutter project」を選択。

2.2 `Flutter Application` を選択し、Next を押下。

2.3 `Configure the new Flutter application` の Project name を `webrtc` へ変更。

2.4 `Configure the new Flutter application` の Project location を hands_on フォルダに変更。

2.5 `Set the package name` はそのまま `Finish` を押下して main.dart のコードが表示されれば成功です。

### 3. エミュレータ起動

3.1 AndroidStudio で `webrtc` フォルダを開く。 (プロジェクト作成直後なら自動で開いているはず)

3.2 AVD マネージャーから作成したエミュレータを起動する。

### 4. アプリ起動

4.1 上部の再生ボタンを押下しアプリを起動。 (結構時間がかかります)

4.2 アプリが無事起動できたら完了です。ボタンを触って動かしたりなど、ウォーミングアップをしていただけると幸いです。

## 配信動画

2020/08/21 オンラインで開催した Flutter Handson Osaka [#5](https://flutter-jp.connpass.com/event/180326/) で当日配信した動画はこちらからご覧になれます。

[レジュメ](https://github.com/YujiOnishi/WebRtc_flutter_handson_handout/) と [解説書](https://docs.google.com/spreadsheets/d/1LvBX3iR5ZOpBjU6mrn1zf0us4KTxKG51ZEKxSl0wTBY/edit#gid=2031444284https://docs.google.com/spreadsheets/d/1LvBX3iR5ZOpBjU6mrn1zf0us4KTxKG51ZEKxSl0wTBY/edit#gid=2031444284) を合わせてご確認いただければ。

<YouTubeVideo video-id="tfoLJdzAWfk" title="Flutter Handson Osaka #5" />

<!--
[https://www.youtube.com/watch?v=tfoLJdzAWfk](https://www.youtube.com/watch?v=tfoLJdzAWfk)
-->

## 困ったら

[公式ドキュメントを読みましょう](http://flutter.io/)
