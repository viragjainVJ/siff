import '../../css/Header.css';
import Facebook from '../../images/facebook.png';
import Twitter from '../../images/twitter.png';
import YouTube from '../../images/youtube.png';
import Telegram from '../../images/telegram.png';
import WhatsApp from '../../images/whatsapp.png';

const SocialMedia = [
    {
        "platform": "Twitter",
        "url": "https://twitter.com/realsiff",
        "alt": "Twitter",
        "thumbnail": Twitter
    },
    {
        "platform": "Facebook",
        "url": "https://www.facebook.com/groups/960729537419675",
        "alt": "Facebook",
        "thumbnail": Facebook
    },
    {
        "platform": "YouTube",
        "url": "https://www.youtube.com/c/SIFFMedia",
        "alt": "YouTube",
        "thumbnail": YouTube
    },
    {
        "platform": "Telegram",
        "url": "https://t.me/joinchat/VEHivEmE-66cyKVs",
        "alt": "Telegram",
        "thumbnail": Telegram
    },
    // {
    //     "platform": "WhatsApp",
    //     "url": "https://chat.whatsapp.com/LaVQYNAjPI8Cg2KRvbUjZh",
    //     "alt": "WhatsApp",
    //     "thumbnail": WhatsApp
    // }
]

const SocialMedias = () => {
    return SocialMedia.map((account) => {
        return (
            <div key={account.platform} className='social-media-div'>
                <a href={account.url} target="_blank" className='social-media-a'>
                    <img className='social_media_icon' src={account.thumbnail} alt={account.alt}></img>
                </a>
            </div>
        )
    }

    )
}

export default SocialMedias;