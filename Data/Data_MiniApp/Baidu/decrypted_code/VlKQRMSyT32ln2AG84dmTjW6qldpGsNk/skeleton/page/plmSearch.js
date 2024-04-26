"use strict";window.skeleton.tpl='<div class="skt-bg">\n    \n    <div class="skt-cell" style="height: 48px;margin-top: 54px;border-radius: 12px"></div>\n    \n    <div class="skt-cell" style="width: 72px;height: 28px;margin-top: 10px;"></div>\n    \n    <div style="width: 100%;display: flex;justify-content: space-between;margin-top: 10px;">\n        <div class="skt-cell" style="width: 44%;height: 36px;"></div>\n        <div class="skt-cell" style="width: 44%;height: 36px;"></div>\n    </div>\n    \n    <div class="skt-cell" style="width: 72px;height: 28px;margin-top: 20px;"></div>\n    \n    <div style="width: 100%;display: flex;justify-content: space-between;margin-top: 10px;">\n        <div class="skt-cell" style="width: 44%;height: 36px;"></div>\n        <div class="skt-cell" style="width: 44%;height: 36px;"></div>\n    </div>\n</div>\n\n<style >\n.skt-bg {\n    background-color: #fff;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    position: fixed;\n    padding: 0 17px;\n    z-index: 921;\n}\n.skt-cell {\n    background-color: #f5f5f5;\n    background-image: linear-gradient(90deg, #f5f5f5 25%, transparent 25%);\n    border-radius: .1rem;\n    animation-name: skeleton-stripes;\n    animation-duration: 1.5s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-direction: alternate;\n}\n\n@keyframes skeleton-stripes {\n    0% {\n        opacity: 1;\n    }\n\n    50% {\n        opacity: .3;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n</style>';