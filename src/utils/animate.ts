import gsap from "gsap";

export const animateTo = (ref : React.MutableRefObject<null>, direction: string) => {
  gsap.to(ref.current, {
    x: direction === 'forward' ? -1000 : 1000,
    autoAlpha: 1,
    delay: .5,
    onComplete () {
      window.history.back();
    }
  })
}