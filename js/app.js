let hero_slide = document.querySelector('#hero-slide')
let hero_slide_items = hero_slide.querySelectorAll('.slide')
let hero_slide_index = 0
let hero_slide_play = true
let hero_slide_control_items = hero_slide.querySelectorAll('.slide-control-items')
let slide_next = hero_slide.querySelector('.slide-next')
let slide_prev = hero_slide.querySelector('.slide-prev')
let header_top = document.querySelector('header')
let chatbot_btn = document.querySelector('.chatbot_btn')
let chatbot =  document.querySelector('.chatbot')
let rotates = document.querySelectorAll('.product .product-inner')
// transition show on scroll
let scroll = window.requestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000/60)
}
let el_to_show = document.querySelectorAll('.show-on-scroll')

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    let distance = 200

    return (rect.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance))
}

loop = () => {
    el_to_show.forEach(el => {
        if (isElInViewPort(el)) el.classList.add('show')
    })

    scroll(loop)
}

loop()


showslide = (index) => {
    hero_slide.querySelector('.slide.active').classList.remove('active')
    hero_slide.querySelector('.slide-control-items.active').classList.remove('active')
    hero_slide_control_items[index].classList.add('active')
    hero_slide_items[index].classList.add('active')
}

nextslide = () => {
    hero_slide_index = hero_slide_index + 1 === hero_slide_items.length ? 0 : hero_slide_index + 1
    showslide(hero_slide_index)
}
prevslide = () => {
    hero_slide_index = hero_slide_index - 1 < 0 ? hero_slide_items.length - 1 : hero_slide_index - 1
    showslide(hero_slide_index)
}

//event button
slide_next.addEventListener('click', () => nextslide())
slide_prev.addEventListener('click', () => prevslide())

//add event to slide select
hero_slide_control_items.forEach((item, index) => {
    item.addEventListener('click', () => showslide(index))
})

//pause slide when mouse come in slider
hero_slide.addEventListener('mouseover', () => hero_slide_play = false)

//resume slide when mouse leave out slider
hero_slide.addEventListener('mouseleave', () => hero_slide_play = true)

setTimeout(() => hero_slide_items[0].classList.add('active'), 200);

// auto slide
setInterval(() => {
   if (!hero_slide_play) return
   nextslide()
}, 5000);
// change header style when scroll
window.addEventListener('scroll', () => {
    if (document.body.scrolltop > 80 || document.documentElement.scrollTop > 80) {
        header_top.classList.add('shrink')
    } else {
        header_top.classList.remove('shrink')
    }
})

//Hiển thị chatbot
/* chatbot_btn.addEventListener('click', () => {
    chatbot.classList.toggle('show_bot')
}) */

/* rotate.addEventListener('mouseover', () => {
    rotate.style.transform = 'rotateY(180deg)'
})  */

rotates.forEach(function(rotate) {
    rotate.onmouseenter = (e) => {
        rotate.style.transform = 'rotateY(180deg)'
        e.stopImmediatePropagation()
    }
    rotate.onmouseleave = (e) => {
        rotate.style.transform = 'rotateY(0deg)'
        e.stopImmediatePropagation()
    }
    
}) 
    

