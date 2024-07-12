import React from 'react'
import { sponsorNewsItem } from '../fakedata/SponsorNewsData'
export default function SponsorNews() {
     return (
          <div className='sponsornews'>
               <h3>Tin tài trợ</h3>
               <div className="sponsornews-list">
                    {
                         sponsorNewsItem.map((item, index) => {
                              return (
                                   <div className="sponsornews-item" key={index}>
                                        <div className="sponsornews-content d-flex">
                                             <img src={item.image} alt={item.image} />
                                             <a href="#">{item.title}</a>
                                        </div>
                                        <p>{item.name}</p>
                                   </div>
                              )
                         })
                    }
               </div>
          </div>
     )
}
