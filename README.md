# GraphQL Server Example

A minimalistic GraphQL server example build by following this document
[https://www.apollographql.com/docs/apollo-server/getting-started/]

# Example Query

```
http://localhost:4000/graphql
{
  books {
    title
    author {
      name
    }
  }
}
```
Or using curl
```
curl 'http://localhost:4000/graphql' -H 'content-type: application/json' --data '{"query":"{ books { title author { name } } }"}'
```
