function fillArticleSection(url) {
    const xhttp = new XMLHttpRequest();
    xhttp.onprogress = function (params) {
        document.getElementById("article-container").innerHTML = "En cour de chargement";
    }
  xhttp.onload = function() {
    document.getElementById("article-container").innerHTML = this.responseText;
    document.getElementById("article-container").classList.add("active-article");
    }
  xhttp.open("GET", url, true);
  xhttp.send();
}