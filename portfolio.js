let myname='kennedy';
console.log(myname);

let menubtn=document.querySelector('.menu-button');
console.log(menubtn);
let navb= document.querySelector('.navbar');
function action(){
    navb.classList.toggle('show');
}
menubtn.addEventListener('click', action);

let nameinput=document.querySelector('.name-input');
let submitbtn=document.querySelector('.submit-button');
console.log(nameinput.value);
submitbtn.addEventListener('click', function(){
    console.log(nameinput.value);
});
let form=document.querySelector('.contact-form');
let names=document.querySelector('.name-input');
let email=document.querySelector(".email-input");
let subject=document.querySelector('.subject-input');
let message=document.querySelector('.message-input');
let formmessage=document.querySelector('.form-message')
form.addEventListener('submit',function(event){
    event.preventDefault();
    if (names.value === ''){
        formmessage.textContent = 'please enter your name';
        return;
    }
    if(email.value === ''){
        formmessage.textContent = 'please enter your email';
        return;
    }
    if(subject.value === ''){
        formmessage.textContent = 'please enter your subject';
        return;
    }
    if(message.value === ''){
        formmessage.textContent = 'please enter your message';
        return;
    }
    console.log(names.value);
    console.log(email.value);
    console.log(subject.value);
    console.log(message.value);
    formmessage.textContent= 'message sent successfully';

    console.log('form has been submitted!');
});
let filterbtn = document.querySelector('.filter-buttons');



