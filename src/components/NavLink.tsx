import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => (
  <Link href={href}>
    <h2 className="flex items-center cursor-pointer hover:text-orange-900 uppercase font-medium text-sm tracking-wider">
      {label}
      <span className="material-symbols-outlined text-sm ml-1">
        keyboard_arrow_down
      </span>
    </h2>
  </Link>
);

export default NavLink;
