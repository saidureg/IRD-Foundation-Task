const Sidebar = () => {
  return (
    <div className="bg-base-100 rounded-lg h-[530px]">
      <h3 className="text-center text-xl font-medium text-[#393939] py-8">
        Settings
      </h3>
      <div className="flex flex-col space-y-3 px-4">
        <details className="dropdown">
          <summary className="btn w-full">
            <div className="flex gap-4 items-center py-1 pr-7">
              <span className="bg-base-300 p-2 rounded-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.751 5C11.783 10.77 8.07 15.61 3 18.129M3 5H15H3ZM9 3V5V3ZM10.048 14.5C8.5081 12.9059 7.27548 11.0413 6.412 9L10.048 14.5ZM12.5 18H19.5H12.5ZM11 21L16 11L21 21H11Z"
                    stroke="#9C9FA6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="text-gray-400">Language Settings</span>
            </div>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
          </ul>
        </details>
        <details className="dropdown">
          <summary className="btn w-full">
            <div className="flex gap-4 items-center py-1 pr-10">
              <span className="bg-base-300 p-2 rounded-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 7H17M19 11H5H19ZM19 11C19.5304 11 20.0391 11.2107 20.4142 11.5858C20.7893 11.9609 21 12.4696 21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V13C3 12.4696 3.21071 11.9609 3.58579 11.5858C3.96086 11.2107 4.46957 11 5 11H19ZM19 11V9C19 8.46957 18.7893 7.96086 18.4142 7.58579C18.0391 7.21071 17.5304 7 17 7L19 11ZM5 11V9C5 8.46957 5.21071 7.96086 5.58579 7.58579C5.96086 7.21071 6.46957 7 7 7L5 11ZM7 7V5C7 4.46957 7.21071 3.96086 7.58579 3.58579C7.96086 3.21071 8.46957 3 9 3H15C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V7H7Z"
                    stroke="#9C9FA6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="text-gray-400">General Settings</span>
            </div>
          </summary>
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
          <summary className="btn w-full">
            <div className="flex gap-4 items-center py-1 pr-16">
              <span className="bg-base-300 p-2 rounded-full">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_111_10009)">
                    <path
                      d="M5.83333 0H3.33333C2.44928 0 1.60143 0.35119 0.976311 0.976311C0.35119 1.60143 0 2.44928 0 3.33333L0 5.83333C0 6.71739 0.35119 7.56524 0.976311 8.19036C1.60143 8.81548 2.44928 9.16667 3.33333 9.16667H5.83333C6.71739 9.16667 7.56524 8.81548 8.19036 8.19036C8.81548 7.56524 9.16667 6.71739 9.16667 5.83333V3.33333C9.16667 2.44928 8.81548 1.60143 8.19036 0.976311C7.56524 0.35119 6.71739 0 5.83333 0V0ZM7.5 5.83333C7.5 6.27536 7.32441 6.69928 7.01184 7.01184C6.69928 7.32441 6.27536 7.5 5.83333 7.5H3.33333C2.89131 7.5 2.46738 7.32441 2.15482 7.01184C1.84226 6.69928 1.66667 6.27536 1.66667 5.83333V3.33333C1.66667 2.89131 1.84226 2.46738 2.15482 2.15482C2.46738 1.84226 2.89131 1.66667 3.33333 1.66667H5.83333C6.27536 1.66667 6.69928 1.84226 7.01184 2.15482C7.32441 2.46738 7.5 2.89131 7.5 3.33333V5.83333Z"
                      fill="#868686"
                    />
                    <path
                      d="M16.6663 0H14.1663C13.2823 0 12.4344 0.35119 11.8093 0.976311C11.1842 1.60143 10.833 2.44928 10.833 3.33333V5.83333C10.833 6.71739 11.1842 7.56524 11.8093 8.19036C12.4344 8.81548 13.2823 9.16667 14.1663 9.16667H16.6663C17.5504 9.16667 18.3982 8.81548 19.0234 8.19036C19.6485 7.56524 19.9997 6.71739 19.9997 5.83333V3.33333C19.9997 2.44928 19.6485 1.60143 19.0234 0.976311C18.3982 0.35119 17.5504 0 16.6663 0V0ZM18.333 5.83333C18.333 6.27536 18.1574 6.69928 17.8449 7.01184C17.5323 7.32441 17.1084 7.5 16.6663 7.5H14.1663C13.7243 7.5 13.3004 7.32441 12.9878 7.01184C12.6753 6.69928 12.4997 6.27536 12.4997 5.83333V3.33333C12.4997 2.89131 12.6753 2.46738 12.9878 2.15482C13.3004 1.84226 13.7243 1.66667 14.1663 1.66667H16.6663C17.1084 1.66667 17.5323 1.84226 17.8449 2.15482C18.1574 2.46738 18.333 2.89131 18.333 3.33333V5.83333Z"
                      fill="#868686"
                    />
                    <path
                      d="M5.83333 10.8359H3.33333C2.44928 10.8359 1.60143 11.1871 0.976311 11.8122C0.35119 12.4374 0 13.2852 0 14.1693L0 16.6693C0 17.5533 0.35119 18.4012 0.976311 19.0263C1.60143 19.6514 2.44928 20.0026 3.33333 20.0026H5.83333C6.71739 20.0026 7.56524 19.6514 8.19036 19.0263C8.81548 18.4012 9.16667 17.5533 9.16667 16.6693V14.1693C9.16667 13.2852 8.81548 12.4374 8.19036 11.8122C7.56524 11.1871 6.71739 10.8359 5.83333 10.8359ZM7.5 16.6693C7.5 17.1113 7.32441 17.5352 7.01184 17.8478C6.69928 18.1603 6.27536 18.3359 5.83333 18.3359H3.33333C2.89131 18.3359 2.46738 18.1603 2.15482 17.8478C1.84226 17.5352 1.66667 17.1113 1.66667 16.6693V14.1693C1.66667 13.7272 1.84226 13.3033 2.15482 12.9908C2.46738 12.6782 2.89131 12.5026 3.33333 12.5026H5.83333C6.27536 12.5026 6.69928 12.6782 7.01184 12.9908C7.32441 13.3033 7.5 13.7272 7.5 14.1693V16.6693Z"
                      fill="#868686"
                    />
                    <path
                      d="M16.6663 10.8359H14.1663C13.2823 10.8359 12.4344 11.1871 11.8093 11.8122C11.1842 12.4374 10.833 13.2852 10.833 14.1693V16.6693C10.833 17.5533 11.1842 18.4012 11.8093 19.0263C12.4344 19.6514 13.2823 20.0026 14.1663 20.0026H16.6663C17.5504 20.0026 18.3982 19.6514 19.0234 19.0263C19.6485 18.4012 19.9997 17.5533 19.9997 16.6693V14.1693C19.9997 13.2852 19.6485 12.4374 19.0234 11.8122C18.3982 11.1871 17.5504 10.8359 16.6663 10.8359ZM18.333 16.6693C18.333 17.1113 18.1574 17.5352 17.8449 17.8478C17.5323 18.1603 17.1084 18.3359 16.6663 18.3359H14.1663C13.7243 18.3359 13.3004 18.1603 12.9878 17.8478C12.6753 17.5352 12.4997 17.1113 12.4997 16.6693V14.1693C12.4997 13.7272 12.6753 13.3033 12.9878 12.9908C13.3004 12.6782 13.7243 12.5026 14.1663 12.5026H16.6663C17.1084 12.5026 17.5323 12.6782 17.8449 12.9908C18.1574 13.3033 18.333 13.7272 18.333 14.1693V16.6693Z"
                      fill="#868686"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_111_10009">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="text-gray-400">Font Settings</span>
            </div>
          </summary>
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
          <summary className="btn w-full">
            <div className="flex gap-4 items-center py-1 pr-2">
              <span className="bg-base-300 p-2 rounded-full">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_111_10009)">
                    <path
                      d="M5.83333 0H3.33333C2.44928 0 1.60143 0.35119 0.976311 0.976311C0.35119 1.60143 0 2.44928 0 3.33333L0 5.83333C0 6.71739 0.35119 7.56524 0.976311 8.19036C1.60143 8.81548 2.44928 9.16667 3.33333 9.16667H5.83333C6.71739 9.16667 7.56524 8.81548 8.19036 8.19036C8.81548 7.56524 9.16667 6.71739 9.16667 5.83333V3.33333C9.16667 2.44928 8.81548 1.60143 8.19036 0.976311C7.56524 0.35119 6.71739 0 5.83333 0V0ZM7.5 5.83333C7.5 6.27536 7.32441 6.69928 7.01184 7.01184C6.69928 7.32441 6.27536 7.5 5.83333 7.5H3.33333C2.89131 7.5 2.46738 7.32441 2.15482 7.01184C1.84226 6.69928 1.66667 6.27536 1.66667 5.83333V3.33333C1.66667 2.89131 1.84226 2.46738 2.15482 2.15482C2.46738 1.84226 2.89131 1.66667 3.33333 1.66667H5.83333C6.27536 1.66667 6.69928 1.84226 7.01184 2.15482C7.32441 2.46738 7.5 2.89131 7.5 3.33333V5.83333Z"
                      fill="#868686"
                    />
                    <path
                      d="M16.6663 0H14.1663C13.2823 0 12.4344 0.35119 11.8093 0.976311C11.1842 1.60143 10.833 2.44928 10.833 3.33333V5.83333C10.833 6.71739 11.1842 7.56524 11.8093 8.19036C12.4344 8.81548 13.2823 9.16667 14.1663 9.16667H16.6663C17.5504 9.16667 18.3982 8.81548 19.0234 8.19036C19.6485 7.56524 19.9997 6.71739 19.9997 5.83333V3.33333C19.9997 2.44928 19.6485 1.60143 19.0234 0.976311C18.3982 0.35119 17.5504 0 16.6663 0V0ZM18.333 5.83333C18.333 6.27536 18.1574 6.69928 17.8449 7.01184C17.5323 7.32441 17.1084 7.5 16.6663 7.5H14.1663C13.7243 7.5 13.3004 7.32441 12.9878 7.01184C12.6753 6.69928 12.4997 6.27536 12.4997 5.83333V3.33333C12.4997 2.89131 12.6753 2.46738 12.9878 2.15482C13.3004 1.84226 13.7243 1.66667 14.1663 1.66667H16.6663C17.1084 1.66667 17.5323 1.84226 17.8449 2.15482C18.1574 2.46738 18.333 2.89131 18.333 3.33333V5.83333Z"
                      fill="#868686"
                    />
                    <path
                      d="M5.83333 10.8359H3.33333C2.44928 10.8359 1.60143 11.1871 0.976311 11.8122C0.35119 12.4374 0 13.2852 0 14.1693L0 16.6693C0 17.5533 0.35119 18.4012 0.976311 19.0263C1.60143 19.6514 2.44928 20.0026 3.33333 20.0026H5.83333C6.71739 20.0026 7.56524 19.6514 8.19036 19.0263C8.81548 18.4012 9.16667 17.5533 9.16667 16.6693V14.1693C9.16667 13.2852 8.81548 12.4374 8.19036 11.8122C7.56524 11.1871 6.71739 10.8359 5.83333 10.8359ZM7.5 16.6693C7.5 17.1113 7.32441 17.5352 7.01184 17.8478C6.69928 18.1603 6.27536 18.3359 5.83333 18.3359H3.33333C2.89131 18.3359 2.46738 18.1603 2.15482 17.8478C1.84226 17.5352 1.66667 17.1113 1.66667 16.6693V14.1693C1.66667 13.7272 1.84226 13.3033 2.15482 12.9908C2.46738 12.6782 2.89131 12.5026 3.33333 12.5026H5.83333C6.27536 12.5026 6.69928 12.6782 7.01184 12.9908C7.32441 13.3033 7.5 13.7272 7.5 14.1693V16.6693Z"
                      fill="#868686"
                    />
                    <path
                      d="M16.6663 10.8359H14.1663C13.2823 10.8359 12.4344 11.1871 11.8093 11.8122C11.1842 12.4374 10.833 13.2852 10.833 14.1693V16.6693C10.833 17.5533 11.1842 18.4012 11.8093 19.0263C12.4344 19.6514 13.2823 20.0026 14.1663 20.0026H16.6663C17.5504 20.0026 18.3982 19.6514 19.0234 19.0263C19.6485 18.4012 19.9997 17.5533 19.9997 16.6693V14.1693C19.9997 13.2852 19.6485 12.4374 19.0234 11.8122C18.3982 11.1871 17.5504 10.8359 16.6663 10.8359ZM18.333 16.6693C18.333 17.1113 18.1574 17.5352 17.8449 17.8478C17.5323 18.1603 17.1084 18.3359 16.6663 18.3359H14.1663C13.7243 18.3359 13.3004 18.1603 12.9878 17.8478C12.6753 17.5352 12.4997 17.1113 12.4997 16.6693V14.1693C12.4997 13.7272 12.6753 13.3033 12.9878 12.9908C13.3004 12.6782 13.7243 12.5026 14.1663 12.5026H16.6663C17.1084 12.5026 17.5323 12.6782 17.8449 12.9908C18.1574 13.3033 18.333 13.7272 18.333 14.1693V16.6693Z"
                      fill="#868686"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_111_10009">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="text-gray-400">Appearance Settings</span>
            </div>
          </summary>
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
