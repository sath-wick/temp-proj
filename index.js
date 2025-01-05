function validateEmail(email){
    const emailRegex = /@.+\..+/;
    if (!emailRegex.test(email)) {
        return false;
    }
    return true;
}
let isEmailValid;
let isConsetCheck;
const inpArea = document.getElementById('inp-subscribe').addEventListener('blur', function () {
    if(this.value){
    isEmailValid = validateEmail(this.value);
    if(!isEmailValid){
        alert("Please enter a valid email");
        this.value='';
    }
}
});

const btnSubscribe = document.getElementById('btn-subscribe').addEventListener('click', function(){
    if(isEmailValid && isConsetCheck){
        alert("You got hacked sucessfully :)");
        document.getElementById('inp-subscribe').value='';
        document.getElementById('cb-consent').checked=false;
        return;
    }
    alert("Please check your email and check the box");

});

const cbConsent = document.getElementById('cb-consent').addEventListener('change',function(){
    if(this.checked){
        isConsetCheck=true;
        return;
    }
    isConsetCheck = false;
})