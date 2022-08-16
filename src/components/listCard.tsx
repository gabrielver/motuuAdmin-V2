import React from "react";
import { Link } from "react-router-dom";
const moment = require("moment")



function listCard({
    AppUsers: {
        id,
        email,
        createdAt,
        username,
        firstname,
        lastname,
        role,
        enable,
        locked,
        lastLogin,
        modifiedAt
      }
}) {
  return (
   
              <tr>
                <td className="selection_cell">
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  {id}
                </td>
                <td>
                  <h5 className="list_user_name">
                    <Link  to={`/appUser/${id}`}>{username}</Link>
                  </h5>
                </td>
                <td>{email}</td>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{enable}</td>
                <td>{locked}</td>
                <td>
                    {moment(lastLogin).fromNow(true)}
                    {/* {lastLogin} */}
                    </td>
                <td>...</td>
                <td>{role}</td>
                <td>{createdAt}</td>
                <td>{modifiedAt}</td>
                
              </tr>
           
  )
}

export default listCard