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

window.onload = () => {
    //Navigation
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
    //Testimonials
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
    testimonialPrev.addEventListener('click', () => changeTestimonial(activeTestimonial - 1))
    testimonialNext.addEventListener('click', () => changeTestimonial(activeTestimonial + 1))
    //Slideshow
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
    sliderPrev.addEventListener('click', () => changeSlider(activeSlider - 1))
    sliderNext.addEventListener('click', () => changeSlider(activeSlider + 1))
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