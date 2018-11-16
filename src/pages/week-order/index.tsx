import React from "react";

import visibleOnlyForAuthenticatedUser from "../../hocs/visible-only-for-authenticated-user";

function MyWeekOrder() {
	return (
		<section>
			<h1>Мой заказ на неделю</h1>
		</section>
	);
}

export default visibleOnlyForAuthenticatedUser(MyWeekOrder);
