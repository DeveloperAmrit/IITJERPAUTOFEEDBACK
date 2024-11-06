function autoFill(){
    let captcha = "ym27Gz";
    let a = Array.from(document.getElementsByClassName("form-check-input"));
    let c = document.getElementsByClassName("form-control")[0];
    let j = 0;

    for(let i = 3; i < a.length; i++) {
        a[i].checked = true;
        j++;
        i += 4;
    }

    if (c) {
        c.value = "Nice course";
    }

    let b = document.getElementById("captcha");
    if (b) {
        b.value = captcha;
    }

    if (typeof submitdata === "function") {
        submitdata();
    }

    let d = document.getElementsByClassName("btn-secondary")[0];
    if (d) {
        d.click();
    }
}

function applyAutoFillListeners() {
    let a = document.getElementsByClassName("text-danger");
    for (let i = 0; i < a.length; i++) {
        a[i].removeEventListener("click", autoFill);
        a[i].addEventListener("click", autoFill);
    }
}

setInterval(applyAutoFillListeners, 2000);