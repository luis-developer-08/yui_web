import { BsGithub } from "react-icons/bs";
import React from "react";
import { Card, CardBody, Image, Divider, Button } from "@heroui/react";
import { router } from "@inertiajs/react";

const Hero = () => {
    return (
        <div
            className="min-h-[80vh] flex flex-col justify-center items-center"
            id="hero"
        >
            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 p-2 md:p-5"
                shadow="sm"
            >
                <CardBody className="overflow-visible py-2">
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-10 items-center justify-center">
                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0 justify-center items-center w-full md:items-start">
                                    <h1 className="text-2xl md:text-3xl font-medium mt-2">
                                        🌟 YUI INSTALLER 🌟
                                    </h1>
                                    <Divider className="my-4" />
                                    <div className="hidden md:block">
                                        <h1 className="text-xl font-medium mt-5 mb-2">
                                            🚀 Introduction
                                        </h1>
                                        <p className="text-large text-foreground/80 text-justify">
                                            Welcome to my personal laravel
                                            installer YUI! This setup is
                                            designed for developers who want a
                                            lightweight, modern, and efficient
                                            foundation for building Laravel
                                            applications with a React frontend
                                            powered by Inertia.js.
                                        </p>
                                        <p className="text-large text-foreground/80 text-justify">
                                            This kit is JavaScript-first, using
                                            JSX instead of TSX, making it
                                            accessible to developers who prefer
                                            plain JavaScript over TypeScript. It
                                            includes React 19, TailwindCSS 4,
                                            and Breeze for simple authentication
                                            and scaffolding.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative col-span-6 md:col-span-4 flex flex-col items-center">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="../images/yui.png"
                                width={270}
                            />

                            <div className="flex gap-2 mt-10">
                                <Button
                                    color="primary"
                                    size="lg"
                                    onPress={() =>
                                        router.visit("#getting-started")
                                    }
                                >
                                    Getting Started
                                </Button>
                                <Button
                                    size="lg"
                                    endContent={<BsGithub size={25} />}
                                    onPress={() =>
                                        window.open(
                                            "https://github.com/luis-developer-08/yui-installer",
                                            "_blank"
                                        )
                                    }
                                >
                                    Github
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Hero;
