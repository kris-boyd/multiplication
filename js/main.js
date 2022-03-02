document.querySelector('#button').addEventListener('click', createTable);

function createTable() {
    userNumber = document.querySelector('#userNumber').value;
    const ul =document.querySelector('ul');
    ul.innerHTML = "";
    if (userNumber >= 2 && userNumber <= 9) {
        document.querySelector('span').classList.remove('error');
        let li;
        let formula;
        //loop through each number from 1 to userNumber
        for (let i = 1; i <= userNumber; i++) {
            li = document.createElement('li')
            formula = document.createTextNode(`${userNumber} x ${i} = ${userNumber*i}`);
            li.appendChild(formula);
            ul.appendChild(li);
        }
    }  else {
        document.querySelector('span').classList.add('error');
    }         
}