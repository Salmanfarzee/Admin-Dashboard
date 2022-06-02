import React from "react";
import { useState } from "react";
import { useApi } from "../utils/restutil";

const Vendors = () => {
  const { post } = useApi();

  const [vendors, setVendors] = useState({
    vendorName: "",
    websiteUrl: "",

    email: "",
    phone: "",
  });

  const [fail, setFail] = useState({
    vendorName: "",
    websiteUrl: "",
    email: "",
    phone: "",
    apiErrorMessage: "",
  });

  const validateVendor = (e) => {
    e.preventDefault();
    if (vendors.vendorName === "" || vendors.vendorName.length < 5) {
      setFail({
        vendorName: "Vendorname should be atleast 5 characters ",
      });
      return false;
    } else if (vendors.websiteUrl === "") {
      setFail({
        websiteUrl: "website URL should be blank",
      });
      return false;
    } else if (vendors.email === "") {
      setFail({
        email: "website URL should be blank",
      });
      return false;
    } else if (vendors.phone.length < 10) {
      setFail({
        phone: "phone number should have 10 numbers",
      });
      return false;
    } else {
      return;
    }
  };
  post("/vendors", vendors)
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
  return (
    <div className="container">
      <h1>vendors</h1>
      <form>
        <label htmlFor="">
          Vendor Name:
          <input
            name="vendorName"
            type="vendorName"
            onChange={(e) => {
              setVendors({ ...vendors, vendorName: e.target.value });
            }}
          />
        </label>
        {fail.vendorName && <p style={{ color: "red" }}>{fail.vendorName}</p>}

        <label htmlFor="">
          website url:
          <input
            name="websiteUrl"
            type="websiteUrl"
            onChange={(e) => {
              setVendors({ ...vendors, websiteUrl: e.target.value });
            }}
          />
        </label>
        {fail.websiteUrl && <p style={{ color: "red" }}>{fail.websiteUrl}</p>}

        <br />
        {/* <label htmlFor="">
          Hiring for:
          <input
            name="hiringfor"
            type="hiringfor"
            onChange={(e) => {
              setVendors({ ...vendors, hiringfor: e.target.value });
            }}
          />
        </label> */}

        <br />
        <label htmlFor="">
          Email:
          <input
            name="email"
            type="email"
            onChange={(e) => {
              setVendors({ ...vendors, email: e.target.value });
            }}
          />
        </label>
        {fail.email && <p style={{ color: "red" }}>{fail.email}</p>}

        <label htmlFor="">
          Phone:
          <input
            type="phone"
            name="phone"
            onChange={(e) => {
              setVendors({ ...vendors, phone: e.target.value });
            }}
          />
        </label>
        {fail.phone && <p style={{ color: "red" }}>{fail.phone}</p>}
        <br />
        <button onClick={validateVendor}>save</button>
        <button type="submit">cancel</button>
      </form>
    </div>
  );
};
export default Vendors;
