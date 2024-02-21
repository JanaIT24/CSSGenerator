document.addEventListener("DOMContentLoaded", () => {

    const rotate = document.getElementById("rotateval");
    const rotate_valueElement = document.getElementById("rotate_val");
    const scale = document.getElementById("scaleval");
    const scale_valueElement = document.getElementById("scale_val");
    const skew = document.getElementById("skewval");
    const skew_valueElement = document.getElementById("skew_val");
    const translatex = document.getElementById("translate_x");
    const translatex_valueElement = document.getElementById("translate_valx");
    const translatey = document.getElementById("translate_y");
    const translatey_valueElement = document.getElementById("translate_valy");

    const tool = document.querySelector(".tool1");
    const code = document.querySelector("#lang");
    const copy = document.querySelector("#btncopy");

    var rotatevalue = 0;
    var scalevalue = 2;
    var skewvalue = 0;
    var translatexvalue = 0;
    var translateyvalue = 0;
    var coding = "test";


    function updatetransform() {
        rotatevalue = rotate.value;
        rotate_valueElement.innerText = rotatevalue + '\u00b0';
        scalevalue = scale.value / 100;
        scale_valueElement.innerText = scalevalue;
        skewvalue = skew.value;
        skew_valueElement.innerText = skewvalue + '\u00b0';
        translatexvalue = translatex.value;
        translatex_valueElement.innerText = translatexvalue + "px";
        translateyvalue = translatey.value;
        translatey_valueElement.innerText = translateyvalue + "px";


        console.log(scalevalue);
        coding = `transform:rotate(${rotatevalue}deg) scale(${scalevalue}) skew(${skewvalue}deg) translate(${translatexvalue}px,${translateyvalue}px);`;
        code.innerHTML = coding;
        tool.style.cssText = coding;

    }

    updatetransform();



    rotate.addEventListener("mousemove", updatetransform);
    rotate.addEventListener("change", updatetransform);
    scale.addEventListener("mousemove", updatetransform);
    scale.addEventListener("change", updatetransform);
    skew.addEventListener("mousemove", updatetransform);
    skew.addEventListener("change", updatetransform);
    translatex.addEventListener("mousemove", updatetransform);
    translatex.addEventListener("change", updatetransform);
    translatey.addEventListener("mousemove", updatetransform);
    translatey.addEventListener("change", updatetransform);










    //copy
    copy.addEventListener('click', () => {
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert("Code Copied");
        console.log('copy')
    });







})