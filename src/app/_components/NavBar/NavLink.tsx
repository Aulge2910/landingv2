interface NavLinkProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}
const NavLink = ({ id, label, isActive, onClick }: NavLinkProps) => {
  return (
    <li
      onClick={onClick}
      className="group relative flex items-center justify-center w-full h-full cursor-pointer overflow-hidden"
    >
      <span
        className={`
        absolute left-10 w-2 h-2 rounded-full bg-amber-500 transition-all duration-300
        ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"}
      `}
      />

      <span
        className={`
        text-lg transition-colors duration-300 z-10
        ${isActive ? "text-slate-900 font-black" : "text-slate-400 group-hover:text-slate-900"}
      `}
      >
        {label}
      </span>

      <div
        className={`
        absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-transform duration-500 ease-in-out origin-left
        ${isActive ? "  scale-x-100" : " scale-x-0 group-hover:scale-x-100"}
      `}
      />
    </li>
  );
};

export default NavLink;
