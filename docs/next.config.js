module.exports = {
  webpack: config => (
    Object.assign({}, config, {
      externals: Object.assign({}, config.externals, {
        fs: 'fs',
      }),
    })
  ),
};
