import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Vantagens = (props) => {
  return (
    <div className="benefit">
      <h3 className="">
        {props.title}
        <FontAwesomeIcon
          icon={[`${props.iconType}`, `${props.iconName}`]}
        ></FontAwesomeIcon>
      </h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
        expedita reiciendis? Voluptate tempore explicabo velit.
      </p>
    </div>
  );
};

export default Vantagens;
