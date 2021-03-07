import React from "react";
import IssuesAPI from "../../data/IssuesAPI";
import IssuesList from "./IssuesList";

export default class AllIssuesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
    };
  }

  render() {
    return (
      <div>
        <h1 style={{ marginLeft: "10px" }}>IssuesList</h1>
        <IssuesList issues={this.state.issues} />;
      </div>
    );
  }

  componentDidMount() {
    this.setState({ issues: IssuesAPI.getAllIssues() });
  }
}
