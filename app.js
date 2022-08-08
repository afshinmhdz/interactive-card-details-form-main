


let card_number=document.getElementsByClassName('card_number')[0];
const text__card__owenr_name=document.getElementsByClassName('text__card__owenr-name')[0];
const text_card__exp_date_month=document.getElementsByClassName('text_card__exp_date_month')[0];
const text_card__exp_date_year=document.getElementsByClassName('text_card__exp_date_year')[0];

let card__number_sec1=document.getElementsByClassName('card__number-sec1')[0];
let card__number_sec2=document.getElementsByClassName('card__number-sec2')[0];
let card__number_sec3=document.getElementsByClassName('card__number-sec3')[0];
let card__number_sec4=document.getElementsByClassName('card__number-sec4')[0];


const card_name=document.getElementsByClassName('card_name')[0];
const month=document.getElementsByClassName('month')[0];
const year=document.getElementsByClassName('year')[0];


const card_cvc=document.getElementsByClassName('card__back-cvc')[0];
const btn_confirm=document.getElementById('confirm');
const inp_cvc=document.getElementById('cvc');

function run(){
    let arrCardNumber=[];
    arrCardNumber= card_number.value;
    card__number_sec1.textContent=arrCardNumber.slice(0,4);
    card__number_sec2.textContent=arrCardNumber.slice(4,8);
    card__number_sec3.textContent=arrCardNumber.slice(8,12);
    card__number_sec4.textContent=arrCardNumber.slice(12,17);
    
    
    
    text__card__owenr_name.textContent=card_name.value;
    text_card__exp_date_year.textContent=year.value;
    text_card__exp_date_month.textContent=month.value;
    card_cvc.textContent=inp_cvc.value;
}
btn_confirm.addEventListener('click',run);
1234567891234567
