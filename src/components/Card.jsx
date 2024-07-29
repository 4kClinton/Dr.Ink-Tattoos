import React from 'react';
// import './Card.css'; // Ensure you have the styles imported

const Card = () => {
   
  const whatsapp = 'https://wa.me/254796205375' 

  return (
    <div className="card">
      <div className="card__border"></div>
      <div className="card_title__container">
        <span className="card_title">TATTOO CLASSES ONGOING</span>
        <p className="card_paragraph">Master the art of Tattooing.</p>
      </div>
      <hr className="line" />
      <ul className="card__list">
        <li className="card__list_item">

          <span className="check">
            <svg
              className="check_svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span>

          {/* <span className="list_text">Set Clear Goals</span>
        </li>
        <li className="card__list_item">
          <span className="check">
            <svg
              className="check_svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span> */}

          {/* <span className="list_text">Stay Organized</span>
        </li>
        <li className="card__list_item">
          <span className="check">
            <svg
              className="check_svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span> */}


          <span className="list_text">Continuous Learning</span>
        </li>
        <li className="card__list_item">
          {/* <span className="check">
            <svg
              className="check_svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span> */}

          
        </li>
      </ul>
      <button className="button" onClick={() => window.open(whatsapp, '_blank')}>Enroll Now</button>

    </div>
  );
};

export default Card;
