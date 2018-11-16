export default class AuthService {
	constructor(public isAuthenticated: boolean) {}

	public toggleAuth() {
		this.isAuthenticated = !this.isAuthenticated;
	}

	public login() {
		return Promise.resolve(this.isAuthenticated);
	}
}