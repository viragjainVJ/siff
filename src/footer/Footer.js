import '../css/Header.css';
import menu from '../data/menuHeader.json';
import { Link } from 'react-router-dom';
import SIFFLogo from '../images/SIFFLogo.png';
import Facebook from '../images/facebook.png';
import Twitter from '../images/twitter.png';
import YouTube from '../images/youtube.png';
import Telegram from '../images/telegram.png';

const Footer = () => {
    const MenuItem = () => {
        return menu.MenuHeader.map((data) => {
            return (
                <li key={data.id}>
                    <Link to={data.Path} className="">
						{data.Page}
					</Link>
                </li>
            )
        })
    }

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

    return (
        <div className='footer'>
            <div className='footer-div'>
            <table className='responsive-table-footer'>
                <tbody>
                    <tr className='footer-tr'>
                        <td className='footer-td'>
                            <ul className='footer-ul'>
                                <MenuItem />
                            </ul>
                        </td>
                        <td className='footer-td'>
                            <div className='followUs'>Follow Us</div>
                            <div className='social_media_head'>
                                <SocialMedias />
                            </div>
                        </td>
                        <td className='footer-td'>
                            <img src={SIFFLogo} alt="SIFF" className='logo'></img>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Footer;
