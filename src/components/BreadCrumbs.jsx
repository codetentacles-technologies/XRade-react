import { ArrowLeft, ChevronRight } from "lucide-react";
import React from "react";

const BreadCrumbs = ({ title, breadcrumbs }) => {
  return (
    <div className="relative mb-[2%]">
      <div className="lg:flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-2 lg:mb-0 transition-all flex items-center gap-3">
          <ArrowLeft className="left-arrow-icon font-bold" size={28} /> {title}
        </h1>

        <nav className="breadcrumbs">
          <ol className="flex flex-wrap list-none p-0 m-0 text-sm font-normal">
            {breadcrumbs.map((breadcrumb, index) => (
              <li
                key={index}
                className={`flex items-center ${breadcrumb.isCurrent ? "font-bold " : ""}`}
              >
                {breadcrumb.isCurrent ? (
                  <span>{breadcrumb.name}</span>
                ) : (
                  <a
                    href={breadcrumb.link}
                    className=""
                  >
                    {breadcrumb.name}
                  </a>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="">
                    <ChevronRight className="inline-block" size={15} />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default BreadCrumbs;
