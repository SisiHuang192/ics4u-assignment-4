import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                <p className="mb-2">Built with React, Vite, Tailwind and React Router</p>
                <FaGithub />
                <link rel="icon" href="https://github.com/Mr-Qayum/ics4u/tree/master" />
                <FaLinkedin />
                <link rel="icon" href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH_JsXighehBwAAAZ2Wy_Bop1ScfLA2Hyu1Uh6_MCNE1CYCZbNeS4ct-jFuxV0EylDZ-ixjjIFPatZ-ohzSEUUo_8p6Pt0UyH1uh4UOceUlI4qHJnavjAnYVj6eXMlPfRDIpT4=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2FYOUR_LINKEDIN" />
            </div>
        </footer>
    );
}   