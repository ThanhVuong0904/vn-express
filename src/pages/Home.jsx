import React from 'react'
import Background from '../components/Background'
import Topbar from '../components/Topbar'
import MainNav from '../components/MainNav'
import TopStory from '../components/TopStory'
import Container from '../components/Container'
import Podcasts from '../components/Podcasts'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import Topic from '../components/Topic'
import Banner from '../assets/images/banner.png'
import Block from '../components/Block'
import NewsItem from '../components/NewsItem'
import AFFCup from '../components/AFFCup'
import Covid from '../components/Covid'
import Box from '../components/Box'
import NewsThreeItem from '../components/NewsThreeItem'
import Common from '../components/Common'
import Infographics from '../components/Infographics'
import Event from '../components/Event'
import MostView from '../components/MostView'
import SponsorNews from '../components/SponsorNews'
import BusinessInfor from '../components/BusinessInfor'
import { newsItem } from '../fakedata/NewsData'
import { cateItem } from '../fakedata/CateData'
import { commonItem } from '../fakedata/CommonData'
export default function Home() {
     return (
          <div>
               <Background />
               <Topbar />
               <MainNav />
               <div className="content">
                    <Container>
                         <TopStory />
                         <Block 
                              w400PaddingRight20
                              w400BorderRight1
                              w700PaddingLeft20
                              childWidth400={
                                   <>
                                        <AFFCup />
                                        {newsItem.map((item, index) => <NewsItem key={index} data={item}/>)}
                                   </>
                              }
                              childWidth700 = {
                                   <>
                                        <Covid />
                                        {cateItem.map((item, index) => <Box key={index} data={item}/>)}
                                   </>
                              }
                         />
                         <Topic />
                         <div className="section">
                              <div className="banner" style={{width: '90%', margin: 'auto'}}>
                                   <img src={Banner} alt="" />
                              </div>
                         </div>
                         
                         <NewsThreeItem />
                         <Podcasts />
                         <div className="section">
                              <div className="banner" style={{width: '90%', margin: 'auto'}}>
                                   <img src="https://tpc.googlesyndication.com/simgad/12387492311566649432?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnLHUbtk2C9VXVgNs16utUCUfyqIw" alt="" />
                              </div>
                         </div>
                         {commonItem.map((item, index) => <Common data={item} key={index}/>)}
                         <Block 
                              directionRowReverse
                              w700BorderRight1
                              childWidth700={
                                   <>
                                        <Infographics/>
                                        <Event />
                                        <MostView/>
                                   </>
                              }
                              childWidth400={<SponsorNews/>}
                         />
                         <BusinessInfor/>
                    </Container>
               </div>
               <Footer/>
               <ScrollTop/>
          </div>
     )
}