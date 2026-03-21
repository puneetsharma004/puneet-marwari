"use client";
import { useEffect } from "react";

export default function BootstrapLoader() {
    useEffect(() => {
        import("bootstrap");
    }, []);
    return null;
}