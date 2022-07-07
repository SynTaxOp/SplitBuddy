import React from "react";
import NavbarSec from "../HomePage/navbar";
import { useParams } from "react-router";

const GroupsPage = () => {
  const { title } = useParams();
  return (
    <div>
      <NavbarSec />
      <h1>{title}</h1>
    </div>
  );
};

export default GroupsPage;
