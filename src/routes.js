import { Internship } from "./components/internship";
import { Start } from "./components/start";

export const routes = [
  { path: "/internship", element: <Internship />, exact: true },
  { path: "/start", element: <Start />, exact: true }
]