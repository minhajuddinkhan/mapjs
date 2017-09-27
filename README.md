# mapjs
Utility package for sensitive data filtering.


## Installation

```
npm i mapjs -S
```

## Usage

Provide your base object, keys to manipulate and the value to be manipulated with respectively.

``` package.set( <object> , <array|string>, <object|string|whatever>) ```

You can clone the object without manipulating the input.

``` result := package.create( <object> , <array|string>, <object|string|whatever>) ```


## Example
#### set

will update the object ```cid``` itself.

```javascript
const mapper = require('mapjs');

let cid = {
    criminal: {
        id: 123
    }
};

mapper.set(cid, 'id', '*');
```
##### Result
```javascript
{
    criminal: {
        id: '*'
    }
}

```
#### create
will create a clone of the object ```cid```


```javascript
const mapper = require('mapjs');

let cid = {
    criminal: {
        id: 123
    }
};

const result =  mapper.create(cid, 'id', '*');

```
##### Result
```javascript
{
    criminal: {
        id: '*'
    }
}

```


#### Arguments can be passed as an array too if multiple key need to be mapped


```javascript
const mapper = require('mapjs');

let nasa = {
    topSecret: {
        secrets: [ {
            key: 'keys',
            secret: 'secrets'
        }, {
            key: 'some other key',
            secret: 'some other secret'
        }]
    }
};


mapper.set(nasa, ['key', 'secret'], { hidden: true});

```
##### Result
```javascript
{
  "topSecret": {
    "secrets": [
      {
        "key": {
          "hidden": true
        },
        "secret": {
          "hidden": true
        }
      },
      {
        "key": {
          "hidden": true
        },
        "secret": {
          "hidden": true
        }
      }
    ]
  }
}
```
