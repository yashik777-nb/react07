import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App page tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test("App Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
