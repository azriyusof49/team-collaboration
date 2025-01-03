
        document.querySelectorAll('.star').forEach((star, index, stars) => {
            star.addEventListener('click', () => {
                stars.forEach((s, i) => {
                    s.classList.toggle('text-yellow-400', i <= index);
                    s.classList.toggle('text-gray-300', i > index);
                });
            });
        });
 