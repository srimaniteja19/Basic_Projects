let input = document.querySelector('#Hex')
let inputColor = document.querySelector('.input_color')
let alteredColor = document.querySelector('.altered_color')
let slider = document.querySelector('#slider')
let label_slider = document.querySelector('.slider_label')
input.addEventListener('change',function(e){
     let color = e.target.value;
    //  console.log(color)
     if(color==""){
         return false
     }else if(color.length === 7 || color.length===4){
        inputColor.style.backgroundColor = color
        alteredColor.style.backgroundColor = color
        // e.target.value = ""
     }
     alterColor(color)
})
slider.addEventListener('input',function(e){
   let range = e.target.value;
   let lightness = Number(range/100)
   label_slider.textContent = range + "%";
   alteredColor.style.backgroundColor = convertHexToRGB(input.value,lightness)
})

function convertHexToRGB(hex,a){
     let strippedHex = hex.replace('#','');
    
    if(strippedHex.length === 3) {
      strippedHex = strippedHex[0] + strippedHex[0]
      + strippedHex[1] + strippedHex[1]
      + strippedHex[2] + strippedHex[2];
    }
    
    const r  = parseInt(strippedHex.substring(0,2), 16);
    const g  = parseInt(strippedHex.substring(2,4), 16);
    const b  = parseInt(strippedHex.substring(4,6), 16);
    
    return `rgba(${r}, ${g}, ${b}, ${a})`
  }

  function alterColor(hex){
      return hex;
  }