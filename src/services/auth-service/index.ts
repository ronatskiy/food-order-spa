import User from "../../entities/user";

export default class AuthService {
	constructor(public isAuthenticated: boolean) {}

	public login() {
		if(this.isAuthenticated) {
			return Promise.resolve(new User("Ivan Petrov", "2"));
		}

		return Promise.resolve(null);
	}
}