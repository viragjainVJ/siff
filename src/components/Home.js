import React from 'react';
import '../css/main.css';
import WorkProgress from './common/WorkProgress';
import Whatsapp from '../images/whatsapp.png';

const Home = () => {
    return (
        <div className='content-wrap'>
            {/* <h1 className='helpline-header'>Home</h1> */}
            <div className='faq-page'>
                <div className='seek-help'>
                    <p>To  seek  free  help and support from  SIFF Counselors  &  to  talk to  our  Media Spokespersons, please click the <a href='https://chat.whatsapp.com/LaVQYNAjPI8Cg2KRvbUjZh'><img className='whatsapp' src={Whatsapp} alt="Whatsapp"></img> WhatsApp Link</a> here. </p>
                    <p>SIFF काउंसलर्स से मुफ्त में मदद लेने के लिए और हमारे मीडिया प्रवक्ताओं से बात करने के लिए, कृपया यहाँ <a href='https://chat.whatsapp.com/LaVQYNAjPI8Cg2KRvbUjZh'><img className='whatsapp' src={Whatsapp} alt="Whatsapp"></img> व्हाट्सएप लिंक</a> पर क्लिक करें।</p>
                </div>
                <WorkProgress />
            </div>
        </div>
    )
}

export default Home;