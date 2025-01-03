document.getElementById("review-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const message = document.getElementById("message").value;
    const rating = document.getElementById("rating").value;
  
    if (message && rating) {
      const reviewSection = document.querySelector("main section");
      const review = document.createElement("div");
      review.classList.add("bg-white", "rounded-lg", "p-4", "shadow-md", "mb-4");
      review.innerHTML = `<p>User: <span class="text-yellow-500">${"★".repeat(
        rating
      )}${"☆".repeat(5 - rating)}</span></p><p>${message}</p>`;
      reviewSection.appendChild(review);
      alert("Review submitted!");
      document.getElementById("message").value = "";
      document.getElementById("rating").value = "1";
    } else {
      alert("Please fill out all fields!");
    }
  });
  