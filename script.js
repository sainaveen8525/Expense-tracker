const balance=document.querySelector('.your-balance');
const income=document.querySelector('.income');
const expense=document.querySelector('.expense');
const inputText=document.querySelector('.description');
const inputAmount=document.querySelector('.amount');
const transactionlist=document.querySelector('.list');
const inc=document.querySelector('.plus');
const exp=document.querySelector('.minus');
const form=document.querySelector('#form');


const data=[
    {id:1,text:'Salary',amount:5000},
    {id:2,text:'Groceries',amount:-1500},
    {id:3,text:'Book',amount:-500},
    {id:4,text:'Freelance',amount:-2000}
];

let transactions=data;

function addtransactions(transaction){
    const sign=transaction.amount <0 ? '-' : '+';
    //console.log(sign);
    const item=document.createElement('li');
    
}

function config(){
    transactionlist.innerHTML='';
    transactions.forEach(addtransactions);
}

window.addEventListener('load',function (){
    config();
});