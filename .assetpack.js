import { sdfFont, msdfFont } from "@assetpack/core/webfont";

export default {
  entry: './raw-assets',
  output: './public/assetsgen',
  pipes: [msdfFont()],
};
