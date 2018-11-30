import RootStore from "./root-store";
import MenuService from "../services/menu-service";
import OrderService from "../services/order-service";
import AuthService from "../services/auth-service";
import HomePageStore from "../pages/home/store/home-page-store";
import OrderPageStore from "../pages/order/store/order-page-store";
import WeekOrderPageStore from "../pages/week-order/store/week-order-page-store";
import LoginPageStore from "../pages/login/store/store";
import CryptoService from "../services/crypto-service";

interface Services {
	menuService: MenuService;
	orderService: OrderService;
	authService: AuthService;
	cryptoService: CryptoService;
}

function createStores({ menuService, orderService, authService, cryptoService }: Services) {
	const rootStore = new RootStore({ authService, cryptoService });
	const homePageStore = new HomePageStore(rootStore, orderService);
	const orderPageStore = new OrderPageStore(rootStore, menuService, orderService);
	const weekOrderPageStore = new WeekOrderPageStore(rootStore, orderService);
	const loginPageStore = new LoginPageStore(rootStore);

	return { rootStore, homePageStore, orderPageStore, weekOrderPageStore, loginPageStore };
}

export { RootStore, createStores };
