'use strict';
module.exports = {
  set: function (obj, keyArgs, setter) {
    Array.isArray(keyArgs) ? keyArgs.forEach((key) => deep(obj, key, setter)) : deep(obj, keyArgs, setter);
  },
  create: function(obj, keyArgs, setter) {
    const newObj = JSON.parse(JSON.stringify(obj));
    Array.isArray(keyArgs) ? keyArgs.forEach((key) => deep(newObj, key, setter)) : deep(newObj, keyArgs, setter);
    return newObj;
  }
};


function deep(obj, argKey, setter) {
  if(typeof obj !== 'object') return false;
  if(!obj) return false;
  if(obj.hasOwnProperty(argKey))
    obj[argKey] = setter;
  else {
    if(Array.isArray(obj)){
      if(!obj.length) return false;
      obj.forEach((elem) => deep(elem, argKey, setter))
    }else{
      if(!Object.keys(obj).length) return false;
      Object.keys(obj).forEach((key) => deep(obj[key], argKey, setter))

    }
  }
}

