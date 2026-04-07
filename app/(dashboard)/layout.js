"use client";

import Header from "@/components/dasboard/Header";
import Sidebar from "@/components/dasboard/Sidebar";
import { useState } from "react";

export default function RootLayout({ children }) {
    const [sideBarOpen, setSideBarOpen] = useState(true);
    return (
        <>
            <div
                className={`dashboard ${sideBarOpen ? "-is-sidebar-visible" : ""
                    } js-dashboard`}
            >
                <Sidebar setSideBarOpen={setSideBarOpen} />

                <div className="dashboard__content">
                    <Header setSideBarOpen={setSideBarOpen} />
                    {children}
                    <div className="text-center pt-30">
                        © Copyright Mawari {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </>

    );
}
