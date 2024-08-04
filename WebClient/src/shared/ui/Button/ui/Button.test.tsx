import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { ThemeButton } from "../config/ThemeButton";

describe("Button", () => {
    test("Test render", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });

    test("Test link theme", () => {
        render(<Button theme={ThemeButton.LINK}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass(ThemeButton.LINK);
    });
});
