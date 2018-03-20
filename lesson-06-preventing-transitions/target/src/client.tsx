import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppRouter } from "./components/app-router";

ReactDOM.render(
    // Because Router is allowed only have one child
    <AppRouter />,
    document.getElementById("id-application")
);