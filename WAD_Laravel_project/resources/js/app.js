/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

//favouriteScripts

/*let buttons = document.getElementsByTagName("p");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", addFavourite)
    console.log(buttons[i]);
}

function addFavourite(event) {
    event.preventDefault();
    console.log("ee dobre");
    let xhrObject = new XMLHttpRequest();
    let movieId = event.target.getAttribute('value');
    xhrObject.onload = function() {
        console.log("asdasd");
        //when readystate changes
        if (xhrObject.status == 200) { //if server status was ok
            console.log(xhrObject.response);
            if (xhrObject.response == 1) {
                alert("Movie already added!");
            } else {

                alert("Movie Added!");
            }
        }
    }

    xhrObject.open('POST', "/AddFavorite/", true);
    xhrObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhrObject.send("movieId=" + movieId);
}*/