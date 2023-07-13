const Shape = require('./shapes')

class Text extends Shape {

    constructor (content) {
        super()
        this.content = content
        this.x = '150'
        this.y = '125'
    }


    setXOffSet(x) {
        this.x = x
    }

    setYOffSet(y) {
        this.y = y
    }

    render () {
        return `<text x="${this.x}" y="${this.y}" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="${this.color}">${this.content}</text>`
    }
}

module.exports = Text;