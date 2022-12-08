(function(){
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-equal");

    buttons.forEach(function(button) {
        if (button.className !== "equal") {
            button.addEventListener('click', function(e){
                let value = e.target.dataset.num;
                screen.value += value;
                console.log(screen.value);
            });
        }
    });

    equal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = "";
        }
        else {
            let answer;
            answer = eval(screen.value * 1);
            screen.value = answer;
            console.log("answer")
        }
    });

    clear.addEventListener('click', function(e) {
        screen.value = "";
    });
})();