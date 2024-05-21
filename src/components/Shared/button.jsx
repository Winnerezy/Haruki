export default function Button({ title, onClick }) {
  return (
    <button
      className="border border-[var(--global-border-bg)] rounded-md hover:bg-[var(--global-button-hover-bg)] hover:text-white w-36 min-h-10 self-center font-bold"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
