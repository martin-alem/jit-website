import { NavLink, Outlet } from "react-router-dom";

const navigation = [
  { name: "Windows", href: "", current: true },
  { name: "MacOS", href: "macos", current: false },
  { name: "Linux", href: "linux", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Download() {
  return (
    <div className="flex items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Side Navigation */}
      <nav className="flex flex-col w-1/12" aria-label="Sidebar">
        <ul role="list" className="-mx-2 space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                end
                to={item.href}
                className={({ isActive }) =>
                  classNames(isActive ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50", "group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold")
                }>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 w-full">
        <Outlet />
      </div>
    </div>
  );
}
