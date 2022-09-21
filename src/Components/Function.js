import React from "react";

const Profile = ({name, age, gender}) => {
  console.log(name, age, gender)
  return <div>
    Name: {name}
    Age: {age}
    {gender ? 'Gender': '' }{gender}
  </div>;
};
export default Profile;
