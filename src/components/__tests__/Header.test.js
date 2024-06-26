import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"


test("Should test if login button is rendered correctly", () => {
    render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"});
    expect(loginButton).toBeInTheDocument();
})

test("Should test if there exist a Cart", () => {
    render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cart = screen.getByText(/MyCart/);
    expect(cart).toBeInTheDocument();
})

test("Should test if there exist a Cart", () => {
    render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
})