/**
    Headway Hosting Theme - A responsive theme for web hosting providers.
    Copyright (C) 2022  Abdelhady Salah

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const mobileNav = () => {
    /** Mobile Nav **/
    const mobNavElement = document.querySelector('.mobile-menu-nav')
    mobNavElement.addEventListener('click', () => {
        const headerNav = document.querySelector('.header-nav')
        headerNav.classList.toggle('header-nav-show')
    })
    const closeOverlayElement = document.querySelector('.icon-mobile-close-overlay')
    closeOverlayElement.addEventListener('click', () => {
        const headerNav = document.querySelector('.header-nav')
        headerNav.classList.toggle('header-nav-show')
    })
}

const slideShow = () => {
    let activeSlider = 0
    const sliders = document.querySelectorAll('.slider')
    const maxSliders = sliders.length
    const changeSlider = (n) => {
        if (n >= maxSliders) {
            n = 0
        }
        if (n < 0) {
            n = maxSliders - 1
        }
        activeSlider = n
        for (const slider of sliders) {
            if (slider.classList.contains('slider-active')) {
                slider.classList.remove('slider-active')
            }
        }
        sliders[activeSlider].classList.add('slider-active')
    }
    const sliderPrev = document.querySelector('.slider-prev')
    const sliderNext = document.querySelector('.slider-next')
    sliderPrev && sliderPrev.addEventListener('click', () => changeSlider(activeSlider - 1))
    sliderNext && sliderNext.addEventListener('click', () => changeSlider(activeSlider + 1))
}

const testimonials = () => {
    let activeTestimonial = 0
    const testimonials = document.querySelectorAll('.testimonial')
    const maxTestimonials = testimonials.length
    const changeTestimonial = (n) => {
        if (n >= maxTestimonials) {
            n = 0
        }
        if (n < 0) {
            n = maxTestimonials - 1
        }
        activeTestimonial = n
        for (const testimonial of testimonials) {
            if (testimonial.classList.contains('testimonial-active')) {
                testimonial.classList.remove('testimonial-active')
            }
        }
        testimonials[activeTestimonial].classList.add('testimonial-active')
    }
    const testimonialPrev = document.querySelector('.testimonial-prev')
    const testimonialNext = document.querySelector('.testimonial-next')
    testimonialPrev && testimonialPrev.addEventListener('click', () => changeTestimonial(activeTestimonial - 1))
    testimonialNext && testimonialNext.addEventListener('click', () => changeTestimonial(activeTestimonial + 1))
}

const headerNav = () => {
    const headerNav = document.querySelector('.header-nav')
    headerNav.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'LI' && !e.target.classList.contains('active')) {
            e.target.classList.add('secondary-light-blue-border-bottom')
        }
    })
    headerNav.addEventListener('mouseout', (e) => {
        if (e.target.tagName === 'LI' && !e.target.classList.contains('active')) {
            e.target.classList.remove('secondary-light-blue-border-bottom')
        }
    })
}

window.onload = () => {
    headerNav()
    testimonials()
    slideShow()
    mobileNav()
}

/** Stats Feature */

let statsActivated = false

const countStat = (increment, cur, end) => {
    if ((cur + increment) > end) {
        return (cur = end)
    }
    cur = (cur + increment)
    return cur
}

const reflectStatUpdate = (element, increment, cur, end) => {
    const countCurStat = countStat(increment, cur, end)
    element.textContent = cur
    countCurStat !== end && setTimeout(() => reflectStatUpdate(element, 1000, countCurStat, end), 50)
    countCurStat === end && (element.textContent += '+')
}

const countStats = () => {
    if (statsActivated === true) return false
    statsActivated = true
    const statsNumbers = document.querySelectorAll('.stats-number')
    for (let statsNumber of statsNumbers) {
        setTimeout(() => reflectStatUpdate(statsNumber, 1000, 0, statsNumber.textContent), 1000)
    }
}

const checkStats = () => {
    /** Stats Numbers **/
    const statsContainerElement = document.querySelector('.stats-container')
    if (statsContainerElement) {
        const rect = statsContainerElement.getBoundingClientRect()
        const offsetY = rect.y
        if (offsetY <= 200 && offsetY >= -200) {
            countStats()
        }
    }
}

window.onscroll = () => {
    !statsActivated && checkStats()
}