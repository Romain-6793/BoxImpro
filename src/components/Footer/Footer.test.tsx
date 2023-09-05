import Footer from "./Footer";
import { render } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";

describe("Footer", () => {
  test("Should render without crash", async () => {
    render(<Footer />);
  });
});
