import React from 'react'

export default function Infographics() {
     return (
          <div className='infographics section'>
               <h3 className='infographics-heading'><a href="#">Infographics</a></h3>
               <div className="infographics-content d-flex">
                    <div className="infographics-item">
                         <img src="https://i1-vnexpress.vnecdn.net/2021/12/24/tau-esa.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=0vG2tWsRqV99rS13vpJf-A" alt="" />
                         <a href="#">Airbus và ESA hợp tác chế tạo tàu vũ trụ mới</a>
                    </div>
                    <div className="infographics-item">
                         <img src="https://i1-vnexpress.vnecdn.net/2021/12/23/Tan-Thuy-Hoang.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=mPxJVAuULXFpV8AOxdIjLA" alt="" />
                         <a href="#">Công nghệ tia vũ trụ giúp khám phá lăng mộ Tần Thủy Hoàng</a>
                    </div>
               </div>
          </div>
     )
}
