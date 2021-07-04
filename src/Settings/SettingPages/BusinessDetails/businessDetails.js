// React
import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

// Components

import TextInput from "components/FormFields/LoginUserInput";
import CustomInputField from "components/FormFields/CustomInputField";
import MuiDropdown from "components/FormFields/MuiSelect";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 400px;
  // background: #f3f3f3;
`;

const companyTypes = [
  
  "Individual/Sole Trader",
  "Not-for-profit (NFP)",
  "Trust",
  "Partnership"
]
const BusinessDetails = () => {
  const [formState, setFormState] = useState({
    jobTitle: "",
    businessName: "",
    companyType: "",
    businessLocation: "",
    industry: "",
    registeredAddress: {
      country: "",
      city: "",
      state: "",
      addressLine1: "",
      addressLine2: "",
      postCode: ""
    },
    businessWebsite: ""
  });

  const [isValid, setIsValid] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  // Called with every input change, saves the new state
  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <>
    <h2>Business Details</h2>
      <Grid
        container
        direction="row"
        justify="center"
        // style={{ width: "600px", margin: "50px auto" }}
      >
        <Grid item xs={6}>
          <FormContainer>
            <CustomInputField
						name="jobTitle"
            value={formState.jobTitle}
						label="Job Title"
						type="text"
						onChange={handleChange}
						placeholder="CEO, Manager, Partner"
					/>
          <CustomInputField
						name="businessName"
            value={formState.businessName}
            label="Business Name"
            type="text"
            onChange={handleChange}
						placeholder="Enter your business name"
					/>
          <MuiDropdown
							label="Company Type"
							placeholder="Select one"
							options={companyTypes}
							value={formState.companyType}
							onChange={handleChange}
						></MuiDropdown>
        
            
          </FormContainer>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </>
  );
};

export default BusinessDetails;
