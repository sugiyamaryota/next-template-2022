import * as NextImage from 'next/image'
import {initialize, mswDecorator} from 'msw-storybook-addon'
import {rest} from 'msw'
import "../src/styles/globals.css";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

initialize();
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers: {
      auth: [
        rest.get('https://myapi.dev/login', (req,res,ctx) => {
          return res(
            ctx.json({
              success: true,
            })
          )
        }),
        rest.get('https://myapi.dev/reviews', (req, res, ctx) => {
          return res(
            ctx.json([
              {
                id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
                author: 'John Maverick',
                text: 'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
              },
            ])
          )
        })
      ]
    }
  }
}