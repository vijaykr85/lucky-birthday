const dateOfBirth = document.querySelector("#date");
const luckyNumber = document.querySelector("#lucky-Number");
const checkBtn = document.querySelector("#check");
const output = document.querySelector(".output");
const reset = document.querySelector("#reset");


reset.addEventListener("click", function resetOutput() {
    output.style.display = "none";
})
checkBtn.addEventListener("click", function checkData(event) {
    event.preventDefault();

    function convertDOB() {
        let luckyNo = luckyNumber.value;
        let dob = dateOfBirth.value;
        var DOB = dob.replaceAll("-", "");
        let sum = 0;

        for (let i = 0; i < DOB.length; i++) {
            sum = sum + Number(DOB.charAt(i));
        }
        if (sum == luckyNo) {
           output.innerText = "Your Birthday is lucky 🥳🥳";

        }
        else {
            output.innerText = "Your Birthday is not lucky ☹️☹️";
        }
    }
    convertDOB();
})