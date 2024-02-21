document.addEventListener("DOMContentLoaded", () => {
    const tool = document.querySelector(".tool");
    const allborder = document.getElementById("border");
    const all_value = document.getElementById("all");
    const code = document.getElementById("lang");
    const colorElement = document.getElementById("inner_colour");
    const hex_code = document.getElementById("hex_code");
    const borderColor = document.getElementById("border_color");
    const borderhexColor = document.getElementById("borderhex_code");
    const border_size = document.getElementById("border_size");
    const border_sizeElement = document.getElementById("all_border");
    const copy = document.querySelector("#btncopy");
    const border_styleElement = document.querySelector("#border_style");
    var all_radius = 10;
    var coding = "Test";
    var border_style = "solid";
    var color = "white";
    var hexcode = "#fff";
    var bcolor = "black";
    var bhexcolor = "#000";
    var borderSize = "2";



    function borderUpdate() {
        all_radius = allborder.value;
        all_value.innerText = all_radius + "px";
        color = colorElement.value;
        hex_code.textContent = color;
        bcolor = borderColor.value;
        borderhexColor.textContent = bcolor;
        borderSize = border_size.value;
        border_sizeElement.innerText = borderSize + "px";
        coding = `
        border:${borderSize}px ${border_style} ${bcolor};
        border-radius:${all_radius}px;
        background-color:${color};
        `;
        code.innerHTML = coding;
        tool.style.cssText = coding;
    }


    allborder.addEventListener("mousemove", borderUpdate);
    allborder.addEventListener("change", borderUpdate);

    border_size.addEventListener("mousemove", borderUpdate);
    border_size.addEventListener("change", borderUpdate);

    colorElement.addEventListener("change", borderUpdate);
    borderColor.addEventListener("change", borderUpdate);

    copy.addEventListener('click', () => {
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert("Code Copied");
        console.log('copy')
    });
    borderUpdate();

    //borderstyle
    border_styleElement.addEventListener('change', function () {
        border_style = this.value;
        borderUpdate();
    })














})

