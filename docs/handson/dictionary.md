# 辞書アプリ

<HistoryTags :tags="['Flutter', 'Firebase']" />

当日までに以下の準備を進めてください。

[@preview](https://github.com/YujiOnishi/dictionary_hands_on_hinagata/)

## 開発環境に必要なもの一覧

<Environment />

## Flutter SDKのダウンロード

#### Mac OS をお使いの方は、

<SDKInstall os="macos" version="v1.9.1+hotfix.6-stable" />

#### Windows をお使いの方は、

<SDKInstall os="windows" version="v1.9.1+hotfix.6-stable" />

### Flutter 環境構築

環境構築する場合は [Flutter環境構築](/handson/basic) を確認しましょう。

※ Flutter で Android のシミュレータが確認できる方は Flutter の項目を飛ばしてください。

## Firebase

**前提としてグーグルアカウントを取得していること**

### 1. Firebase の登録

1-1. [Firebase Console](https://firebase.google.com/?hl=jahttps://firebase.google.com/?hl=ja) にアクセスし `使ってみる` を押下。

1-2. プロジェクトに `氏名(ローマ字)-dictionary-hands-on` と名前をつけて続行を押下。

1-3. `Googleアナリティクスを有効にする` へチェックを入れ続行。

1-4. `Googleアナリティクスの構成` 全てチェックしてプロジェクト作成を押下。

### 2. データベースの作成

2-1. 作成したプロジェクトページを開いてサイドメニューの `開発` を押下。

2-2. `Database` を押下。

2-3. `データベースの作成` を押下。

2-4. テストモードで開始にチェックを入れ `次へ` を押下。

2-5. Cloud Firestore のロケーションを `asia-northeast1` にして `完了` を押下。

2-6. `インデックス` を押下。

2-7. `インデックスを追加` を押下。

2-8. 以下を参考に設定しインデックスを作成。

```
コレクションID → dictionary
フィールドのパス1 → type,Ascending
フィールドのパス2 → created_at,Descending
クエリのスコープ → コレクション
```

### 3. Firebase Extensions の登録

**お支払い情報を入力する作業がありますが個人で普通に使っている分だと無料枠を超えることはありません**

3-1. 作成したプロジェクトページを開いてサイドメニューの `Extentions` を押下。

3-2. Translate Text の `インストール` を押下。

3-3. `次へ` を押下。

3-4. `プロジェクトをアップグレード` を押下。

3-5. 指示に従ってお支払い情報を入力。

### 4. アプリ登録

4-1. Project Overview の `Android` を押下し、Android を選択。次回以降は Project Overview 上部の `アプリ追加` を押下し、Android を選択。

4-2. Android パッケージ名に `com.example.dictionary` と入力し `登録` を押下。

4-3. `google-services.json` をダウンロード。

### 5. `Translate text` のインストール

5-1. 作成したプロジェクトページを開いてサイドメニューの `extentions` を押下。

5-2. `Translate Text` を探してインストール。

5-3. translation language for ～の設定を `en,ja` に設定 (`fr` や `es`などをプラスしても問題ありません)

5-4. collection path を `dictionary`と設定。

5-5. input fieldname を `word` と設定。

5-6. output fieldname を `translated` と設定。

## サンプルアプリ起動

### 1. `git clone`

```bash
git clone https://github.com/YujiOnishi/dictionary_hands_on_hinagata.git
```

### 2. Get dependencies

2-1. AndroidStudio で `dictionary_hands_on_hinagata` フォルダを開く。

2-2. `dictionary_hands_on_hinagata/lib/main.dart` を開くと上部に `Get dependency` と表示されているはずなので押下。

### 3. gradle sync

3-1. ダウンロードした `google.service.json` を `dictionary_hands_on_hinagata/android/app` に移動。

3-2. AndroidStudio で `dictionary_hands_on_hinagata/android` フォルダを開くと自動で gradle sync が始まる。

### 4. エミュレータ起動

4-1. AndroidStudio で `dictionary_hands_on_hinagata` フォルダを開く。

4-2. AVD マネージャーから作成したエミュレータを起動。

### 5. アプリ起動

5-1. 上部の再生ボタンを押下しアプリを起動 **結構時間がかかります**
