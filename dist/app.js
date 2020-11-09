gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(TextPlugin);

const t1 = gsap.timeline();

t1.to("#l1", {
  duration: 2.5,
  text: "You are intressted in our ingeneering school",
})
  .to("#l2", {
    duration: 2.5,
    text: "You want to know more about our field",
  })
  .to("#l3", {
    duration: 7,
    text:
      "Dont worry the paneedemic wont keep you from joining us in a digital journey in wich ll your questions will be answered",
  })
  .to(".button", { x: 100 })
  .set(".button", { text: "Let's get started" });

$(".button").click(() => {
  $(".page2").css({ display: "block" });
  const t2 = gsap.timeline();

  t2.to(window, { delay: 0.3, duration: 2, scrollTo: ".page2" })
    .to(".page2eclipse", { duration: 1, fill: "white" })
    .to(".line1", {
      duration: 2,
      strokeDashoffset: 0,
    })
    .to(".line2", {
      duration: 1,
      strokeDashoffset: 0,
    })
    .to(".line3", {
      duration: 2,
      strokeDashoffset: 0,
    })
    .from(".c1", { duration: 1, width: 0, backgroundColor: "rgba(0, 0 ,0 ,0)" })
    .set(".c1", { text: "What is Telecommunication and networking ?" })
    .from(".c2", {
      delay: 1,
      duration: 1,
      height: 0,
      backgroundColor: "rgba(0, 0 ,0 ,0)",
    })
    .set(".c2", {
      text:
        "bzf hdayer w chkil bla bla bla bla ma nen9olhach never ever aya glkkhtra wa7ed el farnago3 el zarnabo3 el khobiz <br />bar=tatatattatat",
    });
});
$(".button1").click(() => {
  const t2 = gsap.timeline();
  t2.to(window, { duration: 2, scrollTo: ".page2" }).to("#plane", {
    duration: 5,
    motionPath: { path: "#path", autoRotate: true },
  });
});
