(function() {
  const headings = document.querySelectorAll('h3');

  Array.prototype.forEach.call(headings, heading => {
    let btn = heading.querySelector('button');
    
    // Hiding using JS so that if JS is disabled the user can see all faqs
    let target = heading.nextElementSibling
    target.setAttribute('hidden', true);
  })

  Array.prototype.forEach.call(headings, heading => {
    let btn = heading.querySelector('button');
    let icon = heading.querySelector('svg');
    let target = heading.nextElementSibling

    // btn.onclick = () => {
    //   let expanded = btn.getAttribute('aria-expanded') === 'true' || false

    //   btn.setAttribute('aria-expanded', !expanded)
    //   target.hidden = expanded;
      
    //   heading.classList.toggle('font-bold', 'text-primary-blue');
        
    // }
    btn.addEventListener('click', () => {
      let expanded = btn.getAttribute('aria-expanded') === 'true' || false

      btn.setAttribute('aria-expanded', !expanded)
      target.hidden = expanded;
      
      heading.classList.toggle('font-bold');
      heading.classList.toggle('text-primary-blue');

      icon.classList.toggle('rotate-180')
        
    })
  })
})()