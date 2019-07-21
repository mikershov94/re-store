import React from 'react';

import './shopping-cart-table.sass';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
	const renderRow = (item, index) => {
		const { id, name, count, cost } = item;
		return(
				<tr key={id}>
					<td>{index + 1}</td>
					<td>{name}</td>
					<td>{count}</td>
					<td>${cost}</td>
					<td>
						<button className="btn btn-outline-success btn-suc"
										onClick={() => onIncrease(id)}>
							<i className="fa fa-plus-circle plus"/>
						</button>
						<button className="btn btn-outline-warning btn-war"
										onClick={() => onDecrease(id)}>
							<i className="fa fa-minus-circle minus"/>
						</button>
						<button className="btn btn-outline-danger btn-dan"
										onClick={() => onDelete(id)}>
							<i className="fa fa-trash-o trash"/>
						</button>
					</td>
				</tr>
		);
	}
	return(
		<div className="shopping-cart-table">
			<h2>Ваш заказ</h2>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Товар</th>
						<th>Количество</th>
						<th>Стоимость</th>
						<th>Действие</th>
					</tr>
				</thead>
				<tbody>
					{ items.map(renderRow) }
				</tbody>
			</table>
			<div className="total">
				Итого: ${total}
			</div>
		</div>
	);
};

export default ShoppingCartTable;