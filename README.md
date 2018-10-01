# charity-base-schema

## Installation

```
npm install --save charity-base/charity-base-schema#v2.8.3
```

## Examples

Initialise a Mongoose model:

```js
const mongoose = require('mongoose')
const { mongooseSchema } = require('charity-base-schema')

const Charity = mongoose.model('Charity', mongooseSchema.charity(mongoose))
```

Create an Elasticsearch mapping:

```js
const elasticsearch = require('elasticsearch')
const { elasticMapping } = require('charity-base-schema')

const client = new elasticsearch.Client({
  host: 'localhost:9200',
})

client.indices.putMapping({
  index: 'charity-base',
  type: 'charity',
  body: elasticMapping(),
}, (err, response) => {
  ...
})
```
