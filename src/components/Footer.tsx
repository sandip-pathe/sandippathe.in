import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface FooterData {
  title: string;
  subtitle: string;
  year: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  };
}

const Footer = ({ data }: { data: FooterData[] }) => {
  if (!data || data.length === 0) {
    return <p className="text-gray-500 self-center">Loading...</p>;
  }
  const footerData = data[0];

  return (
    <footer className="text-gray-500 py-6">
      <div className="max-w-[90%] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h3 className="text-lg font-bold">🚀 {footerData.title}</h3>
          <p className="text-sm text-gray-400">{footerData.subtitle}</p>
          <p className="text-sm text-gray-400">
            © {footerData.year} All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-2xl">
          {footerData.socials.linkedin && (
            <a
              href={footerData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          )}

          {footerData.socials.github && (
            <a
              href={footerData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-400 transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
          )}

          {footerData.socials.twitter && (
            <a
              href={footerData.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-300 transition-transform transform hover:scale-110"
            >
              <FaXTwitter />
            </a>
          )}

          {footerData.socials.email && (
            <a
              href={`mailto:${footerData.socials.email}`}
              aria-label="Email"
              className="hover:text-red-400 transition-transform transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
