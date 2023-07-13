const Circle = require('./circle')

describe('Circle' , () => {

    it('Test render',() => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="75" fill="blue" />');
    })
})
