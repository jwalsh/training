// Use proxies to set up logging

var makeLogger = function(obj) { 
  var proxy = {
    get: function(rcvr, name) { 
      log("get", rcvr, name);
      return obj[name];
    }, 
    set: function(rcvr, name, val) { 
      log("set", rcvr, name, val);
      obj[name] = val;
      return true;
    }
  };
  return proxy; 
};