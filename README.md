# ember-cli-webpack-imports

An addon to add Webpack dependencies to your Ember app.

## Installation

```shell
ember install ember-cli-webpack-imports
```

## Usage

Add the npm modules you’d like to import to `ember-cli-build.js`:

```js
let app = new EmberApp(defaults, {
  'ember-cli-webpack-imports': {
    expose: [
      'graphql-tag',
      'apollo-client',
      'apollo-link-http',
      'apollo-cache-inmemory'
    ]
  }
});
```

After that, you can import these modules like any other:

```js
import gql from 'graphql-tag';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
```

## Credits

The great majority of this addon is stolen from the `ember-apollo-client` addon. I simply felt like this code would benefit from being extracted, all props goes to the original authors!
