# jbook project from Udemy course

Project will mimick code.io with accepting user code and
outputting processed code by using esbuild to process the
code in the browser.

<details>
  <summary>Issues</summary>

Solved issue with my dev-configuration to add `esbuild.wasm`
file to `dist` directory by running:

```sh
npm i -D copy-webpack-plugin
```

In `config/webpack.common.js` add:

```javascript
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // ...,
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public", // copies all public dir contents to dist dir
        },
      ],
    }),
  ],
};
```

---

Solved issue with saving changes and browser showing error:

```sh
GET http://localhost:3000/favicon.ico  [HTTP/1.1 404 Not Found 0ms]
```

In `config/webpack.common.js` add:

```javascript
module.exports = {
  // ...,
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public/esbuild.wasm",
        },
      ],
    }),
  ],
};
```

---

</details>
