const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@models': path.resolve(__dirname, 'src', 'models'),
      '@shared': path.resolve(__dirname, 'src', 'shared'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
    },
  },
};
