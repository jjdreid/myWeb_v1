function closeProductPage() {
    document.getElementsByTagName("BODY")[0].style.animation = "pageClose .35s 1";
}
window.onbeforeunload = closeProductPage;
