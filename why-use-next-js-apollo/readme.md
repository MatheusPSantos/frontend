Code based in the article:

https://blog.logrocket.com/why-use-next-js-apollo/

## What is Apollo
Apollo is a GraphQL implementation that helps people manage their data.
## Why use Apollo Client With Next.js
1 - out of the box support for caching
```javascript
import {ApolloClient, InMemoryCache} from '@apollo/client';
const client = new ApolloClient({
  cache: new InMemoryCache()
});
```
2 - Built-in loading and error state:
  - Apollo client has an built into React Hook called `useQuery`.

3 - Declarative approach to data fetching

