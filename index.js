const SVG = require('./lib/svg')
const inquirer = require('inquirer')

//Question prompts

const questions = [{
    type: 'input',
    name: 'logoText',
    message: 'Enter upto 3 character for your logo text?',
    required: true
  },{
    type: 'input',
    name: 'logoTextColor',
    message: 'Enter logo text color as color keyword or a hexadecimal number',
    required: true
  },{
    type: 'list',
    message: 'Pick a shape for your logo',
    name: 'shape',
    choices: [ 'Triangle','Square','Circle']
  },{
    type: 'input',
    name: 'logoColor',
    message: 'Enter logo color as color keyword or a hexadecimal number',
    required: true
  },
]

inquirer.prompt(questions).then((data)=>{
    //console.log(data)
    const svg = new SVG()

    svg.setShape(data.shape,data.logoColor)
    svg.setText(data.logoText,data.logoTextColor)

    svg.createLogo()
})



