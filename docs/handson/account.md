# 家計簿アプリ

<HistoryTags :tags="['Flutter', 'Google Spreadsheet', 'Google Apps Script']" />

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

## サンプルアプリ起動

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

3.1 AndroidStudio で `webrtc` フォルダを開く。 (プロジェクト作成直後であれば自動で開いているはずです)

3.2 AVD マネージャーから作成したエミュレータを起動する。

### 4. アプリ起動

4.1 上部の再生ボタンを押下しアプリを起動。 (結構時間がかかります)

4.2 アプリが無事起動できたら完了です。ボタンを触って動かしたりなど、ウォーミングアップをしていただけると幸いです。

## 困ったら

[公式ドキュメントを読みましょう](http://flutter.io/)

## 補足

### API サーバ

家計簿アプリを製作する上で以下技術スタックを利用している。

- 簡易 DB に Google Spreadsheet
- それと接続するエンドポイントに Google Apps Script

詳しくは API サーバのリポジトリをご確認いただければ幸いです。

[https://github.com/jiyuujin/account-api](https://github.com/jiyuujin/account-api)
