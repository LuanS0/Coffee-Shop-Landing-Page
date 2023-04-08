const swiper = new Swiper('.swiper',{
    grabCursor: true,
    effect: 'creative',
    autoplay: {
      delay: 5000,
    },
    creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      loop: true,
});