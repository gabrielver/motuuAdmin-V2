import * as React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "/src/components/Listing/ListTemplate.scss";
import SearchIcon from "@mui/icons-material/Search";
function TravelDetails() {

  const index = 0
  return (
    <div className="user_details">
      <h2>Travel/Experience List</h2>
      <div className="card_body">
        <div className="search_bar">
          <SearchIcon />
          <input type="text" placeholder="Search Travel" />
        </div>
        <div className="list_body">
          <table>
            <thead className="list_body_header">
              <tr>
                <th className="selection" data-row-selection="true">
                  <input type="checkbox" name="" id="" />
                </th>
                <th tabIndex= {index} >Id</th>
                <th
                  tabIndex={index}
                  aria-label="name sortable"
                  className="sortable"
                >
                  Type
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
                  Owner
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
                  Tags
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
                  Description
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
                  Publié le 
                  <span className="order">
                    <span className="dropdown">
                      <ArrowDropDownIcon />
                    </span>
                   
                  </span>
                </th>
                <th tabIndex={index}>Créé le</th>
                <th tabIndex={index}>Modifiée le</th>
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
                    <a href="">Restaurant</a>
                  </h5>
                  <p>Capri</p>
                </td>
                <td>Alice Denwer</td>
                <td>Familial, Cosy, Typique, Restaurant</td>
                <td>Nice and quiet small restaurant</td>
                <td>20/05/2022</td>
                <td>20/05/2022</td>
                <td>29/05/2022</td>
                
              </tr>
            </tbody>
            <tbody className="list_body_row">
              <tr>
                <td className="selection_cell">
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  #2
                </td>
                <td>
                  <h5 className="list_user_name">
                    <a href="">Hotel</a>
                  </h5>
                  <p>New York</p>
                </td>
                <td>Dan Willis</td>
                <td>Familial, Cosy, Typique, Restaurant</td>
                <td>Nice and quiet small restaurant</td>
                <td>20/05/2022</td>
                <td>20/05/2022</td>
                <td>29/05/2022</td>
                
              </tr>
            </tbody>            <tbody className="list_body_row">
              <tr>
                <td className="selection_cell">
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  #1
                </td>
                <td>
                  <h5 className="list_user_name">
                    <a href="">Restaurant</a>
                  </h5>
                  <p>Capri</p>
                </td>
                <td>Alice Denwer</td>
                <td>Familial, Cosy, Typique, Restaurant</td>
                <td>Nice and quiet small restaurant</td>
                <td>20/05/2022</td>
                <td>20/05/2022</td>
                <td>29/05/2022</td>
                
              </tr>
            </tbody>            <tbody className="list_body_row">
              <tr>
                <td className="selection_cell">
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  #1
                </td>
                <td>
                  <h5 className="list_user_name">
                    <a href="">Restaurant</a>
                  </h5>
                  <p>Capri</p>
                </td>
                <td>Alice Denwer</td>
                <td>Familial, Cosy, Typique, Restaurant</td>
                <td>Nice and quiet small restaurant</td>
                <td>20/05/2022</td>
                <td>20/05/2022</td>
                <td>29/05/2022</td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TravelDetails;
