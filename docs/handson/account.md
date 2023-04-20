# 家計簿アプリ

<HistoryTags :tags="['Flutter', 'Google Spreadsheet', 'Google Apps Script']" />

当日までに [アプリ起動](#アプリ起動) を完了、以下を目指していただく。

[@preview](https://github.com/YujiOnishi/flutter_api_handson)

## 開発環境に必要なもの一覧

<Environment />

## Flutter SDK のダウンロード

#### Mac OS をお使いの方は、

<SDKInstall os="macos" version="2.2.2-stable" />

#### Windows をお使いの方は、

<SDKInstall os="windows" version="2.2.2-stable" />

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

2.3 `Configure the new Flutter application` の Project name を `flutter_api_handson` へ変更。

2.4 `Configure the new Flutter application` の Project location を任意のフォルダに変更。

2.5 `Set the package name` はそのまま `Finish` を押下して main.dart のコードが表示されれば成功です。

### 3. エミュレータ起動

3.1 AndroidStudio で `flutter_api_handson` フォルダを開く。 (プロジェクト作成直後なら自動で開いているはず)

3.2 AVD マネージャーから作成したエミュレータを起動する。

### 4. アプリ起動

4.1 上部の再生ボタンを押下しアプリを起動。 (結構時間がかかります)

4.2 アプリが無事起動できたら完了です。ボタンを触って動かしたりなど、ウォーミングアップをしていただけると幸いです。

## 配信動画

2021/10/02 オンラインで開催した Flutter Handson Osaka [#9](https://flutter-jp.connpass.com/event/221064/) で当日配信した動画はこちらからご覧になれます。[レジュメ](https://github.com/YujiOnishi/flutter_api_handson_resume/) と [解説書]( https://docs.google.com/presentation/d/1J2qCXfNI5mJb_CwS-4O_52OArkYRXJEHJCtb1H2XGeE/edit#slide=id.gf4f900b2fe_0_9) を合わせてご確認いただければ。

### 1. 1章

<YouTubeVideo video-id="n5nbs5ZtmF8" title="家計簿アプリ 1章" />

<!--
[https://www.youtube.com/watch?v=n5nbs5ZtmF8](https://www.youtube.com/watch?v=n5nbs5ZtmF8)
-->

### 2. 2章

<YouTubeVideo video-id="d4wJ-c4XgvI" title="家計簿アプリ 2章" />

<!--
[https://www.youtube.com/watch?v=d4wJ-c4XgvI](https://www.youtube.com/watch?v=d4wJ-c4XgvI)
-->

### 3. 3章

<YouTubeVideo video-id="rNMyP-HhGL8" title="家計簿アプリ 3章" />

<!--
[https://www.youtube.com/watch?v=rNMyP-HhGL8](https://www.youtube.com/watch?v=rNMyP-HhGL8)
-->

### 4. 4章

<YouTubeVideo video-id="Lwi8CQRybYo" title="家計簿アプリ 4章" />

<!--
[https://www.youtube.com/watch?v=Lwi8CQRybYo](https://www.youtube.com/watch?v=Lwi8CQRybYo)
-->

## 困ったら

[公式ドキュメントを読みましょう](http://flutter.io/)

## 補足

### API サーバ

家計簿アプリを製作する上で以下技術スタックを利用している。

- 簡易 DB に Google Spreadsheet
- それと接続するエンドポイントに Google Apps Script

詳しくは API サーバの [リポジトリ](https://github.com/jiyuujin/account_app-api) をご確認いただければ幸いです。

[@preview](https://github.com/jiyuujin/account_app-api)
