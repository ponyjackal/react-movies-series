import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "../../App";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { mockData } from "../../mocks/mockData";

const server = setupServer(
  rest.get("http://localhost:8000/entries", (req, res, ctx) => {
    return res(ctx.json(mockData));
  })
);

beforeAll(async () => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Home page", () => {
  it("should render Home page without crashing", () => {
    // Access history
    const history = createMemoryHistory();
    history.push("/");
    // Render app
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(screen.getByText("Popular Titles")).toBeInTheDocument();
  });
});
