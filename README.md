# CharityBase Schema

## Installation

```
npm install --save charity-base/charity-base-schema#v6.0.0
```

## Example

Create an Elasticsearch index of charities registered with the Charity Commission for England & Wales:

```js
const elasticsearch = require('elasticsearch')
const { chc } = require('charity-base-schema')

const client = new elasticsearch.Client({
  host: 'localhost:9200',
})

client.indices.create({
  index: 'charity-base-chc-charities',
  body: {
    mappings: {
      _doc: chc.charity,
    },
  }
}, (err, res) => {
  ...
})
```
