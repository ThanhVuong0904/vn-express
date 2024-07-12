import React from 'react'
import CommentIcon from '../assets/images/bxs-comment.svg'

export default function NewsItem({data}) {
     return (
          <div className='news-item'>
               <h3>{data.name}</h3>
               <div className="news-item-content">
                    <div className="news-item-image">
                         <img src={data.image} alt="" />
                    </div>
                    <div className='news-item-text'>
                         <p>
                              {data.location && <span className='location'>{data.location} - </span>}
                              {data.desc} 
                              {
                                   data.comment && 
                                   <span className='comment'>
                                        <img src={CommentIcon} alt={CommentIcon} />
                                        <span>{data.comment}</span>
                                   </span>
                              }
                         </p>
                    </div>
               </div>
          </div>
     )
}
