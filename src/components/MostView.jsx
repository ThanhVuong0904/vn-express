import React from 'react'
import Comment from '../assets/images/bxs-comment.svg'
import { mostviewItem } from '../fakedata/MostviewData'
export default function MostView() {
     return (
          <div className='mostview'>
               <div className="mostview-header">
                    <h3><a href="#">Xem nhiều</a></h3>
               </div>
               <div className="mostview-list">
                    {
                         mostviewItem.map((item, index) => {
                              return (
                                   <div className="mostview-item d-flex align-items-center">
                                        <h1>{item.rank}</h1>
                                        <span>
                                             <a href="#" className='mostview-link'>{item.content}</a>
                                             {item.comment && (
                                                  <span className='comment'>
                                                       <img src={Comment} alt="" />
                                                       <span>{item.comment}</span>
                                                  </span>
                                             )}
                                        </span>
                                   </div>
                              )
                         })
                    }
               </div>
          </div>
     )
}
