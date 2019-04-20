window.onload = function () {
    document.querySelector(".logo").addEventListener("transitionend", function () {
        alert("The transition has ended.");
    });
    // Start transition by adding "take-off" class to the logo.
    var logo = document.querySelector(".logo"); 
    var oldClasses = logo.className;
    logo.setAttribute("class", oldClasses + " take-off");
};
