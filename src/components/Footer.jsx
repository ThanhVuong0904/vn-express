import React from 'react'
import Container from './Container'

export default function Footer() {
     return (
          <footer className='footer'>
               <Container>
                    <div className="footer-top">
                         <a className="footer-logo">
                              <img src='https://s1.vnecdn.net/vnexpress/restruct/i/v509/v2_2019/pc/graphics/logo.svg' alt='logo' />
                         </a>
                         <div className="footer-right d-flex align-items-center">
                              <a href="#" className='RSS'>RSS</a>
                              <span>Theo dõi VnExpress trên</span>
                              <div className="footer-social d-flex">
                                   <div className="footer-facebook footer-social-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" fill="#757575"/>
                                        </svg>
                                   </div>
                                   <div className="footer-twitter footer-social-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                             <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" fill="#757575"/>
                                        </svg>
                                   </div>
                                   <div className="footer-youtube footer-social-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" fill="#757575"/>
                                        </svg>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="footer-list">
                         <div className="footer-item">
                              <p><strong>Báo tiếng Việt nhiều người xem nhất</strong></p>
                              <p>Thuộc Bộ Khoa học Công nghệ</p>
                              <p>Số giấy phép: 06/GP-BTTTT ngày 03/01/2014</p>
                         </div>
                         <div className="footer-item">
                              <p>Tổng biên tập: Phạm Hiếu</p>
                              <p>Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội</p>
                              <p>Điện thoại: 024 7300 8899 - máy lẻ 4500</p>
                         </div>
                         <div className="footer-item">
                              <p>© 1997-2021. Toàn bộ bản quyền thuộc VnExpress</p>
                         </div>
                    </div>
               </Container>
          </footer>
     )
}
