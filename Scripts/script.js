// script.js
$(document).ready(function () {
  // Load the navbar
  $("#navbar").load(
    "../Components/navbar.html",
    function (response, status, xhr) {
      if (status == "error") {
        console.log(
          "Error loading navbar.html: " + xhr.status + " " + xhr.statusText
        );
      }
    }
  );
  // Load the footer
  $("#footer").load(
    "../Components/footer.html",
    function (response, status, xhr) {
      if (status == "error") {
        console.log(
          "Error loading footer.html: " + xhr.status + " " + xhr.statusText
        );
      }
    }
  );
});
