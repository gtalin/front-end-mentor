const handleFormSubmission = (e) => {
  e.preventDefault();
  console.log("form was submitted");
  console.log("e", e);
  console.log("e.target.value", e.target.value);
  let rating;
  try {
    rating = document.querySelector('input[name="rating"]:checked').value;
    console.log("the selected rating is", rating);
    // display the ratings card
    ratingPlaceHolder = document.getElementById("rating-placeholder");
    ratingPlaceHolder.innerHTML = rating;
    ratingCard.classList.add("hidden");
    thankyouCard.classList.remove("hidden");

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
