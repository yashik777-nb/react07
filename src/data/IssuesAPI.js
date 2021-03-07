import IssuesData from "./IssuesData";

export default class IssuesAPI {
  static getAllIssues() {
    return IssuesData.issues;
  }
}
