import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductItem from "../components/ProductItem";
import { describe, it, expect, vi } from 'vitest';
import { Checkout } from "../components/Checkout";


const mockedProductData = [
    {
        id: 1,
        title: "Mocked data 1",
        price: 12.34,
        description: "This is the first mocked data"
    },
    {
        id: 2,
        title: "Mocked data 2",
        price: 0.59,
        description: "This is the second mocked data"
    },
    {
        id: 3,
        title: "Mocked data 3",
        price: 131,
        description: "This is the last mocked data"
    }
]

describe("Testing component rendering", ()=>{
    it('Test product item renders correct title', ()=>{
        render(<ProductItem product={mockedProductData[0]}/>)
        expect(screen.getByRole('heading').textContent).toBe("Mocked data 1")
    })

    it('Test product item renders correct description', ()=>{
        render(<ProductItem product={mockedProductData[1]}/>)
        expect(screen.getByTestId('product-description').textContent).toBe("This is the second mocked data")
    })

})