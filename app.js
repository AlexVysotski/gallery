const img1 = document.querySelectorAll('img');
const body = document.querySelector('body');


if(localStorage.url){
    url = JSON.parse(localStorage.url);
    body.style.backgroundImage = `url(${localStorage.url})`;
}else{
    body.style.backgroundImage = `url(${img1[0].getAttribute('src')})`;
}


window.addEventListener('click', (e => {
    e.preventDefault();
    img1.forEach(item => {
        item.classList.remove('active');
        if(item === e.target){
            item.classList.add("active");
            const url = item.getAttribute('src');
            localStorage.url = JSON.stringify(url);
            body.style.backgroundImage = `url(${localStorage.url})`;
            body.style.backgroundSize = '100%';
            console.log(localStorage.url);
        }
        
    })
}))

