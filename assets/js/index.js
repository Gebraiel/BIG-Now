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

const heroTimeLine = gsap.timeline();
heroTimeLine.from("header",{
    yPercent:-100,
    opacity:0
})
heroTimeLine.from(".top-content",{
    opacity:0,
    xPercenet:100,
    duration:0.6,
    
})
heroTimeLine.from(".bottom-content",{
    opacity:0,
    yPercent:100,
    duration:0.6,
    ease:"power1.out"
})

heroTimeLine.from(".avatar-background",{
    opacity:0,
    scale:0,
    yPercent:100,
    duration:1,
    ease:"power1.out"
})