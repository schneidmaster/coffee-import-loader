[![npm version](https://badge.fury.io/js/coffee-import-loader.svg)](https://badge.fury.io/js/coffee-import-loader)

# coffee-import-loader

coffee-import-loader is a Webpack loader to transpile ES6 `import` statements in CoffeeScript files before they're passed to the CoffeeScript compiler.

## Installation

```
npm install coffee-import-loader --save-dev
```

## How it works

CoffeeScript lacks native support for ES6 `import` syntax:

``` coffeescript
import * as MyModule from 'a-package';
import { SomeModule } from 'neat-package';
import SomeDefaultModule from 'other-package';

# error: reserved word 'import'
```

coffee-import-loader transpiles those `import` statements into the equivalent block of CommonJS `require`s, giving you succinct syntax while keeping the CoffeeScript compiler happy.

``` coffeescript
import * as MyModule from 'a-package';
import { SomeModule } from 'neat-package';
import SomeDefaultModule from 'other-package';

# transpiled

MyModule = require('a-package')
SomeModule = require('neat-package').SomeModule
SomeDefaultModule = require('other-package')
```

## Usage

``` javascript
var exportsOfFile = require('coffee!coffee-import!./file.coffee');
// => return exports of executed and compiled file.coffee
```

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

### Recommended configuration

``` javascript
{
  module: {
    loaders: [
      { test: /\.coffee$/, loaders: ['coffee', 'coffee-import' }
    ]
  }
}
```

Note that `coffee-import` must come at the end, as `import` statements are not valid CoffeeScript and must be transpiled first.

## Contributing

1. Fork it ( https://github.com/schneidmaster/coffee-import-loader/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

## License

MIT
