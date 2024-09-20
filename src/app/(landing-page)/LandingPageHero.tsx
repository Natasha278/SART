// import Chart from "@/components/landing-page/Chart";
// import { Button } from "@/components/ui/Button";
// import { LandingPageChart } from "./LandingPageChart";

export default function LandingPageHero() {
  return (
    <div className="flex flex-row gap-40 pt-36">
      <div className="flex max-w-xl flex-col">
        <div className="pb-6 text-5xl font-extrabold text-slate-800 dark:text-slate-200">
          <div>
            <span>
              SART{" "}
              <span className="text-cyan-600 dark:text-orange-400">
                MISSION
              </span>
            </span>
          </div>
        </div>
        <div className="pb-8 text-lg font-medium text-zinc-600 dark:text-zinc-400">
          <span>
            El proyecto S-ART (Student Astronomical Radio Telescope) es una
            iniciativa concebida por y para estudiantes universitarios. Su
            objetivo es poner en órbita un CubeSat completamente diseñado y
            fabricado por los miembros del proyecto. Este satélite incluirá una
            antena de radioastronomía para estudiar las ondas de radio emitidas
            por el Sol. El proyecto comenzó en febrero de 2024 y busca ser una
            colaboración entre estudiantes de la Universidad Europea de Madrid
            (UEM) y la Universidad Rey Juan Carlos (URJC).
          </span>
        </div>
      </div>
      <div className="item-center flex flex-col justify-center gap-10"></div>
    </div>
  );
}
