document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");
    const teamMembers = document.querySelectorAll(".team_member");

    const handleScroll = () => {
        const animateElements = (elements, offset = 100) => {
            elements.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight - offset) {
                    element.classList.add("visible");
                } else {
                    element.classList.remove("visible");
                }
            });
        };

        animateElements(boxes);
        animateElements(teamMembers);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar al cargar la página
});
