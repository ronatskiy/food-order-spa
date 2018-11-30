import MenuService from "./menu-service";
import AuthService from "./auth-service";
import OrderService from "./order-service";
import CryptoService from "./crypto-service";

export function createServices(apiEndpoint: string) {
	return {
		menuService: new MenuService(apiEndpoint),
		orderService: new OrderService(apiEndpoint),
		authService: new AuthService(apiEndpoint),
		cryptoService: new CryptoService(),
	};
}
