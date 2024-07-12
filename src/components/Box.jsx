import React from 'react'
import Gold from './Gold'
import FootballSchedule from './FootballSchedule'
export default function Box({data}) {
     return (
          <>
               <div className="section">
                    <div className='box'>
                         <div className="box-header">
                              <h2>{data.cateParent}</h2>
                              {data.subParent.map((item, index) => <p key={index}>{item}</p>)}
                         </div>
                         <div className="box-content">
                              {data.parentPost.map((item, index) => {
                                   return (
                                        <div className="box-left" key={index} >
                                             <div className="box-image">
                                                  <img src={item.image} alt="" />
                                             </div>
                                             <div className='box-news'>
                                                  <h3>{item.title}</h3>
                                                  <p>{item.desc}</p>
                                             </div>
                                        </div>
                                   )
                              })}
                              {data.subPost.map((item, index) => {
                                   return (
                                        <div className="box-right" key={index}>
                                             <div className='box-news'>
                                                  <h3>{item.title}</h3>
                                                  <p>{item.desc}</p>
                                             </div>
                                        </div>
                                   )
                              })}
                         </div>
                         <div className="box-sub">
                              {
                                   data.subTitle.map((item, index) => {
                                        return (
                                             <ul className="box-sub-list" key={index}>
                                                  <li><a href="#">{item.title}</a></li>
                                             </ul>
                                        )
                                   })
                              }
                         </div>
                    </div>
               </div>
               {data.moreGold && (
                    data.moreGold.map((item, index) => <Gold key={index} data={item} />)
               )}
               {data.moreSport && (
                    <FootballSchedule data={data.moreSport} />
               )}
          </>
     )
}
