"use client"; // This must be a client component
import { useEffect } from "react";

export default function BootstrapClient() {
    useEffect(() => {
        import("bootstrap");
    }, []);

    return null;
}