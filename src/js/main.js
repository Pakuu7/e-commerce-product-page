const hamburgerNormalBtn = document.querySelector('.hamburger-normal')
const hamburgerActiveBtn = document.querySelector('.hamburger-active')
const menu = document.querySelector('.nav__items-mobile')
const sliderContainer = document.querySelector('.main__slider-mobile-container')
const nextBtn = document.querySelector('.main__slider-btn--next')
const prevBtn = document.querySelector('.main__slider-btn--prev')
const slides = document.querySelectorAll('.main__slider-mobile-image')
const quantityDecreaseBtn = document.querySelector('.product-details__quantity-btn--decrease')
const quantityIncreaseBtn = document.querySelector('.product-details__quantity-btn--increase')
const quantityValue = document.querySelector('.product-details__quantity-value')
const cartIcon = document.querySelector('.nav__cart-icon')
const cartList = document.querySelector('.nav__cart-list')
const xCartListIcon = document.querySelector('.nav__cart-list-header-icon')
const addToCartBtn = document.querySelector('.product-details__add-to-cart')
const cartListProduct = document.querySelector('.nav__cart-list-product')
const cartContainer = document.querySelector('.nav__cart-list-product')
const cartListInfo = document.querySelector('.nav__cart-list-product-info')
const desktopOtherImages = document.querySelectorAll('.main__gallery-desktop-image')
const desktopMainImage = document.querySelector('.main__gallery-desktop-main-image')
const checkOutBtnContainer = document.querySelector('.nav__cart-checkout-btn-container')

let currentIndex = 0
let productAmountValue = 0

function changeDesktopMainImage() {
	desktopOtherImages.forEach(image => {
		image.addEventListener('click', () => {
			desktopMainImage.src = image.src
		})
	})
}

changeDesktopMainImage()

addToCartBtn.addEventListener('click', () => {
	if (productAmountValue > 0) {
		const cartItem = document.createElement('div')
		cartItem.className = 'nav__cart-item'

		const productImage = document.createElement('img')
		productImage.src = 'dist/img/AirForce-1.png'
		productImage.className = 'nav__cart-item-img'
		productImage.alt = 'Product photo'
		cartItem.appendChild(productImage)

		const productInfo = document.createElement('p')
		productInfo.className = 'nav__cart-item-info'
		productInfo.innerHTML = `
		Air Force 1 Edition Sneakers $125.00 x 
		<span class="nav__cart-item-pieces">${productAmountValue}</span> 
		<span class="nav__cart-item-price-sum">$${(125.0 * productAmountValue).toFixed(2)}</span>
		`
		cartItem.appendChild(productInfo)

		const trashIcon = document.createElement('span')
		trashIcon.className = 'nav__cart-item-icon material-symbols-rounded'
		trashIcon.innerHTML = 'delete'
		trashIcon.addEventListener('click', () => {
			cartItem.remove()
		})
		
		cartItem.appendChild(trashIcon)
		cartContainer.appendChild(cartItem)

		if (cartListInfo) {
			cartListInfo.remove()
		}

		if (!document.querySelector('.nav__cart-checkout-btn')) {
			const checkoutBtn = document.createElement('button')
			checkoutBtn.className = 'nav__cart-checkout-btn'
			checkoutBtn.innerHTML = 'Checkout'

			checkOutBtnContainer.appendChild(checkoutBtn)
		}
	}
})

function cartListActive() {
	cartList.classList.toggle('active-cart')
}

cartIcon.addEventListener('click', cartListActive)
xCartListIcon.addEventListener('click', cartListActive)

function productAmount(productAmountValue) {
	quantityValue.value = productAmountValue
}
quantityValue.addEventListener('input', function (e) {
	if (e.target.value >= 100) {
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
	menu.classList.add('active')
}

function closeMobileMenu() {
	menu.classList.remove('active')
}

hamburgerNormalBtn.addEventListener('click', activeMobileMenu)
hamburgerActiveBtn.addEventListener('click', closeMobileMenu)
