import React from 'react';
import Contacts from '../data/SIFFMembers.json';
import '../css/Directioncard.css';
import TableComponent from '../components/common/TableComponent';

class ZoneCard extends React.Component {
    state = {
        NRIContactDetail : Contacts.NRIContacts,
        ZoneContactDetail: Contacts.Zone,
        zone1: ''
    }
   
    renderContact = (key) => {
        return (
            <div className="zone_column">
                <Contact key={key} index={key} zone={key} details={this.state.ZoneContactDetail[this.props.zone][key]}                                                                                                 />
            </div>
        )
    }

    contactDetail = (zone) => {
        return(
            <div className="zone_container">
               {Object.keys(this.state.ZoneContactDetail[zone]).map(this.renderContact)}
            </div>
        )
    }

    render() {
        let {zone} = this.props;
        
        return(
            <div className='contact-details'>
                <div className='contact-zone'>
                    {zone} India Contacts:
                </div>
                <div className=''>
                    {this.contactDetail(zone)}
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
                {details.Coordinator.length > 0 ? <div>
                        <div className='coordinator_heading'>Coordinator</div>
                        <TableComponent contactDetails={details.Coordinator}/>
                    </div>: ''}
            </article>
            )
    }
}

export default ZoneCard;