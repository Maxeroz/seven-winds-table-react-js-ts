export default function LinkNavbar({ title, id, active }) {
  return (
    <button className={`${id === active && "border-b-2 text-white"} py-[10px]`}>
      {title}
    </button>
  );
}
