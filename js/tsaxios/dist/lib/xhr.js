"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function xhr(config) {
    var url = config.url, _a = config.method, method = _a === void 0 ? 'GET' : _a;
    var request = new XMLHttpRequest();
    request.open(method, url, true);
    request.send();
}
exports.default = xhr;
//# sourceMappingURL=xhr.js.map