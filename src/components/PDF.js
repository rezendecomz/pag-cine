import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>        
        <p>{props.title}</p>
        <p>{props.content}</p>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Confirmar</button>}
      </Pdf>
    </>
  );
}

export default PDF;