import React from "react";
import { AlertMessage } from './styles'; 

function Alert({ message }) {

  return (
    <AlertMessage className="alert">{ message }</AlertMessage>
  )
}

export default Alert;