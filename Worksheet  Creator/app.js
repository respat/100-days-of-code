document.getElementById('form-2').style.transform = "translateX(100%)";
document.getElementById('submit-1').style.transform = "translateX(130%)";

document.getElementById('submit').onclick = function() {
    document.getElementById('form-1').style.transform = "translateX(-100%)";
    document.getElementById('submit').style.transform = "translateX(-130%)";
    document.getElementById('label1').style.transform = "translateX(-30%)";
    document.getElementById('form-2').style.transform = "translateX(0%)";
    document.getElementById('submit-1').style.transform = "translateX(0%)";

}

document.getElementById('back-1').onclick = function() {
    console.log("helloooo")
    document.getElementById('form-1').style.transform = "translateX(0)";
    document.getElementById('submit').style.transform = "translateX(0)";
    document.getElementById('label1').style.transform = "translateX(0)";
    document.getElementById('form-2').style.transform = "translateX(100%)";
    document.getElementById('submit-1').style.transform = "translateX(130%)";
}
