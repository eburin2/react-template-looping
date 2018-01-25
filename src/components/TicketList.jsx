import React from 'react';
import Ticket from './Ticket';

const masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  }
];

function TicketList(){
  const myStyledComponentStyles = {
    backgroundStyle: {
      backgroundColor: 'bisque',
      fontFamily: 'sans-serif',
      padding: '25px',
    },
    flexStyle: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width:'50vw',
      border: '2px solid black',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '100px',
      justifyContent: 'space-around'
    }
  };
  return (
    <div style={myStyledComponentStyles.flexStyle}>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;
