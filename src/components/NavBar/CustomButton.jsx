export default function CustomButton({ children, route, pathname }) {

  return (
    <button
      className={`${
        route === pathname ? "bg-[var(--global-tertiary-bg)]" : ""
      } w-60 h-12 rounded-md border-2 border-[var(--global-border)] text-[var(--global-text)] p-2`}
    >
      {children}
    </button>
  );
}
