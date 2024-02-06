var grid = document.querySelector(".grid");
var iso;

imagesLoaded(grid, function () {
  iso = new Isotope(grid, {
    itemSelector: ".grid-item",
    layoutMode: "masonry",
  });

  var filterElm = document.querySelector(".diablo-filter");

  filterElm.addEventListener("click", function (event) {
    if (!matchesSelector(event.target, "button")) {
      return;
    }

    var filterValue = event.target.getAttribute("data-filter");

    iso.arrange({
      filter: filterValue,
    });
  });
});

var btnElem = document.querySelectorAll(".fil-btn");

btnElem.forEach(function (el, key) {
  el.addEventListener("click", function () {
    el.classList.add("clicked");

    btnElem.forEach(function (ell, keys) {
      if (key != keys) {
        ell.classList.remove("clicked");
      }
    });
  });
});
