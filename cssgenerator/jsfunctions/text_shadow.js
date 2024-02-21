document.addEventListener("DOMContentLoaded", () => {
    const horizon = document.getElementById("horiz");
    const horizon_valueElement = document.querySelector("#horizonshadow");
    const vertical = document.getElementById("vert");
    const vertical_valueElement = document.getElementById("verticalshadow");
    const blurrad = document.getElementById("blur_radius");
    const blur_valueElement = document.getElementById("blurradius");
    const color = document.getElementById("inner_colour");
    const color_codeElement = document.getElementById("hex_code");
    const restool = document.getElementById("result");
    const code = document.getElementById("lang");
    const copy = document.querySelector("#btncopy");
    const opacit = document.getElementById("sha_opacity");
    const opacity_valueElement = document.getElementById("shadowopacity");
    var horizon_value = 8;
    var vertical_value = 8;
    var coding = "test";
    var blur = 10;
    var colour = color.value;
    var colour_code = "#000"
    var opacit_value = 0.33;





    function updatecode() {
        horizon_value = horizon.value;
        horizon_valueElement.innerText = horizon_value + "px";
        vertical_value = vertical.value;
        vertical_valueElement.innerText = vertical_value + "px";
        blur = blurrad.value;
        blur_valueElement.innerText = blur + "px";
        colour = color.value;
        var r = parseInt(colour.slice(1, 3), 16);
        var g = parseInt(colour.slice(3, 5), 16);
        var b = parseInt(colour.slice(5, 7), 16);
        
        opacit_value = opacit.value / 100;
        opacity_valueElement.innerText = opacit_value + "px";
        color_codeElement.innerText = "rgba(" + r + "," + g + "," + b +","+opacit_value+ ")";

        coding = `
        text-shadow:${horizon_value}px ${vertical_value}px ${blur}px rgba(${r},${g},${b},${opacit_value});
        `;
        code.innerHTML = coding;
        restool.style.cssText = coding;
    }


    updatecode()





    horizon.addEventListener("mousemove", updatecode);
    horizon.addEventListener("change", updatecode);
    vertical.addEventListener("mousemove", updatecode);
    vertical.addEventListener("change", updatecode);
    blurrad.addEventListener("mousemove", updatecode);
    blurrad.addEventListener("change", updatecode);
    opacit.addEventListener("mousemove", updatecode);
    opacit.addEventListener("change", updatecode);
    color.addEventListener("change", updatecode);
    








    copy.addEventListener('click', () => {
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert("Code Copied");
        console.log('copy')
    });





})