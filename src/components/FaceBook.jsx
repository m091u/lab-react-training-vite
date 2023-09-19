import React from "react";
import contactData from "../data/berlin.json";

function FaceBook({ contact }) {
  return (
    <>
      {contactData.map((contact) => {
        return (
          <div className="containerCard">
            <div>
              <img src={contact.img} alt="avatar" />
            </div>
            <div>
              <p>
                <strong>First name</strong>: {contact.firstName}
              </p>
              <p>
                <strong>Last name</strong>: {contact.lastName}
              </p>
              <p>
                <strong>Country</strong>: {contact.country}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default FaceBook;
