import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import IssuesList from "./IssuesList";

configure({ adapter: new Adapter() });

const issues = [
  {
    id: 1,
    issueDescription: "Issue Description One",
    severity: "Critical",
    status: "Open",
  },
  {
    id: 2,
    issueDescription: "Issue Description Two",
    severity: "Minor",
    status: "Closed",
  },
  {
    id: 3,
    issueDescription: "Issue Description Three",
    severity: "Major",
    status: "In Progress",
  },
];

describe("Issues List Page Test", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<IssuesList issues={issues} />);
  });

  it("IssuesList -  Render Issues Description as Second Column", () => {
    expect(wrapper.find("th").at(1).props().children).toEqual(
      "Issue Description"
    );
  });

  it("IssuesList -  Render Issues Description as Fourth Column", () => {
    expect(wrapper.find("th").at(3).props().children).toEqual("Status");
  });

  it("IssuesList -  Render 2nd Issue Description as Props to Second Issue Compoent", () => {
    expect(wrapper.find("Issue").at(1).props().issueDescription).toEqual(
      "Issue Description Two"
    );
  });

  it("IssuesList -  Render 2nd Issue Status as Props to Second Issue Compoent", () => {
    expect(wrapper.find("Issue").at(1).props().status).toEqual("Closed");
  });

  test("Issues List Page Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
