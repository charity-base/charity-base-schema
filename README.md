# charity-base-schema

## Examples

Initialise a mongoose model:

```js
const mongoose = require('mongoose')
const { mongooseSchema } = require('charity-base/charity-base-schema')

const Charity = mongoose.model('Charity', mongooseSchema.charity(mongoose))
```

Create an Elasticsearch mapping:

```js
const elasticsearch = require('elasticsearch')
const { elasticMapping } = require('charity-base/charity-base-schema')

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
