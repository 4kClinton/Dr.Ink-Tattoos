import React from 'react';

function Card({ title, body }) {

  const whatsapp = "https://wa.me/254796205375"
  return (
    <div className="card">
      <div className="card-details">
        <img src="https://www.pinterest.com/pin/542191242657267717/" alt="" />
        <p className="text-title">{title}</p>
        <p className="text-body">{body}</p>
      </div>
      
      <button className="card-button" onClick={() => window.open(whatsapp, '_blank')}>Enroll Now</button>

    </div>
  );
}

export default Card;
