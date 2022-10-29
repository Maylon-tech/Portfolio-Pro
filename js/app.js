const menu = document.querySelector(".menu-icon")
menu.onclick = () => {
    menu.classList.toggle('move')
}

// Swiper codes  - Reviews Slider autoplay

let swiper = new Swiper(".review-content", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
      })
