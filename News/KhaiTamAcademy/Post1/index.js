import {KhaiTamPosts} from '../../newsContent.js'

const contentInner = $(".content__inner");

contentInner.innerHTML = `
    <div class="post__wrapper">
    <h2 class="post__title">${KhaiTamPosts[0].postTitle}</h2>
        <p class="post__text">
            ${KhaiTamPosts[0].postText}
        </p>
        <img src="${KhaiTamPosts[0].postImg}" alt="postImg" class="post__img">
        <p class="post__source">
            ${KhaiTamPosts[0].postSource}
        </p>
    </div>
`;
