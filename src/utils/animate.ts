import gsap from "gsap";

export const animateTo = (
  ref: React.MutableRefObject<null>,
  direction: string
) => {
  gsap.to(ref.current, {
    x: direction === "forward" ? -1000 : 1000,
    autoAlpha: 1,
    delay: 0.5,
    onComplete() {
      window.history.back();
    },
  });
};

export const animateAlert = (
  ref: React.MutableRefObject<null>,
  switching: boolean = false,
  callbackfn?: () => void
) => {
  switch (switching) {
    case true:
      gsap.from(ref.current, {
        xPercent: -100,
        autoAlpha: 0,
        duration: 1.5,
        ease: "expo.out",
      });
      break;
    default:
      gsap.to(ref.current, {
        xPercent: 100,
        autoAlpha: 1,
        duration: 0.5,
        ease: "back.inOut",
        onComplete() {
          callbackfn!();
        },
      });
  }
};

interface animatingToType {
  x: number,
  ease: string,
}

export const animatingTo = (ref : React.MutableRefObject<null>, properties : animatingToType) => {
  gsap.to(ref.current, {...properties})
}
