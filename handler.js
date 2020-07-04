'use strict';
const settings = require('./config/settings')

class Handler {
  static async main(event) {
    console.log('at', new Date().toISOString(), JSON.stringify(event, null, 2))
    return {
      statusCode: 200
    }
  }
}