const Square = require('./square')

describe('Square' , () => {

    it('Test render',() => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="blue" />');
    })
})