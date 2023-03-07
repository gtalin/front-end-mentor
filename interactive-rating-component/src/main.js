const handleFormSubmission = (e) => {
  e.preventDefault();
  
  let rating;
  try {
    rating = document.querySelector('input[name="rating"]:checked').value;
    
    // display the ratings card
    ratingPlaceHolder = document.getElementById("rating-placeholder");
    ratingPlaceHolder.innerHTML = rating;
    // ratingCard.classList.add('translate-x-full');
    ratingCard.classList.add('opacity-0');
    ratingCard.classList.add("hidden");
    // setTimeout(() => {
    //   ratingCard.classList.add("hidden");
    // }, 0)
    thankyouCard.classList.remove("hidden");
    setTimeout(()=>{
      console.log("add some animation")
      thankyouCard.classList.remove("opacity-0");
      thankyouCard.classList.remove("translate-x-1/2");
    }, 100)

  } catch (error) {
    console.log("Please select a rating")
    alert("Please select a rating!")
  }
  
}

ratingsForm = document.getElementById('ratings-form');
ratingsForm.addEventListener("submit", handleFormSubmission);
ratingCard = document.querySelector('.rating-card');
thankyouCard = document.querySelector('.thankyou-card');
console.log("Rating card and thank you cards are::", ratingCard, thankyouCard);
