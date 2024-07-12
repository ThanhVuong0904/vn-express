import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function FootballSchedule({data}) {
     return (
          <div className='section'>
               <div className="box-sport">
                    <SwiperReact
                         modules={[Navigation, Pagination, Scrollbar, A11y]}
                         slidesPerView={4}
                         navigation
                    >
                         {data.map((item, index) => (
                              <SwiperSlide key={index}>
                                   <div className="box-sport-item">
                                        <div className='wrap-match'>
                                             <p className='box-sport-time'>{item.time}</p>
                                             {item.team.map((team, index) => {
                                                  return (
                                                       <div key={index} className='d-flex align-items-center'>
                                                            <img src={team.image} alt="" />
                                                            <p className='box-sport-name'>{team.name}</p>
                                                       </div>
                                                  )
                                             })}
                                        </div>
                                   </div>
                              </SwiperSlide>
                         ))}
                    </SwiperReact>
               </div>
          </div>
     )
}