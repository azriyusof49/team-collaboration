document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".expand-image");
    const modal = document.createElement("div");
    modal.id = "image-modal";
    modal.classList.add(
        "hidden",
        "fixed",
        "inset-0",
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "z-50",
        "bg-black",
        "bg-opacity-80"
    );

    modal.innerHTML = `
        <div class="relative text-white">
            <img src="" alt="Expanded" class="rounded-lg max-w-screen-lg max-h-screen mb-4">
            <p id="image-caption" class="text-center text-sm text-gray-300 mb-4"></p>
            <div class="absolute flex justify-between w-full px-4">
                <button id="prev-modal" class="bg-gray-800 text-white p-2 rounded-full">◀</button>
                <button id="next-modal" class="bg-gray-800 text-white p-2 rounded-full">▶</button>
            </div>
            <button id="close-modal" class="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full">✖</button>
        </div>
    `;

    document.body.appendChild(modal);

    const modalImage = modal.querySelector("img");
    const modalCaption = modal.querySelector("#image-caption");
    const closeModal = modal.querySelector("#close-modal");
    const prevModal = modal.querySelector("#prev-modal");
    const nextModal = modal.querySelector("#next-modal");

    let currentIndex = 0;

    function updateModalContent(index) {
        currentIndex = index;
        const largeImageSrc = images[index].dataset.largeSrc; // Use the high-res image
        const caption = images[index].dataset.caption || ""; // Get the caption
        modalImage.src = largeImageSrc;
        modalCaption.textContent = caption;
    }

    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            updateModalContent(index);
            modal.classList.remove("hidden");
        });
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });

    prevModal.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateModalContent(currentIndex);
    });

    nextModal.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateModalContent(currentIndex);
    });
});
