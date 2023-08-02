import { ComponentProps } from "react";

export default function CalloutLink({ className, ...rest }: ComponentProps<"a">) {
  return (
    <a
      className={["cursor-pointer text-white hover:text-primary", className].filter(Boolean).join(" ")}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    />
  );
}
