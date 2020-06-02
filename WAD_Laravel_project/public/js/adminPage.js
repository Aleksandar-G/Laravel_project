let addForm = document.getElementById("addMovieForm");
//let editForm = document.getElementById();
//let deleteForm = document.getElementById();
let addFormButton = document.getElementById("addBtn");
let deleteForm = document.getElementById("deleteMovieForm");
let updateForm = document.getElementById("updateMovieForm");

document.getElementById("addPage").addEventListener('click', this.showAddForm);
document.getElementById("deletePage").addEventListener('click', this.showDeleteForm);
document.getElementById("updatePage").addEventListener('click', this.showUpdateForm);

document.getElementById("deleteBtn").addEventListener('click', this.deleteMovie);
addFormButton.addEventListener('click', this.LoadMovieNames);
document.getElementById("updateBtn").addEventListener('click', this.updateMovie);

window.addEventListener('load', (event) => {
    showAddForm();
})

/*function addMovie(event) {
    let fields = addForm.getElementsByTagName("input");
    let name = fields[0].value;
    //let poster = fields[1].value;

    let xhrObject = new XMLHttpRequest();

    xhrObject.onload = function() { //when readystate changes
        if (xhrObject.status == 200) { //if server status was ok
            console.log(xhrObject.response);
            alert("Movie is added");
        }
    }
    xhrObject.open('POST', "../logic/adminPageLogic.php", true);
    xhrObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhrObject.send("action=add&name=" + name);
}

function deleteMovie() {
    let deleteForm = document.getElementById("deleteMovieForm");
    let fields = document.getElementById("moviesSelectDelete");
    let name = fields.options[fields.selectedIndex].value;
    if (window.confirm("Are you sure you want to delete this movie")) {
        let xhrObject = new XMLHttpRequest();

        xhrObject.onload = function() { //when readystate changes
            if (xhrObject.status == 200) { //if server status was ok
                console.log(xhrObject.response);
                alert("The movie was deleted");
            }
        }
        xhrObject.open('POST', "../logic/adminPageLogic.php", true);
        xhrObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhrObject.send("action=delete&name=" + name);
    }
}

function updateMovie() {
    let fields = document.getElementById("moviesSelectUpdate");
    let name = fields.options[fields.selectedIndex].value;
    let newName = document.getElementById("newNameField").value;

    let xhrObject = new XMLHttpRequest();

    xhrObject.onload = function() { //when readystate changes
        if (xhrObject.status == 200) { //if server status was ok
            console.log(xhrObject.response);
            alert("The movie was Updated");
        }
    }
    xhrObject.open('POST', "../logic/adminPageLogic.php", true);
    xhrObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhrObject.send("action=update&name=" + name + "&newName=" + newName);

}

function loadMoviesInfoSelectTagDelete() {
    let xhrObject = new XMLHttpRequest();
    console.log("ok");
    xhrObject.onload = function() { //when readystate changes
        if (xhrObject.status == 200) { //if server status was ok
            //console.log(xhrObject.response);
            let selectTag = document.getElementById("moviesSelectDelete");
            let response = JSON.parse(xhrObject.response);

            //console.log(response);
            for (let i = 0; i < response.length; i++) {
                let option = document.createElement("option");
                option.text = response[i]['name'];
                selectTag.add(option);
            }
        }
    }
    xhrObject.open('POST', "../logic/adminPageLogic.php", true);
    xhrObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhrObject.send("action=loadMovies");
}

function loadMoviesInfoSelectTagUpdate() {
    let xhrObject = new XMLHttpRequest();
    console.log("ok");
    xhrObject.onload = function() { //when readystate changes
        if (xhrObject.status == 200) { //if server status was ok
            //console.log(xhrObject.response);
            let selectTag = document.getElementById("moviesSelectUpdate");
            let response = JSON.parse(xhrObject.response);

            //console.log(response);
            for (let i = 0; i < response.length; i++) {
                let option = document.createElement("option");
                option.text = response[i]['name'];
                selectTag.add(option);
            }
        }
    }
    xhrObject.open('POST', "../logic/adminPageLogic.php", true);
    xhrObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhrObject.send("action=loadMovies");
}

function LoadMovieNames() {

    let xhrObject = new XMLHttpRequest();
    xhrObject.onload = function() { //when readystate changes
        if (xhrObject.status == 200) { //if server status was ok
            let response = JSON.parse(xhrObject.response);
            let fields = addForm.getElementsByTagName("input");
            let name = fields[0].value;
            console.log("name:" + name);
            for (let i = 0; i < response.length; i++) {
                console.log(response[i]);
                if (response[i]['name'] == name) {
                    alert("Movie already exists");
                    return;
                }
            }
            addMovie();
        }
    }
    xhrObject.open('POST', "../logic/adminPageLogic.php", true);
    xhrObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhrObject.send("action=loadMovies");
}
*/
function showDeleteForm() {
    addForm.style.display = "none";
    updateForm.style.display = "none";
    deleteForm.style.display = "block";
    document.getElementById("deletePage").className = "active";
    document.getElementById("addPage").className -= "active";
    document.getElementById("updatePage").className -= "active";
}

function showUpdateForm() {
    addForm.style.display = "none";
    deleteForm.style.display = "none";
    updateForm.style.display = "block";
    document.getElementById("updatePage").className = "active";
    document.getElementById("addPage").className -= "active";
    document.getElementById("deletePage").className -= "active";
}

function showAddForm() {
    deleteForm.style.display = "none";
    updateForm.style.display = "none";
    addForm.style.display = "block";
    document.getElementById("addPage").className = "active";
    document.getElementById("updatePage").className -= "active";
    document.getElementById("deletePage").className -= "active";
}