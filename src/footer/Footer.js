import '../css/Header.css';
import menu from '../data/menuHeader.json';
import { Link } from 'react-router-dom';
import SIFFLogo from '../images/SIFFLogo.png';
import Facebook from '../images/facebook.png';
import Twitter from '../images/twitter.png';
import YouTube from '../images/youtube.png';
import Telegram from '../images/telegram.png';
import SocialMedias from '../components/common/SocialMedias';

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
