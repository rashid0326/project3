document.addEventListener("DOMContentLoaded", function () {
  var quickLinksContainer = document.getElementById("quick-links");

  // Create YouTube link
  var youtubeLink = document.createElement("li");
  var youtubeAnchor = document.createElement("a");
  youtubeAnchor.href = "https://www.youtube.com";
  youtubeAnchor.textContent = "YouTube";
  youtubeLink.appendChild(youtubeAnchor);

  // Create Google link
  var googleLink = document.createElement("li");
  var googleAnchor = document.createElement("a");
  googleAnchor.href = "https://www.google.com";
  googleAnchor.textContent = "Google";
  googleLink.appendChild(googleAnchor);

  // Append links to the Quick Access section
  quickLinksContainer.appendChild(youtubeLink);
  quickLinksContainer.appendChild(googleLink);
});
