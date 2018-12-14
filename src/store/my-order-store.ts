import { computed, when } from "mobx";

import AppViewModel from "../models/app";
import AppStore from "./app-store";

class MyOrderStore {
	constructor(public appModel: AppViewModel, public appStore: AppStore) {
		when(() => this.appStore.identity.isAuthenticated, () => {
			this.appModel.orders.fetchMyOrders(this.appStore.identity.currentUser!.id)
		})
	}

	@computed
	public get canOrder() {
		return this.appModel.isOrderAllowed;
	}
}

export default MyOrderStore;
