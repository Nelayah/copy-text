"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (text) {
    document.oncopy = function () {
        var body = document.body;
        var selection = window.getSelection() ? window.getSelection() : document['selection'].createRange().text;
        if (window['clipboardData']) {
            var copyText = selection + text;
            window['clipboardData'].setData('Text', copyText);
            return false;
        }
        else {
            var copyText = selection + text;
            var newDiv_1 = document.createElement('div');
            newDiv_1.style.position = 'absolute';
            newDiv_1.style.left = '-99999px';
            body.appendChild(newDiv_1);
            newDiv_1.innerHTML = copyText;
            selection.selectAllChildren(newDiv_1);
            window.setTimeout(function () {
                body.removeChild(newDiv_1);
            }, 0);
        }
    };
});
