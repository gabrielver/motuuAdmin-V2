import * as React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import "/src/styles/pages/ListTemplate.scss";
import "/src/styles/master.scss"
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
                <th tabIndex= {index} >#Id</th>
                <th
                  tabIndex={index}
                  aria-label="name sortable"
                  className="sortable"
                >
                  Username
                  <span className="order">
                    <span className="dropdown">
                      <ArrowDropDownIcon />
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
                    
                  </span>
                </th>
                <th
                  tabIndex={index}
                  aria-label="Travels sortable"
                  className="sortable"
                >
                  First Name
                  <span className="order">
                    <span className="dropdown">
                      <ArrowDropDownIcon />
                    </span>
                    
                  </span>
                </th>
                <th
                  tabIndex={index}
                  aria-label="Followers sortable"
                  className="sortable"
                >
                  Last Name
                  <span className="order">
                    <span className="dropdown">
                      <ArrowDropDownIcon />
                    </span>
                    
                  </span>
                </th>
                <th
                  tabIndex={index}
                  aria-label="Followers sortable"
                  className="sortable"
                >
                  Enabled
                  <span className="order">
                    <span className="dropdown">
                      <ArrowDropDownIcon />
                    </span>
                    
                  </span>
                </th>
                <th
                  tabIndex={index}
                  aria-label="Followers sortable"
                  className="sortable"
                >
                  Locked
                  <span className="order">
                    <span className="dropdown">
                      <ArrowDropDownIcon />
                    </span>
                    
                  </span>
                </th>
                <th
                  tabIndex={index}
                  aria-label="Followers sortable"
                  className="sortable"
                >
                  Last Login
                  <span className="order">
                    <span className="dropdown">
                      <ArrowDropDownIcon />
                    </span>
                   
                  </span>
                </th>
                <th
                  tabIndex={index}
                  aria-label="Followers sortable"
                  className="sortable"
                >
                  Locale
                  <span className="order">
                    <span className="dropdown">
                      <ArrowDropDownIcon />
                    </span>
                    
                  </span>
                </th>
                <th
                  tabIndex={index}
                  aria-label="Followers sortable"
                  className="sortable"
                >
                  Roles
                  <span className="order">
                    <span className="dropdown">
                      <ArrowDropDownIcon />
                    </span>
                   
                  </span>
                </th>
                <th
                  tabIndex={index}
                  aria-label="Followers sortable"
                  className="sortable"
                >
                  Created
                  <span className="order">
                    <span className="dropdown">
                      <ArrowDropDownIcon />
                    </span>
                    
                  </span>
                </th>
                <th
                  tabIndex={index}
                  aria-label="Followers sortable"
                  className="sortable"
                >
                  Modified
                  <span className="order">
                    <span className="dropdown">
                      <ArrowDropDownIcon />
                    </span>
                    
                  </span>
                </th>
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
                    <a href="">MinnieWalter75</a>
                  </h5>
                </td>
                <td>mini@skote.com</td>
                <td>Minnie</td>
                <td>Walter</td>
                <td>True</td>
                <td>False</td>
                <td>12/07/2022</td>
                <td>...</td>
                <td>Creator</td>
                <td>25/05/2022</td>
                <td>08/06/2022</td>
                
              </tr>
            </tbody>
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
                    <a href="">MinnieWalter75</a>
                  </h5>
                </td>
                <td>mini@skote.com</td>
                <td>Minnie</td>
                <td>Walter</td>
                <td>True</td>
                <td>False</td>
                <td>12/07/2022</td>
                <td>...</td>
                <td>Creator</td>
                <td>25/05/2022</td>
                <td>08/06/2022</td>
                
              </tr>
            </tbody>
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
                    <a href="">MinnieWalter75</a>
                  </h5>
                </td>
                <td>mini@skote.com</td>
                <td>Minnie</td>
                <td>Walter</td>
                <td>True</td>
                <td>False</td>
                <td>12/07/2022</td>
                <td>...</td>
                <td>Creator</td>
                <td>25/05/2022</td>
                <td>08/06/2022</td>
                
              </tr>
            </tbody>
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
                    <a href="">MinnieWalter75</a>
                  </h5>
                </td>
                <td>mini@skote.com</td>
                <td>Minnie</td>
                <td>Walter</td>
                <td>True</td>
                <td>False</td>
                <td>12/07/2022</td>
                <td>...</td>
                <td>Creator</td>
                <td>25/05/2022</td>
                <td>08/06/2022</td>
                
              </tr>
            </tbody>
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
                    <a href="">MinnieWalter75</a>
                  </h5>
                </td>
                <td>mini@skote.com</td>
                <td>Minnie</td>
                <td>Walter</td>
                <td>True</td>
                <td>False</td>
                <td>12/07/2022</td>
                <td>...</td>
                <td>Creator</td>
                <td>25/05/2022</td>
                <td>08/06/2022</td>
                
              </tr>
            </tbody>
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
                    <a href="">MinnieWalter75</a>
                  </h5>
                </td>
                <td>mini@skote.com</td>
                <td>Minnie</td>
                <td>Walter</td>
                <td>True</td>
                <td>False</td>
                <td>12/07/2022</td>
                <td>...</td>
                <td>Creator</td>
                <td>25/05/2022</td>
                <td>08/06/2022</td>
                
              </tr>
            </tbody>
           
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
