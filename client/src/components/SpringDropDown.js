import React from "react";
import { Spring } from "react-spring/renderprops";
// simple but attractive styling
function component1() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {(props) => (
        <div style={props}>
          <div style={c1Style}>Component 1</div>
        </div>
      )}
    </Spring>
  );
}

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem",
};
export default component1;
// import spring
// make Spring component
// add this {(props)=>(<div style={props}></div>)}
// put what you want to animate inside!
