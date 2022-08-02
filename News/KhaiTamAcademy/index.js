

import {KhaiTamPosts} from '../newsContent.js'


const contentInner = document.querySelector(".content__inner");

const newsItemString = KhaiTamPosts.map((post,index) => `
    <li class="new__item">
        <a href="/News/KhaiTamAcademy/Post${index+1}" class="new__link">
            <div class="new__title">
                ${post.postTitle}
            </div>
            <div class="new__content">
                <img src="${post.postImg}"
                    alt="postImg" class="new__img">
                <div class="new__subtitle">
                    ${post.postText}
                </div>
            </div>
        </a>
    </li>
`).join("")

contentInner.innerHTML = `
    <ul class="news__list">
    ${newsItemString}
</ul>
`;
