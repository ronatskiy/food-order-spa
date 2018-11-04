import React from "react";

import visibleOnlyForAuthenticatedUser from "../../hocs/visible-only-for-authenticated-user";

class MyWeekOrder extends React.Component {
	render() {
		return (
			<section>
				<h1>Мой заказ на неделю</h1>
			</section>
		);
	}
}

export default visibleOnlyForAuthenticatedUser(MyWeekOrder);
