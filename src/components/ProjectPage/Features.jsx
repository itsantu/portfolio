import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Features = ({ features }) => {
  return (
    <div className="my-6">
      <h2 className="text-2xl font-semibold">Features</h2>
      <ul className="">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            } items-center my-8`}
          >
            <div className="w-1/2 p-1 md:p-2 flex justify-center items-center rounded-lg">
              <LazyLoadImage
                src={feature.imgSource}
                alt={feature.name}
                effect="blur"
                className="w-full rounded-md max-h-44 object-cover object-top shadow-xl"
                wrapperClassName="w-full"
              />
            </div>
            <div className="w-1/2 ml-3 md:p-2">
              <h3 className="text-xl text-gray-800 font-semibold mb-2">{feature.name}</h3>
              <p className="text-sm text-gray-500 ">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
