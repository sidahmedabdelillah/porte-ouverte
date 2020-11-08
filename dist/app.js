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
  const t2 = gsap.timeline();
  t2.to(window, { duration: 2, scrollTo: ".page1" }).to("#plane", {
    duration: 5,
    motionPath: { path: "#path", autoRotate: true },
  });
});
