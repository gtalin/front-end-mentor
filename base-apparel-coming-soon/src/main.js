const form = document.querySelector('form');
const button = document.querySelector('button[type="submit"]');
const email = document.querySelector('input[name="email"]');
const validationField = document.querySelector('.validation-message');

console.log(form, email, validationField);

const handleFormSubmit = (e) => {
  console.log("handleForm submit");
  e.preventDefault();
  let message;
  const emailValid = ValidateEmail(email);
  
  if (emailValid) {
    validationField.classList.remove('block');
    validationField.classList.add('opacity-0', 'hidden');
    button.classList.remove('before:content-error-icon');
    button.classList.add('before:content-none');

    email.classList.remove('border-primary-red-soft', 'outline', 'outline-1', 'outline-primary-red-soft');
  } else {
    if (email.value.trim().length === 0) {
      message = 'The input field is empty';
    } else {
      message = 'The email address is not formatted correctly';
    }

    validationField.innerHTML = message;
    
    validationField.classList.remove('hidden', 'opacity-0');
    // validationField.classList.add('block', 'opacity-100');
    // validationField.classList.add( 'opacity-100');
    button.classList.remove('before:content-none');
    button.classList.add('before:content-error-icon');
    email.classList.add('border-primary-red-soft', 'outline', 'outline-1', 'outline-primary-red-soft');
  }
    
}


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
  {
    return (true)
  }
    return (false)
}

form.addEventListener('submit', handleFormSubmit);
