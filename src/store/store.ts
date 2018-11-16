import MenuService from "../services/menu-service";
import AuthService from "../services/auth-service";
import OrderService from "../services/order-service";

interface Services {
	dishMenuService: MenuService;
	authService: AuthService;
	orderService: OrderService,
}

export default class Store {
	constructor({ dishMenuService, authService, orderService }: Services ) {
		this.dishMenuService = dishMenuService;
		this.authService = authService;
		this.orderService = orderService;
	}

	public dishMenuService: MenuService;
	public authService: AuthService;
	public orderService: OrderService;

	public get isAuthenticated() {
		return this.authService.isAuthenticated;
	}

	public async longOperation(callback: () => Promise<any> | void) {
		return callback();
	}
}