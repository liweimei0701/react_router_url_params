// React
import React from "react";
import { Switch, Route } from "react-router-dom";

// Defining routes
import * as ROUTES from "./routes";

const App = () => {
	return (
		<Switch>
			<PublicRoute
				exact
				path={ROUTES.SETTING}
				component={ROUTES.Setting}
				title={ROUTES.SETTINGTITLE}
			/>
				<PublicRoute
				exact
				path={ROUTES.SETTINGPAGES}
				component={ROUTES.SettingPages}
				title={ROUTES.SETTINGPAGESTITLE}
			/>
			<PublicRoute
				exact
				path={ROUTES.SETTINGUSEQUERRY}
				component={ROUTES.SettingUseQuerry}
				title={ROUTES.SETTINGQUERRYTITLE}
			/>
			{/* Handles not found routes */}
			<PublicRoute
				path="*"
				component={ROUTES.NotFound}
				title={ROUTES.NOTFOUNDTITLE}
			/>
		</Switch>
	);
};
export default App;

const PublicRoute = ({
	component: Component,
	title,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={(props) => (
					<Component {...props} title={title} />
			)}
		/>
	);
};