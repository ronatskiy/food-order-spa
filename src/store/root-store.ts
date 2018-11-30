import { computed, observable } from "mobx";

import AuthService from "../services/auth-service";
import IdentityStore from "./identity-store";
import OperationManager from "./opearation-manager";
import CryptoService from "../services/crypto-service";

interface Params {
	authService: AuthService;
	cryptoService: CryptoService;
}

export default class RootStore {
	constructor({ authService, cryptoService }: Params ) {
		this.identity = new IdentityStore(authService, cryptoService);
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