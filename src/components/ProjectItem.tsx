import { ComponentProps } from "react";

import { Projects } from "@constants/PORTFOLIO_DATA";

import { ReactComponent as ArrowUpRightIcon } from "@assets/icons/ArrowUpRight.svg";

interface ProjectItemProps extends ComponentProps<"li"> {
  data: Projects extends (infer T)[] ? T : never;
}

function ProjectItem({ className, data, ...rest }: ProjectItemProps) {
  return (
    <li
      className={["group relative grid h-fit gap-4 md:grid-cols-8 group-hover/list:[&:not(:hover)]:opacity-50", className].filter(Boolean).join(" ")}
      {...rest}
    >
      <div className="order-2 col-span-2 min-w-[200px] pt-1 md:order-1 md:min-w-0">
        <div className="aspect-project w-full overflow-hidden rounded-md border-2 border-transparent group-hover:border-white/25 ">
          <img src={data.imageSrc} className="h-full w-full transition-all group-hover:scale-110" />
        </div>
      </div>
      <div className="order-1 col-span-6 flex flex-col gap-2 md:order-2">
        <a className="text-white" href={data.link} target="_blank" rel="noopener noreferrer">
          <span className="bg-backdrop text-white transition-all group-hover:text-primary">
            {data.title}
            <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
          </span>
          <span className="absolute -bottom-4 -left-4 -right-4 -top-4 rounded-md border border-solid border-transparent transition-all group-hover:border-white/25 group-hover:bg-white/[0.01]" />
        </a>
        <p className={"bg-backdrop text-sm text-neutral-400"}>{data.description}</p>
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
export default ProjectItem;
