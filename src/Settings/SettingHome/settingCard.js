import React from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core/styles";

const CardContiner = styled.div`
	display: flex;
	flex-direction: column;
	width: 260px;
	height: 170px;
	padding: 40px 14px;
	background: #f3f3f3;
	border-radius: 8px;
`;

const useStyles = makeStyles({
	title: {
		display: "flex",
		height: "30px",
		font: "700 16px Helvetica",
		lineHeight: "30px",
		"& >img": {
			width: "24px",
			height: "24px",
			margin: "2px 0 0 5px"
		}
	},
	content: {
		font: "400 14px Helvetica",
		lineHeight: "20px"
	}
});

const SettingCard = ({ title, content }) => {
	const classess = useStyles();
	let path = "";
	switch (title) {
		case "Personal Details":
			path = "./setting-pages/personal-details";
			break;
		case "Profile":
			path = "./setting-pages/profile";
			break;
		case "Login & Security":
			path = "./setting-pages/security";
			break;
		case "Account":
			path = "./setting-pages/account";
			break;
		default:
			break;
	}
	return (
		<>
			<CardContiner>
				<div className={classess.title}>
					<Link to={path}>{title}</Link>
				</div>
				<div className={classess.content}>{content}</div>
			</CardContiner>
		</>
	);
};

export default SettingCard;
