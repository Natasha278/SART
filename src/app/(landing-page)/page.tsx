import Image from "next/image";
import LandingPageHero from "./LandingPageHero";

export default function LandingPage() {
  return (
    <div className="flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl px-10">
        <LandingPageHero />
        <div className="flex flex-col gap-40 py-24">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2">
              <div className="flex text-base font-semibold tracking-wide text-orange-600 dark:text-orange-400">
                <span>HOW IT WORKS</span>
              </div>
              <div className="flex max-w-96 text-base text-zinc-700 dark:text-zinc-300">
                <span>
                  Organizing life effectively often requires a combination of
                  tools that cater to different aspects of planning and
                  productivity. MANA manages this tools for you.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-28">
              <div className="flex flex-row gap-60"></div>
              <div className="flex flex-row gap-60">
                <div>
                  <Image
                    src="/more/phone3.png"
                    height={385}
                    width={385}
                    alt="phone3"
                  ></Image>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="flex text-8xl font-extrabold text-zinc-200 dark:text-slate-800">
                      02
                    </span>
                    <span className="flex text-zinc-400 dark:text-zinc-600">
                      Setting Up Notion for Centralized Planning
                    </span>
                    <span className="flex text-3xl font-bold text-zinc-700 dark:text-zinc-300">
                      Tell us your commitment
                    </span>
                  </div>
                  <div className="flex h-20 w-96 flex-col gap-1 text-base text-zinc-700 dark:text-zinc-300">
                    <span>MANA will:</span>
                    <ul className="ml-5 list-disc">
                      <li>Set up a new Notion workspace for you</li>
                      <li>
                        Design a central dashboard with links to different areas
                        you added before
                      </li>
                      <li>Create Pages and Databases</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-60">
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="flex text-8xl font-extrabold text-zinc-200 dark:text-slate-800">
                      03
                    </span>
                    <span className="flex text-zinc-400 dark:text-zinc-600">
                      Initial Setup and Planning
                    </span>
                    <span className="flex text-3xl font-bold text-zinc-700 dark:text-zinc-300">
                      Tell us what you want to do
                    </span>
                  </div>
                  <div className="flex max-h-20 max-w-96 text-base text-zinc-700 dark:text-zinc-300">
                    <span>
                      Never again waste time thinking about when to do
                      something. MANA IA will help you plan your day, week,
                      month, and year.
                    </span>
                  </div>
                </div>
                <div>
                  <Image
                    src="/more/phone3.png"
                    height={385}
                    width={385}
                    alt="phone3"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-28 rounded-xl border-2 border-orange-100 py-32 dark:border-orange-900">
            <div className="flex flex-col items-center justify-center gap-4">
              <span className="text-base font-semibold tracking-wide text-orange-600 dark:text-orange-400">
                MEET OUR TEEM
              </span>
              <span className="text-center text-base text-zinc-700 dark:text-zinc-300">
                Description
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
