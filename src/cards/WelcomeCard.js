import React from 'react';
import '../css/Directioncard.css';

class WelcomeCard extends React.Component {
    

    render() {
        return(
            <div className=''>
               Welcome TO Zone {this.props.zone}
            </div>
        )
    }
}




export default WelcomeCard;