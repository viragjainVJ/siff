import React from 'react';
import '../css/main.css';
import WorkProgress from './common/WorkProgress';

const Home = () => {
    return (
        <div className='content-wrap'>
            <h1 className='helpline-header'>Home</h1>
            <div className='faq-page'>
                <WorkProgress />
            </div>
        </div>
    )
}

export default Home;