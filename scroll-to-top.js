// Create the button element
var scrollButton = document.createElement("button");
scrollButton.innerHTML = "&#8679;"; // Up arrow symbol
scrollButton.style.position = "fixed";
scrollButton.style.bottom = "20px";
scrollButton.style.right = "20px";
scrollButton.style.zIndex = "99";
scrollButton.style.fontSize = "18px";
scrollButton.style.border = "none";
scrollButton.style.outline = "none";
scrollButton.style.backgroundColor = "rgba(0,0,0,0.3)";
scrollButton.style.color = "#fff";
scrollButton.style.cursor = "pointer";
scrollButton.style.padding = "15px";
scrollButton.style.borderRadius = "4px";

// Initially hide the button
scrollButton.style.display = "none";

// Add scroll functionality
scrollButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

// Append the button to the body
document.body.appendChild(scrollButton);

// Show/hide button based on scroll position
window.onscroll = function() {
  if (window.pageYOffset > 80) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};
