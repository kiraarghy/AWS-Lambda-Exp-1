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

Current covers index.js, need to work out testing for knex.