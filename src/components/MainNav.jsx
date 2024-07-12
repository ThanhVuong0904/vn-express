import React, { useEffect, useRef } from 'react'
import { mainNav } from '../fakedata/MainNavData'
import Logo from '../assets/images/logo.png'
export default function MainNav() {
     const navRef = useRef(null)
     const homeLogoRef = useRef(null)
     const newestRef = useRef(null)
     useEffect(() => {
          const handleShrink = () => {
               if (document.body.scrollTop > 360 || document.documentElement.scrollTop > 360) {
                    navRef.current.classList.add('shrink')
                    homeLogoRef.current.classList.add('none')
                    newestRef.current.classList.add('active')
               } else {
                    navRef.current.classList.remove('shrink')
                    homeLogoRef.current.classList.remove('none')
                    newestRef.current.classList.remove('active')
               }
          }
          window.addEventListener('scroll', handleShrink)
          return () => {
               window.removeEventListener('scroll', handleShrink)
          }
     }, [])
     return (
          <div className='nav' ref={navRef}>
               <nav>
                    <ul className='nav-main'>
                         <div className="home-logo" ref={homeLogoRef}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                   <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"/>
                              </svg>
                         </div>
                         <div className="newest d-flex align-items-center" ref={newestRef}>
                              <img src={Logo} alt="" />
                              <a href='#'>Mới nhất</a>
                         </div>
                         {
                              mainNav.map((item, index) => {
                                   return (
                                        <li key={index} className='nav-main-item'>
                                             <a href={item.path} className='nav-main-link'>{item.title}</a>
                                             <ul className="nav-sub">
                                                  {
                                                       item.subNav.map((sub, index) => (
                                                            <li key={index}>
                                                                 <a href="#">{sub.title}</a>
                                                            </li>
                                                       ))
                                                  }
                                             </ul>
                                        </li>
                                   )
                              })
                         }
                         <div className="nav-all">
                              <span>Tất cả</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                   <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" fill='#bdbdbd'/>
                              </svg>
                         </div>
                    </ul>
               </nav>
          </div>
     )
}
