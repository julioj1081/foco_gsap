const btn = document.querySelector(".cta");
let panel = document.querySelector(".panel");
let foco = document.querySelector("#foco");
let parrafos = document.querySelector("p");
let box = document.querySelector(".box");

btn.addEventListener('click', () => {
    TweenMax.to(panel, 1.5, { scaleY: 1, height: "100vh", duration: 2.5, ease: "circ.out" })
    TweenMax.to(foco, 1, { opacity: 1, y: 0, delay: 1, ease: "back.out(1.7)" })
    TweenMax.to(parrafos, 1, { opacity: 1, y: 20, delay: 1.4 })
    TweenMax.to(box, 3, { opacity: 1, scale: 1, ease: "elastic.out(1, 0.3)" }, "-=0.6")
});