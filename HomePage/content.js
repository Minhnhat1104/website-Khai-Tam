import {
    educationPosts, KhaiTamPosts
} from "/News/newsContent.js";

import students from '/Introduce/students.js'


// News

function handlenews() {
    const newsList = $(".news__wrapper");

    const twoEduPosts = []
    for (let i = 0; i < 2; i++) {
        const index = Math.floor(Math.random() * educationPosts.length)
        const postString = `
            <a href="/News/Education/Post${index+1}">
                <li class="new__item">
                    <img src="${educationPosts[index].postImg}" alt="news__img" class="new__img">
                    <div class="new__content">
                        <h2 class="new__title">${educationPosts[index].postTitle}</h2>
                        <span class="new__subtitle">
                            ${educationPosts[index].postText}
                        </span>
                    </div>
                </li>
            </a>
        `
        twoEduPosts.push(postString)
    }

    const twoKhaiTamPosts = []
    for (let i = 0; i < 2; i++) {
        const index = Math.floor(Math.random() * KhaiTamPosts.length)
        const postString = `
            <a href="/News/KhaiTamAcademy/Post${index+1}">
                <li class="new__item">
                    <img src="${KhaiTamPosts[index].postImg}" alt="news__img" class="new__img">
                    <div class="new__content">
                        <h2 class="new__title">${KhaiTamPosts[index].postTitle}</h2>
                        <span class="new__subtitle">
                            ${KhaiTamPosts[index].postText}
                        </span>
                    </div>
                </li>
            </a>
        `
        twoKhaiTamPosts.push(postString)
    }


    newsList.innerHTML = `
    <ul class="news__list">
        ${twoEduPosts.join("")}
        ${twoKhaiTamPosts.join("")}
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

function handleAchieve() {
    const threeRandomStudent = []
    for (let i = 0; i < 3; i++) {
        threeRandomStudent.push(students[Math.floor(Math.random() * students.length)])
    }

    const experWrapper = $('.achievement__wrapper')

    const content = threeRandomStudent.map(student => `
    <li class="achieve__item">
        <div class="achieve__item__inner">
            <img src="${student.url}"
                alt="student'sImage" class="achieve__img">
            <div class="achieve__content">
                <div class="name-and-score">
                    <span class="achieve__name">${student.name}</span>
                    <span class="achieve__score">${student.score}</span>
                </div>
                <span class="achieve__school">${student.school}</span>
                <span class="achieve__year">${student.year}</span>
            </div>
        </div>
    </li>
    `       
    ).join("")

    experWrapper.innerHTML = `
    <h2 class="achieve__title">Thành tích ở Khai Tâm</h2>
    <ul class="achievement__list">
        ${content}
    </ul>
    `
}


function start() {
    handlenews();
    handleExperience();
    handleAchieve();
}

start()