const Shape = require('./shapes')

class Text extends Shape {

    constructor (content) {
        super()
        this.content = content
    }

    render () {
        return `<text x="115" y="115" font-size="40" fill="${this.color}">${this.content}</text>`
    }
}

module.exports = Text;