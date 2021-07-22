var SeasonObject = {
  SUMMER: {
    WONDER: ["GIZA, EGYPT", "MACHU PICCHU, PERU"],
    WINE: ["BORDEAUX, FRANCE", "SONOMA, UNITED STATES", "TUSCANY, ITALY"],
  },
  WINTER: {
    WONDER: ["COURCHEVEL, FRANCE"],
    SKI: ["ZERMATT, SWIZTERLAND", "WHISTLER, CANADA"],
  },
  AUTUMN: {
    WONDER: ["MACHU PICCHU, PERU"],
  },

  SPRING: [""],
};
window.onload = function () {
  var SeasonType = document.getElementById("SeasonType"),
    CategoryType = document.getElementById("CategoryType"),
    destinationType = document.getElementById("destinationType");
  for (var Season in SeasonObject) {
    SeasonType.options[SeasonType.options.length] = new Option(Season, Season);
  }
  SeasonType.onchange = function () {
    CategoryType.length = 1; // remove all options bar first
    destinationType.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done
    for (var Category in SeasonObject[this.value]) {
      CategoryType.options[CategoryType.options.length] = new Option(
        Category,
        Category
      );
    }
  };
  SeasonType.onchange(); // reset in case page is reloaded
  CategoryType.onchange = function () {
    destinationType.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done
    var destination = SeasonObject[SeasonType.value][this.value];
    for (var i = 0; i < destination.length; i++) {
      destinationType.options[destinationType.options.length] = new Option(
        destination[i],
        destination[i]
      );
    }
  };
};

function onChange() {
  console.log("press");
  if (destinationType.value === "MACHU PICCHU, PERU") {
    var Image = document.getElementById("displayDestination");
    Image.src = "machu-picchu-45618.jpg";
  } else if (destinationType.value === "GIZA, EGYPT") {
    var Image = document.getElementById("displayDestination");
    Image.src = "giza-25999.jpg";
  } else if (destinationType.value === "TUSCANY, ITALY") {
    var Image = document.getElementById("displayDestination");
    Image.src = "tuscany-79382.jpg";
  } else if (destinationType.value === "BORDEAUX, FRANCE") {
    var Image = document.getElementById("displayDestination");
    Image.src = "bordeaux-8375.jpg";
  } else if (destinationType.value === "SONOMA, UNITED STATES") {
    var Image = document.getElementById("displayDestination");
    Image.src = "sonoma-36284.jpg";
  } else if (destinationType.value === "COURCHEVEL, FRANCE") {
    var Image = document.getElementById("displayDestination");
    Image.src = "courchevel-34083.jpg";
  } else if (destinationType.value === "WHISTLER, CANADA") {
    var Image = document.getElementById("displayDestination");
    Image.src = "whistler-40386.jpg";
  } else if (destinationType.value === "ZERMATT, SWIZTERLAND") {
    var Image = document.getElementById("displayDestination");
    Image.src = "zermatt-40374.jpg";
  }
}
