require("dotenv").config();

module.exports = {
  images: {
    disableStaticImages: true,
  },
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };
    config.module.rules.push({ test: /\.(jpg|png|gif|svg|pdf)$/, use: [ { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: './Assets/' } } ] },)
    return config;
  },
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    REACT_APP_EMAIL_CONFIG: process.env.REACT_APP_EMAIL_CONFIG,
    REACT_APP_TEST: process.env.REACT_APP_TEST,
  },
};
