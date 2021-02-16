import { rest } from "msw";
import { mockData } from "./mockData";

export const handlers = [
  rest.get("http://localhost:8000/entries", async (req, res, ctx) => {
    return res(ctx.json(mockData));
  }),
];
