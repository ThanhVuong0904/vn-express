import React from 'react'
import ArrowUp from '../assets/images/bx-up-arrow-alt.svg'
export default function ScrollTop() {
     const handleScrollTop = () => {
          window.scrollTo({top: 0, behavior: 'smooth'})
     }
     return (
          <div className='sroll-top' onClick={handleScrollTop}>
               <img src={ArrowUp} alt="" />
          </div>
     )
}
