# mockios

A library that helps run-time testing by putting fake data instead of Axios.

## Installing

When use `npm`

```
$ npm install --save-dev mockios
```

When use `yarn`

```
$ yarn add --dev mockios
```

## How to use

[CodeSandBox example](https://codesandbox.io/s/mockios-example-xsjhhg)

```typescript
import axios from "axios";
import mockios, { MockDataType } from "mockios";

const mockData: MockDataType = {
  get: {
    // method
    "/hello": [
      // url
      { ok: true, message: "hello world" }, // response body
      { baseURL: "http://localhost:3000" }, // response config
    ],
  },
};

const query =
  process.env.NODE_ENV === "development" ? mockios(mockData) : axios;

query.get("/hello").then(({ data }) => {
  console.log(data); // { ok: true, message: 'hello world' }
});
```
