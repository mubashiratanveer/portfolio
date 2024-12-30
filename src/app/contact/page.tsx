import Link from "next/link";


export default function Contact() {
  return (
    <div className="bg-black py-28">
      <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto  max-w-4xl bg-white font-[sans-serif]">
        <div>
          <h1 className="text-blue-500 text-3xl font-extrabold">Let's Talk</h1>
          <p className="text-sm text-gray-500 mt-4">
            Have some big idea or brand to develop and need help? Then reach out
            I love to hear about your project and provide help.
          </p>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <Link
                  href="mailto:tanveerahmed2250010@gmail.com"
                  className="text-[#007bff] text-sm ml-4"
                >
                  <small className="block">Mail</small>
                  <strong>tanveerahmed2250010@gmail.com</strong>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Socials</h2>

            <ul className="flex mt-4 space-x-4">
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <Link href="https://github.com/dashboard">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.11.793-.26.793-.577v-2.18c-3.338.726-4.033-1.416-4.033-1.416-.546-1.388-1.333-1.758-1.333-1.758-1.09-.744.083-.729.083-.729 1.204.083 1.838 1.236 1.838 1.236 1.07 1.832 2.806 1.304 3.493.998.108-.774.418-1.305.762-1.606-2.664-.303-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.525.117-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.99-.399 3.012-.404 1.023.005 2.052.137 3.014.404 2.291-1.552 3.298-1.23 3.298-1.23.654 1.651.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.624-5.476 5.922.43.372.823 1.102.823 2.222v3.293c0 .32.192.694.8.575C20.565 22.094 24 17.598 24 12.297 24 5.67 18.627.297 12 .297z" />
                  </svg>
                </Link>
              </li>

              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <Link href="https://www.linkedin.com/in/mubashira-tanveer-3521b5288">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 511 512"
                  >
                    <path
                      d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                      data-original="#000000"
                    />
                  </svg>
                </Link>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.instagram.com/mubashira_055">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form className="ml-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-pink-500 focus:bg-transparent"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-pink-500 focus:bg-transparent"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-pink-500 focus:bg-transparent"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-pink-500 focus:bg-transparent"
          ></textarea>    
          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-pink-500 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
