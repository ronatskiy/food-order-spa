import React from "react";

export default React.createContext({
	auth: {
		isAuthenticated: false,
		toggleAuth() {},
	},

	webApi: {
		getWeekMenu() {},
		getTodayOrders() {},
		getSharedTodayOrders() {},
		orderLunch() {},
	},

	longOperation() {},
});
