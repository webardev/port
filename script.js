// LENIS **********************************************************************************************************************

  const lenis = new Lenis();


  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);


// LENIS **********************************************************************************************************************

// var clutter = ""

// document.querySelector(".mytext").textContent.split(" ").forEach(function(mydets){
//   clutter += `<span> ${mydets} </span>`

//   document.querySelector(".mytext").innerHTML = clutter;
// })


// HAMNAV
// gsap.from(".hamnav", {
//   opacity:0,
//   duration:1,
//   scrollTrigger:{
//     trigger:".hamburger",
//     start:"top 0%",
//     end:"bottom 1%",
//     markers:true,
//     scrub:true,
//   }
// });

// let mode = document.querySelector(".mode");
// let img = document.querySelector("img");

// mode.addEventListener("click", () => {
//   if (document.body.style.filter === "invert(1)") {
//     document.body.style.filter = "none";
//     mode.style.justifyContent = "start"
//     img.style.filter = "none"
//   } else {
//     document.body.style.filter = "invert(1)";
//     mode.style.justifyContent = "end";
//     img.style.filter = "invert(1)"

//   }
// });



let nav = document.querySelector(".ham-menu");
let hamLogo = document.querySelector(".ham-logo");
let navContent = document.querySelector(".hamnav-content");

nav.addEventListener("click", () => {
  if (navContent.style.height === "100vh") {
    navContent.style.height = "0vh";
    navContent.style.opacity = "0";
    hamLogo.style.filter = "none"
    gsap.to(".close-menu, .open-menu", {
      duration: 0.3,
      y: 0,
    });



    
  } else {
    navContent.style.height = "100vh";
    navContent.style.opacity = "1";
    hamLogo.style.filter = "invert(1)"

    let menutl = gsap.timeline();

    menutl.to(".close-menu, .open-menu", {
      duration: 0.3,
      y: -30,
    });
    menutl.from(".ham-item, .ham-social a", {
      duration: 0.5,
      opacity: 0,
      transform: "skew(20deg)",
      x:-100,
      stagger:0.1,
    });

    
  }
});





// nav.addEventListener("click", ()=>{
//   navContent.style.height = "55vh"
//   navContent.style.opacity = "1"
//   gsap.to(".hamnav-btn", {
//     duration:0.3,
//     y:-23,
//   })
  
// })
// nav.addEventListener("mouseleave", ()=>{
//   navContent.style.height = "0vh"
//   navContent.style.opacity = "0"
//    gsap.to(".hamnav-btn", {
//      duration: 0.3,
//      y:0,
//    });

// })


// HAMNAV



// CURSOR **********************************************************************************************************************


let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (dets) {
  cursor.style.transform = `translate(${dets.clientX - 40}px, ${dets.clientY - 40}px)`;
});


// CURSOR **********************************************************************************************************************



// WORK ROW **********************************************************************************************************************

let workRow = document.querySelectorAll(".work-row")

workRow.forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mousemove", function (dets) {

    // cursor.style.width = "10vh"
    // cursor.style.height = "10vh"
    // cursor.style.background = "linear-gradient(-150deg, #F37335, #FDC830)"
    // cursor.innerHTML = "View"

    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.utils.clamp(-20, 20, diff);

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      width: "70vh",
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
    });
  });

  elem.addEventListener("mouseleave", function (dets) {

    //  cursor.style.width = "3vh";
    //  cursor.style.height = "3vh";
    //  cursor.style.background = "white";
    //  cursor.innerHTML = "";

    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      width: "0vh",
      ease: Power3,
      duration: 0.5,
    });
  });
});

// WORK ROW **********************************************************************************************************************





// WORK MENU **********************************************************************************************************************

let workMenu = document.querySelector(".work-menu")
let workMenuVar = document.querySelector(".work-menuvar")
let work = document.querySelector(".work-content")
let workVar = document.querySelector(".work-contentvar")

workMenu.addEventListener("click", ()=>{
  work.style.display = "flex"
  workVar.style.display = "none"


  gsap.from(".work-card", {
    duration: 0.5,
    y: 120,
    opacity:0,
    stagger: 0.1,
  });

})
workMenuVar.addEventListener("click", ()=>{
  work.style.display = "none"
  workVar.style.display = "flex";

  gsap.from(".work-row", {
    duration: 0.5,
    x: -120,
    stagger: 0.1,
    opacity:0,
  });


})



// WORK MENU **********************************************************************************************************************







// MAGNETO **********************************************************************************************************************

const magnetoElements = document.querySelectorAll(".magneto");

magnetoElements.forEach((magneto) => {
  const magnetoText = magneto.querySelector(".text");

  const activateMagneto = (event) => {
    let boundBox = magneto.getBoundingClientRect();
    let magnetoStrength = 40;
    let magnetoTextStrength = 80;
    let newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
    let newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;

    gsap.to(magneto, {
      duration: 1,
      x: newX * magnetoStrength,
      y: newY * magnetoStrength,
      ease: Power4.easeOut,
    });
    gsap.to(magnetoText, {
      duration: 1,
      x: newX * magnetoTextStrength,
      y: newY * magnetoTextStrength,
      ease: Power4.easeOut,
    });
  };

  const resetMagneto = () => {
    gsap.to(magneto, {
      duration: 1,
      x: 0,
      y: 0,
      ease: Elastic.easeOut,
    });

    gsap.to(magnetoText, {
      duration: 1,
      x: 0,
      y: 0,
      ease: Elastic.easeOut,
    });
  };

  magneto.addEventListener("mousemove", activateMagneto);
  magneto.addEventListener("mouseleave", resetMagneto);
});

// MAGNETO **********************************************************************************************************************






// ANIMATIONS **********************************************************************************************************************





gsap.to(".hero", {
  backgroundSize: "100%",
  duration: 1,
  ease: "power4.inOut",
  delay:1,
});



gsap.from(".nav", {
  duration: 1,
  width: "20%",
  ease: "back.out(1.7)",
  opacity:0,
  delay:1.5,
});

gsap.from(".hero-text h1", {
  y: 300,
  duration: 0.8,
  stagger: 0.1,
  transform: "rotate(20deg)",
  delay:1.5,
});

gsap.from(".hero-textvar h1", {
  y: 300,
  duration: 1,
  stagger: 0.1,
  transform: "rotate(20deg)",
  delay:1.5,
});

gsap.from(".herobtn, .hero-social, .hamnav, .hero-strip", {
  y: 50,
  opacity:0,
  duration: 0.5,
  delay:1.5,
});


gsap.from(".about .heading h1", {
  duration: 0.6,
  y: 120,
  ease: Power3,
  scrollTrigger: {
    trigger: ".about .heading h1",
  },
});

gsap.from(".mytext", {
  duration: 0.5,
  x: -20,
  opacity: 0,
  stagger: 0.1,
  delay:0.3,
  scrollTrigger: {
    trigger: ".about-right .mytext",
  },
});





gsap.from(".projects .heading h1", {
  duration: 0.6,
  y: 120,
  ease: Power3,
  scrollTrigger: {
    trigger: ".projects .heading h1",
  },
});







gsap.from(".services .heading h1", {
  duration: 0.6,
  y: 120,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: ".services .heading h1",
  },
});

gsap.from(".serv-card", {
  duration: 0.6,
  y: 120,
  opacity: 0,
  ease: "back.out(1.7)",
  delay: 0.5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".serv-card",
  },
});

gsap.from(".serv-down img", {
  duration: 0.5,
  transform:"scale(0.5) rotate(-270deg)",
  borderRadius:"100px",
  ease: "back.out(1.7)",
  opacity:0,
  stagger:0.2,
  delay:1,
  scrollTrigger: {
    trigger: ".serv-down img",
    start:"top 100%",
  },
});


gsap.from(".contact-text h1", {
  y:100,
  duration: 0.5,
  stagger:0.2,
  scrollTrigger: {
    trigger: ".contact-text h1",
  },
});

gsap.from(".contact-left", {
  x:-100,
  duration: 0.5,
  opacity:0,
  stagger:0.2,
  scrollTrigger: {
    trigger: ".contact-left",
  },
});
gsap.from(".contact-right", {
  x:100,
  duration: 0.5,
  opacity:0,
  stagger:0.2,
  scrollTrigger: {
    trigger: ".contact-right",
  },
});

gsap.from(".foot-btn", {
  scale: "0.5",
  duration: 0.6,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".foot-btn",
  },
});

gsap.from(".foot-logo", {
  transform: "scaleX(0.3)",
  duration: 0.5,
  opacity:0,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".foot-logo",
  },
});

gsap.from(".lowerfoot", {
  y:-50,
  duration: 1,
  opacity:0,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".lowerfoot",
  },
});


gsap.from(".head-hero-text h1", {
  y:130,
  duration: 1,
  ease: "power4.inOut",
});




