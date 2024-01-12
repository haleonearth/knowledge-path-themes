document.addEventListener("DOMContentLoaded", function () {
  // Find all elements with the selector '.bottom-pane-twitter a'
  let targetTwitterAnchors = document.querySelectorAll(".bottom-pane-twitter a");

  // Loop through each found element
  targetTwitterAnchors.forEach(function (anchor) {
    // Replace or insert the SVG content
    anchor.innerHTML =
      '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 390" aria-labelledby="X" role="img"><title id="x">Follow us on X</title><g id="x_layer"><path d="M0.9,0 L146.51,194.71 L0,352.98 L32.97,352.98 L161.24,214.38 L264.87,352.98 L377.09,352.98 L223.34,147.34 L359.72,0 L326.75,0 L208.61,127.63 L113.12,0 L0.9,0 Z M49.4,24.31 L100.95,24.31 L328.59,328.71 L277.04,328.71 L49.4,24.31 Z"></path></g></svg>';
  });
});
