import React from "react";
import "../Styles/Message.css";

const Message = ({ passcode, closeMessage }) => {
  return (
    <div className="overlay">
      <div className="message-box">
        <h3>Your recipe is being posted...</h3>
        <p>
          The unique passcode for this post is{" "}
          <code className="red-text">{passcode}</code>
        </p>

        <strong>Keep it secret and safe.</strong>
        <p>It is needed in case you need to delete the post.</p>
        <button className="btnOrange" onClick={closeMessage}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Message;
