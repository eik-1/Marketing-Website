// Editorial section label: hairline rule + tracked small caps.
// tone="light" for white backgrounds, tone="dark" for slate/black panels.
const tones = {
  light: "text-blue-600",
  dark: "text-blue-400",
};

const Kicker = ({ children, tone = "light", className = "" }) => (
  <span
    className={`inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest ${tones[tone]} ${className}`}
  >
    <span aria-hidden="true" className="h-px w-8 bg-current" />
    {children}
  </span>
);

export default Kicker;
