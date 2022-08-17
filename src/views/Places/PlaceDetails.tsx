import * as React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "/src/components/ListTemplate.scss";
import SearchIcon from "@mui/icons-material/Search";
function PlaceDetails() {

  const index = 0
  return (
    <div className="user_details">
      <h2>Place List</h2>
      <div className="card_body">
        <div className="search_bar">
          <SearchIcon />
          <input type="text" placeholder="Search Place" />
        </div>
        <div className="list_body">
          <table>
            <thead className="list_body_header">
              <tr>
                <th className="selection" data-row-selection="true">
                  <input type="checkbox" name="" id="" />
                </th>
                <th tabIndex= {index} >#Id</th>
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
                  Phone
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
                  Website
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
                  Affiliate link
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
                  Notation 
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
                  Types 
                  <span className="order">
                    <span className="dropdown">
                      <ArrowDropDownIcon />
                    </span>
                    <span className="dropup">
                      <ArrowDropUpIcon />
                    </span>
                  </span>
                </th>
                
                <th tabIndex={index}>Last modified</th>
              </tr>
            </thead>
            <tbody className="list_body_row">
              <tr>
                <td className="selection_cell">
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  #1
                </td>
                <td>
                  <h5 className="list_user_name">
                    <a href="">Le Meurice</a>
                  </h5>
                
                </td>
                <td>01 34 54 64 76</td>
                <td>www.leMeurice.com</td>
                <td>www.........com</td>
                <td>8.7</td>
                <td>Hotel/Restaurant</td>
                <td>29/05/2022</td>
                
              </tr>
            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetails;
