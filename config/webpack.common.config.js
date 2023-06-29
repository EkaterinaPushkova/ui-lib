import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  mode: "none",
  entry: "./src/index.ts",
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "styles.css" }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ts|js)x?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
