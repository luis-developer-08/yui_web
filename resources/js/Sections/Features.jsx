import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";

const Features = () => {
    const features = [
        "✔️ Laravel – Laravel provides a complete ecosystem for web artisans.",
        "✔️ Laravel Breeze – Lightweight authentication with Inertia.js.",
        "✔️ Laravel Pulse – Delivers at-a-glance insights into your application's performance and usage.",
        "✔️ Orion – The simplest way to create REST API with Laravel.",
        "✔️ Inertia.js – Create modern single-page React, Vue, and Svelte apps using classic server-side routing.",
        "✔️ React 19 + JSX – Simple, clean, and TypeScript-free.",
        "✔️ React Icons – Include popular icons in your React projects easily with react-icons.",
        "✔️ TanStack Query – Powerful asynchronous state management for TS/JS.",
        "✔️ Zustand – A small, fast, and scalable bearbones state management solution.",
        "✔️ Laravel-Spatie-permission – Associate users with roles and permissions.",
        "✔️ TailwindCSS 4 – Modern styling with utility-first CSS.",
        "✔️ Vite-Powered – Lightning-fast HMR for smooth development.",
        "✔️ Pre-configured Testing – Includes PHPUnit & Pest.",
        "✔️ Hero UI – Beautiful, fast, and modern React UI library for building accessible and customizable web applications.",
        "✔️ shadcn/ui – A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.",
        "✔️ Quick Setup – Get started in minutes!",
    ];

    return (
        <div
            className="min-h-[80vh] flex flex-col justify-center items-center w-full py-20"
            id="features"
        >
            <Card
                isBlurred
                className="border-none bg-white/70 dark:bg-default-100/50 p-2 md:p-5 w-full rounded-none md:rounded-2xl"
                shadow="sm"
            >
                <CardBody className="overflow-visible py-2">
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-10 items-center justify-center">
                        <div className="flex flex-col col-span-6 md:col-span-12">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0 w-full">
                                    <h1 className="text-2xl md:text-3xl font-medium mt-2">
                                        🎯 Features
                                    </h1>
                                    <Divider className="my-4" />
                                    <ul className="txt-sm overflow-x-auto text-nowrap">
                                        {features.map((feature) => (
                                            <li key={feature}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Features;
