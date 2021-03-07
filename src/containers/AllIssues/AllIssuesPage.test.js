import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import AllIssuesPage from "./AllIssuesPage";

configure({ adapter: new Adapter() });

describe("All Issues Page Test", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<AllIssuesPage />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("All Issue Page should have h1", () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });

  it("All Issue Page should have Issues List", () => {
    expect(wrapper.find("IssuesList").length).toEqual(1);
  });

  test("All Issues Page Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
