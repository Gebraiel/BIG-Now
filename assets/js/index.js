// add current year 
document.querySelector('header .year').innerText = `@${new Date().getFullYear()}`;

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
    yPercent:-100,
    opacity:0
})
heroTimeLine.from(".top-content",{
    opacity:0,
    x:-100,
    duration:0.6,
    scrollTrigger:".top-content"
})
heroTimeLine.from(".bottom-content",{
    opacity:0,
    yPercent:100,
    duration:0.6,
    ease:"power1.out",
    scrollTrigger:".bottom-content"
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