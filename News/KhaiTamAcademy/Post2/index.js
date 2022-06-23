import { postTitle, postBeforeText, postImg } from "./content.js";

const postAfterText = `
    “Các thí nghiệm mô phỏng của Meta STEM minh họa bài học một cách trực quan, sinh động. Người học có thể tương tác trực tiếp trên màn hình như thao tác kéo - thả, thanh trượt và nút chọn”, Trí chia sẻ.
`;

const postSource = "Nguồn: Vietnamnet";

const contentInner = $(".content__inner");

contentInner.innerHTML = `
    <div class="post__wrapper">
    <h2 class="post__title">${postTitle}</h2>
    <p class="post__text">
        ${postBeforeText}
    </p>
    <img src="${postImg}" alt="postImg" class="post__img">
    <p class="post__text">
    ${postAfterText}
    </p>
    <p class="post__source">${postSource}</p>
    </div>
`;
