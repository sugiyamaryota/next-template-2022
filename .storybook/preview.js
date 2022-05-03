import * as NextImage from 'next/image'
import {initialize, mswDecorator} from 'msw-storybook-addon'
import {rest} from 'msw'
import "../styles/globals.css";

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
        rest.get('/login', (req,res,ctx) => {
          return res(
            ctx.json({
              success: true,
            })
          )
        })
      ]
    }
  }
}