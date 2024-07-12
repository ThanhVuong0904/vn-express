import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { covidData } from '../fakedata/CovidData';

export default function Covid() {
     return (
          <div className='section'>
               <div className="covid">
                    <div className="covid-take">
                         <SwiperReact
                              modules={[Navigation, Pagination, Scrollbar, A11y]}
                              slidesPerView={4}
                              navigation
                         >
                              <SwiperSlide>Tư vấn F0</SwiperSlide>
                              <SwiperSlide className='covid-take-item'>Người bệnh nền</SwiperSlide>
                              <SwiperSlide className='covid-take-item'>Sử dụng thuốc</SwiperSlide>
                              <SwiperSlide className='covid-take-item'>Tập thở, làm sạch phổi</SwiperSlide>
                              <SwiperSlide className='covid-take-item'>Phục hồi sức khỏe</SwiperSlide>
                              <SwiperSlide className='covid-take-item more'><span>...</span>Xem thêm</SwiperSlide>
                         </SwiperReact>
                    </div>
                    <div className="covid-statistics">
                         <h3>Covid-19 tại Việt Nam</h3>
                         <div className="covid-statistics-item">
                              <div className="covid-statistics-item-left">
                                   <div className="thead">
                                        <div className="thead-item"></div>
                                        <div className="thead-item count-head">Công bố <br /> hôm qua</div>
                                        <div className="thead-item count-head">Tổng</div>
                                   </div>
                                   <div className="tbody">
                                        <div className="tbody-item txt-label">Nhiễm *</div>
                                        <div className="tbody-item count-day fw-600 fz-20">16.367</div>
                                        <div className="tbody-item count-all fw-600 fz-20">1.598.237</div>
                                   </div>
                                   <div className="tbody">
                                        <div className="tbody-item txt-label">Khỏi</div>
                                        <div className="tbody-item count-khoi-day fw-600 fz-20">10.944</div>
                                        <div className="tbody-item count-khoi-all fw-600 fz-20">1.184.428</div>
                                   </div>
                                   <div className="tbody">
                                        <div className="tbody-item txt-label">Tử vong</div>
                                        <div className="tbody-item count-tuvong-day fw-600 fz-20">280</div>
                                        <div className="tbody-item count-tuvong-all fw-600 fz-20">30.531</div>
                                   </div>
                              </div>
                              <div className="covid-statistics-item-right">
                                   <div className="thead">
                                        <div className="thead-item count-head">Tỉnh</div>
                                        <div className="thead-item count-head">Công bố <br /> hôm qua</div>
                                        <div className="thead-item count-head">Tổng nhiễm</div>
                                   </div>
                                   <div className="wrap">
                                   {
                                        covidData.map((item, index) => {
                                             return (
                                                  <div className="tbody" key={index}>
                                                       <div className="tbody-item">{item.country}</div>
                                                       <div className="tbody-item"><strong>+{item.day}</strong></div>
                                                       <div className="tbody-item" style={{color: '#222'}}>{item.all}</div>
                                                  </div>
                                             )
                                        })
                                   }
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className='thongtinthem'>
                    <span>* Ca nhiễm cộng đồng từ 27/4. Cập nhật: 18:19, 23/12</span>
                    <a href="#">Tin tức Covid-19</a>
                    <a href="#" className='xemthem'>Xem thêm</a>
               </div>
               <div className="sick">
                    <div className="sick-item has-bg">
                         <img src="https://s1.vnecdn.net/vnexpress/restruct/j/v2721/v3/helper/interactions/covid/images/graphics/noun_heal.svg" alt="" />
                         <span>Bệnh thông thường</span>
                    </div>
                    <div className="swiper-sick">
                         <SwiperReact
                              modules={[Navigation, Pagination, Scrollbar, A11y]}
                              navigation
                         >
                              <SwiperSlide><a href="#">Huyết áp tăng cao, uống thuốc không hạ phải làm sao?</a></SwiperSlide>
                              <SwiperSlide><a href="#">Độ tuổi nào dễ mắc bệnh cơ xương khớp?</a></SwiperSlide>
                              <SwiperSlide>
                                   <a href="#">Nút mạch trong mổ lấy thai, bảo toàn tử cung cho thai phụ</a>
                              </SwiperSlide>
                         </SwiperReact>
                    </div>
                    <div className="sick-item has-bg">
                         <img src="https://s1.vnecdn.net/vnexpress/restruct/j/v2721/v3/helper/interactions/covid/images/graphics/help.svg" alt="" />
                         <span>Hỏi bác sĩ</span>
                    </div>
               </div>
          </div>
     )
}
