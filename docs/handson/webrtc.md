# 通話アプリ

## 開発環境に必要なもの一覧

- AndroidStudio.. プログラムを書くために必要
- Flutter.. 今回の主役。モバイルアプリ作成のために必要


当日までに以下の準備を進めてください。

当日使うレジュメ: https://github.com/YujiOnishi/WebRtc_flutter_handson/




## Flutter環境構築

環境構築する場合は [Flutter環境構築](/handson/basic) を確認しましょう

※flutterでAndroidのシミュレーターが確認できる方はflutterの項目を飛ばしてください※

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
