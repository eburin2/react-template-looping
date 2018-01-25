import React from 'react';


function NewTicketForm(){
  const myFormStyles = {
    formStyles: {
      width: '30%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '20px'
    }

  };
  return (
    <div style={myFormStyles.formStyles}>
      <style jsx>{`
          input {
            width: 200px;
            height: 20px;
            margin-left: 10px;
            margin-right: 10px;
            border: 2px solid black;
          }

            `}</style>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <input
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
