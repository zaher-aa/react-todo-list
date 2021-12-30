import React from "react";
import "./EditStatus.css";

export default function EditStatus(props) {
  const { editState } = props;
  return <div className="edit-status">{editState}</div>;
}
