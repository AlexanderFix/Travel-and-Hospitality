// Burger

let burgerList = document.querySelectorAll('.burger_list')

function menuBurger() {
    burger_wrapper.classList.toggle('active_burger')
    burger_nav.classList.toggle('active_burger')
    document.body.classList.toggle('lock')
    burger_menu.classList.toggle('burger_active')
    // header.classList.toggle('header_active')
}

burgerList.forEach(item => {
    item.addEventListener('click', () => {
        burger_wrapper.classList.remove('active_burger')
        burger_nav.classList.remove('active_burger')
        document.body.classList.remove('lock')
        burger_menu.classList.remove('burger_active')
        // header.classList.remove('header_active')
    })
});

burger_button.addEventListener('click', menuBurger)

//Burger end


const slide1 = document.getElementById('slide1')
const slide2 = document.getElementById('slide2')
const slide3 = document.getElementById('slide3')



function slide(e) {

    switch (e.id) {
        case 'list1':
            list1.classList.remove('noactive')
            list2.classList.add('noactive')
            list3.classList.add('noactive')

            list1.setAttribute('disabled', '')
            list2.setAttribute('disabled', '')
            list3.setAttribute('disabled', '')

            slide1.style.animation = 'move2 1s running'
            slide2.style.animation = 'move 1s running'
            slide3.style.animation = 'move 1s running'

            setTimeout(() => {

                slide1.style.zIndex = '3'

                slide1.classList.add('slide1')
                slide1.classList.remove('slide3')
                slide1.classList.remove('slide2')

                slide2.style.zIndex = '2'

                slide2.classList.add('slide2')
                slide2.classList.remove('slide3')
                slide2.classList.remove('slide1')

                slide3.style.zIndex = '1'

                slide3.classList.add('slide3')
                slide3.classList.remove('slide1')
                slide3.classList.remove('slide2')

            }, 500);

            setTimeout(() => {
                slide1.style.animation = ''
                slide2.style.animation = ''
                slide3.style.animation = ''
                list2.removeAttribute('disabled')
                list3.removeAttribute('disabled')
            }, 1000);

            break;
        case 'list2':

            list1.classList.add('noactive')
            list2.classList.remove('noactive')
            list3.classList.add('noactive')

            list2.setAttribute('disabled', '')
            list1.setAttribute('disabled', '')
            list3.setAttribute('disabled', '')

            slide1.style.animation = 'move 1s running'
            slide2.style.animation = 'move2 1s running'
            slide3.style.animation = 'move 1s running'

            setTimeout(() => {
                slide1.style.zIndex = '1'

                slide1.classList.add('slide3')
                slide1.classList.remove('slide1')
                slide1.classList.remove('slide2')

                slide2.style.zIndex = '3'

                slide2.classList.remove('slide2')
                slide2.classList.remove('slide3')
                slide2.classList.add('slide1')

                slide3.style.zIndex = '2'

                slide3.classList.add('slide2')
                slide3.classList.remove('slide3')
                slide3.classList.remove('slide1')

            }, 500);
            setTimeout(() => {
                slide1.style.animation = ''
                slide3.style.animation = ''
                slide2.style.animation = ''
                list1.removeAttribute('disabled')
                list3.removeAttribute('disabled')
            }, 1000);



            break;
        case 'list3':
            list1.classList.add('noactive')
            list2.classList.add('noactive')
            list3.classList.remove('noactive')

            list3.setAttribute('disabled', '')
            list2.setAttribute('disabled', '')
            list1.setAttribute('disabled', '')

            slide1.style.animation = 'move 1s running'
            slide3.style.animation = 'move2 1s running'
            slide2.style.animation = 'move 1s running'
            setTimeout(() => {

                slide1.style.zIndex = '1'

                slide1.classList.add('slide3')
                slide1.classList.remove('slide1')
                slide1.classList.remove('slide2')

                slide2.style.zIndex = '2'

                slide2.classList.add('slide2')
                slide2.classList.remove('slide1')
                slide2.classList.remove('slide3')

                slide3.style.zIndex = '3'

                slide3.classList.add('slide1')
                slide3.classList.remove('slide3')
                slide3.classList.remove('slide2')

            }, 500)
            setTimeout(() => {
                slide1.style.animation = ''
                slide2.style.animation = ''
                slide3.style.animation = ''
                list1.removeAttribute('disabled')
                list2.removeAttribute('disabled')
            }, 1000);
            break;

        default:
            break;
    }

}




