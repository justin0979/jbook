# JBook project from Udemy course

This in-progress project will mimick code.io with accepting user code and outputting
code by using esbuild to process the code in the browser.

<<<<<<< HEAD
Code found in `main` branch will contain either of the below branch data.

### 2 Main Development Branches (devconfig is primarily used)

Each branch has its own README to address any encountered issues.

`cra` uses create-react-app. This branch is not being actively developed on.

`devconfig` uses [my](https://github.com/justin0979/devconfig)
development environment.
=======
Development environment will from my
[devconfig](https://github.com/justin0979/devconfig) repo.

<details>
  <summary>Issues</summary>

<details>
<summary>
2 ways to solve (2nd solution is best):
</summary>
<summary>
Solved issue with my dev-configuration to add `esbuild.wasm`
file to `dist` directory by running:
</summary>

`ERROR in Conflict: Multiple assets emit different content to the same filename index.html`

</summary>

In `webpack.dev.js`:

```javascript
output: {
  publicPath: 'auto';
}
```

<summary>
Another solution is to set `wasmURL` in `esbuild.startService` to use `unpkg`
</summary>

```javascript
const startService = async () => {
  const service = await esbuild.startService({
    worker: true,
    wasmURL:
      'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
  });
};
```

Now, `esbuild.wasm` does not need to be added to `public/`.

</details>

---

<details>

<summary>Solved issue with saving changes and browser showing error:</summary>

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
          from: 'public/esbuild.wasm',
        },
      ],
    }),
  ],
};
```

</details>

---

</details>
>>>>>>> editor
