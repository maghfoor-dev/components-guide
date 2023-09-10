import "./tooltip.css";

type TooltipProperties = {
  children: React.ReactElement;
};

export default function Tooltip({ children }: TooltipProperties) {
  return (
    <div className="tooltip-container">
      <div className="tooltip-children">
        {children}
        <div className="tooltip">
          <span>This is inside the tooltip.</span>
        </div>
      </div>
    </div>
  );
}
