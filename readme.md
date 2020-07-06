# Reproducing issue #81 with simple-nunjucks-loader

If I follow the documentation for simple-nunjucks-loader and use the Filters option to load a filter:

### webpack.config.js

```
module.exports = {
    module: {
        rules: [
            {
                test: /\.njk$/,
                use: [{
                    loader: 'simple-nunjucks-loader',
                    options: {
                        filters: {
                            filter: path.join(__dirname, 'filter.js')
                        }
                    }
                }]
            }
        ]
    }
};
```

### filter.js

```
export default function filter(val, param) {
    return `${val + param}`;
}
```

### error

```
 [...]\filter.js:1
    (function (exports, require, module, __filename, __dirname) { export default function filter(val, param) {
                                                                  ^^^^^^

    SyntaxError: Unexpected token export
```

This repo is meant to reproduce that issue, to help in fixing it.
