import React from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

import styled from "@emotion/styled";
import { Grid } from "@material-ui/core";

import SettingCard from "./settingCard";

const SettingContiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 22px 0 10px 30px;
  background: #fff;
`;

const SettingHeader = styled.div`
  font: 700 24px Roboto;
  line-height: 50px;
`;

const SettingData = [
  {
    id: 1,
    title: "Personal Details",
    description: "Provide personal details and who you really are."
  },
  {
    id: 2,
    title: "Profile",
    description:
      "Your public profile to let others know more about you."
  },
  {
    id: 3,
    title: "Login & Security",
    description:
      "Change or update your login credentials to secure your account."
  },
  {
    id: 4,
    title: "Account",
    description: "Change account details."
  }
];

const Setting = () => {
  // let { id } = useParams();
  // console.log("id", id);
  return (
    <>
      <SettingContiner>
        <SettingHeader>Setting</SettingHeader>
        <div>
          Barneytheawsome@gmail.com
          <Link to="business-profile" style={{ marginLeft: "10px" }}>
            Go to Profile
          </Link>
        </div>
        <Grid container direction="row" justify="center" style={{width:"600px",margin: "50px auto"}}>
          {SettingData.map((item) => (
            <Grid key={item.id} item xs={6} style={{marginBottom: "50px"}}>
              <SettingCard title={item.title} content={item.description} />
            </Grid>
          ))}
        </Grid>
      </SettingContiner>
    </>
  );
};

export default Setting;
