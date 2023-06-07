const menu = document.querySelector(".menu-icon")
const navbar = document.querySelector(".navbar")

// // Fucntion Scrolling Effect

// const profileImg = document.getElementById("profile-image")
// console.log(profileImg)
// const myObserver = new IntersectionObserver((entries) => {
//   console.log(entries)
// })

// myObserver.observe(profileImg)

// console.log(myObserver)




menu.onclick = () => {
  navbar.classList.toggle('open-menu')
  menu.classList.toggle('move')
}
// Qunado der o Scroll o Menu Esconde.
window.onscroll = () => {
  navbar.classList.remove('open-menu')
  menu.classList.remove('move')
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


// Email JS

// Modal Box Error MSG - Empty validation
function emptyerror() {
    swal({
      title: "Ops...",
      text: "Field cannot be empty!",
      icon: "error",
      button: "OK!",
  });
}

//Modal Box Success MSG - send validated OK!
function success() {
    swal({
      title: "Well Done",
      text: "Message send succefully!",
      icon: "success",
      button: "Confirm!",
  });
}

// after Validated succeffuly - ready to Send it!
function sendmail(name, email, textarea) {
    emailjs.send("service_yxqrp1b","template_jwbdn0d",{  //requisicao de envrio - email server
    from_name: email,     //de quem esta enviando.
    to_name: name,        // Nome do remetente.
    message: textarea,    // message from remetente.
  })
}


 function validated() {
  let name = document.querySelector(".name")
  let email = document.querySelector(".email")
  let textarea = document.querySelector(".message")
  let button = document.querySelector(".send-btn")

  button.addEventListener("click", (e) => {
    e.preventDefault()

    if(name.value == '' || email.value == '' || textarea.value == '') {
      emptyerror()
    } else {
      sendmail(name.value, email.value, textarea.value)
      success()
    }
  })
}
validated()

// Header Background Change on Scroll
let header = document.querySelector("header")
window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0)
})

// Scroll Top 
let scroolTop = document.querySelector(".scroll-top")
window.addEventListener("scroll", () => {
  scroolTop.classList.toggle("scroll-active", window.scrollY > 0)
})


