import React from 'react'
const Data = [
     {
          heading: 'Thời sự', subHeading: ['Chính trị', 'Dân sinh', 'Giao thông'],
          image: 'https://i1-vnexpress.vnecdn.net/2021/12/24/1-3944-1640318940.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=rpycg5S4510M5MElJjVrjg',
          title: 'Phòng khám từ thiện của các tu sĩ',
          desc: 
          'Các tu sĩ ở Tổng Giáo phận Huế đã tình nguyện chăm sóc, hỗ trợ điều trị F0 để đem đến sự bình an cho cộng đồng.',
          location: 'Thừa Thiên - Huế',
          sub: [
               {
                    title: 'Đường ven sông trung tâm Biên Hòa được khởi công', 
                    desc:'Tuyến đường ven sông Đồng Nai dài 5,2 km, tổng đầu tư gần 1.300 tỷ đồng, kết nối TP Biên Hòa và huyện Vĩnh Cửu, khởi công sáng 25/12.',
                    location: 'Đồng Nai'
               }
          ]
     },
     {
          heading: 'Thế giới', subHeading: ['Tư liệu', 'Phân tích'],
          image: 'https://i1-vnexpress.vnecdn.net/2021/12/25/zhou-1618726224-4309-161872630-7770-7209-1640408697.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=trs_vpuXZlNJq0Ky1Y21DQ',
          title: 'Trung Quốc soạn luật chống quấy rối tình dục nơi công sở',
          desc: 
          'Quốc hội Trung Quốc đang xem xét dự luật nhằm hạn chế phân biệt đối xử và ngăn chặn hành vi quấy rối tình dục nơi công sở.',
          sub: [
               {
                    title: 'Trung Quốc cải hoán chiến hạm thành tàu hải cảnh', 
                    desc:'Hộ vệ hạm cỡ nhỏ Type-056 của hải quân Trung Quốc được tháo tên lửa, lắp vòi rồng để chuyển giao cho lực lượng hải cảnh.',
                    location: ''
               }
          ]
     },
     {
          heading: 'Pháp luật', subHeading: ['Hồ sơ phá án', 'Tư vấn'],
          image: 'https://i1-vnexpress.vnecdn.net/2021/12/25/NHITROMDT-1640408177-5221-1640408271.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=er18I9hwOm8DjWzpV_k8rA',
          title: 'Đột nhập tiệm cầm đồ trộm 71 điện thoại',
          desc: 'Phan Văn Nhí, 28 tuổi, cắt mái tôn đột nhập tiệm cầm đồ ở quận Ninh Kiều, trộm 71 điện thoại trị giá gần nửa tỷ đồng.',
          location: 'Cần thơ',
          sub: [
               {
                    title: 'Toan tính của người đàn bà trung niên ngoại tình', 
                    desc:'Lợi dụng lòng tốt của chồng, Patty Presba đưa nhân tình đáng tuổi con vào sống chung nhà. Cô ta giết chồng để chiếm đoạt tiền bảo hiểm và lập mưu sát hại người tình.',
                    location: 'Mỹ'
               }
          ]
     }
]
export default function NewsThreeItem() {
     return (
          <div className='section d-grid grid-col-3 grid-gap-col-40 news-item-with-header'>
               {
                    Data.map((item, index) => {
                         return (
                              <div className="item" key={index}>
                                   <div className="header d-flex align-items-center">
                                        <h3 className='header-title'><a href="#">{item.heading}</a></h3>
                                        {
                                             item.subHeading.map((sub, index) => 
                                                  <a key={index} href="#" className='header-link'>{sub}</a>
                                             )
                                        }
                                   </div>
                                   <div className="news-content">
                                        <img src={item.image} alt={item.image} />
                                        <a href='#'className='title'>{item.title}</a>
                                        <p className='desc'>
                                             {item.location && <span className='location'>{item.location}- </span>}
                                             {item.desc}
                                        </p>
                                   </div>
                                   {item.sub.map((sub, index) => {
                                        return (
                                        <div className="sub-news" key={index}>
                                             <a href='#' className='title'>{sub.title}</a>
                                             <p className='desc'>
                                                  {sub.location && <span className='location'>{sub.location}- </span>}
                                                  {sub.desc}
                                             </p>
                                        </div>
                                        )
                                   })}
                              </div>
                         )
                    })
               }
          </div>
     )
}
