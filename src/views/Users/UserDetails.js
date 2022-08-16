import * as React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "/src/components/Listing/ListTemplate.scss";

import { useQuery } from "@apollo/client";
import { FETCH_APPUSERS_QUERY } from "../../utils/graphql";
import ListCard from "../../components/listCard";

import SearchIcon from "@mui/icons-material/Search";

import { AnimatePresence, motion } from "framer-motion";

function UserDetails() {
  const { error, loading, data } = useQuery(FETCH_APPUSERS_QUERY);

  const [appUsers, setAppUsers] = React.useState([]);

  React.useEffect(() => {
    if (data) {
      console.log(data);
      setAppUsers(data.getAppUsers);
    }
  }, [data]);
  console.log(appUsers);

  const index = 0;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth }}
        transition={{ duration: 0.5 }}
      >
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
                    <th tabIndex={index}>#Id</th>
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

                {appUsers &&
                  appUsers.map((appUser) => (
                    <tbody
                      className="list_body_row"
                      key={appUser.id}
                      style={{ marginBottom: 20 }}
                    >
                      <ListCard AppUsers={appUser} />
                    </tbody>
                  ))}

                {/* <tbody className="list_body_row">
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
            </tbody> */}
              </table>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default UserDetails;
