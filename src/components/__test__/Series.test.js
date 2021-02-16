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

describe("Series page", () => {
  it("should navigates movies when you click series", async () => {
    // Access history
    const history = createMemoryHistory();
    history.push("/");
    // Render app
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    // Interact with page
    act(() => {
      const movies = screen.getByTestId("series");
      userEvent.click(movies);
    });

    expect(screen.getByText("Popular Series")).toBeInTheDocument();
  });

  it("should show loading message when you naviate to series", async () => {
    // Access history
    const history = createMemoryHistory();
    history.push("/series");
    // Render app
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(screen.getByText("Loading ...")).toBeInTheDocument();
  });

  it("should render 21 entries in series page", async () => {
    // Access history
    const history = createMemoryHistory();
    history.push("/series");
    // Render app
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const entries = await screen.findAllByAltText("entry");

    expect(entries.length).toEqual(21);
  });
});
