# ALFAcoins-js-api
A JavaScript implementation of the ALFAcoins API

This library provides a JavaScript implementation of the https://www.alfacoins.com/ API - A Bitcoin & cryptocurrency payment processing system.

Core ALFAcoins API: https://www.alfacoins.com/developers


## Setup

Include the single script file into your page:

    <script src="ALFAcoins.js"></script>


## Available Properties/Methods

### Properties

    ALFAcoins.version
    ALFAcoins.COIN_TYPES

### GET Methods

    ALFAcoins.getFees()
    
    ALFAcoins.getRate(currencyA, currencyB)
    
    ALFAcoins.getRates()
    
### POST Methods

    ALFAcoins.postBitSend(config)
    
    ALFAcoins.postBitSendStatus(config)
    
    ALFAcoins.postCreateOrder(config)
    
    ALFAcoins.postOrderStatus(config)
    
    ALFAcoins.postStatistics(config)
    
    ALFACoins.postRefund(config)
    
