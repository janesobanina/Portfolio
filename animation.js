// Animation Main
let tlMain = gsap.timeline();

tlMain
.to('h1', {
    text: `Hello, my name is Yevgeniya Sobanina. <br> I’m FRONT-END web developer.`,
    duration: 3,
    ease: 'power1.inOut',
})

.from('.main_image', {
    duration: 2, 
    opacity: 0,
    ease: "bounce.out",
    scale: 0
})

.from('.main_btn', {
    duration: 1, 
    rotation: 720, 
    ease: 'power2.inOut', 
    opacity: 0
})

// ABOUT
const aboutCard = document.querySelectorAll('.about_card');

aboutCard.forEach(i => {
    i.addEventListener('mouseover', () => {
        gsap.to(i, {scale: 1.15})
    })

    i.addEventListener('mouseout', () => {
        gsap.to(i, {scale: 1})
    })
})

// SKILLS

const skills = document.querySelectorAll('.skls_p');
let colors = ['#40A5DD', '#FF611C', '#24B46D', '#E13F93'];
gsap.to(skills, {duration: 1, stagger: .5, repeat: -1, color: function(i) {
    return colors[i%4]
}})