import Home from "./views/Home.js";
import About from "./views/About.js";
import Search from "./views/Search.js";
import Help from "./views/Help.js";
import Signup from "./views/Signup.js";
import Signin from "./views/Signin.js";
import Signout from "./views/Signout.js";
import Auth from "./views/Auth.js";
import AddHotel from "./views/AddHotel.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/about", view: About },
        { path: "/search", view: Search },
        { path: "/help", view: Help },
        { path: "/signup", view: Signup },
        { path: "/signin", view: Signin },
        { path: "/signout", view: Signout },
        { path: "/addhotel", view: AddHotel },
        { path: "/auth", view: Auth }
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

const setActive = () => {
    // Set menu active class
    var header = document.getElementById("nav-header");
    var aTags = header.getElementsByClassName("nav-link");
    for (var i = 0; i < aTags.length; i++) {
        aTags[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    setActive();
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});