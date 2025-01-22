"use client";

import UserProfileCard from "./user-profile-card";

const UserDetail = () => {
  const user = {
    ProfilePicture: "/profile/1.png",
    name: "john Doe",
    email: "john@example.com",
  };

  const handleContactClick = () => {
    window.alert("Contact button clicked!!");
  };

  return (
    <>
      <h1>사용자 프로필</h1>
      <UserProfileCard user={user} onContactClick={handleContactClick} />
    </>
  );
}

export default UserDetail;
