
export default function Button({ title, onClick, isLoading }) {
  return (
    <button className="relative flex items-center justify-center w-36 h-10 bg-gradient-to-r from-text-primary to-white hover:bg-primary2 rounded-es-[10px] rounded-se-[10px] shadow-md text-white font-semibold" onClick={onClick} disabled={isLoading}>
      <div className={`absolute left-2 w-6 h-6 rounded-full border-t-text-primary border-4 bg-white animate-spin ${!isLoading && "hidden"}`}></div>
      <p>{ title }</p>
    </button>
  );
}
