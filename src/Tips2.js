const toggleCollapsible = document.getElementById("toggle-collapsible");
        const collapsibleContent = document.getElementById("collapsible-content");
        const arrow = document.getElementById("arrow");

        toggleCollapsible.addEventListener("click", () => {
            collapsibleContent.classList.toggle("hidden");
            arrow.classList.toggle("rotate-180");
        });