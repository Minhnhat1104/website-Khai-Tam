import students from "./students.js"

const contentInner = $('.content__inner')

const renderStudent = function() {
    const studentsRender = students.map(student => `
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
                    <span class="exper__school">Quoc Hoc high school</span>
                    <span class="exper__year">2019-2020</span>
                </div>
                <img src="${student.url}"
                    alt="" class="exper__img">
            </div>
        </div>
    </li>
    `).join("")
    
    
    contentInner.innerHTML = `
    <h2 class = "exper__title">Trải nghiệm của học sinh</h2>
    <ul class="exper__list">
        ${studentsRender}
    </ul>
    `
} 

renderStudent()