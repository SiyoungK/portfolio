import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

export default function Footer() {
    return (
        <footer className="flex justify-left py-10 border-t border-gray-300 text-footer-text">
          <div className="mx-auto w-[90%] md:max-w-[90%]">
            <div className="md:flex md:flex-row md:justify-between">
              {/* === Useful links === */}
              <div className="py-5 flex justify-start flex-col md:flex-row gap-3">
                <a>
                  Resume
                </a>
                <a>
                  Contact
                </a>
              </div>
              {/* === Socials === */}
              <div className="py-5 flex flex-row gap-4">
                <a>
                  <LinkedInIcon className="w-5 aspect-square" fillColor="fill-footer-text"/>
                </a>
                <a>
                  <GitHubIcon className="w-5 aspect-square" fillColor="fill-footer-text"/>
                </a>
              </div>
            </div>
            {/* Copyright */}
            <div className="py-5">
              <p>© 2026 Siyoung Kim. All rights reserved.</p>
            </div>
          </div>
        </footer>
    )
}