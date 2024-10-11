const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName=document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const city = document.getElementById('city');
const password = document.getElementById('createPassword');
const Rpassword = document.getElementById('repeatPassword');
const state = document.getElementById('state');

console.log(form);


form.addEventListener('submit',(e)=>{

   e.preventDefault();
   validateInputs();
 })



function validateInputs(){
    console.log("calling validateInputs");

    const firstNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailVal  = email.value.trim();
    const phoneVal = phone.value.trim();
    const addressVal = address.value.trim();
    const cityVal = city.value.trim();
    const passwordVal = password.value.trim();
    const RpasswordVal = Rpassword.value.trim();
    const stateVal = state.value.trim();


    if(firstNameVal===''){
        setError(firstName,'FirstName is required');
    }
    else{
        setSuccess(firstName);
    }

    if(lastNameVal===''){
        setError(lastName,'LastName is required');
    }
    else{
        setSuccess(lastName);
    }

    if(emailVal===''){
        setError(email,'Email Cannot be Empty');
    }
    else if(!isValidEmail(emailVal)){

        setError(email,'Not a Valid Email');
    }
    else{
        setSuccess(email);
    }

    if(phoneVal===''){
        setError(phone,'phone is required');
    }
    else if(phoneVal.length<10){
        setError(phone,'phone number must contain 10 digits');
    }
    else{
        setSuccess(phone);
    }

    if(addressVal===''){
        setError(address,'Address is required');
    }
    else{
        setSuccess(address);
    }

    if(cityVal===''){
        setError(city,'city is required');
    }
    else{
        setSuccess(city);
    }

    if(passwordVal===''){
        setError(password,'password is required');
    }
    else if(passwordVal.length<8){
        setError(password,'password must contain atleate 8 characters');
    }
    else{
        setSuccess(password);
    }

    if(RpasswordVal===''){
        setError(Rpassword,'Rpassword is required');
    }
    else if(RpasswordVal!==passwordVal){
        setError(Rpassword,'password do not match');
    }
    else{
        setSuccess(Rpassword);
    }


    if (stateVal === 'Please Select your state') {
        setError(state, 'State selection is required');
    } else {
        setSuccess(state);
    }

}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}


function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}



function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}