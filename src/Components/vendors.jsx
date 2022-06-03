import React from "react";
import { useState } from "react";
import { useApi } from "../utils/restutil";
import ListVendors from "./listofvendors";

const Vendors = () => {
  const { post } = useApi();
  const [toggle, setToggle] = useState(false);
  const handler = () => {
    setToggle(true);
  };
  const exit = () => {
    setToggle(false);
  };

  const [vendors, setVendors] = useState({
    name: "",
    websiteUrl: "",
    email: "",
    phone: "",
  });

  const [fail, setFail] = useState({
    name: "",
    websiteUrl: "",
    email: "",
    phone: "",
    apiErrorMessage: "",
  });

  const validateVendor = (e) => {
    e.preventDefault();
    if (vendors.name === "" || vendors.name.length < 5) {
      setFail({
        name: "name should be atleast 5 characters ",
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
    }

    post("/vendors", vendors)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
        setFail({ apiErrorMessage: "something went wrong" });
      });
  };

  return (
    <div className="container">
      <h1>vendors</h1>
      <button onClick={handler}>show form /hide form</button>
      {toggle ? (
        <form>
          <label htmlFor="">
            Vendor Name:
            <input
              value={vendors.name || ""}
              name="name"
              type="name"
              onChange={(e) => {
                setVendors({ ...vendors, name: e.target.value });
              }}
            />
          </label>
          {fail.name && <p style={{ color: "red" }}>{fail.name}</p>}

          <label htmlFor="">
            website url:
            <input
              value={vendors.websiteUrl || ""}
              name="websiteUrl"
              type="websiteUrl"
              onChange={(e) => {
                setVendors({ ...vendors, websiteUrl: e.target.value });
              }}
            />
          </label>
          {fail.websiteUrl && <p style={{ color: "red" }}>{fail.websiteUrl}</p>}

          <br />

          <br />
          <label htmlFor="">
            Email:
            <input
              value={vendors.email || ""}
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
              value={vendors.phone || ""}
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
          <button onClick={exit} type="submit">
            cancel
          </button>
        </form>
      ) : (
        <ListVendors setVendors={setVendors} setToggle={setToggle} />
      )}
    </div>
  );
};
export default Vendors;
