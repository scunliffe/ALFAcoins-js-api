# ALFAcoins-js-api
A JavaScript implementation of the ALFAcoins API

This library provides a JavaScript implementation of the https://www.alfacoins.com/ API - A Bitcoin & cryptocurrency payment processing system.

Use this API to accept and send Bitcoin, Litecoin, Ethereum, Bitcoin Cash, Dash and XRP cryptocurrency payments/refunds.

Core ALFAcoins API: https://www.alfacoins.com/developers

## Security Note

Although the GET based API calls can be made from anywhere, when making POST based API calls using your **secret_key/password** you will want to avoid serving these 2 values up to a public website as a malicious user could scrape the credentials and make calls without your consent. Only make these calls from a private/protected environment.


## Setup

Include the single script file into your page:

```html
<script src="ALFAcoins.js"></script>
```

## Available Properties/Methods

### Properties

```javascript
ALFAcoins.version
//returns the version of this library as a string e.g. "1.0"
    
ALFAcoins.COIN_TYPES
//A convienience mapping of the major coin type abreviations
/*
  BITCOIN:"BTC",
  LITECOIN:"LTC",
  ETHEREUM:"ETH",
  BITCOINCASH:"BHC",
  DASH:"DASH",
  XRP:"XRP",
  LITECOINTESTNET:"LTCT"
*/
```

### GET Methods

```javascript
ALFAcoins.getFees()
//returns a JSON map of coin types, each with a map of deposit, withdrawal, and bitsend comissions/fees:
```

Example (truncated) JSON return

```javascript
{
  "bitcoin": {
    "deposit": {
      "commission": "0.99%",
      "network_fee": "0 BTC"
    },
    "withdrawal": {
      "commission": "0%",
      "network_fee": "0.00005 BTC"
    },
    "bitsend": {
      "commission": "0.99%",
      "network_fee": "0.00005 BTC"
    }
  },
  "litecoin": {...},
  "ethereum": {...},
  "bitcoincash": {...},
  "dash": {...},
  "xrp": {...},
  "litecointestnet": {...}
}
```

```javascript
ALFAcoins.getRate(currencyA, currencyB)
//e.g. ALFAcoins.getRate("BTC", "USD")
//returns a JSON array with a single value for the requested rate
```

Example JSON return

```javascript
[
  "3927.60000000"
]
```

```javascript
ALFAcoins.getRates()
//returns a JSON array of all coin types and all currency rates for each type
```

Example (truncated) JSON return (selective currencies listed, actual list of currencies is extensive)

```javascript
{
  "BTC": [
    {
      "code": "AUD",
      "rate": 5526.335314
    },
    {
      "code": "CAD",
      "rate": 5316.65607
    },
    {
      "code": "EUR",
      "rate": 3411.712203
    },
    {
      "code": "GBP",
      "rate": 3075.586959
    },
    {
      "code": "USD",
      "rate": 3902.53389
    }
  ],
  "LTC": [...],
  "ETH": [...],
  "BCH": [...],
  ...
  ]
}
```

### POST Methods

```javascript
ALFAcoins.postBitSend(config)

ALFAcoins.postBitSendStatus(config)

ALFAcoins.postCreateOrder(config)

ALFAcoins.postOrderStatus(config)

ALFAcoins.postStatistics(config)

ALFACoins.postRefund(config)
```

