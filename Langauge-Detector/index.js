let franc = require('franc');
const langs = require('langs')
const colors = require('colors')
let input = process.argv[2]
let language = franc(input)
if(language === "und"){
    console.log('your text is too short, try with more text'.brightRed)
}else{
    let langDetected = langs.where('3',language)
    console.log(langDetected.name.brightGreen)
}
