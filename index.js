/* eslint-env node */
'use strict';

const WebpackDependencyPlugin = require('./lib/webpack-dependency-plugin');

module.exports = {
  name: 'ember-cli-webpack-imports',

  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/-ember-cli-webpack-imports-bundle.js');
    this.import('vendor/-ember-cli-webpack-imports-shims.js');
  },

  treeForVendor() {
    const addonOptions = this._getAddonOptions()['ember-cli-webpack-imports'];

    return new WebpackDependencyPlugin({
      outputName: 'ember-cli-webpack-imports',
      expose: (addonOptions && addonOptions.expose) || []
    });
  },

  _getAddonOptions() {
    return (this.parent && this.parent.options) || (this.app && this.app.options) || {};
  }
};
