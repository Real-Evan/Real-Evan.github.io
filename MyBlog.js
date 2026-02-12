window.onload = function () {
    document.getElementById("newContent").style.display = "none";
    document.getElementById("filterContent").style.display = "none";
};

function showFilter() {
    let filterForm = document.getElementById("filterContent");

    if (filterForm.style.display === "none") {
        filterForm.style.display = "block";
    } else {
        filterForm.style.display = "none";
    }
}

function showAddNew() {
    let newForm = document.getElementById("newContent");

    if (newForm.style.display === "none") {
        newForm.style.display = "block";
    } else {
        newForm.style.display = "none";
    }
}

function filterArticles() {
    let showOpinion = document.getElementById("opinionCheckbox").checked;
    let showRecipe = document.getElementById("recipeCheckbox").checked;
    let showUpdate = document.getElementById("updateCheckbox").checked;

    let articles = document.querySelectorAll("#articleList article");

    articles.forEach(function (article) {
        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "block" : "none";
        }

        if (article.classList.contains("recipe")) {
            article.style.display = showRecipe ? "block" : "none";
        }

        if (article.classList.contains("update")) {
            article.style.display = showUpdate ? "block" : "none";
        }
    });
}

function addNewArticle() {
    let title = document.getElementById("inputHeader").value;
    let text = document.getElementById("inputArticle").value;

    let type = "";
    if (document.getElementById("opinionRadio").checked) {
        type = "opinion";
    } else if (document.getElementById("recipeRadio").checked) {
        type = "recipe";
    } else if (document.getElementById("lifeRadio").checked) {
        type = "update";
    }

    if (title === "" || text === "" || type === "") {
        alert("Please complete all fields.");
        return;
    }

    let newArticle = document.createElement("article");
    newArticle.classList.add(type);

    let marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = type.charAt(0).toUpperCase() + type.slice(1);

    let h2 = document.createElement("h2");
    h2.textContent = title;

    let p = document.createElement("p");
    p.textContent = text;

    newArticle.appendChild(marker);
    newArticle.appendChild(h2);
    newArticle.appendChild(p);

    document.getElementById("articleList").appendChild(newArticle);

    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.getElementById("opinionRadio").checked = false;
    document.getElementById("recipeRadio").checked = false;
    document.getElementById("lifeRadio").checked = false;

    filterArticles();
}
