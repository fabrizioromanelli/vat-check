var soap = require('soap');
var url = 'http://ec.europa.eu/taxation_customs/vies/checkVatService.wsdl';

const checkVatValidity = async (countryCode, vatNumber) => {
  try {
    var args = {countryCode, vatNumber};
    let client = await soap.createClientAsync(url);
    let result = await client.checkVatAsync(args);
    return (result[0].valid);
  } catch (error) {
    console.error(error.message);  
  }
};

module.exports = checkVatValidity;