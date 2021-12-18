/*Company Login*/
function check(form) { /*function to check userid & password*/
            /*the following code checkes whether the entered userid and password are matching*/
            if(form.email.value == "test@company.com" && form.password.value == "abc123") {
                window.open('dashboard.html')/*opens the target page while Id & password matches*/
            }
            else {
                alert("Error Password or Username")/*displays error message*/
            }
        }

/*FAQ*/
var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
      });
  }