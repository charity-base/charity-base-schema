const getGrantSchema = require('./grant')

const getCharitySchema = mongoose => new mongoose.Schema({
  '_id': mongoose.Schema.Types.ObjectId,
  "regulator": { "type" : String, "enum" : ["GB-CHC", "GB-SC", "GB-NIC"] },
  "ids": {
    "charityId": String,
    "GB-CHC": Number,
  },
  "name": String,
  "isRegistered": Boolean,
  "governingDoc": String,
  "areaOfBenefit": String,
  "contact": {
    "address": [String],
    "email": String,
    "geo": {
      "postcode" : String,
      "quality" : Number,
      "eastings" : Number,
      "northings" : Number,
      "country" : String,
      "nhs_ha" : String,
      "longitude" : Number,
      "latitude" : Number,
      "european_electoral_region" : String,
      "primary_care_trust" : String,
      "region" : String,
      "lsoa" : String,
      "msoa" : String,
      "incode" : String,
      "outcode" : String,
      "parliamentary_constituency" : String,
      "admin_district" : String,
      "parish" : String,
      "admin_county" : String,
      "admin_ward" : String,
      "ccg" : String,
      "nuts" : String,
      "codes" : {
        "admin_district" : String,
        "admin_county" : String,
        "admin_ward" : String,
        "parish" : String,
        "parliamentary_constituency" : String,
        "ccg" : String,
        "nuts" : String
      },
    },
    "geoCoords": String,
    "person": String,
    "phone": String,
    "postcode": String,
  },
  "isWelsh": Boolean,
  "trustees": {
    "incorporated": Boolean,
    "names": [String],
  },
  "website": String,
  "isSchool": Boolean,
  "income": {
    "latest": {
      "date": Date,
      "total": Number,
    },
    "annual": [{
      "financialYear" : {
        "begin" : Date,
        "end" : Date,
      },
      "income" : Number,
      "expend" : Number,
    }],
  },
  "fyend": String,
  "companiesHouseNumber": String,
  "areasOfOperation": [{
    "id" : String,
    "parentId" : String,
    "name" : String,
    "alternativeName" : String,
    "locationType" : String,
    "isWelsh" : Boolean,
  }],
  "causes": [{
    "id" : Number,
    "name" : String,
  }],
  "beneficiaries": [{
    "id" : Number,
    "name" : String,
  }],
  "operations": [{
    "id" : Number,
    "name" : String,
  }],
  "activities": String,
  "subsidiaries": [{
    "name": String,
    "isRegistered": Boolean,
    "governingDoc": String,
    "areaOfBenefit": String,
    "contact": {
      "email": String,
      "person": String,
      "phone": String,
      "postcode": String,
      "address": [String],
    },
  }],
  "alternativeNames": [String],
  "people": {
    "trustees": Number,
    "employees": Number,
    "volunteers": Number,
  },
  "registrations": [{
    "registrationDate": Date,
    "removalDate": Date,
    "removalCode": String,
    "removalReason": String,
  }],
  "lastRegistrationDate": Date,
  "objectives": String,
  "grants": [
    getGrantSchema(mongoose)
  ],
})

module.exports = getCharitySchema
