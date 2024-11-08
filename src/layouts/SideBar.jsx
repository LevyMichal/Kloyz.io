import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SideBar({ userRole }) {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    // Update active link when route changes
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <div className="w-1/6 h-full fixed top-0 left-0 border-r-2  bg-slate-900 border-neutral-100">
            <div className="flex flex-col h-screen">
                <p className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 inline-block text-transparent bg-clip-text uppercase p-8 cursor-pointer">
                    Kloyz.io
                </p>

                {/* MAIN MENU */}
                <div className="flex-grow space-y-4 px-8 border-b border-slate-300">
                    <p className="text-sm font-light text-slate-300">
                        MAIN MENU
                    </p>

                    {/* Home */}
                    <div
                        onClick={() => setActiveLink("/home")}
                        className={`group flex items-center space-x-2 w-full font-light cursor-pointer transition-colors ${activeLink === "/home" ? "text-amber-400 font-semibold" : "text-slate-300 hover:font-semibold"}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`size-6 transition-colors group-hover:stroke-2 ${activeLink === "/home" && "stroke-2"}`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            />
                        </svg>
                        <Link to="/home" className="transition-colors">
                            Home
                        </Link>
                    </div>

                    {/* Clients */}
                    <div
                        onClick={() => setActiveLink("/organizations")}
                        className={`group flex items-center space-x-2 w-full font-light cursor-pointer transition-colors ${activeLink === "/organizations" ? "text-amber-400 font-semibold" : "text-slate-300 hover:font-semibold"}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`size-6 transition-colors group-hover:stroke-2 ${activeLink === "/organizations" && "stroke-2"}`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                            />
                        </svg>
                        <Link to="/organizations" className="transition-colors">
                            Clients
                        </Link>
                    </div>

                    {/* Apartments */}
                    <div
                        onClick={() => setActiveLink("/apartments")}
                        className={`group flex items-center space-x-2 w-full font-light cursor-pointer transition-colors ${activeLink === "/apartments" ? "text-amber-400 font-semibold" : "text-slate-300 hover:font-semibold"}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`size-6 transition-colors group-hover:stroke-2 ${activeLink === "/apartments" && "stroke-2"}`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                            />
                        </svg>
                        <Link to="/apartments" className="transition-colors">
                            Apartments
                        </Link>
                    </div>

                    {/* Providers */}
                    <div
                        onClick={() => setActiveLink("/providers")}
                        className={`group flex items-center space-x-2 w-full font-light cursor-pointer transition-colors ${activeLink === "/providers" ? "text-amber-400 font-semibold" : "text-slate-300 hover:font-semibold"}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`size-6 transition-colors group-hover:stroke-2 ${activeLink === "/providers" && "stroke-2"}`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                            />
                        </svg>
                        <Link to="/providers" className="transition-colors">
                            Providers
                        </Link>
                    </div>

                    {/* Interventions */}
                    <div
                        onClick={() => setActiveLink("/interventions")}
                        className={`group flex items-center space-x-2 w-full font-light cursor-pointer transition-colors ${activeLink === "/interventions" ? "text-amber-400 font-semibold" : "text-slate-300 hover:font-semibold"}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`size-6 transition-colors group-hover:stroke-2 ${activeLink === "/interventions" && "stroke-2"}`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                            />
                        </svg>
                        <Link to="/interventions" className="transition-colors">
                            Interventions
                        </Link>
                    </div>

                </div>


                {/* PREFERENCE */}
                <div className="space-y-4 px-8 pt-8 pb-8">
                    <p className="text-sm font-light text-slate-300">
                        PREFERENCE
                    </p>

                    {/* Settings */}
                    <button
                        className="group flex items-center text-slate-300 font-light hover:font-semibold"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className=" group-hover:stroke-2 transition-colors size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                        <p className="ml-2 transition-colors">
                            Settings
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
}
