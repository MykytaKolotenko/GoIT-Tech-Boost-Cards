import { userApi } from "./userApi";

const rootMiddleware = (getDefaultMiddleware: any) => {
	const customMiddleware = [...getDefaultMiddleware({serializableCheck: false,}), userApi.middleware];
	  return customMiddleware as any;
};

export default rootMiddleware