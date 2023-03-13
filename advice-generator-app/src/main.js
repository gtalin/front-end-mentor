const button = document.querySelector('button');
const advice = document.getElementById("advice");
const adviceNum = document.getElementById("advice-number");
const adviceApiUrl = 'https://api.adviceslip.com/';
const randomAdviceUrl = `${adviceApiUrl}advice`;

console.log(button, advice, adviceNum);

button.addEventListener('click', handleAdviceGen);

async function handleAdviceGen(e) {
  console.log("Handle advice gen", e);
  try {
    // advice.classList.add('opacity-0');
    // To add a slight transition 
    advice.style.opacity = 0;
    adviceNum.style.opacity = 0;
    const response = await fetch(randomAdviceUrl);
  const data = await response.json();
  console.log("data is", data);
  const dataId = data.slip.id;
  const dataAdvice = data.slip.advice;
  console.log("id and Advice is", dataId, dataAdvice);
  
  adviceNum.innerHTML = dataId;
  advice.innerHTML = dataAdvice;

  // setTimeout(()=>{
  //   // advice.classList.remove('opacity-1')
    advice.style.opacity = 1;
    adviceNum.style.opacity = 1;
  // }, 300)
  } catch (error) {
    alert('An error occured');
  }
  
}
