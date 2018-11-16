import { observable, action, runInAction } from "mobx";
import AuthService from "../services/auth-service";

class IdentityStore {
	constructor(private readonly authService: AuthService) {
		this.login();
	}

	@action
	private async login() {
		const isAuthenticated = await this.authService.login();

		runInAction(() => {
			this.isAuthenticated = isAuthenticated;
		})
	}

	@observable
	public isAuthenticated = false;
}

export default IdentityStore;
