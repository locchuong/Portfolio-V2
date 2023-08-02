import { ComponentProps, ReactNode } from "react";

interface SocialLinkProps extends ComponentProps<"a"> {
  icon: ReactNode;
}

function SocialLink({ className, icon, ...rest }: SocialLinkProps) {
  return (
    <a
      className={[
        "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-neutral-400 p-2 text-neutral-400 transition-all hover:scale-110 hover:border-white hover:text-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {icon}
    </a>
  );
}
export default SocialLink;
