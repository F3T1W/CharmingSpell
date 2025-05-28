import { ThemeContext } from "../components/ThemeContext.jsx";
import { useContext, useEffect } from "react";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Push to deploy",
    description:
        "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse" +
        " semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
        "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget." +
        " Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
        "Quisque est vel vulputate cursus. Risus proin diam nunc commodo." +
        " Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
        "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis" +
        " aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

export default function AboutPage() {
  const { isDarkMode } = useContext(ThemeContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div
          className="relative h-full flex items-center justify-center overflow-hidden"
          style={{
            background: isDarkMode
                ? "linear-gradient(to right, #1e293b, #0f172a)"
                : "linear-gradient(to right, #e2e8f0, #cbd5e1)",
          }}
      >
        <div
            className="isolate px-6 py-12 sm:py-16 lg:px-8"
            style={{
              marginTop: "10vh",
              marginBottom: "10vh",
            }}
        >
          <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          ></div>

          <div className="mx-auto max-w-2xl lg:text-center">
            <p
                className={`mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance ${
                    isDarkMode ? "text-white" : "text-black"
                }`}
            >
              Everything you need to deploy your app
            </p>
            <p
                className={`mt-6 text-lg/8 ${
                    isDarkMode ? "text-white" : "text-black"
                }`}
            >
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
              In mi viverra elit nunc.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt
                        className={`text-base/7 font-semibold ${
                            isDarkMode ? "text-white" : "text-black"
                        }`}
                    >
                      <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg
                   bg-indigo-600">
                        <feature.icon
                            aria-hidden="true"
                            className="size-6 text-white"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd
                        className={`mt-2 text-base/7 ${
                            isDarkMode ? "text-white" : "text-black"
                        }`}
                    >
                      {feature.description}
                    </dd>
                  </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
  );
}
