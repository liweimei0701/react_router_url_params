import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";

const SettingContiner = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background: #fff;
`;

const useStyles = makeStyles({
  section: {
    display: "flex"
  },
  breadcrumbs: {
   
  },
  content: {
    width: "870px",
    marginLeft: "31px",
    marginTop: "52px",
    marginBottom: "200px"
  },
});




function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Setting() {
  let query = useQuery();

  return (
      <SettingContiner>
        <h2>Setting</h2>
        <ul>
          <li>
            <Link to="/setting-usequerry?name=personal_details">Peosronal Details</Link>
          </li>
          <li>
            <Link to="/setting-usequerry?name=business_details">business Details</Link>
          </li>
          <li>
            <Link to="/setting-usequerry?name=security">security</Link>
          </li>
          <li>
            <Link to="/setting-usequerry?name=invite">invite</Link>
          </li>
        </ul>

        <Child name={query.get("name")} />
      </SettingContiner>
  );
}

function Child({ name }) {
  return (
    <div>
      {name ? (
        <h3>
          The <code>name</code> in the query string is &quot;{name}
          &quot;
        </h3>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  );
}
