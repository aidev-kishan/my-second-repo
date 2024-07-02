 const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
}); 

function firstPageAnim(){
    var tl = gsap.timeline();

     tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration:1.5,
        ease: Expo.easeInOut
     })

     .to(".boundingelem", {
        y: 0,
        duration:2,
        delay:-1, 
        ease: Expo.easeInOut,
        stagger: .3
     })

     .from("#herofooter",{
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
     })
}

var timeout;

function circleSwize(){
    var xscale =1 ;
    var yscale =1;
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout); 
        xscale =   gsap.utils.clamp(.8,1.2,dets.clientX - xprev )
        yscale =  gsap.utils.clamp(.8,1.2,  dets.clientY - yprev )

        xprev = dets.clientX
        yprev = dets.clientY

        circleMouseFollower(xscale,yscale);
        timeout = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`
         },100);

    }) 
}

function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`
    })
}

circleMouseFollower();  
firstPageAnim();
circleSwize(); 





  document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave",function(dets) {
        gsap.to(elem.querySelector("img"),{
        opacity: 0,
        ease: Power3,
       duration: 0.5,
    });
    });

elem.addEventListener("mousemove",function(dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"),{
    opacity: 1,
    ease: Power3,
    top: diffrot,
    left: dets.clientX,
    rotate: gsap.utils.clamp(-20,20,diffrot *0.5)
});
});
});

/* 
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  
  // Function to handle the animation on the first page load
  function firstPageAnim() {
    let tl = gsap.timeline();
  
    tl.from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
      .to(".boundingelem", {
        y: 0,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: 0.3,
      })
      .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
      });
  }
  
  let timeout;
  
  // Function to handle the scaling and movement of #minicircle
  function circleSwize() {
    let xscale = 1;
    let yscale = 1;
    let xprev = 0;
    let yprev = 0;
    const minicircle = document.querySelector("#minicircle");
  
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
  
      // Apply the scaling and movement to #minicircle
      minicircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
  
      timeout = setTimeout(function () {
        // Reset the scale to 1 after a delay
        minicircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1)`;
      }, 100);
    });
  }
  
  // Function to handle the image movement within .elem elements
  function handleImageMovement() {
    document.querySelectorAll(".elem").forEach(function (elem) {
      const img = elem.querySelector("img");
  
      elem.addEventListener("mouseenter", function () {
        gsap.to(img, {
          top: "20px", // Move the image down by 20px
          opacity: 1,
          ease: "power1",
        });
      });
  
      elem.addEventListener("mouseleave", function () {
        gsap.to(img, {
          top: "0px", // Reset the image's top position
          opacity: 0,
          ease: "power1",
        });
      });
    });
  }
  
  
  
  // Call the functions to initialize animations and interactions
  firstPageAnim();
  circleSwize();
  handleImageMovement();
  
 */