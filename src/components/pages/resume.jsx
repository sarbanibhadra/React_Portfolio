import React from 'react';
import sarbani from "./SarbaniDas.pdf"
function resume() {
 return (
 <div>
 <iframe src={sarbani} width="100%" height="500px" />
 </div>
 );
};
export default resume;