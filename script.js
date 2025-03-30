let buttons = document.querySelectorAll(".button");
let bill_input = document.querySelector(".bill_input");
let Custom = document.querySelector(".Custom");
let tip_persent = 0
let bill_input_valeu = 0
let tip_amount = document.querySelector(".tip_amount");
let People_Number = document.querySelector(".People_Number");
let tip_amount_2 = document.querySelector(".tip_amount_2")

buttons.forEach(button => {
    console.log("+")
    if (button.classList.contains("clicked_button")) {
        button.classList.remove("clicked_button");
    }
});

buttons.forEach(button => {
    button.addEventListener("click", function() {
        this.classList.add("clicked_button");
        tip_persent = button.value
        bill_input_valeu = bill_input.value
        let answer = (bill_input_valeu * (tip_persent / 100))
        tip_amount.innerHTML = "$"+answer
        tip_amount_2.innerHTML = (parseInt(bill_input_valeu, 10) + parseInt(answer, 10)) / parseInt(People_Number.value, 10)
    });
});


People_Number_bill_input.addEventListener("input", function() {
    if (People_Number.value == "2") {
        console.log("sssssssssss");
    } else {
        console.log("aaaa");
    }
    console.log(People_Number.value); 
});

bill_input.addEventListener("input", function() {
        console.log(bill_input.value)
        bill_input_valeu = bill_input.value
})