import React from "react";

import visibleOnlyForAuthenticatedUser from "../../hocs/visible-only-for-authenticated-user";

class MyOrder extends React.PureComponent {
	render() {
		return (
			<section>
				<h1>Мой заказ на сегодня</h1>
				<hr />
				<h3>Здесь будет перечень заказанных вами обедов</h3>
				<h3>А также обед который вы могли забронировать в таблице расшаренных</h3>
			</section>
		);
	}
}

export default visibleOnlyForAuthenticatedUser(MyOrder);
