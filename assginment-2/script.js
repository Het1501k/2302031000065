const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl1 = gsap.timeline()

tl1
    .from("#page1>#nav" ,{
    opacity:0,
    duration:0.5,
    y:70

})
    .from("#page1-left>h1" ,{
    opacity:0,
    duration:0.5,
    y:70
})
    .from("#page1-left>h2" ,{
    opacity:0,
    duration:0.5,
    y:70
})
tl1.from("#page1-left>a" ,{
    opacity:0,
    duration:0.5,
    y:90

})




let timeline1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body", 
        
    }
});

timeline1
    .from("#page2-top", {
        scale:0,
        opacity:0,
        duration:1,
    },"-=0.5")

    .from("#page2-first-img", {
        scale: 0,
        opacity: 0,
        duration: 1,
    },"-=0.5")
    .from("#page2-second-img", {
        x: -800,
        rotate:360,
        opacity: 0,
        duration: 2,
    },"-=0.5")
    .from("#page2-third-img", {
        x: -800,
        rotate:360,
        opacity: 0,
        duration: 2,
    },"-=0.5")
    .from("#page2-middel-text>h1", {
        scale: 0,
        opacity: 0,
        duration: 1,
    },"-=0.5")
    .from("#page2-middel-text>h5", {
        scale: 0,
        opacity: 0,
        duration: 1,
    }, "-=0.5")
    .from("#page2-middel-text>a", {
        scale: 0,
        opacity: 0,
        duration: 1,
    }, "-=0.5") 
    // Overlap animations by 0.5 seconds
    .from("#page2-bottom", {
       y:100,
        opacity: 0,
        duration: 1,
    }, "-=0.5")

let page4 = gsap.timeline({
    scrollTrigger:"#page3",

  });
  

page4
    .from("#page4-right>h1", {
      x: 100,
      opacity: 0,
      duration: 2,
      
    })
    .from("#page4-right>pre", {
      x: 100,
      opacity: 0,
      duration: 1,
    }, "-=1") // Start this animation 1 second before the previous ends
    .from("#page4-right>a", {
      opacity: 0,
      scale: 0,
      rotate: 720,
      duration: 2.5,
    });
  
let page5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body", 
        
        start:"-115%",
        
    }
    
});

page5
    .from("#page5-top>h1", {
        scale: 0,
        opacity: 0,
        duration:1,
        
    })
    .from("#page5-top>img", {
        x: -1000,
        rotate:360,
      
        duration: 2,
    },"-=1")
    .from("#page5-bottom", {
        scale: 0,
        opacity: 0,
        duration:1,
    },"-=2")

// let page6 = gsap.timeline({
//         scrollTrigger: {
//             trigger: "#page6",
//             scroller: "body", 
//            markers:true,
//             // start:"-170%",
            
//         }
        
// });
// page6
//     .from("#page6>h1", {
//         x:"-60",
//         opacity: 0,
//         duration:1,
        
//     })
//     .from("#page6>#page6-p", {
//         x:"-60",
//         opacity: 0,
//         duration:1,
        
//     })  
//     .from("#page6>a", {
//         x:"-60",
//         opacity: 0,
//         duration:1,
        
//     })  

//     let page7 = gsap.timeline({
//         scrollTrigger: {
//             trigger: "#page6",
//             scroller: "body", 
//             markers:true,
//             // start:"-280%",
            
//         }
        
// });
// page7
// .from("#page7-top", {
//     x:"-60",
//     opacity: 0,
//     duration:1.5,
    
// })
// .from("#page7-bottom", {
//     scale: 0,
//     opacity: 0,
//     duration:1,
// },"-=2")
// .from("#page7-bottom>img", {
//     x:"60",
//     opacity: 1,
//     duration:1.5,
    
// },"-=1")

  

