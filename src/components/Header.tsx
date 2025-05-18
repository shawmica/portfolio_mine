import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Volunteering" },
    { id: "certifications", label: "Certifications" },
    { id: "extracurricular", label: "Extracurricular" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60">
      <div className="container flex h-16 items-center justify-between">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/" className="text-xl font-bold tracking-tight">
            Portfolio
          </Link>
        </motion.div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>

        {/* Desktop menu */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:block"
        >
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.label}
                  </button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-4 z-50 w-auto bg-white dark:bg-gray-900 text-foreground p-4 rounded-lg shadow-lg md:hidden"
            >
              <nav className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-base font-medium hover:text-primary text-left transition-colors"
                  >
                    {item.label}
                  </button>
                ))}

                {mounted && (
                  <button
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="mt-3 flex items-center justify-start space-x-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    {theme === "light" ? (
                      <>
                        <Moon className="h-4 w-4" />
                        <span>Dark Mode</span>
                      </>
                    ) : (
                      <>
                        <Sun className="h-4 w-4" />
                        <span>Light Mode</span>
                      </>
                    )}
                  </button>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Theme toggle button for desktop */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="ml-auto md:ml-0"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
