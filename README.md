# Base Development Envrionment with React

After updating `babel.config.js` to use [JSX Transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html),
functional components no longer need to import `react` with

```js script
import React from "react";
```

If run into issues, if not mentioned here, check out the `Issues`
section on the `main` branch.

## Frontend Only

```sh
git clone --branch react-ts --single-branch --depth 1 git@github.com:justin0979/devconfig.git
```

#### Running Tests

Testing only uses jest. Enzyme was removed due to a lack of an official adapter-17.

If needing to use:

```javascript
jest.spyOn(global, "fetch").mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(stuff),
  }),
);
```

use this instead:

```javascript
global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(stuff),
  }),
);
```

then, remove the mock:

```javascript
global.fetch.mockRestore();
delete global.fetch();
```

#### Absolute Path

For use of absolute paths like:

```javascript
import newFile from "&newdirname/newFile";
```

update the following (assuming <code>newdirname/</code> is in <code>src/</code>):

<ul>
  <li>Update <code>babel.config.js</code>:
  
 ```sh
 module.exports = {
plugins: [
           "module-resolver", {
              root: ["./"],
               alias: {
                 "&newdirname": "./src/newdirname"
               }
             }
         ]
 }
 ```
 
  </li>
  <li>
 Update <code>tsconfig.json</code>:
 
```sh
{
     "compilerOptions": {
      "paths": {
        "&newdirname/*": ["./src/newdirname/*"]
     }
    }
}
```
 
To import <code>index.ts</code> like:

```javascript
import * from "&newdirname";
```

change <code>tsconfig.json</code>:

```sh
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "&newdirname": ["src/newdirname"],
      "&newdirname/*": ["src/newdirname/*"]
    }
  }
}
```

   </li>
  </ul>
</ul>

The `tsconfig.json` comes from:
[TypeScript: Documentation Path mapping](https://www.javascript.org/docs/handbook/module-resolution.html#path-mapping)
