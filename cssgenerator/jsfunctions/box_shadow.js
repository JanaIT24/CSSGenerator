document.addEventListener("DOMContentLoaded", () => {
    const horizon = document.getElementById("horizontal");
    const horizon_valueElement = document.getElementById("horizonshadow");
    const vertical = document.getElementById("vertical");
    const vertical_valueElement = document.getElementById("verticalshadow");
    const blur = document.getElementById("blurrad");
    const blur_valueElement = document.getElementById("blurradius")
    const spread = document.getElementById("spreadrad");
    const spread_valueElement = document.getElementById("spreadradius");
    const shadowcolour = document.getElementById("shadowcolour");
    const shadow_colourElement = document.getElementById("hex_code");
    const shadow_opticity = document.getElementById("shadow_opticity");
    const shadow_opacityElement = document.getElementById("opacity");
    const tool = document.querySelector(".tool");
    const code = document.querySelector("#lang");
    const copy = document.querySelector("#btncopy");

    var horizon_value = 10;
    var vertical_value = 10;
    var blur_value = 6;
    var spread_value = 2;
    var coding = "test";
    var color = "black";
    var shadow_value = "#000";
    var shadow_opticityvalue = 0.75;




    function boxupdate() {
        horizon_value = horizon.value;
        horizon_valueElement.innerText = horizon_value + "px";
        vertical_value = vertical.value;
        vertical_valueElement.innerText = vertical_value + "px";
        blur_value = blur.value;
        blur_valueElement.innerText = blur_value + "px";
        spread_value = spread.value;
        spread_valueElement.innerText = spread_value + "px";
        color = shadowcolour.value;


        var r = parseInt(color.slice(1, 3), 16);
        var g = parseInt(color.slice(3, 5), 16);
        var b = parseInt(color.slice(5, 7), 16);
        shadow_opticityvalue = shadow_opticity.value / 100;
        shadow_opacityElement.innerText = shadow_opticityvalue + "px";
        shadow_colourElement.innerText = "rgba(" + r + "," + g + "," + b + ")";


        coding = `box-shadow:${horizon_value}px ${vertical_value}px ${blur_value}px ${spread_value}px  rgba(${r},${g},${b},${shadow_opticityvalue});`;
        console.log(coding)
        code.innerHTML = coding;
        tool.style.cssText = coding;

    }


    boxupdate();





    horizon.addEventListener("mousemove", boxupdate);
    horizon.addEventListener("change", boxupdate);
    vertical.addEventListener("mousemove", boxupdate);
    vertical.addEventListener("change", boxupdate);
    blur.addEventListener("mousemove", boxupdate);
    blur.addEventListener("change", boxupdate);
    spread.addEventListener("mousemove", boxupdate);
    spread.addEventListener("change", boxupdate);
    shadow_opticity.addEventListener("mousemove", boxupdate);
    shadow_opticity.addEventListener("change", boxupdate);
    shadowcolour.addEventListener("change", boxupdate);








    //copy
    copy.addEventListener('click', () => {
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert("Code Copied");
        console.log('copy')
    });



















})