// add current year 
document.querySelectorAll('.year').forEach((year)=>year.innerText = new Date().getFullYear() );

//menu button
const openButton = document.querySelector('.menu-button.open-button');
const closeButton = document.querySelector('.menu-button.close-button');
const header = document.querySelector('header');
openButton.addEventListener("click",()=>{
  header.classList.add('open');
})
closeButton.addEventListener("click",()=>{
  header.classList.remove('open');
})

//thumbnail hover 

let thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach((thumb)=>{
    thumb.addEventListener('mouseover',(e)=>{
        let active = document.querySelector('.thumbnail.hovered');
        if(active)
        {
            active.classList.remove('hovered')
        }

        e.target.classList.add('hovered');
        console.log(e.target)
    })
})

//gsap animation 
gsap.registerPlugin(ScrollTrigger)

const heroTimeLine = gsap.timeline();
heroTimeLine.from("header",{
    y:-100,
    opacity:0
})
heroTimeLine.from(".fade-in-left",{
    opacity:0,
    x:-100,
    duration:0.6,
    scrollTrigger:".fade-in-left"
})
heroTimeLine.from(".fade-in-right",{
    opacity:0,
    x:100,
    duration:0.6,
    ease:"power1.out",
    scrollTrigger:".fade-in-right"
})
heroTimeLine.from(".fade-in-top",{
    opacity:0,
    y:100,
    duration:0.6,
    ease:"power1.out",
    scrollTrigger:".fade-in-right"
})

heroTimeLine.from(".avatar-background",{
    opacity:0,
    scale:0,
    yPercent:100,
    duration:1,
    ease:"power1.out"
})
let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sliding-wrapper",
      start: "top top",
      end: "+=3000",
      scrub: 1,
      pin: ".sliding-section",
    }
  });
  
  tl.to(".to-left", { xPercent: -70 })
    .to(".to-right", { xPercent: 70 }, "<"); 

  gsap.from(".fade-in",{
    opacity:0,
    duration:0.5,
    stagger:0.2,
    scrollTrigger:".advantage"
  })
