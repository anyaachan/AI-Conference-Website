document.addEventListener("DOMContentLoaded", function() {
    let regForm = document.getElementById("reg-form");
  
    regForm.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log()
      let userDate = document.getElementsByClassName("reg-input-field")
      console.log(userDate[0].value)
      console.log(userDate[1].value)

    });
  });
