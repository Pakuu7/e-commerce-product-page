const hamburgerBtn = document.querySelector('.hamburger')
const menu = document.querySelector('.nav__items')
const sliderContainer = document.querySelector('.main__slider-container')
const nextBtn = document.querySelector('.main__slider-btn--next')
const prevBtn = document.querySelector('.main__slider-btn--prev')
const slides = document.querySelectorAll('.main__slider-image')
const quantityDecreaseBtn = document.querySelector('.product-details__quantity-btn--decrease')
const quantityIncreaseBtn = document.querySelector('.product-details__quantity-btn--increase')
const quantityValue = document.querySelector('.product-details__quantity-value')

let currentIndex = 0
let productAmountValue = 0

function productAmount(productAmountValue) {
	quantityValue.value = productAmountValue
    console.log(quantityValue.value);
}
quantityValue.addEventListener('input', function(e) {
    if(e.target.value >= 100) {
        e.target.value = 100
    }
})
quantityValue.addEventListener('keyup', () => {
    productAmountValue = quantityValue.value
})


function productDecreaseAmount() {
	quantityDecreaseBtn.addEventListener('click', () => {
		if (productAmountValue > 0) {
			productAmountValue--
			productAmount(productAmountValue)
		} else {
			return
		}
	})
}

function productIncreaseAmount() {
	quantityIncreaseBtn.addEventListener('click', () => {
		if (productAmountValue < 100) {
			productAmountValue++
			productAmount(productAmountValue)
		} else {
			return
		}
	})
}

productIncreaseAmount()

productDecreaseAmount()

function showSlide(index) {
	sliderContainer.style.transform = `translateX(-${index * 100}%)`
}

nextBtn.addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % slides.length
	showSlide(currentIndex)
})

prevBtn.addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length
	showSlide(currentIndex)
})

function activeMobileMenu() {
	hamburgerBtn.classList.toggle('is-active')
	menu.classList.toggle('active')
}

hamburgerBtn.addEventListener('click', activeMobileMenu)
