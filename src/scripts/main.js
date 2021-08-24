//=============================================================
let parentBlocks = document.querySelectorAll(".parent-block");
parentBlocks.forEach((element) => {
  let bookingBtn = element.querySelector(".hotel-booking-hide");
  let hideContent = element.querySelector(".hide");
  bookingBtn.addEventListener("click", function () {
    hideContent.classList.toggle("d-block");
  });
});
// header lang select
//========================================
btnLang.addEventListener("click", () => {
  navLang.classList.toggle("show2");
  img.classList.toggle("arrow");
});
btnLang2.addEventListener("click", () => {
  navLang2.classList.toggle("show2");
  img2.classList.toggle("arrow");
});

// mobile footer title collapse
//===========================================================
var btnTitle = document.querySelectorAll(".footer-sm-title");
btnTitle.forEach((element) => {
  var fArrow = element.querySelector(".footer-arrow");
  element.addEventListener("click", function () {
    if (window.innerWidth < 800) {
      fArrow.classList.toggle("arrow");
      var opened = element.nextElementSibling;
      opened.classList.toggle("d-block");
    }
  });
});

//hotel select
//===================================================================
$(document).ready(function () {
  $(".hotel-comfort").on("click", function () {
    $(".hotel-comfort-content").slideToggle();
  });
 
});

let gitBtn = document.querySelector(".gid-btn");
gitBtn.addEventListener("click", () => {
  let headGid = document.querySelector(".header-gid");
  headGid.classList.toggle('d-block');
});
var customSelect,
  customSelectLength,
  selectElement,
  selElmLength,
  divTagforSelected,
  divTagforCssClass,
  divTagforSelectOptions;

customSelect = document.getElementsByClassName("custom-select");
customSelectLength = customSelect.length;
for (i = 0; i < customSelectLength; i++) {
  selectElement = customSelect[i].getElementsByTagName("select")[0];
  selElmLength = selectElement.length;
  divTagforSelected = document.createElement("DIV");
  divTagforSelected.setAttribute("class", "select-selected");
  divTagforSelected.innerHTML =
    selectElement.options[selectElement.selectedIndex].innerHTML;
  customSelect[i].appendChild(divTagforSelected);
  divTagforCssClass = document.createElement("DIV");
  divTagforCssClass.setAttribute("class", "select-items select-hide");
  //====================================================================
  for (j = 1; j < selElmLength; j++) {
    divTagforSelectOptions = document.createElement("DIV");
    divTagforSelectOptions.innerHTML = selectElement.options[j].innerHTML;
    divTagforSelectOptions.addEventListener("click", function (e) {
      var selectOption, select, nextOption, selectLeng, selectOptionLength;
      select = this.parentNode.parentNode.getElementsByTagName("select")[0];
      selectLeng = select.length;
      nextOption = this.parentNode.previousSibling;
      for (i = 0; i < selectLeng; i++) {
        if (select.options[i].innerHTML == this.innerHTML) {
          select.selectedIndex = i;
          nextOption.innerHTML = this.innerHTML;
          selectOption =
            this.parentNode.getElementsByClassName("selected-option");
          selectOptionLength = selectOption.length;
          for (k = 0; k < selectOptionLength; k++) {
            selectOption[k].removeAttribute("class");
          }
          this.setAttribute("class", "selected-option");
          break;
        }
      }
      nextOption.click();
    });
    divTagforCssClass.appendChild(divTagforSelectOptions);
  }
  //====================================================================
  customSelect[i].appendChild(divTagforCssClass);
  divTagforSelected.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
//====================================================================
function closeAllSelect(elmnt) {
  var selectItem,
    selectSelected,
    selectItemLenght,
    selectedLeng,
    arrNo = [];
  selectItem = document.getElementsByClassName("select-items");
  selectSelected = document.getElementsByClassName("select-selected");
  selectItemLenght = selectItem.length;
  selectedLeng = selectSelected.length;
  for (i = 0; i < selectedLeng; i++) {
    if (elmnt == selectSelected[i]) {
      arrNo.push(i);
    } else {
      selectSelected[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < selectItemLenght; i++) {
    if (arrNo.indexOf(i)) {
      selectItem[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);

$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [5, 400],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );
});
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 5,
  slidesPerView: 6,
  freeMode: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

//==============================================================
function generate_year_range(start, end) {
  var years = "";
  for (var year = start; year <= end; year++) {
    years += "<option value='" + year + "'>" + year + "</option>";
  }
  return years;
}

today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

createYear = generate_year_range(1970, 2050);

document.getElementById("year").innerHTML = createYear;

var calendar = document.getElementById("calendar");
var lang = calendar.getAttribute("data-lang");

var months = "";
var days = "";

var monthDefault = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

if (lang == "en") {
  months = monthDefault;
  days = dayDefault;
} else if (lang == "id") {
  months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
} else if (lang == "fr") {
  months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  days = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
  ];
} else {
  months = monthDefault;
  days = dayDefault;
}

var $dataHead = "<tr>";
for (dhead in days) {
  $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

//alert($dataHead);
document.getElementById("thead-month").innerHTML = $dataHead;

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
  var firstDay = new Date(year, month).getDay();

  tbl = document.getElementById("calendar-body");

  tbl.innerHTML = "";

  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  // creating all cells
  var date = 1;
  for (var i = 0; i < 6; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        cell = document.createElement("td");
        cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth(month, year)) {
        break;
      } else {
        cell = document.createElement("td");
        cell.setAttribute("data-date", date);
        cell.setAttribute("data-month", month + 1);
        cell.setAttribute("data-year", year);
        cell.setAttribute("data-month_name", months[month]);
        cell.className = "date-picker";
        cell.innerHTML = "<span>" + date + "</span>";

        if (
          date === today.getDate() &&
          year === today.getFullYear() &&
          month === today.getMonth()
        ) {
          cell.className = "date-picker selected";
        }
        row.appendChild(cell);
        date++;
      }
    }

    tbl.appendChild(row);
  }
}

function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}
//======================================================
