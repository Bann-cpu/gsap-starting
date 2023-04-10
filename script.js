gsap.to(".one", {y: 500 ,duration: 3, rotate: 360, backgroundColor: "red", ease: "bounce"});
gsap.to(".two", {x: 500, duration: 3, rotate: 360, backgroundColor: "blue", ease: "steps(4)"});
gsap.to(".three", {x: -2000, duration: 3, rotate: 360, backgroundColor: "orange", ease: "elastic"}, "+=0.50");
 
/*=Non-dom animation*/
var myObject = {rotate: 360}
gsap.to(myObject, {duration: 20, ease: "power1", onUpdate: function() { /*onStart; onComplete */
        console.log(/*myObject.rotate */)
}} )



let circleElements = gsap.from(".circle-rep", {x: "random(-200, 200)", stagger: 0.50, opacity:0});
document.querySelector(".btn-play").onclick = () => circleElements.play();
document.querySelector(".btn-reverse").onclick = ()  => circleElements.reverse();
document.querySelector(".btn-pause").onclick = ()  => circleElements.pause();
document.querySelector(".btn-resume").onclick = ()  => circleElements.resume();
document.querySelectorAll(".btn").forEach(function commandHandler(box) {
        let clicked = false; 
        
        box.addEventListener("click", () => {
          if (!clicked) { // vérifier si la boîte n'a pas encore été cliquée
            gsap.set(".btn", { opacity: 0.5})
            gsap.set(box, {scale: 1.1, opacity: 1});
            clicked = true;
          } else { 
            gsap.set(".btn",{scale: 1, opacity: 1}) 
            clicked = false; 
          }
        });
      });

gsap.to(".box-elements", {
        scale: 0.1, 
        delay: 6,
        repeat: -1,
        ease: "power1",
        yoyo: true, 
        stagger: {
                amount: 0.5,
                from: "random",
                grid: "auto",
        }
})