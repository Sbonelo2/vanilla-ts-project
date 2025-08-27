function setGreeting(name) {
    var greetingElement = document.getElementById("greeting");
    greetingElement.textContent = "Welcome, ".concat(name, "!");
}
setGreeting("Developer");
