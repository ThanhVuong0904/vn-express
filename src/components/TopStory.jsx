import React from 'react'
import CommentIcon from '../assets/images/bxs-comment.svg'
import QuangCao from '../assets/images/quangcao.PNG'
export default function TopStory() {
     return (
          <div className='top-story'>
               <div className="top-story-content">
                    <div className="top-story-main">
                         <div className="top-story-image">
                              <img src="https://i1-thethao.vnecdn.net/2021/12/23/LVT06951JPG-1640268515-8230-1640268582.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=V83iqH8qLbNcnvquGZJkig" alt="" />
                         </div>
                         <div className="top-story-main-content">
                              <h1>HLV Park: 'Trọng tài nên xem lại trận đấu'</h1>
                              <div className="top-story-main-desc">
                                   <span>SINGGAPORE - </span>
                                   <span> HLV Park Hang-seo không bình luận về các quyết định, nhưng đề nghị trọng tài xem lại trận đấu.</span>
                              </div>
                              <div className="top-story-meta">
                                   <span className='public-time'>1h trước</span>
                                   <span>Thể thao</span>
                                   <span className='comment'>
                                        <img src={CommentIcon} alt={CommentIcon} />
                                        <span>252</span>
                                   </span>
                              </div>
                         </div>
                    </div>
                    <div className="top-story-sub">
                         <div className="top-story-sub-item">
                              <h2>Quốc Cơ - Quốc Nghiệp lập kỷ lục Guinness mới</h2>
                              <div className="top-story-sub-desc">
                                   <span>TÂY BAN NHA - </span>
                                   <span>Quốc Cơ - Quốc Nghiệp lập kỷ lục Guinness quốc tế với màn chồng đầu leo 100 bậc thang trong 53 giây.</span>
                                   <span className='comment'>
                                        <img src={CommentIcon} alt={CommentIcon} />
                                        <span>252</span>
                                   </span>
                              </div>
                         </div>
                         <div className="top-story-sub-item">
                              <h2>Quốc Cơ - Quốc Nghiệp lập kỷ lục Guinness mới</h2>
                              <div className="top-story-sub-desc">
                                   <span>TÂY BAN NHA - </span>
                                   <span>Quốc Cơ - Quốc Nghiệp lập kỷ lục Guinness quốc tế với màn chồng đầu leo 100 bậc thang trong 53 giây.</span>
                                   <span className='comment'>
                                        <img src={CommentIcon} alt={CommentIcon} />
                                        <span>252</span>
                                   </span>
                              </div>
                         </div>
                         <div className="top-story-sub-item">
                              <a href="https://vnexpress.net/goc-nhin">Góc nhìn</a>
                              <h2>Học thôi, đừng sợ</h2>
                              <div className="top-story-sub-desc">
                                   <p>Phụ huynh không thể vì nỗi lo của chính mình mà ngăn quyền được sống với đầy đủ cảm xúc của con trẻ.</p>
                                   <div className="auth">
                                        <div className="auth-name">
                                             <p>Trương Hữu Khanh</p>
                                             <span className='comment'>
                                                  <img src={CommentIcon} alt={CommentIcon} />
                                                  <span>252</span>
                                             </span>
                                        </div>
                                        <div className="auth-avatar">
                                             <img src="https://i1-vnexpress.vnecdn.net/2014/04/25/TruongHuuKhanhjpg-1398417381.jpg?w=100&h=100&q=100&dpr=1&fit=crop&s=jDu8jFobldYYV0yjiZuoJg" alt="avatar" />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="top-story-advertise">
                    <img src={QuangCao} alt={QuangCao} />
               </div>
          </div>
     )
}
