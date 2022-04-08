import React from 'react';
import '../css/main.css';
import WorkProgress from './common/WorkProgress';
import Whatsapp from '../images/whatsapp.png';
import SlideShowBanner from './common/SlideShow';
import SocialMedias from './common/SocialMedias';
import TwitterCard from './common/TwitterCard';
import YoutubeView from './common/YoutubeView';
import Articles from './common/Articles';


const Home = () => {
    return (
        <div className='content-wrap'>
            {/* <h1 className='helpline-header'>Home</h1> */}
            <div className='faq-page'>
                <div className='wrapper'>
                    <div className='left_wing'>
                    <SlideShowBanner />
                        <div className='seek-help'>
                            <p>To  seek  free  help and support from  SIFF Counselors  &  to  talk to  our  Media Spokespersons, please click the <a href='https://chat.whatsapp.com/LaVQYNAjPI8Cg2KRvbUjZh'><img className='whatsapp' src={Whatsapp} alt="Whatsapp"></img> WhatsApp Link</a> here. </p>
                            <p>SIFF काउंसलर्स से मुफ्त में मदद लेने के लिए और हमारे मीडिया प्रवक्ताओं से बात करने के लिए, कृपया यहाँ <a href='https://chat.whatsapp.com/LaVQYNAjPI8Cg2KRvbUjZh'><img className='whatsapp' src={Whatsapp} alt="Whatsapp"></img> व्हाट्सएप लिंक</a> पर क्लिक करें।</p>
                        </div>
                        {/* <YoutubeView /> */}
                        <Articles />
                    </div>
                    <div className='right_wing'>
                        <div className='social_right_wing'>
                            <div>Join Us</div>
                            <div className='social_right_wing_icon'>
                                <SocialMedias />
                            </div>
                            
                        </div>
                        <TwitterCard />
                        <YoutubeView />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;