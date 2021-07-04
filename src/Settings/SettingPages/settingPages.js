import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { BrowserRouter as Router, useParams, Link } from "react-router-dom";

import styled from "@emotion/styled";

import BusinessDetails from "./BusinessDetails/businessDetails";
import PersonalDetials from "./PersonalDetails/personalDetails";
import Security from "./Security/security";
import InviteFriend from "./InviteFriend/inviteFeirnd";

const SettingContiner = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background: #fff;
	padding: 28px 103px;
`;

const SettingPages = () => {
	let { id } = useParams();
	console.log("id", id);

	let title = "";
	switch (id) {
		case "personal-details":
			title = "Personal Details";
			break;
		case "business-details":
			title = "Business Details";
			break;
		case "security":
			title = "Login & Security";
			break;
		case "invite":
			title = "Invite a friend";
			break;
		default:
			break;
	}
	return (
		<SettingContiner>
			<Breadcrumbs aria-label="breadcrumb">
				<Link style={{ textDecoration: "none" }} to="/setting">
					Setting
				</Link>
				{id !== "" && (
					<Link style={{ textDecoration: "none" }} to={`/setting-pages/${id}`}>
						{title}
					</Link>
				)}
			</Breadcrumbs>
			{id === "personal-details" && <PersonalDetials />}
			{id === "business-details" && <BusinessDetails />}
			{id === "security" && <Security />}
			{id === "invite" && <InviteFriend />}
		</SettingContiner>
	);
};

export default SettingPages;
