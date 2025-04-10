document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");

  const handleScroll = () => {
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Si el elemento está visible en la ventana, agregar la clase 'visible'
      if (boxTop < windowHeight - 100) {
        box.classList.add("visible");
      } else {
        // Si el elemento no está visible, quitar la clase 'visible'
        box.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Ejecutar al cargar la página
});