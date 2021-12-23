function More() {
    let Continue = document.getElementById("Continue");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
  
    if (Continue.style.display === "none") {
      Continue.style.display = "inline";
      moreText.style.display = "none";
      btnText.innerHTML = "more";
    } else {
      Continue.style.display = "none";
      moreText.style.display = "inline";
      btnText.innerHTML = "hide";
    }
  }