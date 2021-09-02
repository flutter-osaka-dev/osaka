# 写真編集アプリ

<HistoryTags :tags="['Flutter']" />

当日までに以下の準備を進めてください。

[レジュメ](https://github.com/YujiOnishi/flutter_picture_edit_hands_on/)

::: tip 配信動画

2020/06/20 オンラインで開催した Flutter Handson Osaka [#4](https://flutter-jp.connpass.com/event/175920/) で当日配信した動画はこちらからご覧になれます。[レジュメ](https://github.com/YujiOnishi/flutter_picture_edit_hands_on/) と [解説書](https://docs.google.com/spreadsheets/d/1cLwwOs4PRPbpie5YzTEpW32TE2soMQdiXD6O2caTT0U/edit#gid=2052184094) と合わせてご確認いただければ、と思います。

<YouTubeVideo video-id="0H4hc291t5A" />

<!--
[https://www.youtube.com/watch?v=0H4hc291t5A](https://www.youtube.com/watch?v=0H4hc291t5A)
-->
:::

## 開発環境に必要なもの一覧

<Environment />

## Flutter SDKのダウンロード

#### MacOSをお使いの方は、

<SDKInstall os="macos" version="1.17.2-stable" />

#### Windowsをお使いの方は、

<SDKInstall os="windows" version="1.17.2-stable" />

### Flutter環境構築

環境構築する場合は [Flutter環境構築](/handson/basic) を確認しましょう

※ FlutterでAndroidのシミュレータが確認できる方はFlutterの項目を飛ばしてください

## サンプルアプリ起動

1. フォルダ作成
2. プロジェクト作成
3. エミュレータ起動
4. アプリ起動

### 1. フォルダ作成

1-1. デスクトップに `hands_on` フォルダを作成

### 2. プロジェクト作成

2-1. AndroidStudioを起動し `Start a new Flutter project` を選択

2-2. `Flutter Application` を選択し、Nextを押下

2-3. `Configure the new Flutter application` のProject nameを `picture_edit` へ変更

2-4. 同じく `Configure the new Flutter application` のProject locationを `1`、フォルダ作成で作成したhands_onフォルダのパスに変更

2-5. `Set the package name` はそのままFinishを押下。main.dartのコードが表示されれば成功

### 3. エミュレータ起動

3-1. AndroidStudioで `picture_edit` フォルダを開く

※プロジェクト作成直後であれば自動で開いているはずです※

3-2. AVDマネージャーから作成したエミュレータを起動する

### 4,アプリ起動

4-1. 上部の再生ボタンを押下しアプリを起動。

※結構時間がかかります※

## 困ったら…

[公式ドキュメントを読みましょう](http://flutter.io/)
