import React from "react";
const ProgressBar = (props) => {
  var { bgcolor, completed, id } = props;

  const alignContainer = {
    margin: "auto",
    height: "40px",
    // backgroundColor : "#000000",
    width: "150px",
    textAlign: "center"
  }
  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
  }

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    textAlign: 'center'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }
  return (
    <div style={alignContainer}>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <div>
            {
              window.location.pathname === `/machines/${id}` ?
                <span style={labelStyles}>{`${completed}`}</span> : null
            }
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProgressBar;

// import React from 'react';
// import { Progress } from 'reactstrap';

// const Example = (props) => {
//   return (
//     <div>
//       <Progress color="success" value="25" />
//     </div>
//   );
// };

// export default Example;