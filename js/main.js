import movies from "./movielist.js";

const resultMain = document.querySelector(".result-main");
const inclusionTagsSet = new Set();
const exclusionTagsSet = new Set();

function initializeAllTagsSets() {
  for (const movie in movies) {
    if (movies.hasOwnProperty(movie) && movies[movie].tags) {
      inclusionTagsSet.add("ALL");
      /* exclusionTagsSet.add("none");*/

      movies[movie].tags.forEach((tag) => {
        inclusionTagsSet.add(tag);
        exclusionTagsSet.add(tag);
      });
    }
  }
}

function fillSelectOptions(inclusionTagsDropdown, exclusionTagsDropdown) {
  const selectedInclusionTag = inclusionTagsDropdown.value;
  const selectedExclusionTag = exclusionTagsDropdown.value;

  // Clear existing options for inclusion dropdown
  inclusionTagsDropdown.innerHTML = "";
  // Clear existing options for exclusion dropdown
  exclusionTagsDropdown.innerHTML = "";

  const sortedInclusionTags = [...Array.from(inclusionTagsSet).sort()];
  const sortedExclusionTags = ["none", ...Array.from(exclusionTagsSet).sort()];

  sortedInclusionTags.forEach((tag) => {
    const inclusionOptionElement = document.createElement("option");
    inclusionOptionElement.value = tag;
    inclusionOptionElement.text = tag;

    if (tag === selectedInclusionTag) {
      inclusionOptionElement.selected = true;
    }
    inclusionTagsDropdown.appendChild(inclusionOptionElement);
  });

  sortedExclusionTags.forEach((tag) => {
    const exclusionOptionElement = document.createElement("option");
    exclusionOptionElement.value = tag;
    exclusionOptionElement.text = tag;

    if (tag === selectedExclusionTag) {
      exclusionOptionElement.selected = true;
    }
    exclusionTagsDropdown.appendChild(exclusionOptionElement);
  });
}

function createMovieElement(title, details) {
  const resultDiv = document.createElement("div");
  resultDiv.classList.add("result-div");

  const previewImgDiv = document.createElement("div");
  previewImgDiv.classList.add("preview-img");
  previewImgDiv.style.backgroundImage = `url(${details.previewImg})`;

  const titleElement = document.createElement("h5");
  titleElement.textContent = title;

  const yearDurationDiv = document.createElement("div");
  yearDurationDiv.textContent = `${details.year} | ${details.duration} mins`;
  yearDurationDiv.classList.add("year-duration");

  const tagsDiv = document.createElement("div");
  tagsDiv.textContent = `${details.tags.join(", ")}`;
  tagsDiv.classList.add("tags");

  const detailsElement = document.createElement("p");
  detailsElement.classList.add("movie-description");
  detailsElement.textContent = details.shortDescription;

  resultDiv.appendChild(tagsDiv);
  resultDiv.appendChild(previewImgDiv);
  resultDiv.appendChild(titleElement);
  resultDiv.appendChild(yearDurationDiv);
  resultDiv.appendChild(detailsElement);

  return resultDiv;
}

function displayMovies(filteredMovies) {
  const resultWrapper = document.getElementById("result-wrapper");

  resultWrapper.innerHTML = "";

  filteredMovies.forEach(([title, details]) => {
    const resultDiv = createMovieElement(title, details);
    resultWrapper.appendChild(resultDiv);
  });

  const gotoTop = document.createElement("div");
  gotoTop.innerHTML = '<a href="#" onclick="scrollToTop()">Up</a>';
  gotoTop.classList.add("go-to-top");
  resultWrapper.appendChild(gotoTop);

  function scrollToTop() {
    window.location.hash = "#start-title";
  }
  gotoTop.addEventListener("click", () => {
    scrollToTop();
  });
}

function filterMovies() {
  const excludeXmas = document.getElementById("exclude-xmas").checked;
  const excludeRating = document.getElementById("exclude-rating").checked;
  const excludeTemperature = document.getElementById(
    "exclude-temperature"
  ).checked;

  const selectedInclusionTag = document.getElementById(
    "inclusion-tags-dropdown"
  ).value;
  const selectedExclusionTag = document.getElementById(
    "exclusion-tags-dropdown"
  ).value;
  const xmasLevel = excludeXmas
    ? ""
    : document.getElementById("xmas-level").value;
  const ratingLevel = excludeRating
    ? ""
    : document.getElementById("rating-level").value;
  const temperatureLevel = excludeTemperature
    ? ""
    : document.getElementById("temperature-level").value;

  const filteredMovies = Object.entries(movies).filter(([title, details]) => {
    return (
      (!selectedInclusionTag ||
        selectedInclusionTag === "ALL" ||
        details.tags.includes(selectedInclusionTag)) &&
      (!selectedExclusionTag ||
        selectedExclusionTag === "none" ||
        !details.tags.includes(selectedExclusionTag)) &&
      (!xmasLevel || details.xmas >= xmasLevel) &&
      (!ratingLevel || details.rating >= ratingLevel) &&
      (!temperatureLevel || details.temperature >= temperatureLevel)
    );
  });

  displayMovies(filteredMovies);
}

function displayAllMovies() {
  const resultWrapper = document.getElementById("result-wrapper");

  resultWrapper.innerHTML = "";

  for (const [title, details] of Object.entries(movies)) {
    const resultDiv = createMovieElement(title, details);
    resultWrapper.appendChild(resultDiv);
  }
  const gotoTop = document.createElement("div");
  gotoTop.innerHTML = '<a href="#" onclick="scrollToTop()">Up</a>';
  gotoTop.classList.add("go-to-top");
  resultWrapper.appendChild(gotoTop);

  function scrollToTop() {
    window.location.hash = "#start-title";
  }
  gotoTop.addEventListener("click", () => {
    scrollToTop();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeAllTagsSets();

  const inclusionTagsDropdown = document.getElementById(
    "inclusion-tags-dropdown"
  );
  const exclusionTagsDropdown = document.getElementById(
    "exclusion-tags-dropdown"
  );

  fillSelectOptions(inclusionTagsDropdown, exclusionTagsDropdown);

  inclusionTagsDropdown.addEventListener("change", function () {
    fillSelectOptions(inclusionTagsDropdown, exclusionTagsDropdown);
  });

  const filterButton = document.getElementById("filter-button");
  filterButton.addEventListener("click", filterMovies);

  const searchallBtn = document.getElementById("search-all-btn");
  searchallBtn.addEventListener("click", displayAllMovies);
});
