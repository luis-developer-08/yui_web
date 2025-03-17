import NavbarHUI from "@/Components/NavbarHUI";
import React from "react";

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-sky-50">
            <NavbarHUI />
            <main className="flex-1 md:mx-40 my-5">{children}</main>
        </div>
    );
};

export default MainLayout;
