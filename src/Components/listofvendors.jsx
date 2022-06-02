import React, { useEffect, useState } from "react";
import { useApi } from "../utils/restutil";
const ListVendors = () => {
  const [getVendors, setGetVendors] = useState([]);

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
        </tr>
        {getVendors.map((getVendor) => {
          return (
            <div>
              <tr>
                <td>{getVendor.name}</td>

                <td>{getVendor.websiteUrl}</td>

                <td>{getVendor.email}</td>

                <td>{getVendor.phone}</td>
              </tr>
            </div>
          );
        })}
      </table>
    </div>
  );
};

export default ListVendors;
