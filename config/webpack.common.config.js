export default {
  mode: 'production',
  entry: ['./src/index.ts'],
  plugins: [
    // new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({ filename: 'styles.css' }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss'],
  },
}