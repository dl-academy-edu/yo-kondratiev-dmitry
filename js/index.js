var popup = document.querySelector('.popup')
var popupBtn = document.querySelector('.banner-js')
var popupClose = document.querySelector('.popup-close')


popupBtn.addEventListener('click', function() {
    popup.classList.add('popup-open')
})

popupClose.addEventListener('click', function() {
    popup.classList.remove('popup-open')
})