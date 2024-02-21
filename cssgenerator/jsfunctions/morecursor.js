document.addEventListener("DOMContentLoaded", () => {
    const btn19 = document.getElementById("btn19");
    const btn20 = document.getElementById("btn20");
    const btn21 = document.getElementById("btn21");
    const btn22 = document.getElementById("btn22");
    const btn23 = document.getElementById("btn23");
    const btn24 = document.getElementById("btn24");
    const btn25 = document.getElementById("btn25");
    const btn26 = document.getElementById("btn26");
    const btn27 = document.getElementById("btn27");
    const btn28 = document.getElementById("btn28");
    const btn29 = document.getElementById("btn29");
    const btn30 = document.getElementById("btn30");
    const btn31 = document.getElementById("btn31");
    const btn32 = document.getElementById("btn32");
    const btn33 = document.getElementById("btn33");
    const btn34 = document.getElementById("btn34");
    const btn35 = document.getElementById("btn35");
    const btn36 = document.getElementById("btn36");
    const copy = document.querySelector("#btncopy");
    const code = document.querySelector("#lang");


    var coding = "test";
    var val19 = btn19.textContent;
    var val20 = btn20.textContent;
    var val21 = btn21.textContent;
    var val22 = btn22.textContent;
    var val23 = btn23.textContent;
    var val24 = btn24.textContent;
    var val25 = btn25.textContent;
    var val26 = btn26.textContent;
    var val27 = btn27.textContent;
    var val28 = btn28.textContent;
    var val29 = btn29.textContent;
    var val30 = btn30.textContent;
    var val31 = btn31.textContent;
    var val32 = btn32.textContent;
    var val33 = btn33.textContent;
    var val34 = btn34.textContent;
    var val35 = btn35.textContent;
    var val36 = btn36.textContent;


    function cursormove(event, variable) {
        coding = `cursor:${variable}`;
        console.log(variable)
        code.innerHTML = coding;
    }
    cursormove(null, val19)


    btn19.addEventListener("mouseover", function (event) {
        cursormove(event, val19);
    });
    btn20.addEventListener("mouseover", function (event) {
        cursormove(event, val20);
    });
    btn21.addEventListener("mouseover", function (event) {
        cursormove(event, val21);
    });
    btn22.addEventListener("mouseover", function (event) {
        cursormove(event, val22);
    });
    btn23.addEventListener("mouseover", function (event) {
        cursormove(event, val23);
    });
    btn24.addEventListener("mouseover", function (event) {
        cursormove(event, val24);
    });
    btn25.addEventListener("mouseover", function (event) {
        cursormove(event, val25);
    });
    btn26.addEventListener("mouseover", function (event) {
        cursormove(event, val26);
    });
    btn27.addEventListener("mouseover", function (event) {
        cursormove(event, val27);
    });
    btn28.addEventListener("mouseover", function (event) {
        cursormove(event, val28);
    });
    btn29.addEventListener("mouseover", function (event) {
        cursormove(event, val29);
    });
    btn30.addEventListener("mouseover", function (event) {
        cursormove(event, val30);
    });
    btn31.addEventListener("mouseover", function (event) {
        cursormove(event, val31);
    });
    btn32.addEventListener("mouseover", function (event) {
        cursormove(event, val32);
    });
    btn33.addEventListener("mouseover", function (event) {
        cursormove(event, val33);
    });
    btn34.addEventListener("mouseover", function (event) {
        cursormove(event, val34);
    });
    btn35.addEventListener("mouseover", function (event) {
        cursormove(event, val35);
    });
    btn36.addEventListener("mouseover", function (event) {
        cursormove(event, val36);
    });
















    //copy
    copy.addEventListener('click', () => {
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert("Code Copied");
        console.log('copy')
    });




})