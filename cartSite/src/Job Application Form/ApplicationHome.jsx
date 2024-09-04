import React, { useState } from "react";
import "./ApplicationHome.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";
import { Link } from "react-router-dom";

const ApplicationHome = () => {
  const currDate = new Date();
  const [confirm, setConfirm] = useState(false);

  const jobOptions = [
    { key: "01", value: "Accounting" },
    { key: "02", value: "Architecture" },
    { key: "03", value: "Web developer" },
    { key: "04", value: "Web Designer" },
    { key: "05", value: "ML Engineer" },
    { key: "06", value: "Software Engineering" },
    { key: "07", value: "Computer Engineer" },
    { key: "08", value: "Data Engineer" },
    { key: "09", value: "Networking Engineer" },
    { key: "10", value: "Hardware Engineer" },
    { key: "11", value: "HR Manager" },
    { key: "12", value: "Electrical Engineer" },
    { key: "13", value: "Phython Developer" },
    { key: "14", value: "Java Developer" },
    { key: "15", value: "React Developer" },
    { key: "16", value: "Service Desk" },
  ];

  const selectOptionsField = [
    { key: "00", value: "Select a Field" },
    { key: "01", value: "Accounting " },
    { key: "02", value: "Arts" },
    { key: "03", value: "Applied Science" },
    { key: "04", value: "Architecture" },
    { key: "05", value: "Bussines managment" },
    { key: "06", value: "Computer Science" },
    { key: "07", value: "Data Science" },
    { key: "08", value: "Engineering" },
    { key: "09", value: "Information Technology" },
    { key: "10", value: "Other" },
  ];

  const selectOptionsQualification = [
    { key: "01", value: "Select a Qualification " },
    { key: "01", value: "O/L " },
    { key: "02", value: "A/L" },
    { key: "03", value: "Diploma" },
    { key: "04", value: "Higher National Diploma" },
    { key: "05", value: "Bachelours" },
    { key: "06", value: "Undergarduate" },
    { key: "06", value: "Postgraduate" },
    { key: "06", value: "Other" },
  ];

  const selectOptionsCity = [
    { key: "00", value: "Select your City" },
    { key: "01", value: "Lahore" },
    { key: "01", value: "Lahore" },
    { key: "02", value: "Skardu" },
    { key: "03", value: "Sialkot" },
    { key: "04", value: "Faisalabad" },
    { key: "05", value: "Karachi" },
    { key: "06", value: "Islamabad" },
  ];
  const radioOptions = [
    { key: "01", value: "Male" },
    { key: "02", value: "Female" },
  ];
  const initialValue = {
    firstName: "",
    lastName: "",
    fullName: "",
    nic: "",
    genderRadio: "",
    birthDate: currDate,
    cityOption: "",
    address: "",
    permenentAddress: "",
    email: "",
    phone: ["", ""],
    qualificationOption: "",
    fieldOption: "",
    qualificationList: [""],
    certifications: [""],
    interests: [""],
    jobs: [""],
    bio: "",
  };
  const onSubmit = (values) => {
    console.log("Final submitted", values);
    console.log("Saved datas ", JSON.parse(JSON.stringify(values)));
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required !"),
    lastName: Yup.string().required("Required !"),
    fullName: Yup.string().required("Required !"),
    nic: Yup.string().required("Required !"),
    genderRadio: Yup.string().required("Required !"),
    birthDate: Yup.date().required("Required !").nullable(),
    cityOption: Yup.string().required("Required !"),
    address: Yup.string().required("Required !"),
    email: Yup.string().required("Required !"),
    qualificationOption: Yup.string().required("Required !"),
    fieldOption: Yup.string().required("Required !"),
    jobs: Yup.array().required("Required"),
    bio: Yup.string().required("Required !"),
  });
  return (
    <div className="Main-JobForm-containor">
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnMount={true}
      >
        {(formik) => {
          // console.log('Formik props',formik)
          return (
            <Form className="content-containor">
              <h3>Personal informations</h3>
              <div className="name-containor personal-1">
                <FormControl
                  control="input"
                  label="Full Name"
                  name="fullName"
                />
                <FormControl
                  control="input"
                  label="First Name"
                  name="firstName"
                />
                <FormControl
                  control="input"
                  label="Last Name"
                  name="lastName"
                />
              </div>
              <div className="personal-2">
                <FormControl control="input" label="NIC Number" name="nic" />
                <FormControl
                  control="date"
                  label="Bith of Date"
                  name="birthDate"
                />
                <FormControl
                  control="radio"
                  label="Gender"
                  name="genderRadio"
                  options={radioOptions}
                />
              </div>
              <div className="personal-3">
                <FormControl
                  control="select"
                  label="City"
                  name="cityOption"
                  options={selectOptionsCity}
                />
                <FormControl control="input" label="Address" name="address" />
                <FormControl
                  control="input"
                  label="Permenent Address"
                  name="permenentAddress"
                />
              </div>
              <div className="personal-4">
                <FormControl control="input" label="Email" name="email" />
                <FormControl
                  control="input"
                  label="Phone number"
                  name="phone[0]"
                />
                <FormControl
                  control="input"
                  label="Personal Phone number"
                  name="phone[1]"
                />
              </div>
              <h3>Academic informations</h3>
              <div className="academic-1">
                <FormControl
                  control="select"
                  label="Qualification"
                  name="qualificationOption"
                  options={selectOptionsQualification}
                />
                <FormControl
                  control="select"
                  label="Field"
                  name="fieldOption"
                  options={selectOptionsField}
                />
                <FormControl
                  control="listArray"
                  label="Qualifications"
                  name="qualificationList"
                />                
              </div>
              <div className="acdemic-2">
              
                <FormControl
                  control="listArray2"
                  label="Certificates or Awards"
                  name="certifications"
                  className='qualification-field'
                />
                <div className="interest-text">
                  <FormControl
                    control="listArray3"
                    label="Interests"
                    name="interests"
                    className="qualification-text"
                  />
                </div>
              </div>
              <h3>Select your interst job fields</h3>
              <div className="job-section">
                <FormControl
                  control="checkbox"
                  name="jobs"
                  options={jobOptions}
                />
              </div>
              <div className="bio-containor">
                <h3>Add your Bio</h3>
                <FormControl
                  control="textarea"
                  label="Share your thought"
                  name="bio"
                />
              </div>
              <div className="confirmation-containor">
                <label htmlFor="confirmation">
                  In this application above I provided informations are true
                  upto my knowledge.{" "}
                </label>
                <input
                  type="checkbox"
                  name="confirmation"
                  id="confirmation"
                  className="confirm-cb"
                />
              </div>

              <button
                type="submit"
                value={confirm}
                onClick={() => setConfirm(!confirm)}
                disabled={!formik.isValid || confirm}
                className="form-submit-btn"
              >
                Submit
              </button>
              <Link to=''><button className="back-btn">Back</button></Link>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ApplicationHome;
