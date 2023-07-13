const Triangle = require('./triangle')

describe('Triangle' , () => {

    it('Test render',() => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 25 225, 175 75, 175" fill="blue" />');
    })
})