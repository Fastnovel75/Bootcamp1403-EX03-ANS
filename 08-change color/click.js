document.addEventListener("DOMContentLoaded", () => {
  // Get all div elements in body
  const divs = document.querySelectorAll("body > div");

  // Function to generate a random RGB color
  function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  }

  // Add click event listener to each div
  for (let i = 0; i < divs.length; i++) {
    const div = divs[i];

    // Change background color to random RGB color when clicked
    div.addEventListener("click", () => {
      div.style.backgroundColor = getRandomColor();
    });
  }
});
