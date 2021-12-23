function showMore() {
    let More = document.getElementById("dot");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
  
    if (More.style.display === "none") {
      More.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      More.style.display = "none";
      btnText.innerHTML = "Show less";
      moreText.style.display = "inline";
    }
  }