const builder = require('xmlbuilder2')

class Logo {
    constructor(shape,text) {
        this.shape = shape
        this.text = text
    }

    render(pretty) {
        this.doc = builder.create({ version: '1.0' }).ele('<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>')
        this.doc.ele(this.shape.render())
        this.doc.ele(this.text.render())
        const svgDoc = this.doc.end({ prettyPrint: pretty })
        console.log(svgDoc)
        return svgDoc
    }
}

module.exports = Logo

