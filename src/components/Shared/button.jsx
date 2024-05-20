export default function Button({ title, onClick }) {
  return (
    <button
      className="border border-azure-radiance-400 rounded-md hover:bg-azure-radiance-400 hover:text-white w-36 min-h-10 self-center font-bold"
      onClick={onClick}
    >
      { title }
    </button>
  );
}
