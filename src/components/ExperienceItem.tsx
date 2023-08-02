import { ComponentProps } from "react";

import { Experience } from "@constants/PORTFOLIO_DATA";

import { ReactComponent as ArrowUpRightIcon } from "@assets/icons/ArrowUpRight.svg";

interface ExperienceItemProps extends ComponentProps<"li"> {
  data: Experience extends (infer T)[] ? T : never;
}

function ExperienceItem({ className, data, ...rest }: ExperienceItemProps) {
  return (
    <li
      className={["relative grid h-fit md:grid-cols-8 gap-4 group-hover/list:[&:not(:hover)]:opacity-50", className].filter(Boolean).join(" ")}
      {...rest}
    >
      <header className="col-span-2 pt-1 text-xs font-semibold tracking-wide text-neutral-400">
        <p className="w-fit bg-backdrop">{`${data.dateFrom} — ${data.dateTo}`}</p>
      </header>
      <div className="group col-span-6 flex flex-col gap-2">
        <a className="text-white" href={data.url} target="_blank" rel="noopener noreferrer">
          <span className="bg-backdrop text-white transition-all group-hover:text-primary">
            {`${data.position} · ${data.companyName} `}
            {data.url && <ArrowUpRightIcon className="inline-block h-4 w-4 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />}
          </span>
          <span className="absolute -bottom-4 -left-4 -right-4 -top-4 rounded-md border border-solid border-transparent transition-all group-hover:border-white/25 group-hover:bg-white/[0.01] " />
        </a>
        <p className="bg-backdrop text-sm text-neutral-400">{data.description}</p>
        <ul className="flex flex-wrap gap-2">
          {data.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-gray-400 bg-opacity-10 px-3 py-1 text-xs tracking-wide text-gray-400 group-hover:bg-primary/10 group-hover:text-primary"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
export default ExperienceItem;
