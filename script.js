window.onload = () => {
    const burger_btn = document.querySelector('.navigation_burgerbtn');
    const dark_screen = document.querySelector('.dark_screen');
    const mobile_menu = document.querySelector('.mobile_menu');
    const mobile_menu_items = document.querySelectorAll('.mobile_menu-item')
    const body = document.querySelector('body');
    
    burger_btn.addEventListener('click', function() {
        burger_btn.classList.toggle('active');
        mobile_menu.classList.toggle('active');
        dark_screen.classList.toggle('active');
        body.classList.toggle('no_scroll');
    })
    
    dark_screen.addEventListener('click', function() {
        burger_btn.classList.remove('active');
        mobile_menu.classList.remove('active');
        dark_screen.classList.remove('active');
        body.classList.remove('no_scroll');
    })
    
    mobile_menu_items.forEach(el => {
        el.addEventListener('click', function() {
            burger_btn.classList.remove('active');
            mobile_menu.classList.remove('active');
            dark_screen.classList.remove('active');
            body.classList.remove('no_scroll');
        })
    })
}
