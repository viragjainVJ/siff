import React from 'react';
import Contacts from '../data/SIFFMembers.json';
import '../css/Directioncard.css';
import TableComponent from '../components/common/TableComponent';

class NRIContactsCard extends React.Component {
    state = {
        NRIContactDetail : Contacts.NRIContacts
    }
   
    renderContact = (key) => {
        return (
            <div className="zone_column">
                <Contact key={key} index={key} details={this.state.NRIContactDetail[key]}                                                                                                 />
            </div>
        )
    }

    contactDetail = () => {
        return(
            <div className="zone_container">
               {Object.keys(this.state.NRIContactDetail).map(this.renderContact)}
            </div>
        )
    }

    render() {
        return(
            <div className='contact-details'>
                <div className='contact-zone'>
                    NRI Contacts:
                </div>
                <div className=''>
                    {this.contactDetail()}
                </div>
            </div>
        )
    }
}


class Contact extends React.Component {
    render() {
        var {details, index} = this.props;
        return (
            <article className="zone_detail">
                <h1>{index}</h1>
                {details.FC.length > 0 ? <TableComponent contactDetails={details.FC}/>: ''}
                {details.Coordinator.length > 0 ? <TableComponent contactDetails={details.Coordinator}/>: ''}
            </article>
            )
    }
}

export default NRIContactsCard;