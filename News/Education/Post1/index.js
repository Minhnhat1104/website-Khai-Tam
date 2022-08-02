import {educationPosts} from '../../newsContent.js'

const contentInner = $(".content__inner");

contentInner.innerHTML = `
    <div class="post__wrapper">
    <h2 class="post__title">${educationPosts[0].postTitle}</h2>
        <p class="post__text">
            ${educationPosts[0].postText}
        </p>
        <img src="${educationPosts[0].postImg}" alt="postImg" class="post__img">
        <p class="post__source">
            ${educationPosts[0].postSource}
        </p>
    </div>
`;
