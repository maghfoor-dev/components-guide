import { useState } from "react";
import "./accordian.css";

type AccordianProperties = {
  title: string;
  children: React.ReactElement;
  isOpen: boolean;
};
export function Accordian({
  title,
  children,
  isOpen = false,
}: AccordianProperties) {
  const [open, setOpen] = useState(isOpen);
  return (
    <div className={`accordian ${open ? "show-content" : ""}`}>
      <div className="accordian-title" onClick={() => setOpen((open) => !open)}>
        <h3>{title}</h3>
        <h3>{open ? `\u25B2` : "\u25BC"}</h3>
      </div>
      {open && <div className="accordian-content">{children}</div>}
    </div>
  );
}
