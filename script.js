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