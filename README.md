# mapjs
Utility package for sensitive data filtering.


## Installation

```
npm i mapjs -S
```

## Usage

``` package.set( <object> , <array|string>, <object|string|whatever>) ```


## Example


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
