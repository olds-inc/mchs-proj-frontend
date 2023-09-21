import { createContext } from "react";

import { CurrentUser } from "../types";

export const CurrentUserContext = createContext<CurrentUser | null>(null);
