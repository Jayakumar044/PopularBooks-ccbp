let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createSearchResultItem(result) {
    let {
        imageLink,
        author
    } = result;

    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add(
        "col-md-4",
        "col-lg-3",
        "text-center",
        "mb-3"
    );
    let imageEl = document.createElement("img");
    imageEl.src = imageLink;
    imageEl.classList.add("result-image");
    resultItemEl.appendChild(imageEl);

    let authorEl = document.createElement("p");
    authorEl.textContent = author;
    authorEl.classList.add("result-title");
    resultItemEl.appendChild(authorEl);

    return resultItemEl;
}

function displayResults(searchResults) {
    spinnerEl.classList.add("d-none");
    searchResultsEl.classList.remove("d-none");

    if (searchResults.length === 0) {
        let noResultsEl = document.createElement("p");
        noResultsEl.classList.add("no-results");
        noResultsEl.textContent = "No results found";
        searchResultsEl.appendChild(noResultsEl);
    } else {
        let resultRowEl = document.createElement("div");
        resultRowEl.classList.add("row");
        searchResultsEl.appendChild(resultRowEl);

        let resultsHeadingEl = document.createElement("h1");
        resultsHeadingEl.classList.add("col-12", "search-results-heading");
        resultsHeadingEl.textContent = "Popular Books";
        resultRowEl.appendChild(resultsHeadingEl);

        for (let result of searchResults) {
            let resultItemEl = createSearchResultItem(result);
            resultRowEl.appendChild(resultItemEl);
        }
    }
}

function searchBook() {
    let searchInput = searchInputEl.value;

    if (searchInput !== "") {
        spinnerEl.classList.remove("d-none");
        searchResultsEl.classList.add("d-none");
        searchResultsEl.textContent = "";

        let url = "https://apis.ccbp.in/book-store?title=" + searchInput;
        let options = {
            method: "GET",
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}
searchInputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchBook();
    }
});