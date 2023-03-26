    const closed_face = document.querySelector('.closed')
    const open_face = document.querySelector('.open')
    
    closed_face.addEventListener('click', () => {
        if(open_face.classList.contains('open')){
            open_face.classList.add('active');
            closed_face.classList.remove('active');
        }
    });

    open_face.addEventListener('click', () => {
        if(closed_face.classList.contains('closed')){
            closed_face.classList.add('active');
            open_face.classList.remove('active')
        }
    });

