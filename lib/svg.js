const Square = require('./square')
const Circle = require('./circle')
const Triangle = require('./triangle')
const Text = require('./text')
const Logo = require('./logo')
const fs = require('fs')
//SVG class to generate logo.svg file using Logo class 
class SVG {

    setShape(shape,color) {
        switch (shape) {
            case 'Triangle':
                this.shape = new Triangle()
                break;
            case 'Square':
                this.shape = new Square()
                break;
            default:
                this.shape = new Circle()
        }
        this.shape.setColor(color)
    } 

    setText(content,color) {
        this.text = new Text(content);
        this.text.setColor(color)
        
        if ( this.shape instanceof Triangle) {
            this.text.setYOffSet('125')
        }
    }

    createLogo(dir) {
        if (!dir) {
            dir = './output/logo.svg'
        }
        const logo = new Logo(this.shape,this.text)
        const content = logo.render(true)
        console.log(content)
        fs.writeFileSync(dir,content)
    }

}

module.exports = SVG 








