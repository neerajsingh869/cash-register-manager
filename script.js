const checkButton = document.querySelector('#check-btn');
const denominations = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener('click', e => {

    const billAmount = document.querySelector('#bill-amount-input').value;
    const givenCash = document.querySelector('#cash-given-input').value;
    const outputMsgBox = document.querySelector('#output-msg');

    if (billAmount === "") {
        outputMsgBox.innerText = "Please enter valid bill amount";
    } else if (isNaN(billAmount)) {
        outputMsgBox.innerText = "Invalid bill amount";
    } else if (givenCash === "" || givenCash === null) {
        outputMsgBox.innerText = "Please enter valid cash amount";
    } else if(isNaN(givenCash)) {
        outputMsgBox.innerText = "Invalid cash amount";
    } else if (Number(givenCash) < Number(billAmount) ) {
        outputMsgBox.innerText = "Do you wanna wash plates?";
    } else {
        outputMsgBox.innerText = "";

        let cashToReturn = Number(givenCash) - Number(billAmount);
        let noOfNotes = [];
        let i = 0;

        while (cashToReturn > 0) {
            noOfNotes[i] = Math.floor(cashToReturn / denominations[i]);
            cashToReturn %= denominations[i];

            i++;
        }

        document.querySelector('#nos-2000').innerText = noOfNotes[0];
        document.querySelector('#nos-500').innerText = noOfNotes[1];
        document.querySelector('#nos-100').innerText = noOfNotes[2];
        document.querySelector('#nos-20').innerText = noOfNotes[3];
        document.querySelector('#nos-10').innerText = noOfNotes[4];
        document.querySelector('#nos-5').innerText = noOfNotes[5];
        document.querySelector('#nos-1').innerText = noOfNotes[6];

    }
})