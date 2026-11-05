import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "production",
  devtool: "source-map",

  optimization: {
    minimize: {
      html: {
        collapseWhitespace: "smart",
        removeRedundantAttributes: "smart",
        sortAttributes: true,
        sortTokenLists: true,
        mergeStyles: true,
      },
    },
  },
});
