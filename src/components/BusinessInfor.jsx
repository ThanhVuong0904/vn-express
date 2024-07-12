import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { businessInforItem } from '../fakedata/BusinessInforData';
export default function BusinessInfor() {
     return (
          <div className='section'>
               <div className="businessinfor">
                    <SwiperReact
                         modules={[Navigation, Pagination, Scrollbar, A11y]}
                         slidesPerView={4}
                         navigation
                    >
                         <div className="businessinfor-header">
                              <h3>Thông tin doanh nghiệp</h3>
                         </div>
                         <div className="businessinfor-list d-flex">
                              {
                              businessInforItem.map((item, index) => {
                                   return (
                                        <SwiperSlide>
                                             <div className="businessinfor-item" key={index}>
                                                  <img src={item.image} alt="" />
                                                  <a href="#">{item.name}</a>
                                             </div>
                                        </SwiperSlide>
                                   )
                              })
                              }
                         </div>
                    </SwiperReact>
               </div>
          </div>
     )
}
