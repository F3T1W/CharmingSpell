import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { CheckIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PricesSection() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className="relative isolate px-6 py-24 sm:py-32 lg:px-8"
      style={{
        background: isDarkMode
          ? "linear-gradient(to right, #1e293b, #0f172a)"
          : "linear-gradient(to right, #e2e8f0, #cbd5e1)",
      }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <p
          className={`mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Choose the right plan for you
        </p>
      </div>
      <p
        className={`mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty sm:text-xl/8 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Choose an affordable plan that’s packed with the best features for
        engaging your audience, creating customer loyalty, and driving sales.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        <div
          className={classNames(
            "bg-white/60 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
          )}
        >
          <h3
            id="tier-hobby"
            className={`text-indigo-600 text-base/7 font-semibold `}
          >
            Hobby
          </h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-gray-900 text-5xl font-semibold tracking-tight">
              $29
            </span>
            <span className="text-base">/month</span>
          </p>
          <p className="mt-6 text-black text-base/7">
            The perfect plan if you're just getting started with our product.
          </p>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm/6 sm:mt-10 text-black"
          >
            {[
              "25 products",
              "Up to 10,000 subscribers",
              "Advanced analytics",
              "24-hour support response time",
            ].map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-indigo-600"
                />
                {feature}
              </li>
            ))}
          </ul>
          <a
            href="#"
            aria-describedby="tier-hobby"
            className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
          >
            Get started today
          </a>
        </div>

        <div
          className={classNames(
            "relative bg-gray-900 shadow-2xl rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
          )}
        >
          <h3
            id="tier-enterprise"
            className="text-indigo-400 text-base/7 font-semibold"
          >
            Enterprise
          </h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-white text-5xl font-semibold tracking-tight">
              $99
            </span>
            <span className="text-gray-400 text-base">/month</span>
          </p>
          <p className="mt-6 text-gray-300 text-base/7">
            Dedicated support and infrastructure for your company.
          </p>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm/6 sm:mt-10 text-gray-300"
          >
            {[
              "Unlimited products",
              "Unlimited subscribers",
              "Advanced analytics",
              "Dedicated support representative",
              "Marketing automations",
              "Custom integrations",
            ].map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-indigo-400"
                />
                {feature}
              </li>
            ))}
          </ul>
          <a
            href="#"
            aria-describedby="tier-enterprise"
            className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
          >
            Get started today
          </a>
        </div>
      </div>
    </div>
  );
}
