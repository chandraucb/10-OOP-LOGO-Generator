const SVG = require('./lib/svg')
const inquirer = require('inquirer')

const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')

// The name doesn't have to `maxlength-input` - it can be anything you like
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

//Question prompts

const questions = [{
    type: 'maxlength-input',
    name: 'logoText',
    message: 'Enter upto 3 character for your logo text?',
    required: true,
    maxLength: 3
  },{
    type: 'input',
    name: 'logoTextColor',
    message: 'Enter logo text color as color keyword or a hexadecimal number',
    default() {
      return 'white';
    }
  },{
    type: 'list',
    message: 'Pick a shape for your logo',
    name: 'shape',
    choices: [ 'Triangle','Square','Circle'],
    default() {
      return 'Circle';
    }
  },{
    type: 'input',
    name: 'logoColor',
    message: 'Enter logo color as color keyword or a hexadecimal number',
    default() {
      return 'green';
    }
  },
]

inquirer.prompt(questions).then((data)=>{
    //console.log(data)
    const svg = new SVG()

    svg.setShape(data.shape,data.logoColor)
    svg.setText(data.logoText,data.logoTextColor)

    svg.createLogo()
})



