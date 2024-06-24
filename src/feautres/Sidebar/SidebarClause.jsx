export default function SidebarClause({ title }) {
  return (
    <div className="flex gap-[14px] py-[8px] pl-5">
      <img src="./clauseIcon.svg" alt="" />
      <p>{title}</p>
    </div>
  );
}
