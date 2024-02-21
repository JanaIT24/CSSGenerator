document.addEventListener("DOMContentLoaded", () => {
    const columncount = document.getElementById("columncount");
    const columncount_Element = document.getElementById("colcount_val");
    const columngap = document.getElementById("columngap");
    const columngap_Element = document.getElementById("colgap_val");
    const colourstyle_Element = document.getElementById("colrulestyle_color");
    const columnrulewidth = document.getElementById("columnrulewidth");
    const colrulewidth_Element = document.getElementById("colrulewidth_val");
    const columncolor = document.getElementById("columnrulestylecolour");
    const colcolor_Element = document.getElementById("hex_code");


    const result = document.querySelector("#result");
    const code = document.querySelector("#lang");
    const copy = document.querySelector("#btncopy");

    var colcountvalue = 1;
    var colgapvalue = 15;
    var colorstyle = "solid";
    var columnwidthvalue = 2;
    var colorvalue = "#000000";
    var coding = "test";


    function updatemultiplecolumns() {
        colcountvalue = columncount.value;
        columncount_Element.innerText = colcountvalue;
        colgapvalue = columngap.value;
        columngap_Element.innerText = colgapvalue + "px";
        columnwidthvalue = columnrulewidth.value;
        colrulewidth_Element.innerText = columnwidthvalue + "px";
        colorvalue = columncolor.value;
        colcolor_Element.innerText = colorvalue;
        console.log(colorstyle)
        coding =`column-count:${colcountvalue}; column-gap:${colgapvalue}px;column-rule:${columnwidthvalue}px ${colorstyle} ${colorvalue};
        `;
        code.innerHTML = coding ;
        result.style.cssText = coding;

    }
    updatemultiplecolumns();


    columncount.addEventListener("change", updatemultiplecolumns);
    columncount.addEventListener("mousemove", updatemultiplecolumns);

    columngap.addEventListener("change", updatemultiplecolumns);
    columngap.addEventListener("mousemove", updatemultiplecolumns);

    columnrulewidth.addEventListener("change", updatemultiplecolumns);
    columnrulewidth.addEventListener("mousemove", updatemultiplecolumns);

    columncolor.addEventListener("change", updatemultiplecolumns);


    //borderstyle
    colourstyle_Element.addEventListener('change', function () {
        colorstyle = this.value;
        updatemultiplecolumns();
    })









    //copy
    copy.addEventListener('click', () => {
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert("Code Copied");
        console.log('copy')
    });


})