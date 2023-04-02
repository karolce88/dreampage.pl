const navMobile = document.querySelector('.nav-mobile') // nav
const navBtn = document.querySelector('.hamburger') // nav
const footerYear = document.querySelector('.footer__year') // current year
const msgStatus = document.querySelector('.msg-status') // contact form

// nav
const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile-active')
}
navBtn.addEventListener('click', handleNav)

const closeMobileNav = () => {
	navMobile.classList.remove('nav-mobile-active')
	navBtn.classList.toggle('is-active')
}
navMobile.addEventListener('click', closeMobileNav)
// nav

// current year
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
// current year

// code to contact form
console.log(document.location.search)

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('success')
	msgStatus.textContent = 'Wiadomośc wysłana pomyślnie!'

	setTimeout(() => {
		msgStatus.classList.remove('success')
	}, 3000)
}
if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('error')
	msgStatus.textContent = 'Wystąpił błąd'

	setTimeout(() => {
		msgStatus.classList.remove('error')
	}, 3000)
}
// code to contact form
