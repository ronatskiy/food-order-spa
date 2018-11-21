import { observable, action, runInAction, computed } from "mobx";
import AuthService from "../services/auth-service";
import User from "../entities/user";

class IdentityStore {
	constructor(private readonly authService: AuthService) {
		this.login();
	}

	@observable
	public currentUser: User | null = null;

	@computed
	public get isAuthenticated() {
		return this.currentUser !== null;
	};

	@action
	public async login() {
		const user = await this.authService.login();

		runInAction(() => {
			this.currentUser = user;
		})
	}

	@action
	public logout() {
		this.currentUser = null;
	}
}

export default IdentityStore;
