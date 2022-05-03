## Next

https://nextjs.org/docs/getting-started

## MSW
APIモックライブラリ。
モック系のツールはセットアップに準備が必要。しかし、これは要らないので利点が大きい。
developとproductionもenvで管理してしまえば手間がない。

以下を参考にした。

https://github.com/vercel/next.js/tree/canary/examples/with-msw

以下が出ると、service workerが有効になっている。

`[MSW] Mocking enabled`

`yarn dev`で以下のエラーが出ていた。

```bash
fetch failed
```

参考にあった記述を行ったが、これはserverSideからデータを取り出すらしい（まだわかっていない）
`yarn dev`ではサーバーサイドから返すように定義していなかったので、これに問題がありそうだった。
そして、該当コードを削除すると正常になった。ただ、buildする際に、client側で該当APIを使用している場合は必要になる。
fetchを削除すると動作したので、getServerSidePropsが問題にはなっていない。

https://github.com/vercel/next.js/issues/16500


```js
export async function getServerSideProps() {
  // Server-side requests are mocked by `mocks/server.js`.
  const res = await fetch('/login')
  const login = await res.json()

  return {
    props: {
      login,
    },
  }
}
```

以下のエラーが出た。

```bash
TypeError: Only absolute URLs are supported
```

https://zenn.dev/tttela/articles/73ca6bd57bd7b7f35c21

絶対URLのみサポートしているらしい。つまり、相対パスでエンドポイントを記述しているのが原因だった。
解決した。

```js
export async function getServerSideProps() {
  // Server-side requests are mocked by `mocks/server.js`.
  const res = await fetch('http://localhost:3000/login')
  const login = await res.json()

  return {
    props: {
      login,
    },
  }
}
```

https://github.com/mswjs/msw/issues/992#issuecomment-976399901


似たようなエラーが出た。ただ、動作はしている？
PageComponentで記述していたfetchが相対パスだったため、エラーが出ていたのか？

```bash
unhandledRejection: TypeError: Only absolute URLs are supported
```

エンドポイントをhttpsの外部にして定義してアクセスするようにすれば、正常にはなった。

## Storybook

以下の手順に従った。

https://storybook.js.org/blog/get-started-with-storybook-and-next-js/

以下のエラーが出た。

`Error: Cannot find module 'webpack/lib/util/makeSerializable.js'`

.storybook/main.jsに以下を追加して解決した。

```js
module.exports = {
  "typescript" : { reactDocgen: false },
  //...
}
```

https://dev.classmethod.jp/articles/tried-to-add-storybook-to-nextjs-project/

### msw-storybook-addon

https://storybook.js.org/addons/msw-storybook-addon/