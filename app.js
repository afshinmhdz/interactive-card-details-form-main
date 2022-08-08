


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

const bank_logo=document.getElementsByClassName("bank__logo")[0];

function run(){
    let arrCardNumber=[];
    arrCardNumber= card_number.value;
    card__number_sec1.textContent=arrCardNumber.slice(0,4);
    card__number_sec2.textContent=arrCardNumber.slice(4,8);
    card__number_sec3.textContent=arrCardNumber.slice(8,12);
    card__number_sec4.textContent=arrCardNumber.slice(12,17);
    if(arrCardNumber.slice(0,6)==="610433"){
        bank_logo.src="./images/mellat.svg";
    }
    else if(arrCardNumber.slice(0,6)==="627353"){
        bank_logo.src="./images/tejaret.svg";
        
    }
    else if(arrCardNumber.slice(0,6)==="603769"){
        bank_logo.src="./images/saderat.svg";
        
    }
    else if(arrCardNumber.slice(0,6)==="603799"){
        bank_logo.src="./images/meli.svg";
        
    }
    else if(arrCardNumber.slice(0,6)==="589210"){
        bank_logo.src="./images/sepah.svg";
        
    }
    else if(arrCardNumber.slice(0,6)==="603770"){
        bank_logo.src="./images/keshaverzi.svg";
        
    }
    else if(arrCardNumber.slice(0,6)==="628023"){
        bank_logo.src="./images/meskan.svg";
        
    }
    else if(arrCardNumber.slice(0,6)==="589463"){
        bank_logo.src="./images/refah.svg";
        
    }
    else if(arrCardNumber.slice(0,6)==="627412"){
        bank_logo.src="./images/eghtesad.svg";
        
    }
    else if(arrCardNumber.slice(0,6)==="622106"){
        bank_logo.src="./images/parsiyan.svg";
        
    }
    else if(arrCardNumber.slice(0,6)==="502229"){
        bank_logo.src="./images/pasargard.svg";
        
    }
    else if(arrCardNumber.slice(0,6)==="621986"){
        bank_logo.src="./images/saman.svg";
        
    }
    else{
        bank_logo.src="./images/gardeshgari.svg";

    }

    
    
    text__card__owenr_name.textContent=card_name.value;
    text_card__exp_date_year.textContent=year.value;
    text_card__exp_date_month.textContent=month.value;
    card_cvc.textContent=inp_cvc.value;
}
btn_confirm.addEventListener('click',run);
1234567891234567
