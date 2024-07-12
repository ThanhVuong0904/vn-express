import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { eventItem1, eventItem2 } from '../fakedata/EventData'
export default function Event() {
     return (
          <div className='event'>
               <SwiperReact
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    navigation
               >
                    <SwiperSlide>
                         <div className='d-grid grid-col-2 grid-gap-20 mt-10'>
                              {
                                   eventItem1.map((item, index) => {
                                        return (
                                             <div className="event-item d-flex" key={index}>
                                                  <img src={item.image} alt="" />
                                                  <a href="#">{item.name}</a>
                                             </div>
                                        )
                                   })
                              }
                         </div>
                    </SwiperSlide>
                    <SwiperSlide>
                         <div className='d-grid grid-col-2 grid-gap-20 mt-10'>
                              {
                                   eventItem2.map((item, index) => {
                                        return (
                                             <div className="event-item d-flex" key={index}>
                                                  <img src={item.image} alt="" />
                                                  <a href="#">{item.name}</a>
                                             </div>
                                        )
                                   })
                              }
                         </div>
                    </SwiperSlide>
                    <div className="event-header d-flex align-items-center justify-content-between">
                         <h4>Sự kiện</h4>
                    </div>
               </SwiperReact>
          </div>
     )
}
