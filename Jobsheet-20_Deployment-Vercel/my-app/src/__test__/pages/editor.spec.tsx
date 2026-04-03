import HalamanEditor from "@/pages/editor";
import { render } from "@testing-library/react";


describe("Halaman Editor", () => {
  it("renders halaman editor correctly", () => {
    const page = render(<HalamanEditor />);  
    expect(page).toMatchSnapshot();
  });   
});