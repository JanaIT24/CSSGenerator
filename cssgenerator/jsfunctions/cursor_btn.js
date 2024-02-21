document.addEventListener("DOMContentLoaded", () => {
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");
    const btn4 = document.getElementById("btn4");
    const btn5 = document.getElementById("btn5");
    const btn6 = document.getElementById("btn6");
    const btn7 = document.getElementById("btn7");
    const btn8 = document.getElementById("btn8");
    const btn9 = document.getElementById("btn9");
    const btn10 = document.getElementById("btn10");
    const btn11 = document.getElementById("btn11");
    const btn12 = document.getElementById("btn12");
    const btn13 = document.getElementById("btn13");
    const btn14 = document.getElementById("btn14");
    const btn15 = document.getElementById("btn15");
    const btn16 = document.getElementById("btn16");
    const btn17 = document.getElementById("btn17");
    const btn18 = document.getElementById("btn18");
    
    const copy = document.querySelector("#btncopy");
    const code = document.querySelector("#lang");

    var coding = "test";
    var val1 = btn1.textContent;
    var val2 = btn2.textContent;
    var val3 = btn3.textContent;
    var val4 = btn4.textContent;
    var val5 = btn5.textContent;
    var val6 = btn6.textContent;
    var val7 = btn7.textContent;
    var val8 = btn8.textContent;
    var val9 = btn9.textContent;
    var val10 = btn10.textContent;
    var val11 = btn11.textContent;
    var val12 = btn12.textContent;
    var val13 = btn13.textContent;
    var val14 = btn14.textContent;
    var val15 = btn15.textContent;
    var val16= btn16.textContent;
    var val17 = btn17.textContent;
    var val18 = btn18.textContent;
    


    function cursormove(event, variable) {
        coding = `cursor:${variable}`;
        console.log(variable)
        code.innerHTML = coding;
    }
    cursormove(null, val1)

    btn1.addEventListener("mouseover", function (event) {
        cursormove(event, val1);
    })
    btn2.addEventListener("mouseover", function (event) {
        cursormove(event, val2);
    })
    btn3.addEventListener("mouseover", function (event) {
        cursormove(event, val3);
    });
    btn4.addEventListener("mouseover", function (event) {
        cursormove(event, val4);
    });
    btn5.addEventListener("mouseover", function (event) {
        cursormove(event, val5);
    });
    btn6.addEventListener("mouseover", function (event) {
        cursormove(event, val6);
    });
    btn7.addEventListener("mouseover", function (event) {
        cursormove(event, val7);
    });
    btn8.addEventListener("mouseover", function (event) {
        cursormove(event, val8);
    });
    btn9.addEventListener("mouseover", function (event) {
        cursormove(event, val9);
    });
    btn10.addEventListener("mouseover", function (event) {
        cursormove(event, val10);
    });
    btn11.addEventListener("mouseover", function (event) {
        cursormove(event, val11);
    });
    btn12.addEventListener("mouseover", function (event) {
        cursormove(event, val12);
    });
    btn13.addEventListener("mouseover", function (event) {
        cursormove(event, val13);
    });
    btn14.addEventListener("mouseover", function (event) {
        cursormove(event, val14);
    });
    btn15.addEventListener("mouseover", function (event) {
        cursormove(event, val15);
    });
    btn16.addEventListener("mouseover", function (event) {
        cursormove(event, val16);
    });
    btn17.addEventListener("mouseover", function (event) {
        cursormove(event, val17);
    });
    btn18.addEventListener("mouseover", function (event) {
        cursormove(event, val18);
    });









    //copy
    copy.addEventListener('click', () => {
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert("Code Copied");
        console.log('copy')
    });











})