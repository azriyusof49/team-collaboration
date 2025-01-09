// src/app.js

// Function to load navbar and footer HTML and inject them into the page
async function loadNavbar() {
  try {
    // Fetch the navbar and footer HTML files located in the component folder
    const response = await fetch('public/component/navbar.html');
    const footerResponse = await fetch('public/component/footer.html');
    
    // Check if the files were fetched successfully
    if (!response.ok) {
      throw new Error('Navbar file network response was not ok');
    }
    if (!footerResponse.ok) {
      throw new Error('Footer file network response was not ok');
    }

    // Get the HTML text content
    const navbarHtml = await response.text();
    const footerHtml = await footerResponse.text();

    // Inject the HTML into the respective placeholder divs
    document.getElementById('navbar').innerHTML = navbarHtml;
    document.getElementById('footer').innerHTML = footerHtml;
  } catch (error) {
    console.error('Failed to load navbar or footer:', error);
  }
}


// app.js




// Load the navbar and footer after the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', loadNavbar);

