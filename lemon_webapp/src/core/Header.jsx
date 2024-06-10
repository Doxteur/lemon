import React from "react";
import logo from "../assets/Images/logo.svg";
import { Link } from "react-router-dom";
import Cart from "../components/Shop/Cart";

function Header({ title }) {
  return (
    <div>
      {/* Required Meta Tags Always Come First */}
      <meta charSet="utf-8" />
      <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href="https://preline.co/" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="description"
        content="From bold visuals to interactive elements, this template is fully customizable to suit your unique needs and preferences."
      />
      <meta name="twitter:site" content="@preline" />
      <meta name="twitter:creator" content="@preline" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Creative Agency Demo Template Tailwind CSS | Preline UI, crafted with Tailwind CSS"
      />
      <meta
        name="twitter:description"
        content="From bold visuals to interactive elements, this template is fully customizable to suit your unique needs and preferences."
      />
      <meta
        name="twitter:image"
        content="https://preline.co/assets/img/og-image.png"
      />
      <meta property="og:url" content="https://preline.co/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Preline" />
      <meta
        property="og:title"
        content="Creative Agency Demo Template Tailwind CSS | Preline UI, crafted with Tailwind CSS"
      />
      <meta
        property="og:description"
        content="From bold visuals to interactive elements, this template is fully customizable to suit your unique needs and preferences."
      />
      <meta
        property="og:image"
        content="https://preline.co/assets/img/og-image.png"
      />
      {/* Title */}
      <title>
        Creative Agency Demo Template Tailwind CSS | Preline UI, crafted with
        Tailwind CSS
      </title>
      {/* Favicon */}
      <link rel="shortcut icon" href="https://preline.co/favicon.ico" />
      {/* Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {/* Theme Check and Update */}
      {/* CSS HS */}
      <link
        rel="stylesheet"
        href="https://preline.co/assets/css/main.min.css"
      />
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-1">
        <nav
          className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto"
          aria-label="Global"
        >
          <div className="md:col-span-3">
            {/* Logo */}
            <Link
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              aria-label="Preline"
              to="/"
            >
              <img className="w-24" src={logo} alt="Image Description" />
            </Link>
            {/* End Logo */}
          </div>
          {/* Button Group */}
          <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
            <Cart />

          </div>
          {/* End Button Group */}
          {/* Collapse */}
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
              <div>
                <Link
                  className={`relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 dark:text-white ${
                    window.location.pathname === "/"
                      ? "before:bg-fuchsia-400"
                      : ""
                  }`}
                  aria-current="page"
                  to="/"
                  // is active actual page is /
                  // active is before:bg-fuchsia-400
                >
                  Accueil
                </Link>
              </div>
              <div>
                <Link
                  className={`relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 dark:text-white ${
                    window.location.pathname === "/products"
                      ? "before:bg-fuchsia-400"
                      : ""
                  }`}
                  to="/products"
                >
                  Nos Produits
                </Link>
              </div>
              <div>
                <a
                  className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                  href="#"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          {/* End Collapse */}
        </nav>
      </header>
    </div>
  );
}
export default Header;
