import RootStore from "./root-store";
import MenuService from "../services/menu-service";
import OrderService from "../services/order-service";
import AuthService from "../services/auth-service";
import HomePageStore from "../pages/home/store/home-page-store";
import OrderPageStore from "../pages/order/store/order-page-store";
import WeekOrderPageStore from "../pages/week-order/store/week-order-page-store";

interface Services {
	menuService: MenuService;
	orderService: OrderService;
	authService: AuthService;
}

function createStores({ menuService, orderService, authService }: Services) {
	const rootStore = new RootStore({ authService });
	const homePageStore = new HomePageStore(rootStore, orderService);
	const orderPageStore = new OrderPageStore(rootStore, menuService, orderService);
	const weekOrderPageStore = new WeekOrderPageStore(rootStore, orderService);

	return { rootStore, homePageStore, orderPageStore, weekOrderPageStore };
}

export { RootStore, createStores };
