import path from 'path';
import webpackCommonConfig from './config/webpack.common.config.js';

export default  [
 { 
  ...webpackCommonConfig,
  output: {
    path: path.resolve('src', 'dist'),
    filename: 'bundle.js'
  }
},
];