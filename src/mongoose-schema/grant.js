const getGrantSchema = mongoose => new mongoose.Schema({
  '_id': mongoose.Schema.Types.ObjectId,
  'id': String,
  'title': String,
  'amountAwarded': Number,
  'currency': String,
  'awardDate': Date,
  'description': String,
  'classifications': [{
    'title': String,
  }],
  'plannedDate': [{
    'startDate' : Date,
    'endDate' : Date,
    'duration' : Number,
  }],
  'fundingOrganization' : [{
    'id' : String,
    'name' : String,
  }],
  'recipientOrganization' : [{
    'id' : String,
    'GB-CHC' : Number,
  }],
  'beneficiaryLocation' : [{
    'name' : String,
    'countryCode' : String,
    'geoCode' : String,
    'geoCodeType' : String,
    'latitude' : Number,
    'longitude' : Number,
  }],
  'topicModelling': {
    'topics': [{
      id: Number,
      name: String,
      score: Number,
    }],
  },
})

module.exports = getGrantSchema
