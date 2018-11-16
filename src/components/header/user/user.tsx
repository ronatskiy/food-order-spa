import React from "react";

import UserLogo from "./user-logo";
import "./user.scss";

interface Props {
	name: string;
}

const User = ({ name }: Props) => {
	return (
		<div className="user">
			<UserLogo className="user__logo" />
			<span className="user__name">{name}</span>
		</div>
	);
};

export default User;
