export const config = {
	isAuthenticated: process.env.REACT_APP_IS_AUTHENTICATED === "true",
	backendDomain: process.env.REACT_APP_BACKEND_DOMAIN || "",
	secret: process.env.REACT_APP_JWT_SECRET || "",
};
