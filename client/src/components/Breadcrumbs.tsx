// Breadcrumbs.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="mb-4 ml-4">
      <ul className="flex items-center">
        <li>
          <Link to="/" className="text-[#8645FF]">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={name}>
              <li>
                <span className="text-[12px] mx-2">➔</span>
                {!isLast ? (
                  <>
                    <Link to={routeTo} className="text-[#8645FF]">
                      {name}
                    </Link>
                  </>
                ) : (
                  <span className="text-black">{name}</span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
