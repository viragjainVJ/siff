import React, {useState} from 'react'
import '../css/main.css';
import contactDetails from '../data/contact.json';
import DirectionCard from '../cards/DirectionCard';
import NRIContactsCard from '../cards/NRIContactsCard';
import WelcomeCard from '../cards/WelcomeCard';
import TableComponent from './common/TableComponent';
import ZoneCard from '../cards/ZoneCard';

const Helpline = () => {    
    const [data, setData] = useState('');
    
    const openTab = (value) => {
        setData(value);
    }

    return (
        <div className='helpline-head content-wrap'>
            <div className=''>
                <h1 className='helpline-header'>Phone Numbers of First Level Counsellors</h1>
                <p>Here is the list of First Level Counselors for different cities and regions:</p>
                <p><strong>North Region:</strong> J&K, Punjab, Himachal Pradesh, Haryana, Delhi, Rajasthan, Uttar Pradesh</p>
                <p><strong>East Region:</strong> Chhattisgarh, Odisha, Bihar, Jharkhand, West Bengal, North East, UP(Purvanchal)</p>
                <p><strong>West Region:</strong> Madhya Pradesh, Gujarat, Maharashtra</p>
                <p><strong>South Region:</strong> Karnataka, Telangana, Andhra Pradesh, Tamilnadu, Kerala, Pondicherry (Members of other UT can contact to FC of nearest state)</p>
                <h3>**Note: Take an appointment with them over message before calling**</h3>
            </div>

            
                <DirectionCard openTab={openTab}/>
          
            {data ? <ZoneCard zone={data.split(' ')[0]}/>: ''}
            
                <NRIContactsCard />
            
            <div>
                <p>
                Want to be an activist? Want to do propaganda and protests? 
                </p>
                <p>
                Wish to be a First Level Counselor? Not able to reach any of the above contacts?
                </p>
                <div>
                    Please contact the below:
                    <table>
                        <TableComponent contactDetails={contactDetails}/>
                    </table>
                </div>



            </div>
        </div>
    )
}

export default Helpline;