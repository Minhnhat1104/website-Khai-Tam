import { title, body, footer } from "./content.js";

const contentInner = $(".content__inner");

contentInner.innerHTML = `
<h2 class="content__title">${title}</h2>
<p class="content__body">
    ${body}
</p>
<p class="content__footer">${footer}</p>
`;
