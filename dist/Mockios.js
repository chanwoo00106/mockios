"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mockios = function (mockData) { return ({
    get: function (url) { return (mockData.get ? mockData.get[url] : undefined); },
    post: function (url) { return (mockData.post ? mockData.post[url] : undefined); },
    patch: function (url) { return (mockData.patch ? mockData.patch[url] : undefined); },
    put: function (url) { return (mockData.put ? mockData.put[url] : undefined); },
    delete: function (url) { return (mockData.delete ? mockData.delete[url] : undefined); },
    head: function (url) { return (mockData.head ? mockData.head[url] : undefined); },
    option: function (url) { return (mockData.option ? mockData.option[url] : undefined); },
}); };
exports.default = mockios;
