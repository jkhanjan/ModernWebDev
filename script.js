var crsr = document.querySelector("#cursor");


document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});

var h4all = document.querySelectorAll("#nav a");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 2;
    crsr.style.backgroundColor = "transparent";
    crsr.style.border = "1px solid white";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1.5;
    crsr.style.backgroundColor = "whitesmoke";
  });
});

var scale = document.querySelectorAll("#nav h1, #page1 h1, #page1 h1 img");
scale.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 7;
    crsr.style.backgroundColor = "white";
    crsr.style.opacity = "0.5";
    crsr.style.border = "2px solid white"
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.backgroundColor = "whitesmoke";
  });
});


var tl = gsap.timeline({scrollTrigger: {
    trigger:"#page2",
    start: "0% 20%",
    end: "100% 10%",
    scrub: true,
}})

tl.to("#page2>img",{
    top:"120%",
    left:"20%",
    width:"12%"
})

var tl2 = gsap.timeline({scrollTrigger: {
    trigger: "#page4,#page5",
    start: "0% 120%",
    end:"30% 0%",
    scrub:true,
}})

tl2.to("#main",{
    backgroundColor:"#e3e1e1",
})
tl2.to("#cursor",{
    backgroundColor:"inherit",
})

tl2.to(".hr2",{
    border: "0.7px solid black",
})

var tl3 = gsap.timeline({scrollTrigger: {
    trigger: "#page6",
    start: "0% 80%",
    end:"10% 10%",
    scrub:true,
}})

tl3.to("#main",{
    backgroundColor:"white",
})

var tl4 = gsap.timeline({scrollTrigger: {
    trigger: "#page7",
    start: "0% 80%",
    end:"20% 10%",
    scrub:true,
}})

tl4.to("#main",{
    backgroundColor:"#e3e1e1",
})

var tl5 = gsap.timeline({scrollTrigger: {
    trigger: "#page9",
    start: "0% 90%",
    end:"20% 10%",
    scrub:true
}})

tl5.to("#main",{
    backgroundColor:"black",
})
tl5.to("#cursor",{
    backgroundColor:"whitesmoke",
})
