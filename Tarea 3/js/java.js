window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.addEventListener("animationend", () => {
      document.body.removeChild(loader);
    });
  });