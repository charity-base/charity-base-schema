# CharityBase Schema

## Installation

```
npm install --save charity-base/charity-base-schema#v6.0.0
```

## Example

Create an Elasticsearch mapping of charities registered with the Charity Commission for England & Wales:

```js
const elasticsearch = require('elasticsearch')
const { chc } = require('charity-base-schema')

const client = new elasticsearch.Client({
  host: 'localhost:9200',
})

client.indices.putMapping({
  index: 'charity-base-chc-charities',
  type: '_doc',
  body: chc.charity,
}, (err, response) => {
  ...
})
```
