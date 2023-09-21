import { createContext } from "react";

import { ErrorMessage } from "../types";

export const ErrorBoundaryContext = createContext<ErrorMessage | null>(null);
