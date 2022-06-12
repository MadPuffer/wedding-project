window.onscroll = function () {
    let nav = document.getElementsByClassName('navbar')[0]
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.classList.remove('navbar-transparent')
        nav.classList.add('navbar-solid')
    } else {
        nav.classList.remove('navbar-solid')
        nav.classList.add('navbar-transparent')
    }
}
