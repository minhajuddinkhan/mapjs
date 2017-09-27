const expect = require('chai').expect;
const mapper = require('./index');


describe('Mapper', function() {

    it('Should alter the key with string args', function () {
        let a = {key: 'key'};
        const toBeSet = {one: 1};
        mapper.set(a, 'key', toBeSet );
        expect(a.key).to.equal(toBeSet);
    });

    it('Should give you the key again with array args', function () {

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


        const setter = { hidden: true }
        mapper.set(nasa, ['key', 'secret'], setter);

        expect(nasa.topSecret.secrets[0].key).to.equal(setter);
        expect(nasa.topSecret.secrets[1].secret).to.equal(setter);

    })

  it('Should return you a new object and not change the old one', function () {

    let a = {key: 'key'};
    const toBeSet = {one: 1};
    const result = mapper.create(a, 'key', toBeSet );
    expect(a.key).to.not.equal(toBeSet);
    expect(result.key).to.equal(toBeSet);

  })
});