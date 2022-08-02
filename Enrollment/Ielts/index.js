const imgSrc = "/assets/images/Timetable/grade6.jpg";

const contentInner = $(".content__inner");

const contentItems = [
    'Sự kết hợp giữa Trung tâm KHAI TÂM và IELTS VUI VẺ sẽ mang đến cho các bạn một trải nghiệm thú vị <span class="t-bold t-u-line">có một không hai</span> với mức giá học phí vô cùng hấp dẫn  ',
    '<i class="c-red fas fa-star"></i> <span class="t-bold">Sĩ số:</span> 12 bạn/ 1 lớp。',
    '<i class="c-aqua fas fa-star"></i> <span class="t-bold">Thời lượng học:</span> 3 tháng (60 tiếng)。',
    '<i class="c-yellow fas fa-star"></i> <span class="t-bold">Đầu vào:</span> vượt qua bài test đầu vào (không mất căn bản tiếng Anh)。',
    '<i class="c-purple fas fa-star"></i> <span class="t-bold">Đầu ra:</span> 5.0 – 7.5 theo năng lực và sự đầu tư thời gian của người học。',
    '<i class="c-green fas fa-chalkboard-teacher"></i> Giáo viên Thầy VÕ QUANG SANG xịn mịn  ',
    '<i class="c-orange fas fa-signature"></i> Có nhiều năm kinh nghiệm giảng dạy luyện thi IELTS。',
    '<i class="c-orange fas fa-signature"></i> Là người sáng lập chương trình tự học ”IELTS 100 DAYS CHALLENGE” cho cộng đồng。',
    '<i class="c-orange fas fa-signature"></i> Tác giả sách Writing Boost Vocabulary。',
    '<i class="c-orange fas fa-signature"></i> Tự học lập trình và tạo App giúp học viên cải thiện Speaking。',
    '<i class="c-red fas fa-fire"></i> Thời Khóa Biểu nè ✌✌ ',
    '<i class="c-green fas fa-leaf"></i> IELTS ①',
    '<i class="c-green fas fa-seedling"></i> Sáng T7-CN: 9h – 11h30',
    'IELTS ￼②',
    '<i class="c-green fas fa-seedling"></i> Chiều T7-CN: 14h – 16h30',
]

const contentItemsString = contentItems.map(string => `<li>${string}</li>`).join("")


const ieltsImgs = [
    '/assets/images/Ielts/IeltsImage1.png',
    '/assets/images/Ielts/IeltsImage2.png',
    '/assets/images/Ielts/IeltsImage3.png',
    '/assets/images/Ielts/IeltsImage4.png',
    '/assets/images/Ielts/IeltsImage5.png'
]

const ieltsImgsString = ieltsImgs.map((url) => `
    <li class="img-item"><img class="img" src="${url}" alt="Ảnh ielts"></li>
`).join("")


contentInner.innerHTML = `
<div class = "para__content">
<h2 class= "para__title">Khai Tâm chính thức khai mở lớp IELTS đầu tiên</h2>
    <ul class="content-wrapper">
        ${contentItemsString}
    </ul>
    <ul class="img-wrapper">
        ${ieltsImgsString}
    </ul>
</div>
`;
