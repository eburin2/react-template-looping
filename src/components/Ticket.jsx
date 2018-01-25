import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  const myStyledTickets = {
    ticketStyles: {
      marginTop: '20px',
      justifyContent: 'center',
      width: '100%'
    }
  };
  return(
    <div>

      <h3 style={myStyledTickets.ticketStyles}>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
