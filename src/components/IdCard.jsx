import React from "react";

const cardDetails = [
  {
    lastName: "Doe",
    firstName: "John",
    gender: "male",
    height: 178,
    birth: new Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    lastName: "Delores",
    firstName: "Obrien",
    gender: "female",
    height: 172,
    birth: new Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

function IdCard({ detail }) {
  return (
    <div>
      {cardDetails.map((detail) => {
        return (
          <div className="id-card">
            <div>
              <img src={detail.picture} alt="user" />
            </div>
            <div className="id-card-info">
              <p>
                <strong>First Name</strong>: {detail.firstName}
              </p>
              <p>
                <strong>Last Name</strong>: {detail.lastName}
              </p>
              <p>
                <strong>Gender</strong>: {detail.gender}
              </p>
              <p>
                <strong>Height</strong>: {detail.height}
              </p>
              <p>
                <strong>Birth</strong>: {detail.birth.toString()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default IdCard;
