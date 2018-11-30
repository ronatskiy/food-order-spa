import { action, computed, observable } from "mobx";

import RootStore from "../../../store/root-store";
import PageStore from "../../../store/page-store";
import FormStoreBase from "./form-store-base";
import { RegisterNewAccountFormSettings } from "../components/register-new-account-form";
import { UserDto } from "../../../entities/types";

interface Option {
	label: string;
	value: string;
}

export class LoginFormStore {
	constructor(private readonly users: UserDto[], private readonly rootStore: RootStore) {}

	@observable
	selectedUserId: string | null = null;

	@observable
	selectedOption: Option | null = null;

	@computed
	public get options() {
		return this.users.map(user => ({
			label: user.name,
			value: user.id,
		}));
	}

	@computed
	get selectedUser() {
		if (!this.selectedOption) {
			return null
		}

		return this.users.find(user => user.id === this.selectedOption!.value) || null;
	}

	@action.bound
	onChange = (option: any) => {
		this.selectedOption = option;
	};

	@action.bound
	onSubmit = async () => {
		if (this.selectedUser) {
			const { name, password } = this.selectedUser;
			await this.rootStore.operationManager.runWithProgress(() => {
				return this.rootStore.identity.login(name, password)
			})
		}
	};
}

class LoginPageStore extends PageStore {
	@observable
	public signInForm: FormStoreBase;
	constructor(rootStore: RootStore) {
		super(rootStore);

		this.signInForm = new FormStoreBase(RegisterNewAccountFormSettings, async (form: any) => {
			const { name, password } = form.values();

			await this.rootStore.operationManager.runWithProgress(() => {
				return rootStore.identity.signIn(name, password);
			});

			form.clear();
			this.onShowRegisterNewForm()
		});
	}

	@computed
	get isAuthenticated() {
		return this.rootStore.identity.isAuthenticated;
	};

	@observable
	isRegisterNew = false;

	@action.bound
	onShowRegisterNewForm() {
		this.isRegisterNew = !this.isRegisterNew;
	};

	@computed
	public get loginForm() {
		const { users } = this.rootStore.identity;

		if(users.length > 0) {
			return new LoginFormStore(users, this.rootStore);
		}

		return null;
	};

	@computed
	public get showLoginForm() {
		return !this.isRegisterNew && this.loginForm !== null;
	}

	@computed
	public get showSignInForm() {
		return this.isRegisterNew;
	}
}

export default LoginPageStore;
