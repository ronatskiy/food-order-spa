import { computed, observable } from "mobx";

import AuthService from "../services/auth-service";
import IdentityStore from "./identity-store";
import OperationManager from "./opearation-manager";

interface Params {
	authService: AuthService;
}

export default class RootStore {
	constructor({ authService }: Params ) {
		this.identity = new IdentityStore(authService);
		this.operationManager = new OperationManager();
	}

	public operationManager: OperationManager;

	@observable
	public identity: IdentityStore;

	@computed
	public get isLoading() {
		return this.operationManager.hasPendingTasks;
	};
}