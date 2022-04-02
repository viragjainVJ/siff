import React from 'react';
import FAQs from '../data/FAQ.json';
import QA from './common/QA';

const FAQ = () => {

    const AllQuestions = () => {
        return FAQs.map((data) => {
            return (
                <QA ques={data.Q} ans={data.A}/>
            )
        })
    }


    return (
        <div className='content-wrap'>
            <h1 className='helpline-header'>FAQs</h1>
            <div className='faq-page'>
                <AllQuestions />
            </div>
            
        </div>
    )
}

export default FAQ;