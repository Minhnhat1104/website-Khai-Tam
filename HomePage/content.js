import {
  postTitle as postTitle1,
  postText as postText1,
  postImg as postImg1,
} from "/News/Education/Post1/content.js";

import {
  postTitle as postTitle2,
  postBeforeText as postText2,
  postImg as postImg2,
} from "/News/Education/Post2/content.js";

import {
  postTitle as postTitle3,
  postText as postText3,
  postImg as postImg3,
} from "/News/KhaiTamAcademy/Post1/content.js";
import {
  postTitle as postTitle4,
  postBeforeText as postBeforeText4,
  postImg as postImg4,
} from "/News/KhaiTamAcademy/Post2/content.js";

import students from "../Introduce/StudentExperience/students.js";


// News

function handlenews() {
    const newsList = $(".news__wrapper");

    newsList.innerHTML = `
    <ul class="news__list">
        <a href="/News/Education/Post1">
            <li class="new__item">
                <img src="${postImg1}" alt="news__img" class="new__img">
                <div class="new__content">
                    <h2 class="new__title">${postTitle1}</h2>
                    <span class="new__subtitle">
                        ${postText1}
                    </span>
                </div>
            </li>
        </a>
        <a href="/News/Education/Post2">
            <li class="new__item">
                <img src="${postImg2}" alt="news__img" class="new__img">
                <div class="new__content">
                    <h2 class="new__title">${postTitle2}</h2>
                    <span class="new__subtitle">
                        ${postText2}
                    </span>
                </div>
            </li>
        </a>
        <a href="/News/KhaiTamAcademy/Post1">
            <li class="new__item">
                <img src="${postImg3}" alt="news__img" class="new__img">
                <div class="new__content">
                    <h2 class="new__title">${postTitle3}</h2>
                    <span class="new__subtitle">
                        ${postText3}
                    </span>
                </div>
            </li>
        </a>
        <a href="/News/KhaiTamAcademy/Post2">
            <li class="new__item">
                <img src="${postImg4}" alt="news__img" class="new__img">
                <div class="new__content">
                    <h2 class="new__title">${postTitle4}</h2>
                    <span class="new__subtitle">
                        ${postBeforeText4}
                    </span>
                </div>
            </li>
        </a>
    </ul>

    `;

}

// experience

function handleExperience() {
    const threeRandomStudent = []
    for (let i = 0; i < 3; i++) {
        threeRandomStudent.push(students[Math.floor(Math.random() * students.length)])
    }

    const experWrapper = $('.exper__wrapper')

    const content = threeRandomStudent.map(student => `
        <li class="exper__item">
        <div class="exper__item__inner">
            <div class="icon-and-text">
                <i class="exper__icon far fa-comments"></i>
                <span class="exper__text">
                    ${student.content}
                </span>
            </div>
            <div class="exper__content">
                <div class="exper__info">
                    <span class="exper__name">${student.name}</span>
                    <span class="exper__school">${student.school}</span>
                    <span class="exper__year">${student.year}</span>
                </div>
                <img src="${student.url}"
                    alt="" class="exper__img">
            </div>
        </div>
    </li>
    `       
    ).join("")

    experWrapper.innerHTML = `
    <h2 class="exper__title">Trải nghiệm ở Khai Tâm</h2>
    <ul class="exper__list">
        ${content}
    </ul>
    `
}


function start() {
    handlenews();
    handleExperience();
}

start()