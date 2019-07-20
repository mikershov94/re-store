import React from 'react';

import './shopping-cart-table.sass';

const ShoppingCartTable = () => {
	return(
		<div className="shopping-cart-table">
			<h2>Ваш заказ</h2>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Товар</th>
						<th>Количество</th>
						<th>Цена</th>
						<th>Действие</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Преступление и наказание</td>
						<td>3</td>
						<td>$20</td>
						<td>
							<button className="btn btn-outline-success btn-suc">
								<i className="fa fa-plus-circle plus"/>
							</button>
							<button className="btn btn-outline-warning btn-war">
								<i className="fa fa-minus-circle minus"/>
							</button>
							<button className="btn btn-outline-danger btn-dan">
								<i className="fa fa-trash-o trash"/>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
			<div className="total">
				Итого: $201
			</div>
		</div>
	);
};

export default ShoppingCartTable;