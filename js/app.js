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