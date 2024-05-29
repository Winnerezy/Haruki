export default function Button({ title, onClick, isLoading }) {
  console.log(isLoading)
  return (
    <button
      className="border border-[var(--global-border-bg)] rounded-md hover:bg-[var(--global-button-hover-bg)] hover:text-white w-36 min-h-10 self-center font-bold"
      onClick={onClick}
    >
      {isLoading ? (
        <div className="flex items-center justify-between px-4">
          <div className="w-8 h-8 rounded-[50%] border-8 border-t-8 border-[var(--global-border)] border-t-white bg-black animate-spin"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <p>{title}</p>
      )}
    </button>
  );
}
