import React from 'react';

const QA = ({ques, ans}) => {
    return(
        <div>
            <h3 className='question'>{ques}</h3>
            <p className='answer'>{ans}</p>
        </div>
    )
}

export default QA;