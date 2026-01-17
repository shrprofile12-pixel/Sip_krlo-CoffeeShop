gsap.from("#nav" ,{
x:1000,
duration: 0.1,
y:5000,
ease:"bounce.out",
delay:1,




})

gsap.from("#ul" ,{
x:1000,
duration: 1,


delay:1,




})
gsap.from("#hero" ,{
x:1000,
duration: 1,


delay:1,




})



gsap.from("#hero-content" ,{
x:1000,
duration: 1,
y:5000,
rotate:360,
delay:1,




})




  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".about", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
      toggleActions: "play none none reset",
      markers: true
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
  });

gsap.from(".about-card", {
  scrollTrigger: {
    trigger: ".about-container",
    start: "top 80%",
    toggleActions: "play none none reset",
    // markers: true // Uncomment to debug
  },
  x: 10,
  opacity: 60,
  scale: 0.9,
  duration: 1,
  ease: "power3.out",
  stagger: {
    each: 0.2,
    from: "center"  // ✅ Animate outward from the center card
  }
});
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".founder-section", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
      toggleActions: "play none none reset",
      markers: true
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
  });
