gsap.to(".one", {y: 500 ,duration: 3, rotate: 360, backgroundColor: "red", ease: "bounce"});
gsap.to(".two", {x: 500, duration: 3, rotate: 360, backgroundColor: "blue", ease: "steps(4)"});
gsap.to(".three", {x: -2000, duration: 3, rotate: 360, backgroundColor: "orange", ease: "elastic"}, "+=0.50");

let circleElements = gsap.from(".circle-rep", {x: "random(-200, 200)", stagger: 0.50, opacity:0});
document.querySelector(".btn-play").onclick = () => circleElements.play();
document.querySelector(".btn-reverse").onclick = ()  => circleElements.reverse();
document.querySelector(".btn-pause").onclick = ()  => circleElements.pause();
document.querySelector(".btn-resume").onclick = ()  => circleElements.resume();
 
/*=Non-dom animation*/
var myObject = {rotate: 360}
gsap.to(myObject, {duration: 20, ease: "power1", onUpdate: function() { /*onStart; onComplete */
        console.log(/*myObject.rotate */)
}} )

document.querySelectorAll(".btn").forEach(function commandHandler(box) {
        box.addEventListener("click", () => {
                gsap.set(box, {scale: 1.1, borderColor: "rgb(107, 143, 35)"})
        })
})

document.querySelectorAll(".box-elements").forEach(function color(box) {
        gsap.to(box, {backgroundColor: "random"})
        color()
})