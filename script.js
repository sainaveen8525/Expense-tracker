const description = document.querySelector('.description');
const amount = document.querySelector('input[placeholder="Enter Amount"]');

function plusorminus() {
    if (Number(amount.value) < 0) {
        return 'minus';
    } else {
        return 'plus';
    }
}

function addtransaction(){
    if(description.value === '' || amount.value === ''){
        alert('please enter the Description and Amount');
    } else {
        let li = document.createElement('li');
        li.classList.add(plusorminus());
        li.textContent = `${description.value} ${amount.value}`;
        document.querySelector('ul').appendChild(li);
        let deletebtn = document.createElement('button');
    }
}