import React from 'react';

import './error-indicator.sass';

const ErrorIndicator = () => {
	return(
		<div>
			<div className="d-flex justify-content-center">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwjCYh1Qr7mbvXqawpd7ZKMG6SQlUOTXHvbVHhXwXNNcJ95I5Pw"
					 className="warning" />
			</div>
			<div className="d-flex justify-content-center">
				<h3>Извините! Произошла ошибка!</h3>
			</div>
			<div className="d-flex justify-content-center">
				<p>Возможно отсутствует соединение с сервером</p>
			</div>
		</div>
	);
};

export default ErrorIndicator;