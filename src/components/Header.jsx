import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className="container">
      <p className="head">Help Queue!</p>
      <Link className="link" to="/">Home</Link> | <Link className="link-too" to="/newticket">Create Ticket</Link>

      <style jsx>{`
            .link {
              margin-left: 20px;
              display: inline-block;
              text-decoration: none;
            }

            .link-too {
              text-decoration: none;
            }

            .head {
              font-size: 24px;
              margin-left: 20px;
            }

            p:hover {
              color: aqua;

            }

            .container {
              width: 80%;
              border: 2px solid black;
              margin-right: auto;
              margin-left: auto;
            }
            `}</style>
    </div>
  );
}

export default Header;
