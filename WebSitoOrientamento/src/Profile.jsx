import React from "react";
import "./Profile.css";

const user = {
  name: "userName",
  imageUrl: "https://media.istockphoto.com/id/162515751/tr/foto%C4%9Fraf/moon-over-mountains.jpg?s=612x612&w=0&k=20&c=JFopvREHD9dx9TNrhwIuBYdV5hNqSSmSm62lsUGnFJg=",
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>userName</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"photo of" + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
