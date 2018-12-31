# ALFAcoins-js-api
A JavaScript implementation of the ALFAcoins API

This library provides a JavaScript implementation of the https://www.alfacoins.com/ API - A Bitcoin & cryptocurrency payment processing system.

Core ALFAcoins API: https://www.alfacoins.com/developers


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

