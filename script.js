const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.image-slide')
const contents = document.querySelectorAll('.content');

        var sliderNav = function(manual){
            btns.forEach((btn) => {
                btn.classList.remove('active')
            });

            slides.forEach((slide) => {
                slide.classList.remove('active')
            });

            contents.forEach((content) => {
                content.classList.remove('active')
            });
             
            btns[manual].classList.add('active');
            slides[manual].classList.add('active');
            contents[manual].classList.add('active');
        }

        btns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                sliderNav(i);
            })
        })

const button = document.querySelector('button');

button.addEventListener('click', () => {
   if(navigator.geolocation) { // if browser supports geolocation api
    // geolocation.getCurrentPosition method is used to get current position of the device
    // it takes three parameters success, error, options. If everything is right then success
    // callback function will call else error callback function will call.
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
   }else{
    button.innerText = 'Browser not supported';
   }
});

function onSuccess(position){
    let {latitude, longitude} = position.coords;
    // Sending get request the api with passing latitude and longitude coordinates of the user position
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=3019f01b934e4a94b985e1b8a2e4954c`)
    .then(response => console.log(response.json()))
}

function onError(error){
    if(error.code == 1){ // if user denied the request
        button.innerText = 'You denied the request';
    }
    else if(error.code == 2){ // if location is not available
        button.innerText = 'Location not avaible';
    }else{ // if any other error occurred
        button.innerText = 'Something went wrong';
    }
    button.setAttribute('disabled', 'true'); // if user denied the pop up request then the button will be disabled
}