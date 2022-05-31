import React from "react";
import { Route } from "react-router-dom";
import AdminIndex from "./admin/Index";
import ClientIndex from "./client/Index";

const App = () => {
    return (
        <>
            <Route path="/admin" render={() => <AdminIndex />} />
            <Route path="/" exact render={() => <ClientIndex />} />
        </>
    );
};

export default App;
