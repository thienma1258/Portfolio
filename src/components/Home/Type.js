import React from "react";
import Typewriter from "typewriter-effect";
import {useSelector} from "react-redux"

function Type() {
  const ownerRoles = useSelector((state)=>state.owner.roles)
  if (ownerRoles){
  return (
    <Typewriter
      options={{
        strings: ownerRoles,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
  }
}

export default Type;
