"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Shuffle_1 = __importDefault(require("./Shuffle"));
function* default_1(list) {
    let index = 0;
    (0, Shuffle_1.default)(list);
    while (list) {
        if (index >= list.length) {
            (0, Shuffle_1.default)(list);
            index = 0;
        }
        yield list[index++];
    }
}
exports.default = default_1;
