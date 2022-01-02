import React from "react";
import "./EditStatus.css";

const EditStatus = (props) => {
  const { editState } = props;
  return <div className="edit-status">{editState}</div>;
};

export default EditStatus;
