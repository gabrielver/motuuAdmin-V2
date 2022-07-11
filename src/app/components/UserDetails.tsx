import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./component_styles/UserDetails.scss";
import SearchIcon from "@mui/icons-material/Search";
function UserDetails() {

  const index = 0
  return (
    <div className="user_details">
      <h2>Users List</h2>
      <div className="card_body">
        <div className="search_bar">
          <SearchIcon />
          <input type="text" placeholder="Search user ..." />
        </div>
        <div className="list_body">
          <table>
            <thead className="list_body_header">
              <tr>
                <th className="selection" data-row-selection="true">
                  <input type="checkbox" name="" id="" />
                </th>
                <th tabIndex= {index} >#</th>
                <th
                  tabIndex={index}
                  aria-label="name sortable"
                  className="sortable"
                >
                  Name
                  <span className="order">
                    <span className="dropdown">
                      <ArrowDropDownIcon />
                    </span>
                    <span className="dropup">
                      <ArrowDropUpIcon />
                    </span>
                  </span>
                </th>
                <th
                  tabIndex={index}
                  aria-label="Email sortable"
                  className="sortable"
                >
                  Email
                  <span className="order">
                    <span className="dropdown">
                      <ArrowDropDownIcon />
                    </span>
                    <span className="dropup">
                      <ArrowDropUpIcon />
                    </span>
                  </span>
                </th>
                <th
                  tabIndex={index}
                  aria-label="Travels sortable"
                  className="sortable"
                >
                  Travels
                  <span className="order">
                    <span className="dropdown">
                      <ArrowDropDownIcon />
                    </span>
                    <span className="dropup">
                      <ArrowDropUpIcon />
                    </span>
                  </span>
                </th>
                <th
                  tabIndex={index}
                  aria-label="Followers sortable"
                  className="sortable"
                >
                  Followers
                  <span className="order">
                    <span className="dropdown">
                      <ArrowDropDownIcon />
                    </span>
                    <span className="dropup">
                      <ArrowDropUpIcon />
                    </span>
                  </span>
                </th>
                <th tabIndex={index}>Action</th>
              </tr>
            </thead>
            <tbody className="list_body_row">
              <tr>
                <td className="selection_cell">
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <img
                    className="avatar"
                    src="https://www.hmmh.de/uploads/pics/Marcus_Person_download_2016.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <h5 className="list_user_name">
                    <a href="">Minnie Walter</a>
                  </h5>
                  <p>Member since 25/05/2022</p>
                </td>
                <td>mini@skote.com</td>
                <td>18 Travels</td>
                <td>752</td>
                <td>
                  <a href="" className="modified">
                    <EditIcon />
                  </a>
                  <a href="" className="delete">
                    <DeleteForeverIcon />
                  </a>
                </td>
              </tr>
            </tbody>
            <tbody className="list_body_row">
              <tr>
                <td className="selection_cell">
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <img
                    className="avatar"
                    src="https://imgs.search.brave.com/2dGtnieEf54le4lM411gRagOV7de3XegvHIjRJ8z-GY/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4z/dWlJWVRFX1h2RWpr/RmE2RXhrTDBnSGFK/NCZwaWQ9QXBp"
                    alt=""
                  />
                </td>
                <td>
                  <h5 className="list_user_name">
                    <a href="">Annie Wool</a>
                  </h5>
                  <p>Member since 29/05/2022</p>
                </td>
                <td>ann@gmail.com</td>
                <td>1 Travel</td>
                <td>8</td>
                <td>
                  <a href="" className="modified">
                    <EditIcon />
                  </a>
                  <a href="" className="delete">
                    <DeleteForeverIcon />
                  </a>
                </td>
              </tr>
            </tbody>
            <tbody className="list_body_row">
              <tr>
                <td className="selection_cell">
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <img
                    className="avatar"
                    src="https://imgs.search.brave.com/8gz_pJtfnnMAOeCz8v8XwzYgt5N22me-qtNJqf9AZ1I/rs:fit:909:911:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzkwOS8xKl9p/aWtmTUdZRjNSSDRP/WjB5ZVFZblEucG5n"
                    alt=""
                  />
                </td>
                <td>
                  <h5 className="list_user_name">
                    <a href="">Helen Woss</a>
                  </h5>
                  <p>Member since 02/07/2022</p>
                </td>
                <td>helen@gmail.com</td>
                <td>20 Travels</td>
                <td>1435</td>
                <td>
                  <a href="" className="modified">
                    <EditIcon />
                  </a>
                  <a href="" className="delete">
                    <DeleteForeverIcon />
                  </a>
                </td>
              </tr>
            </tbody>
            <tbody className="list_body_row">
              <tr>
                <td className="selection_cell">
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <img
                    className="avatar"
                    src="https://imgs.search.brave.com/Rk6ZUTDyxe5WcQ9POnL7HyEk89qMpSk_vLz53Tqiin4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcGku/dGltZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMTIv/dGVycnktY3Jld3Mt/cGVyc29uLW9mLXll/YXItMjAxNy10aW1l/LW1hZ2F6aW5lLWZh/Y2Vib29rLTEuanBn/P3F1YWxpdHk9ODU"
                    alt=""
                  />
                </td>
                <td>
                  <h5 className="list_user_name">
                    <a href="">Henry Dude</a>
                  </h5>
                  <p>Member since 22/08/2022</p>
                </td>
                <td>hello@Travel.com</td>
                <td>2 Travels</td>
                <td>75</td>
                <td>
                  <a href="" className="modified">
                    <EditIcon />
                  </a>
                  <a href="" className="delete">
                    <DeleteForeverIcon />
                  </a>
                </td>
              </tr>
            </tbody>
            <tbody className="list_body_row">
              <tr>
                <td className="selection_cell">
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <img
                    className="avatar"
                    src="https://imgs.search.brave.com/SKMZPWBNekxN6QN5DY-UsIc3P-nyqMSaJ5teazlGBwU/rs:fit:1200:874:1/g:ce/aHR0cHM6Ly9pbWcy/LnRoZWpvdXJuYWwu/aWUvYXJ0aWNsZS8z/ODg4OTk1L3JpdmVy/P3ZlcnNpb249Mzg4/OTA4NyZ3aWR0aD0x/MzQw"
                    alt=""
                  />
                </td>
                <td>
                  <h5 className="list_user_name">
                    <a href="">Dan Olfez</a>
                  </h5>
                  <p>Member since 16/05/2022</p>
                </td>
                <td>dandan@skote.com</td>
                <td>9 Travels</td>
                <td>549</td>
                <td>
                  <a href="" className="modified">
                    <EditIcon />
                  </a>
                  <a href="" className="delete">
                    <DeleteForeverIcon />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
