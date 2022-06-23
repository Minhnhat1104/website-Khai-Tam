import { postTitle, postBeforeText, postImg } from "./content.js";

const postAfterText =
  "'Giá sách chịu tác động của yếu tố thị trường' <br> Với việc thực hiện xã hội hóa biên soạn SGK, các nhà xuất bản sẽ được tham gia in ấn, phát hành…  NXB tự bỏ tiền chi cho khâu biên soạn sách nên giá sách chịu các yếu tố tác động của thị trường. Theo quy định của Luật Giá, giá SGK do doanh nghiệp (các nhà xuất bản) tự xây dựng, quyết định giá bán, chịu trách nhiệm trước pháp luật về tính đúng đắn, phù hợp của phương án giá SGK và thực hiện kê khai giá với Bộ Tài chính trước khi đưa ra thị trường; đồng thời niêm yết, công khai đầy đủ thông tin về giá sách. <br> Bộ GD-ĐT cũng cho biết đã đề nghị các Nhà xuất bản kê khai giá; rà soát tiết giảm tối đa chi phí sản xuất để giảm giá sách SGK; hỗ trợ SGK cho học sinh thuộc đối tượng chính sách xã hội, học sinh vùng sâu, vùng xa, vùng khó khăn, hỗ trợ thư viện trường học để có đủ SGK; truyền thông rộng rãi về SGK theo chương trình mới. <br> Tuy nhiên, cơ chế kê khai giá như hiện nay sẽ có thể dẫn đến hiện tượng mức giá cao, thấp khác nhau tạo tâm lý bất ổn cho phụ huynh và học sinh, trong khi đó SGK thuộc nhóm vật tư giáo dục thiết yếu của học sinh; ảnh hưởng đến an sinh xã hội, đặc biệt người dân ở vùng sâu, vùng xa, vùng kinh tế khó khăn nên Nhà nước cần có giải pháp cấp bách để điều tiết giá. <br> Vì vậy, Bộ GD-ĐT đã có văn bản kiến nghị Bộ Tài chính và Chính phủ xem xét, quyết định đưa SGK vào danh mục hàng hóa do Nhà nước định giá tối đa để trình Quốc hội quyết định. <br>";

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
