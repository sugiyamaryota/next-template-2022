## Next

https://nextjs.org/docs/getting-started

## MSW
APIモックライブラリ。
モック系のツールはセットアップに準備が必要。しかし、これは要らないので利点が大きい。
developとproductionもenvで管理してしまえば手間がない。

以下を参考にした。

https://github.com/vercel/next.js/tree/canary/examples/with-msw

いかがでると、service workerが有効になっている。

`[MSW] Mocking enabled`

```shell
fetch failed
```

以下の手順で解決した。
- Nodeのバージョンを16系にする
- `yarn build`をする
- `yarn dev`をする

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