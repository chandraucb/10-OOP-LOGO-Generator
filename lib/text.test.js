
const Text = require('./text')

describe ('Text' , () => {
    it('Test Text component render',() => {
        const text = new Text('TST')
        text.setColor('yellow')
        expect(text.render()).toEqual('<text x="150" y="125" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="yellow">TST</text>')
    })
})