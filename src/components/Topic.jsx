import React from 'react'
import TrendIcon from '../assets/images/bx-trending-up.svg'
export default function Topic() {
     return (
          <div className='section'>
               <div className="topic d-flex align-items-center">
                    <div className="topic-title d-flex align-items-center">
                         <img src={TrendIcon} alt={TrendIcon} />
                         <span>Chủ đề</span>
                    </div>
                    <div className="topic-list d-flex">
                         <a href="#">Phục hồi kinh tế</a>
                         <a href="#">Hội nghị COP26</a>
                         <a href="#">Đề án thu phí vào nội đô Hà Nội</a>
                    </div>
               </div>
          </div>
     )
}
