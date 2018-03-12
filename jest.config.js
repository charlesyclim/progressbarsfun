'use strict';

const webpackConfig = require('./webpack.config');

module.exports = {
  "verbose": true,
  "testURL": "http://localhost:3000",
  "collectCoverageFrom": [
    "src/**/*.{js,jsx}",
    "!<rootDir>/node_modules/",
    "!<rootDir>/dist/"
  ],
  moduleDirectories: webpackConfig.resolve.modules,
  moduleNameMapper: {
            "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
                        "<rootDir>/__mocks__/fileMock.js",
            "\\.(css|less)$": "identity-obj-proxy"}
};
