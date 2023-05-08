document.addEventListener("DOMContentLoaded", function() {
    let regForm = document.getElementById("reg-form");
  
    regForm.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log()
      let userDame = document.getElementsByClassName("reg-input-field")
      console.log(userDame[0].value)
      console.log(userDame[1].value)
    });
  });
