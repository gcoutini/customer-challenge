const Customer = require('../../resources/models/Customer');

const validate = payload => {
  const keys = Object.keys(Customer.schema.paths).filter(key => key !== '_id' && key !== '__v');
  console.log('VE AEW', keys);
  console.log(payload);
  return true;
}

module.exports = validate;