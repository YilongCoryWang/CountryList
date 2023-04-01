import { render, fireEvent, screen } from "@testing-library/react";
import SearchBox from "../../components/SearchBox";

describe("SearchBox", () => {
  const setups = (testData: string = "USA") => {
    const mockSearch = jest.fn();
    const { getByText, getByPlaceholderText, ...utils } = render(<SearchBox handleSearch={mockSearch}/>);
    const input: HTMLInputElement = screen.getByPlaceholderText(
      "Filter Countries by Name"
    );

    return {
      input,
      mockSearch,
      testData,
      ...utils,
    };
  };

  it("renders SearchBox with input", () => {
    const { input } = setups();

    expect(input).toBeInTheDocument();
  });

  it("input should accept user input", () => {
    const { input, testData } = setups();
    fireEvent.change(input, { target: { value: testData } });

    expect(input.value).toBe(testData);
  });

  it("input should be cleared after clicking enter key", () => {
    const { input, mockSearch, testData } = setups();
    fireEvent.change(input, { target: { value: testData } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });

    expect(mockSearch).toHaveBeenCalledTimes(1);
  });
});
