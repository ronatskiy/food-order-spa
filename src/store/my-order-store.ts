import { computed } from "mobx";

import AppViewModel from "../models/app";

class MyOrderStore {
	constructor(public appModel: AppViewModel) {}

	@computed
	public get canOrder() {
		return this.appModel.isOrderAllowed;
	}
}

export default MyOrderStore;
