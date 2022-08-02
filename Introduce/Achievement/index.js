import students from "../students.js"


const renderStudent = function() {
    const achievementWrapper = $('.achievement__wrapper')

    const content = students.map(student => `
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

    achievementWrapper.innerHTML = `
    <h2 class="achieve__title">Thành tích ở Khai Tâm</h2>
    <ul class="achievement__list">
        ${content}
    </ul>
    `
} 

renderStudent()