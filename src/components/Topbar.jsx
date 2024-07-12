import React from 'react'
import Container from '../components/Container'
import TimeIcon from '../assets/images/bx-time.svg'
import SearchIcon from '../assets/images/bx-search.svg'
import UserIcon from '../assets/images/bxs-user.svg'
import Logo from '../assets/images/logo.png'
export default function Topbar() {
     return (
          <div className='topbar'>
               <Container>
                    <a className="topbar-logo" href='/'>
                         <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v509/v2_2019/pc/graphics/logo.svg" alt="" />
                    </a>
                    <div className="topbar-time">
                         <span>Thứ sáu, 24/12/2021</span>
                    </div>
                    <div className="topbar-right">
                         <a href="#" className='topbar-right-item'>
                              <img src={TimeIcon} alt="" />
                              <p>Mới nhất</p>
                         </a>
                         <a href="" className='topbar-right-item'>
                              <img src={Logo} alt="" />
                              <p>International</p>
                         </a>
                         <div className="topbar-search">
                              <input type="text" placeholder='Tìm kiếm'/>
                              <button>
                                   <img src={SearchIcon} alt="" />
                              </button>
                         </div>
                         <div className="topbar-action">
                              <img src={UserIcon} alt="" />
                              Đăng nhập
                         </div>
                    </div>
               </Container>
          </div>
     )
}
