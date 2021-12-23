function getMore() {
    let Continue = document.getElementById("get");
    let moreText = document.getElementById("getmore");
    let btnText = document.getElementById("MyBtn");
  
    if (Continue.style.display === "none") {
      Continue.style.display = "inline";
      btnText.innerHTML = "more";
      moreText.style.display = "none";
    } else {
      Continue.style.display = "none";
      btnText.innerHTML = "less";
      moreText.style.display = "inline";
    }
  }