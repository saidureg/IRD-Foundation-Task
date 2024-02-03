import Image from "next/image";
import userProfile from "@/assets/profile.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Duas Page</a>
      </div>
      <div className="flex-none gap-36">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="rounded-full">
              <Image
                src={userProfile}
                alt="profile picture"
                width={120}
                height={120}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
