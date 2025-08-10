function load_cupcake() {
    fetch('pages/cupcake.html')
        .then(response => response.text())
        .then(html => {
        document.querySelector('main').innerHTML = html;
    });
}

function load_cookie() {
    fetch('pages/cookie.html')
        .then(response => response.text())
        .then(html => {
        document.querySelector('main').innerHTML = html;
    });
}

function load_icecream() {
    fetch('pages/icecream.html')
        .then(response => response.text())
        .then(html => {
        document.querySelector('main').innerHTML = html;
    });
}