import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //nothing here

    //Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you before button click", () => {
    render(<Greeting />);
    const paraElement = screen.getByText("It's good to see you!", {
      exact: false,
    });
    expect(paraElement).toBeInTheDocument();
  });

  test('renders text changed if the button is clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const paraElement = screen.getByText("Text changed", {
        exact: false,
      });
      expect(paraElement).toBeInTheDocument();
  });

  test('does not render good to see you if the button is clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const paraElement = screen.queryByText("It's good to see you", {
        exact: false,
      });
      expect(paraElement).toBeNull();
  });
});
