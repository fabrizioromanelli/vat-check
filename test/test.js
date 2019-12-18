const checkVatValidity = require('../vatCheck');

// Usage: checkVatValidity(countryCode, vatNumber)
// The function will return true if valid, false otherwise
(async () => {
  let result = await checkVatValidity('IT', '000000000');
  if (result !== undefined)
    console.log("VAT is", result == true ? "valid" : "invalid" + ".");
})();