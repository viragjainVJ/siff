import React from 'react';
import articlesData from '../../data/articlesData.json';
import ArticleLogo from '../../images/Article.jpg'

const Articles = () => {
    return(
        <div>
            <div className='article_card'>
                {articlesData.map((data) => {
                    return (
                        <div className='article_content_div'>
                            <div className='article_img_div'><img className='article_img' src={data.Img ? data.Img: ArticleLogo}></img></div>
                            <div className='article_title'><div className='article_title_div'>{data.Title}</div></div>
                            <div className='article_content'><div className='article_title_div'>{data.Content}</div></div>
                            <button className='article_button'><span>Read More </span></button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Articles;