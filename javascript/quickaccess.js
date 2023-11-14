document.addEventListener("DOMContentLoaded", function () {
  var quickLinksContainer = document.getElementById("quick-links");

  // Create YouTube link and logo
  var youtubeLink = document.createElement("li");
  var youtubeAnchor = document.createElement("a");
  youtubeAnchor.href = "https://www.youtube.com";
  youtubeAnchor.target = "_blank"; // Open link in a new tab/window
  youtubeLink.appendChild(youtubeAnchor);

  var youtubeLogo = document.createElement("li");
  var youtubeLogoImg = document.createElement("img");
  youtubeLogoImg.src = "Img/images/youtube.jpg"; // Replace with the actual path to your YouTube logo image
  youtubeLogoImg.alt = "YouTube Logo";
  youtubeLogo.appendChild(youtubeLogoImg);

  // Create Google link and logo
  var googleLink = document.createElement("li");
  var googleAnchor = document.createElement("a");
  googleAnchor.href = "https://www.google.com";
  googleAnchor.target = "_blank"; // Open link in a new tab/window
  googleLink.appendChild(googleAnchor);

  var googleLogo = document.createElement("li");
  var googleLogoImg = document.createElement("img");
  googleLogoImg.src = "Img/images/google.jpg"; // Replace with the actual path to your Google logo image
  googleLogoImg.alt = "Google Logo";
  googleLogo.appendChild(googleLogoImg);

  // Append links and logos to the Quick Access section
  quickLinksContainer.appendChild(youtubeLink);
  quickLinksContainer.appendChild(youtubeLogo);
  quickLinksContainer.appendChild(googleLink);
  quickLinksContainer.appendChild(googleLogo);
});
