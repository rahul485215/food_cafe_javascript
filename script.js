let menu= document.querySelector('#menu-btn');
let navbar= document.querySelector('.navbar');
let zomato=document.querySelector('#zom');

menu.onclick=() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll=() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
  images.onclick =() =>{
      const src=images.getAttribute('src');
      document.querySelector('.main-home-image').src=src;
  }
});



function showDetails() {
    const details=document.getElementById("details");

    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

const zomatoLink="https://www.zomato.com/chennai/c-qube-cafe-thousand-lights/info";
zomato.addEventListener("click", ()=>{
 window.open(zomatoLink,"_blank");
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbycaLhEsqLsq5WTivJZcSE79-Nr-0U9TzSPjh9jANKrJh8WppY9i9GzvSzkoKDZ9kZi/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML="Submitted Successfully!"
      setTimeout(function(){
        msg.innerHTML=""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})





var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      },
      loop: true,
      grabCursor: true,
  });