import React from 'react';

const TableComponent = ({contactDetails}) => {
    return (
        <table className='responsive-table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                {contactDetails.map((data) => {
                    return (
                        <tr key={data.id}>
                            <td data-label="Name">
                                {data.Name}
                            </td>
                            <td data-label="Contact">
                                : {data.Contact}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TableComponent;