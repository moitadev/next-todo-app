import React from "react";
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import { Container } from "..";

const childText = "Children component test"

describe("Common: App Container", () => {
    it("should render the children inside the container", async () => {
        render(<Container>{childText}</Container>);

        const children = await screen.findByText(childText);

        expect(children).toBeInTheDocument();
    });
})