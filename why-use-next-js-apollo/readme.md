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
- have caching process.

2 - Built-in loading and error state:
  - Apollo client has an built into React Hook called `useQuery`.
  - we don't need to spend time implementing the error state logic ourselves, we can just take the booleans the Hook returns and change our application rendereing as required.
  - spend less time worrying about implementing data fetching logic and focus on building our application.


3 - Declarative approach to data fetching
  - data fetching with Apollo client is declarative rather than imperative.

## Next.js rendering methods
Next.js has three rendering methods that we can use in conjunction with the Apollo Client.
- SSG
- SSR
- CSR

### SSG - Static site generation
- The pages are generated and converted to HTML on the server at build time ahead of the user requesting them.
- You can only update the data at build time
- The data must be avaiable at build time for the server to query it
- If the data updates after the page is built, them the data is outdated and can only update via deploying a new build
### SSR - Server-side Rendering
- The server still generates page like SSG
- Ot generates for each request the user sends.
- We add extra processing time that can increase the response latency of the server.

### CSR - Client-side Rendering
- To server response latency down
- Keeps the pages loading fast
- Is not compatible with SEO crawlers that crawl the generated HTML
