const Triangle = require('./triangle')
const Square = require('./square')
const Circle = require('./circle')

describe('Shapes' , () => {

    it('Test triangle',() => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 50 225, 200 75, 200" fill="blue" />');
    })

    it('Test square',() => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="75" y="50" width="150" height="150" fill="blue" />');
    })

    it('Test circle',() => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="125" r="75" fill="blue" />');
    })
})
