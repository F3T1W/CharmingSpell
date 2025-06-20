import {useContext, useEffect} from "react";
import {CloudArrowUpIcon, LockClosedIcon, ServerIcon} from "@heroicons/react/20/solid/index.js";
import {ThemeContext} from "../components/ThemeContext.jsx";

const features = [
  {
    name: "Push to deploy.",
    description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function FeaturesPage() {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div
          className="overflow-hidden bg-white py-24 sm:py-32"
          style={{
            background: isDarkMode
                ? "linear-gradient(to right, #1e293b, #0f172a)"
                : "linear-gradient(to right, #e2e8f0, #cbd5e1)",
          }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <p
                    className={`mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  A better workflow
                </p>
                <p
                    className={`mt-6 text-lg/8 ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl
                    className={`mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt
                            className={`inline font-semibold ${
                                isDarkMode ? "text-purple-600" : "text-purple-700"
                            }`}
                        >
                          <feature.icon
                              aria-hidden="true"
                              className="absolute top-1 left-1 size-5 text-indigo-600"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
                alt="Product screenshot"
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                width={2432}
                height={1442}
                className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
  );
}
