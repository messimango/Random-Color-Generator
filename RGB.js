/*slider*/

var rSlider = document.getElementById("r-slider");
var rValue = document.getElementById("R-value");

var gSlider = document.getElementById("g-slider");
var gValue = document.getElementById("G-value");

var bSlider = document.getElementById("b-slider");
var bValue = document.getElementById("B-value");

rValue.innerHTML = rSlider.value;
gValue.innerHTML = gSlider.value;
bValue.innerHTML = bSlider.value;

rSlider.oninput = function() {
    rValue.innerHTML = this.value;
    colors();
}

gSlider.oninput = function() {
    gValue.innerHTML = this.value;
    colors();
}

bSlider.oninput = function() {
    bValue.innerHTML = this.value;
    colors();
}




/*Color Box*/
function colors(){
    var red= document.getElementById("r-slider").value;
    var green = document.getElementById("g-slider").value;
    var blue = document.getElementById("b-slider").value;
    document.querySelector(".color").style.backgroundColor = 
    'rgb(' + red + ',' + green + ',' + blue + ')';

    /*values*/
    document.querySelector(".rgbValue").innerHTML =  'rgb(' + red + ',' + green + ',' + blue + ')' ;
    document.getElementById("rgbInput").value = 'rgb(' + red + ',' + green + ',' + blue + ')';

    document.getElementById("hexInput").value = "#" + rgbToHex(red) + rgbToHex(green) + rgbToHex(blue);
    document.querySelector(".hexValue").innerHTML = "#" + rgbToHex(red) + rgbToHex(green) + rgbToHex(blue);

    document.querySelector(".hslValue").innerHTML = RGBToHSL(red, green, blue);
    document.getElementById("hslInput").value = RGBToHSL(red, green, blue);
}


/*convert*/
var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
};

const RGBToHSL = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s
      ? l === r
        ? (g - b) / s
        : l === g
        ? 2 + (b - r) / s
        : 4 + (r - g) / s
      : 0;
    return [
        "hsl(" +
      Math.round(60 * h < 0 ? 60 * h + 360 : 60 * h),
      + Math.round(100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)) + "%",
      Math.round((100 * (2 * l - s)) / 2) + "%)",
    ];
};


/*copy*/
hexInput = document.getElementById("hexInput");
rgbInput = document.getElementById("rgbInput");
hslInput = document.getElementById("hslInput");

function copyRGB() {
    rgbInput.select();
    navigator.clipboard.writeText(rgbInput.value);
};

function copyHEX() {
    hexInput.select();
    navigator.clipboard.writeText(hexInput.value);
};

function copyHSL() {
    hslInput.select();
    navigator.clipboard.writeText(hslInput.value);
};





