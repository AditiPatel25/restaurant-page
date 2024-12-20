function loadInitialPage() {
    const content = document.getElementById('content');
  
    // Clear the content to be safe
    content.innerHTML = '';
  
    // Create main container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer');
  
    // Add a welcome message
    const welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = 'Welcome to the Ramen House!';
    imageContainer.appendChild(welcomeMessage);
  
    // Add a description paragraph
    const description = document.createElement('h3');
    description.textContent = 'We serve the best food in town. Come and enjoy a great dining experience!';
    imageContainer.appendChild(description);
  
    // Append the created content to the #content div
    content.appendChild(imageContainer);
  }
  
  export { loadInitialPage };
  