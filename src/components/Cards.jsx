import React from "react";
import packagetitle from "../../public/images/dashboard/packagetitle.svg";
import CardParticleBg from "../../public/images/dashboard/CardParticleBg.svg";

const packages = [
  {
    title: "Basic Package",
    price: "$50 / 300 Days",
    percentage: "(1%)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut ",
    imageUrl: packagetitle,
  },
  {
    title: "Advanced Package",
    price: "$100 / 600 Days",
    percentage: "(1%)",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et ",
    imageUrl: packagetitle,
  },
  {
    title: "Premium Package",
    price: "$200 / 900 Days",
    percentage: "(1%)",
    description:
      "Nulla facilisi. Vivamus aliquet ligula et magna scelerisque soll",
    imageUrl: packagetitle,
  },
];
const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {packages.map((pkg, index) => (
        <div
          key={index}
          className="bg-white shadow-xl p-6 rounded-[24px] text-center relative overflow-hidden"
        >
             <div
            className="absolute top-0 left-0 w-full h-24 bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${CardParticleBg})`, zIndex: -1 }}
          ></div>
          <h3 className="text-md text-primary font-bold mb-2">{pkg.title}</h3>
          <div className="bg-blue-500 rounded-full inline-block">
            <img
              src={pkg.imageUrl}
              alt={`Package Icon ${index + 1}`}
              className="mx-auto"
            />
          </div>

          <p className="text-lg font-bold text-primary mb-2">{pkg.price}</p>
          <p className="text-lg font-bold text-primary mb-2">{pkg.percentage}</p>
          <p className="text-[#989DAB] mb-4">{pkg.description}</p>
          <button className="bg-blue text-white py-2 px-4 rounded-full hover:bg-blue-600">
            Buy Package
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
