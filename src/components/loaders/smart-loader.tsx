import React from "react";
import { inject, observer } from "mobx-react";

import Loader from "./ellipsis-loader";
import RootStore from "../../store/root-store";

interface Props {
	rootStore?: RootStore;
}

function SmartLoader({ rootStore }: Props) {
	const { hasPendingTasks } = rootStore!.operationManager;

	return hasPendingTasks ? <Loader /> : null;
}

export default inject("rootStore")(observer(SmartLoader));
