import { rest } from "msw";
import { mockData } from "./mockData";

export const handlers = [
  rest.get("https://github.com/entries", async (req, res, ctx) => {
    return res(ctx.delay(1500), ctx.json(mockData));
  }),
];
