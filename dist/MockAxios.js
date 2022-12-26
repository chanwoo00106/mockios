"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mockAxios = function (mockData) { return ({
    get: function (url) { return mockData.get[url]; },
    post: function (url) { return mockData.post[url]; },
    patch: function (url) { return mockData.patch[url]; },
    put: function (url) { return mockData.put[url]; },
    delete: function (url) { return mockData.delete[url]; },
    head: function (url) { return mockData.head[url]; },
    option: function (url) { return mockData.option[url]; },
}); };
exports.default = mockAxios;
