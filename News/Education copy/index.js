import {postTitle as postTile1,postImg as postImg1,postText} from './Post1/index.js'
import {postTitle as postTile2,postBeforeText,postImg as postImg2} from './Post2/index.js'

const contentInner = document.querySelector('.content__inner')


contentInner.innerHTML = `
    <ul class="news__list">
    <li class="new__item">
        <a href="/News/Education/Post1" class="new__link">
            <div class="new__title">
                ${postTile1}
            </div>
            <div class="new__content">
                <img src="${postImg1}"
                    alt="postImg" class="new__img">
                <div class="new__subtitle">
                    ${postText}
                </div>
            </div>
        </a>
    </li>
    <li class="new__item">
        <a href="/News/Education/Post2" class="new__link">
            <div class="new__title">
                ${postTile2}
            </div>
            <div class="new__content">
                <img src="${postImg2}"
                    alt="postImg" class="new__img">
                <div class="new__subtitle">
                    ${postBeforeText}
                </div>
            </div>
        </a>
    </li>
</ul>
`