var ALFAcoins = (function(){
  "use strict";
  const ALFA_COINS_BASE_URL      = "https://www.alfacoins.com";
  //const ALFA_COINS_API_DOCS_URL  = ALFA_COINS_BASE_URL + "/developers";
  const ALFA_COINS_BASE_API_URL  = ALFA_COINS_BASE_URL + "/api";
  const GET_FEES_URL             = ALFA_COINS_BASE_API_URL + "/fees";
  const GET_RATE_URL             = ALFA_COINS_BASE_API_URL + "/rate";
  const GET_RATES_URL            = ALFA_COINS_BASE_API_URL + "/rates";
  const POST_BIT_SEND_URL        = ALFA_COINS_BASE_API_URL + "/bitsend";
  const POST_BIT_SEND_STATUS_URL = ALFA_COINS_BASE_API_URL + "/bitsend_status";
  const POST_CREATE_ORDER_URL    = ALFA_COINS_BASE_API_URL + "/create";
  const POST_ORDER_STATUS_URL    = ALFA_COINS_BASE_API_URL + "/status";
  const POST_STATISTICS_URL      = ALFA_COINS_BASE_API_URL + "/stats";
  const POST_REFUND_URL          = ALFA_COINS_BASE_API_URL + "/refund";

  const COIN_TYPES = {};
  COIN_TYPES.BITCOIN = "BTC";
  COIN_TYPES.LITECOIN = "LTC";
  COIN_TYPES.ETHEREUM = "ETH";
  COIN_TYPES.BITCOINCASH = "BHC";
  COIN_TYPES.DASH = "DASH";
  COIN_TYPES.XRP = "XRP";
  COIN_TYPES.LITECOINTESTNET = "LTCT";

  const BIT_SEND_REQUIRED_PARAMS        = ["name", "secret_key", "password", "type", "options", "recipient_name", "recipient_email", "reference"];
  const BIT_SEND_STATUS_REQUIRED_PARAMS = ["name", "secret_key", "password", "bitsend_id"];
  const CREATE_ORDER_REQUIRED_PARAMS    = ["name", "secret_key", "password", "type", "amount", "order_id"];
  const ORDER_STATUS_REQUIRED_PARAMS    = ["name", "secret_key", "password", "txn_id"];
  const STATISTICS_REQUIRED_PARAMS      = ["name", "secret_key", "password"];
  const REFUND_REQUIRED_PARAMS          = ["name", "secret_key", "password", "txn_id"];

  let DEFAULT_FETCH_CONFIG = {
    mode:"cors",
    cache:"no-cache",
    headers:{"Content-Type": "application/json; charset=utf-8"}
  };

  function getData(url, data){
    let config = Object.assign({}, DEFAULT_FETCH_CONFIG);
    config.method = "get";
    if(data){
      config.body = JSON.stringify(data);
    }
    return fetch(url, config).then(response => response.json());
  }

  function postData(url, data){
    if(url && data){
      let config = Object.assign({}, DEFAULT_FETCH_CONFIG);
      config.method = "post";
      config.body = JSON.stringify(data);
      return fetch(url, config).then(response => response.json());
    } else {
      throw "URL or Params missing";
    }
  }

  /* Utilities */
  var checkRequiredConfig = function(config, requiredKeys){
    var allValid = true;
    let key;
    for(let i=0,rkLen=requiredKeys.length;i<rkLen;i++){
      key = requiredKeys[i];
      if(typeof(config[key]) === "undefined"){
        throw "Missing required configuration parameter [" + key + "]";
      }
    }
    return allValid;
  };


  var ALFAcoins = function(){
    this.version = "1.0";
    /* Exposed Helper Objects */
    this.COIN_TYPES = COIN_TYPES;
    /* GET APIs */
    this.getFees = async function(){
      return getData(GET_FEES_URL);
    };
    this.getRate = async function(currencyA, currencyB){
      if(!currencyA || !currencyB){
        throw "Expected 2 CurrencyType arguments - e.g. getRate(\"BTC\", \"USD\")";
      }
      return getData(GET_RATE_URL + "/" + currencyA + "_" + currencyB + ".json");
    };
    this.getRates = async function(){
      return getData(GET_RATES_URL);
    };
    /* POST APIs */
    this.postBitSend = async function(config){
      if(checkRequiredConfig(config, BIT_SEND_REQUIRED_PARAMS)){
        return postData(POST_BIT_SEND_URL, config);
      }
    };
    this.postBitSendStatus = async function(config){
      if(checkRequiredConfig(config, BIT_SEND_STATUS_REQUIRED_PARAMS)){
        return postData(POST_BIT_SEND_STATUS_URL, config);
      }
    };
    this.postCreateOrder = async function(config){
      if(checkRequiredConfig(config, CREATE_ORDER_REQUIRED_PARAMS)){
        return postData(POST_CREATE_ORDER_URL, config);
      }
    };
    this.postOrderStatus = async function(config){
      if(checkRequiredConfig(config, ORDER_STATUS_REQUIRED_PARAMS)){
        return postData(POST_ORDER_STATUS_URL, config);
      }
    };
    this.postStatistics = async function(config){
      if( checkRequiredConfig(config, STATISTICS_REQUIRED_PARAMS)){
        return postData(POST_STATISTICS_URL, config);
      }
    };
    this.postRefund = async function(config){
      if(checkRequiredConfig(config, REFUND_REQUIRED_PARAMS)){
        return postData(POST_REFUND_URL, config);
      }
    };
  };

  var alfaCoins = new ALFAcoins();
  return alfaCoins;
}());
