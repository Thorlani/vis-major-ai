import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Intro from "./Intro";
import * as router from 'react-router'

const navigate = jest.fn()

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

describe("IntroPage", () => {
  it("navigates to MainPage when button is clicked", () => {
    render(<Intro />);

    userEvent.click(screen.getByText("Get Started"));

    expect(navigate).toHaveBeenCalledWith('/main')
  });
});
