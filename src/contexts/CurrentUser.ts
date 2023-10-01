import { createContext } from "react";

import { CurrentUser } from "../types";

export const CurrentUserContext = createContext<CurrentUser | null>(null);

CurrentUserContext.displayName = "CurrentUser";

// todo: когда-нибудь тут нужно будет написать что-то посерьезнее
// типа такого https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/
