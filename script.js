<script>

const browserWindow = window;
const popup = document.querySelector(".filter-pop-up");
let popupDisplayed = sessionStorage.getItem("popupDisplayed");


browserWindow.addEventListener("mouseout", function (event) {
  // Vérifiez si la souris est sortie de la fenêtre du navigateur
  if (!event.relatedTarget || typeof event.relatedTarget === "undefined") {
    let popupDisplayed = sessionStorage.getItem("popupDisplayed");
    // Vérifiez si la variable "popupDisplayed" est null ou false
      if (popupDisplayed === null || popupDisplayed === "false") {
        popup.style.opacity = "1";
        popup.style.display = "flex";
        // Mettez à jour la variable "popupDisplayed"
        sessionStorage.setItem("popupDisplayed", "true");
    }
  }
});

</script>
