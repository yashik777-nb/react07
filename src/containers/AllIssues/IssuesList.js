import React from "react";
import Issue from "../../components/Issue/Issue";
import IssuesListCSS from "./IssuesList.module.css";

export default class IssuesList extends React.Component {
  render() {
    let issuesList = this.props.issues.map((issue) => (
      <Issue
        key={issue.id}
        id={issue.id}
        issueDescription={issue.issueDescription}
        severity={issue.severity}
        status={issue.status}
      />
    ));

    return (
      <div>
        <table className={IssuesListCSS.border}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Issue Description</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{issuesList}</tbody>
        </table>
      </div>
    );
  }
}
