# gatsby-theme-base

## Quick Start

```shell
mkdir my-site
cd my-site
yarn init
# install @leomanlapera/gatsby-theme-base and it's dependencies
yarn add gatsby react react-dom @leomanlapera/gatsby-theme-base
```

Then add the theme to your `gatsby-config.js`. We'll use the long form
here for education purposes.

```javascript
module.exports = {
  plugins: [`@leomanlapera/gatsby-theme-base`],
}
```

That's it, you can now run your gatsby site using

```shell
yarn gatsby develop
```

## Extending the theme

```javascript
// shadow src/gatsby-theme-base/index.js
import base from "@leomanlapera/gatsby-theme-base/src/gatsby-theme-plugin-ui";

export default {
  ...base,
  colors: {
    text: "tomato"
  }
};
```
