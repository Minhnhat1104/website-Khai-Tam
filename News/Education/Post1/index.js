import { postTitle, postText, postImg } from "./content.js";

const postSource = "Nguồn: Vietnamnet";

const contentInner = $(".content__inner");

contentInner.innerHTML = `
    <div class="post__wrapper">
    <h2 class="post__title">${postTitle}</h2>
        <p class="post__text">
            ${postText}
        </p>
        <img src="${postImg}" alt="postImg" class="post__img">
        <p class="post__source">
            ${postSource}
        </p>
    </div>
`;
