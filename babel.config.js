/**
 * Had to pull babel config out of the package.json, to properly
 * build with the MaskedInput control updates
 * @param {*} api
 */
module.exports = function (api) {
  api.cache(false); // since we are just testing right now

  return {
    plugins: [
      [
        "@parcel/babel-plugin-transform-runtime",
        {
          corejs: {
            version: 3,
            proposals: true,
          },
        },
      ],
    ],
  };
};
