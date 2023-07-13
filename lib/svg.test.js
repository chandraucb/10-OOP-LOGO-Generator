const SVG = require('./svg')

describe('SVG', () => {
    it('Test SVG Square File Creation', () => {
        const svg = new SVG()

        svg.setShape('Square','lightblue')
        svg.setText('ABC','purple')

        expect(() => {svg.createLogo('./examples/square.svg')}).not.toThrow()

    })

    it('Test SVG Triangle File Creation', () => {
        const svg = new SVG()

        svg.setShape('Triangle','orange')
        svg.setText('XYZ','red')

        expect(() => {svg.createLogo('./examples/triangle.svg')}).not.toThrow()

    })

    it('Test SVG Circle File Creation', () => {
        const svg = new SVG()

        svg.setShape('Circle','blue')
        svg.setText('IND','yellow')

        expect(() => {svg.createLogo()}).not.toThrow()

    })

    it('Test SVG with file name', () => {
        const svg = new SVG()

        svg.setShape('Circle','green')
        svg.setText('SVG','white')

        expect(() => svg.createLogo('./examples/circle.svg')).not.toThrow()

    })

    it('Test SVG invalid dir', () => {
        const svg = new SVG()

        svg.setShape('Circle','blue')
        svg.setText('IND','yellow')

        expect(() => svg.createLogo('./akjf/alkjf')).toThrow("ENOENT: no such file or directory, open './akjf/alkjf'")

    })
})

