$(".left").hover(() => {
  const pos = $(".left").css("left").split("p")[0];
  const Pos = (pos / $(window).width()) * 100;
  var percent = Pos + "%";
  console.log({ percent });
  const t1 = gsap.timeline();
  t1.set(".left", { zIndex: 10 })
    .set(".right", { zIndex: 0 })
    .fromTo(".left", { left: percent }, { left: "-10%", duration: 1 }, "now")
    .fromTo(
      ".right",
      { right: 100 + Pos + "%" },
      { right: "-90%", duration: 1 },
      "now"
    )
    .to(".left img", { opacity: 0, duration: 2 })
    .set(".right img", { opacity: 1 });
});

$(".right").hover(() => {
  const pos = $(".right").css("right").split("p")[0];
  const Pos = (pos / $(window).width()) * 100;
  var percent = Pos + "%";
  console.log({ percent });
  const t2 = gsap.timeline();
  t2.set(".right", { zIndex: 10 })
    .set(".left", { zIndex: 0 })
    .fromTo(".right", { right: percent }, { right: "-10%", duration: 1 }, "ss")
    .fromTo(
      ".left",
      { left: 100 + Pos + "%" },
      { left: "-90%", duration: 1 },
      "ss"
    )
    .to(".right img", { opacity: 0, duration: 2 })
    .set(".left img", { opacity: 1 });
});
