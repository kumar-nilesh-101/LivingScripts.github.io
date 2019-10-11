document.addEventListener("DOMContentLoaded", function(event) {
  var email = document.getElementById("email");

  email.onclick = function() {
    var inp = document.createElement("input");
    document.body.appendChild(inp);
    inp.value = "nilesh22.a67@gmail.com";
    inp.select();
    document.execCommand("copy", false);
    inp.remove();
  };
});
