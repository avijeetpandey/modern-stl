"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
exports.search = function (key, array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        if (i === key)
            return true;
    }
    return false;
};
//# sourceMappingURL=Search.js.map