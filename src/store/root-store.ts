import { computed, observable } from "mobx";

import MenuService from "../services/menu-service";
import AuthService from "../services/auth-service";
import OrderService from "../services/order-service";
import IdentityStore from "./identity-store";
import OperationManager from "./opearation-manager";

interface Services {
	dishMenuService: MenuService;
	authService: AuthService;
	orderService: OrderService,
}

export default class RootStore {
	constructor({ dishMenuService, authService, orderService }: Services ) {
		this.dishMenuService = dishMenuService;
		this.authService = authService;
		this.orderService = orderService;
		this.identity = new IdentityStore(authService);
		this.operationManager = new OperationManager();
	}

	public dishMenuService: MenuService;
	public authService: AuthService;
	public orderService: OrderService;
	public operationManager: OperationManager;

	@observable
	public identity: IdentityStore;

	@computed
	public get isLoading() {
		return this.operationManager.hasPendingTasks;
	};

	/** @deprecated Please move logic into store */
	longOperation(operation: () => Promise<any>) {
		return this.operationManager.runWithProgress(operation);
	}

	fetchTodayOrders() {
		return this.operationManager.runWithProgress(() => {
			return this.orderService.getTodayOrders();
		})
	}

	fetchSharedTodayOrders() {
		return this.operationManager.runWithProgress(() => {
			return this.orderService.getSharedTodayOrders();
		})
	}
}