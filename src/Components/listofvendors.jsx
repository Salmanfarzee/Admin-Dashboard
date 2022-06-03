import React, { useEffect, useState } from "react";
import { useApi } from "../utils/restutil";

const ListVendors = ({ setVendors, setToggle }) => {
  const [getVendors, setGetVendors] = useState([]);

  const editName = (vendor) => {
    debugger;
    setVendors(vendor);
    setToggle(true);
  };

  const { get } = useApi();

  useEffect(() => {
    get("/vendors")
      .then((res) => {
        console.log(res);
        setGetVendors(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Name:</th>
          <th>WebsiteUrl:</th>
          <th>Email:</th>
          <th>Phone:</th>
          <th>action</th>
        </tr>
        {getVendors.map((vendor) => {
          return (
            <tr>
              <td>{vendor.name}</td>

              <td>{vendor.websiteUrl}</td>

              <td>{vendor.email}</td>

              <td>{vendor.phone}</td>
              <td>
                <button
                  onClick={() => {
                    editName(vendor);
                  }}
                >
                  edit
                </button>
                <button>delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ListVendors;
