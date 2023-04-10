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
        let clicked = false; 
        
        box.addEventListener("click", () => {
          if (!clicked) { // vérifier si la boîte n'a pas encore été cliquée
            gsap.set(box, {scale: 1.1, borderColor: "rgb(107, 143, 35)"});
            clicked = true; // mettre à jour le statut de la boîte à "cliquée"
          } else { // si la boîte a déjà été cliquée
            gsap.set(box, {scale: 1, borderColor: "rgb(154, 205, 50)"}); // remettre la couleur de la border à sa valeur initiale
            clicked = false; // mettre à jour le statut de la boîte à "non cliquée"
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