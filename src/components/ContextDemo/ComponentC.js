import React from "react";
import { UserConsumer } from "../../contexts/userContext";
function ComponentC() {
  return (
    <div className="comp">
      <UserConsumer>{(value) => <div>{value.name}</div>}</UserConsumer>
    </div>
  );
}

export default ComponentC;
