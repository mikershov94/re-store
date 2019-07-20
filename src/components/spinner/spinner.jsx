import React from 'react';

import "./spinner.sass";

const Spinner = () => {
	return(
		<section>
			  <div className='sk-double-bounce'>
			    <div className='sk-child sk-double-bounce-1'></div>
			    <div className='sk-child sk-double-bounce-2'></div>
			  </div>
		</section>
	);
};

export default Spinner;