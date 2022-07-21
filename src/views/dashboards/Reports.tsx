import React from "react";
import "./Reports.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link } from "react-router-dom";

function Reports() {
  return (
    <div className="report">
      <div className="report_top">
        <h2>Reports</h2>
        {/* Drop down menu */}
        <div className="report_dropdown">
          <select name="" id="" defaultValue={"JUILLET"}>
            <option value="MAI">Mai</option>
            <option value="JUIN">Juin</option>
            <option value="JUILLET">Juillet</option>
          </select>
          <p>Month</p>
        </div>
      </div>
      <div className="report_bottom">
        <div className="report_left">
          <p>nbr of report this months ...</p>
          <p>report to take care of ...</p>
          <button>
            <Link to="/Report">See all </Link>
          </button>
        </div>
        <div className="report_right">
          <div className="report_chart">
            <div className="report_chart_reason">
              <h3>Nudity</h3>
              <p>06 reports</p>
            </div>
            <div className="report_chart_graph">
              <p>Graph here</p>
            </div>
            <div className="report_chart_progress">
              <div className="report_chart_progressNb">
                <p>+3</p>
                <p>
                  <ArrowUpwardIcon />
                </p>
              </div>
              <p>from last month</p>
            </div>
          </div>
          <div className="report_chart">
            <div className="report_chart_reason">
              <h3>Copyright</h3>
              <p>14 reports</p>
            </div>
            <div className="report_chart_graph">
              <p>Graph here</p>
            </div>
            <div className="report_chart_progress">
              <div className="report_chart_progressNb">
                <p>-5</p>
                <p className="down">
                  <ArrowDownwardIcon />
                </p>
              </div>
              <p>from last month</p>
            </div>
          </div>
          <div className="report_chart">
            <div className="report_chart_reason">
              <h3>Others</h3>
              <p>01 reports</p>
            </div>
            <div className="report_chart_graph">
              <p>Graph here</p>
            </div>
            <div className="report_chart_progress">
              <div className="report_chart_progressNb">
                <p>-11</p>
                <p className="down">
                  <ArrowDownwardIcon />
                </p>
              </div>
              <p>from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
