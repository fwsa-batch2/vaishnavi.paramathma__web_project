function searchbar() {
    let searchItem = document.getElementById("search").value;
    if ("homepage" == searchItem) {
        window.open("/index.html")
    }
    else if ("zoo updates" == searchItem) {
        window.open("/pages/zooupdate.html")
    }
    else if ("register" == searchItem) {
        window.open("/pages/register.html")
    }
    else if ("adopt animal" == searchItem){
        window.open("/pages/register.html")
    }
    else {
        alert("page not found")
    }
}
