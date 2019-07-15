import React from 'react';

import "./spinner.sass";

const Spinner = () => {
	return(
		<section>
			  <div class='sk-double-bounce'>
			    <div class='sk-child sk-double-bounce-1'></div>
			    <div class='sk-child sk-double-bounce-2'></div>
			  </div>
		</section>
	);
};

export default Spinner;