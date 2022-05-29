export const postTitle = 'Những trường THPT được ưu tiên xét tuyển vào ĐH Quốc gia TP.HCM.'

export const postText = `ĐH Quốc gia TP.HCM sẽ dành tối đa 20% tổng chỉ tiêu xét theo phương thức này. Điều kiện đăng ký theo quy định của từng đơn vị thành viên viên/trực thuộc ĐH Quốc gia TP.HCM gồm: Trường ĐH Bách khoa, Trường ĐH Khoa học tự nhiên, Trường ĐH Khoa học Xã hội và Nhân văn, Trường ĐH Công nghệ thông tin, Trường ĐH Quốc tế, Trường ĐH Kinh tế Luật, Trường ĐH An Giang, Khoa Y. Thời gian thí sinh đăng ký xét tuyển từ 25/5 đến 15/6. Thí sinh sẽ đăng ký theo cả hình thức trực tuyến lẫn trực tiếp tại đơn vị xét tuyển. <br> Hồ sơ xét tuyển học bạ ĐH Quốc gia TPHCM gồm: Phiếu đăng ký ưu tiên xét tuyển được in từ hệ thống đăng ký trực tuyến trên cổng thông tin; Các hồ sơ yêu cầu đính kèm tương ứng cho từng đơn vị tham khảo điều kiện đăng ký xét tuyển do Hội đồng tuyển sinh các đơn vị quy định.`

export const postImg = '/News/Education/Post1/EduPostImg1.png'

const postSource = 'Nguồn: Vietnamnet'


const $ = document.querySelector.bind(document)

const contentInner = $('.content__inner')

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
`