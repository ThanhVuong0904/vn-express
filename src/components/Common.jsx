import React from 'react'

export default function Common({data}) {
     return (
          <div className='common section'>
               <div className="common-header d-flex align-items-center">
                    <h3 className='common-heading'><a href="#">{data.heading}</a></h3>
                    {data.subHeading.map((sub, index) => 
                         <a href="#" key={index} className='common-header-link'>{sub}</a>
                    )}
               </div>
               <div className="common-content d-flex">
               <div className="common-news">
                    <img src={data.image} alt="" />
                    <h1 className='common-title'>
                         <a href="#">{data.title}</a>
                    </h1>
                    <a href="#" className='common-desc'>
                         {data.desc}
                    </a>
               </div>
               <div className="common-sub">
                    {data.sub.map((sub, index) => (
                         <div className="common-sub-item" key={index}>
                              <img src={sub.image} alt="" />
                              <a href="#" className='common-sub-link'>{sub.title}</a>
                         
                         </div>
                    ))}
               </div>
               <div className="common-more">
                    {
                         data.more.map((more, index) => {
                              return (
                                   <div className="common-more-item d-flex" key={index}>
                                        <a href="#" className='common-more-link'>{more.title}</a>
                                        <img src={more.image} alt="" />
                                   </div>
                              )
                         })
                    }
               </div>
          </div>
          </div>
     )
}
