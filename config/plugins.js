'use strict';

const path = require('path');

module.exports = ({ env }) => ({
  shopify: {
    enabled: true,
    resolve: path.resolve(__dirname, '../src/plugins/shopify'),
    config: {
      scopes: ['read_products'],
      isEmbedded: true,
    },
  },
});
