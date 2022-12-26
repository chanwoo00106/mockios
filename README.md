# axios-test

A library that helps run-time testing by putting fake data instead of Axios.

## How to use

```typescript
import axios from 'axios'
import mockAxios, { MockDataType } from 'axios-test'

const mockData: MockDataType = {
  get: {
    '/hello': { ok: true, message: 'hello world' },
  },
  post: {},
  patch: {},
  put: {},
  head: {},
  option: {},
  delete: {},
}

const query = process.env.NODE_ENV === 'development' ? mockAxios(mockData) : axios

console.log(query.get('/hello')) // { ok: true, message: 'hello world' }
```
