import {
  LoadingFallback
} from "./chunk-3XYQCTVJ.js";
import {
  require_jsx_runtime
} from "./chunk-QFD2GQ4D.js";
import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/@rasenganjs/image/lib/components/index.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var LazyLoadedImage = import_react.default.lazy(() => import("./image-4R5CXD2N.js"));
var LazyImage = ({ src, alt, loading = "lazy", mode = "wave", ...props }) => {
  return (0, import_jsx_runtime.jsx)(import_react.default.Suspense, { fallback: (0, import_jsx_runtime.jsx)(LoadingFallback, { width: props.width || 200, height: props.height || 200 }), children: (0, import_jsx_runtime.jsx)(LazyLoadedImage, { src: typeof src === "string" ? src : src.uri, alt, loading, mode, ...props }) });
};

// node_modules/@rasenganjs/image/lib/index.js
var lib_default = LazyImage;
export {
  lib_default as default
};
//# sourceMappingURL=@rasenganjs_image.js.map