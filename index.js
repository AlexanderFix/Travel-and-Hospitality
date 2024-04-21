const slide1 = document.getElementById('slide1')
const slide2 = document.getElementById('slide2')
const slide3 = document.getElementById('slide3')



function slide(e) {

    switch (e.id) {
        case 'list1':
            slide1.style.animation = 'move2 1s running'
            slide2.style.animation = 'move 1s running'
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
            slide1.style.animation = ''
            slide2.style.animation = ''
            }, 750);
          
            break;
        case 'list2':
            slide1.style.animation = 'move 1s running'
            slide2.style.animation = 'move2 1s running'
            setTimeout(() => {
                 slide1.style.zIndex = '1'
            slide1.classList.add('slide3')
            slide1.classList.remove('slide1')
            slide1.classList.remove('slide2')
            slide2.style.zIndex = '3'
            slide2.classList.add('slide1')
            slide2.classList.remove('slide2')
            slide2.classList.remove('slide3')
            slide3.style.zIndex = '2'
            slide3.classList.add('slide2')
            slide3.classList.remove('slide3')
            slide3.classList.remove('slide1')
            slide1.style.animation = ''
            slide2.style.animation = ''
            }, 750);
           
            
            break;
        case 'list3':
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
            break;

        default:
            break;
    }

}




