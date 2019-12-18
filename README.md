### Check VAT validity
This is a small utility to check VAT validity.
Check VAT validity is responsible for checking validity of VAT in the following countries:
```
IT
BE 
BG
CY
CZ 
DK 
EE 
FI 
FR 
DE 
GR 
HU 
IE 
AT
LV 
LT 
LU 
MT 
NL 
PL 
PT 
RO 
SK 
SI 
ES 
SE 
GB
```

The function is quite simple and accepts a ```countryCode``` and a ```vatNumber``` that should be passed to the function as arguments.
The library uses SOAP, making a POST to the following URL: ```http://ec.europa.eu/taxation_customs/vies/checkVatService.wsdl``` and it returns:

  * ```true``` if the VAT is valid
  * ```false``` otherwise

The service fullfills the following business requirements:

> * Allow the system to check if the VAT number is valid or not.

The following is an example for calling the service:
```
let result = await checkVatValidity('IT', '000000000');
```

## Request Parameters
| Parameter | Type | Description |
|-------|------|-------------|
| countryCode | String | Identifies the country code ||
| vatNumber | String | Identifies the VAT number to check ||

## Response
| Parameter | Type | Description |
|-------|------|-------------|
| response | Boolean | Returns ```true``` if valid, ```false``` otherwise ||