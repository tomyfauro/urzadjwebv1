// Crear el elemento del cursor
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

// Actualizar posición del cursor al mover el ratón
document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Ocultar el cursor cuando el ratón no está dentro de la ventana
document.addEventListener("mouseleave", () => {
  cursor.style.opacity = "0";
});

document.addEventListener("mouseenter", () => {
  cursor.style.opacity = "1";
});

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const overlayMenu = document.querySelector(".overlay-menu");
  const closeMenuButton = document.querySelector(".close-menu");

  menuButton.addEventListener("click", () => {
    overlayMenu.classList.add("active");
  });

  closeMenuButton.addEventListener("click", () => {
    overlayMenu.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const hamburgerIcon = document.querySelector(".hamburger-icon");

  menuButton.addEventListener("mouseenter", () => {
    hamburgerIcon.style.transform = "rotate(360deg)";
  });

  menuButton.addEventListener("mouseleave", () => {
    hamburgerIcon.style.transform = "rotate(0deg)";
  });
});

const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  customCursor.style.top = `${e.clientY}px`;
  customCursor.style.left = `${e.clientX}px`;
});

const menuButton = document.querySelector(".menu-button");
const menuContainer = document.querySelector(".menu-container");
const closeButton = document.querySelector(".close-button");

menuButton.addEventListener("click", () => {
  menuContainer.classList.toggle("active"); // Activa/desactiva el menú
});

closeButton.addEventListener("click", () => {
  menuContainer.classList.remove("active"); // Cierra el menú
});

// Configuración del cursor personalizado

document.addEventListener("DOMContentLoaded", () => {
  // Registrar ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Seleccionar todas las secciones automáticamente
  const sections = document.querySelectorAll("section");

  // Aplicar animación a cada sección
  sections.forEach((section) => {
    gsap.fromTo(
      section,
      { opacity: 0, y: 30 }, // Estado inicial
      {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: "power1.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const menuContainer = document.querySelector(".menu-container");
  const closeButton = document.querySelector(".close-button");
  const menuLinks = document.querySelectorAll(".menu-content ul li a"); // Selecciona los enlaces del menú
  const headerHeight = document.querySelector(".header").offsetHeight; // Altura del encabezado (si es fijo)

  // Abre el menú
  menuButton.addEventListener("click", () => {
    menuContainer.classList.add("active");
  });

  // Cierra el menú con el botón de cerrar
  closeButton.addEventListener("click", () => {
    menuContainer.classList.remove("active");
  });

  // Cierra el menú y realiza el desplazamiento ajustado
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Evita el desplazamiento predeterminado del navegador
      const targetId = link.getAttribute("href").substring(1); // Obtiene el ID de la sección destino
      const targetSection = document.getElementById(targetId); // Encuentra la sección por ID

      if (targetSection) {
        const targetPosition = targetSection.offsetTop - headerHeight - 20; // Ajusta con el margen superior (-20 es opcional)
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth", // Desplazamiento suave
        });
      }

      menuContainer.classList.remove("active"); // Cierra el menú
    });
  });
});
