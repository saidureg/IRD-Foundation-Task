const Sidebar = () => {
  return (
    <div>
      <h3>Settings</h3>
      <div className="flex flex-col">
        <details className="dropdown">
          <summary className="m-1 btn">Language Settings</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
          </ul>
        </details>
        <details className="dropdown">
          <summary className="m-1 btn">General Settings</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
        <details className="dropdown">
          <summary className="m-1 btn">Font Settings</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
        <details className="dropdown">
          <summary className="m-1 btn">Appearance Settings</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Sidebar;
