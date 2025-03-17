import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@heroui/react";
import ApplicationLogo from "./ApplicationLogo";
import useLatestVersion from "@/Hooks/useLatestVersion";

const NavbarHUI = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { version, loading, error } = useLatestVersion(
        "luis-developer-08/yui-installer"
    );

    const menuItems = [
        { name: "Home", url: "home" },
        { name: "Features", url: "features" },
        { name: "Getting Started", url: "getting-started" },
        { name: "Usage", url: "usage" },
    ];

    // Function to handle link clicks
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            className="bg-sky-100"
            maxWidth="xl"
            isMenuOpen={isMenuOpen}
        >
            <NavbarContent>
                <NavbarBrand>
                    <div className="w-9 me-3">
                        <ApplicationLogo />
                    </div>
                    {/* <AcmeLogo /> */}
                    <p className="font-bold text-inherit">YUI</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item}-${index}`}>
                        <Link color="foreground" href={`#${item.url}`}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Link color="foreground">{version}</Link>
                </NavbarItem>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`mobile-${item}-${index}`}>
                        <Link
                            className="w-full"
                            href={`#${item.url}`}
                            size="lg"
                            onPress={() => handleLinkClick()}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default NavbarHUI;
