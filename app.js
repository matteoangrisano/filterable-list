const filterInput = document.querySelector("#filterInput");

const filterNames = () => {
  let filterValue = document.querySelector("#filterInput").value.toLowerCase();
  let ul = document.querySelector("#names");
  let li = ul.querySelectorAll("li.collection-item");

  for (let index = 0; index < li.length; index++) {
    let a = li[index].querySelectorAll("a")[0];
    if (a.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
      li[index].style.display = "";
    } else {
      li[index].style.display = "none";
    }
  }
};

filterInput.addEventListener("keyup", filterNames);
