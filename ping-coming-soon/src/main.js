const form = document.querySelector('form');
const email = document.querySelector('input[name="email"]');
const feedback = document.querySelector('.feedback');
// const button = document.querySelector('button');

const handleFormSubmit = (e) => {
  e.preventDefault();
  
  // const isValidEmail = email.checkValidity();
  // checkValidity is an inbuilt function
  // But it is considering just `name@host` as valid email. Thus using a custom function to validate
  
  const isValidEmail = ValidateEmail(email);
  console.log("value of ",isValidEmail);
  if(isValidEmail) {
    console.log(email.classList);
    // all properties added with invalid property don't need to be removed.
    email.classList.remove('border-secondary-red');
    email.classList.remove('outline');
    email.classList.remove('outline-1');
    email.classList.remove('outline-secondary-red');
    feedback.classList.add('hidden');
    feedback.classList.add('opacity-0');
  } else {
    if (email.value.trim() === '') {
      feedbackMessage = 'Whoops! It looks like you forgot to add your email';
    } else {
      feedbackMessage = 'Please provide a valid email address';
    }
    feedback.innerHTML = feedbackMessage;
    
    email.classList.add('border-secondary-red');
    email.classList.add('outline');
    email.classList.add('outline-1');
    email.classList.add('outline-secondary-red');
    feedback.classList.remove('hidden');
    feedback.classList.remove('opacity-0');
    feedback.classList.add('block');
    feedback.classList.add('opacity-100');
    console.log(email.classList);
  }
  // console.log(email.value);
  // console.log
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
