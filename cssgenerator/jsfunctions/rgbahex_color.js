document.addEventListener("DOMContentLoaded", () => {

    const red = document.getElementById("redcolor");
    const red_Element = document.getElementById("red_value");
    const green = document.getElementById("greencolor");
    const green_Element = document.getElementById("green_value");
    const blue = document.getElementById("bluecolor");
    const blue_Element = document.getElementById("blue_value");
    const opacity = document.getElementById("opacityval");
    const opacity_Element = document.getElementById("opacity_value");



    const hex = document.getElementById("hexvalue");
    const hexcode = document.getElementById("hex_code");
    const code1 = document.getElementById("lang1");
    const code2 = document.getElementById("lang2");
    const code3 = document.getElementById("lang3");
    const tool1 = document.querySelector(".tool1");
    const tool2 = document.querySelector(".tool2");
    const copy1 = document.querySelector("#btncopy1");
    const copy2 = document.querySelector("#btncopy2");
    const copy3 = document.querySelector("#btncopy3");


    var redcolor = 251;
    var greencolor = 56;
    var bluecolor = 23;
    var hexvalue = "#FB96A8";
    var opacity_value = 0.4;
    var coding1 = "Test";
    var coding2 = "TEST";
    var codetext1 = "text";
    var codetext2 = "test";
    var coding2 = "Test";

    function updatergbandhex() {
        redcolor = red.value;
        red_Element.innerText = redcolor;
        greencolor = green.value;
        green_Element.innerText = greencolor;
        bluecolor = blue.value;
        blue_Element.innerText = bluecolor;
        coding1 = `RGB(${redcolor},${greencolor},${bluecolor})`;
        coding2 = `RGBA(${redcolor},${greencolor},${bluecolor},${opacity_value})`;
        hexvalue = "#" + (1 << 24 | redcolor << 16 | greencolor << 8 | bluecolor).toString(16).slice(1);
        var hexcolor_val = hexvalue;
        opacity_value = opacity.value / 100;
        opacity_Element.innerText = opacity_value ;

        codetext1 = `background-color: rgba(${redcolor},${greencolor},${bluecolor},${opacity_value});`;
        codetext2 = `background-color: rgba(${redcolor},${greencolor},${bluecolor});`
        hex.value = hexcolor_val;
        hexcode.innerText = hexcolor_val;


        code1.innerHTML = coding1;
        tool1.style.cssText = codetext1;
        code2.innerHTML = coding2;
        tool2.style.cssText = codetext2;
        code3.innerHTML = hexcolor_val;



    }
    updatergbandhex(251, 150, 168)

    red.addEventListener("change", updatergbandhex);
    red.addEventListener("mousemove", updatergbandhex);

    green.addEventListener("change", updatergbandhex);
    green.addEventListener("mousemove", updatergbandhex);

    blue.addEventListener("change", updatergbandhex);
    blue.addEventListener("mousemove", updatergbandhex);

    opacity.addEventListener("change", updatergbandhex);
    opacity.addEventListener("mousemove", updatergbandhex);





















    //copy
    copy1.addEventListener('click', () => {
        document.querySelector('#lang1').select();
        document.execCommand('copy');
        alert("Code Copied");
        console.log('copy')
    });
    copy2.addEventListener('click', () => {
        document.querySelector('#lang2').select();
        document.execCommand('copy');
        alert("Code Copied");
        console.log('copy')
    });
    copy3.addEventListener('click', () => {
        document.querySelector('#lang3').select();
        document.execCommand('copy');
        alert("Code Copied");
        console.log('copy')
    });










})