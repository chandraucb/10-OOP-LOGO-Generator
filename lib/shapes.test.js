const Triangle = require('./triangle')
const Square = require('./square')
const Circle = require('./circle')

describe('Shapes' , () => {

    it('Test triangle',() => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })

    it('Test square',() => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="blue" />');
    })

    it('Test circle',() => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="75" fill="blue" />');
    })
})
