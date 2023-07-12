const Triangle = require('./triangle')
const Square = require('./square')
const Circle = require('./circle')
const Text = require('./text')
const Logo = require('./logo')

describe('Logo' , () => {

    it('Test logo render',() => {
        const shape = new Triangle();
        shape.setColor("blue");

        const text = new Text('TST');
        text.setColor('yellow')

        const logo = new Logo(shape,text)

        expect(logo.render()).toEqual('<?xml version="1.0"?><svg width=\"300\" height=\"200\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="115" y="115" font-size="40" fill="yellow">TST</text></svg>');
    })

})