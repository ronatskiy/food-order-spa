import MenuService from "./menu-service";
import AuthService from "./auth-service";
import OrderService from "./order-service";

export function createServices(apiEndpoint: string, isAuth: boolean) {
	return {
		dishMenuService: new MenuService(apiEndpoint),
		orderService: new OrderService(apiEndpoint),
		authService: new AuthService(isAuth),
	};
}
