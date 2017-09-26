# mapjs
utility package for sensitive data filtering.


## Usage

package.set(<object>, <array|string>, <object|string|whatever>)


## Example



```javascript
let cid = {
    criminal: {
        id: 123
    }
};

mapper.set(cid, 'id', '*');
console.log(cid);
```

### Result

```
{
    criminal: {
        id: '*'
    }
}

```

#### Arguments can be passed as an array too if multiple key need to be mapped


```javascript
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
console.log(JSON.stringify(nasa, null, 2));

```
### Result
```
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
