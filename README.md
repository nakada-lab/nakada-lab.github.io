# nakada-lab.github.io

### 環境構築

1.  Dev Container
    VS CodeとDockerの環境があればDev Containerで動きます
    ランタイムはBunです

2.  必要ライブラリをインストール
    `bun install`

3.  開発サーバー起動
    `bun run dev`

### 記事の書き方

1.  ファイルの作成
    `src/content/blog/ファイル名.md`を作成する
    ファイル名の部分がURLのパスになる
    `例: ababa.md => https://nakada-lab.github.io/blog/ababa`

2.  記事の基本情報を用意する
    ababa.mdの先頭にこれを記述する (フロントマター)

    ```
    ---
    title: 'タイトル' # 記事のタイトル
    date: '2024-01-11' # 作成日時
    author: 'shallow90125' # 自分のID
    tags: ['typescript', 'react'] # src/consts/tags.tsのkeyの方を入れる なければ追加
    ---
    ```

3.  本文を書く
    フロントマターの下に本文を書く
    参考: https://qiita.com/Qiita/items/c686397e4a0f4f11683d

4.  コミットする
    mainブランチ以外なら下書きコミットしても反映されません
    huskyによって不適切なコードはコミットできません 修正してください
