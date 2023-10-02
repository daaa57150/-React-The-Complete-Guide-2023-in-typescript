const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@models': path.resolve(__dirname, 'src', 'models'),
    },
  },
};
