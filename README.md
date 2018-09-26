# AWS Lambda experiment 1

Task: Build AWS Lambda that queried a PSQL database + returned JSON to the endpoint. 

## Running

```
npm run predeploy
```

Outputs a .zip to upload to AWS Lambda dashboard. 

## Tests

```
npm run test
```

Current covers index.js, Knex query.js module should be covered by integration tests.

## Conclusion 

Works in AWS Lambda pretty well, when hitting the get endpoint it returns what I want. 

Need to do a version 2. Idea is to use Webpack to improve bundling, and GraphQL for better usage. Then iterate from there.