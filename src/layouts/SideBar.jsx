import { Link } from "react-router-dom";

export default function SideBar({ userRole, isOrgs, setIsOrgs }) {

    return (
        <div className="w-1/6 h-full fixed top-0 left-0 border-r-2 border-neutral-100">
            <div className="flex flex-col h-screen">

                <p className="text-3xl font-bold text-violet-500 p-8">Kloyz.io</p>

                {/* MAIN MENU */}
                <div className="flex-grow space-y-4 px-8 border-b-2 border-neutral-100">
                    <p className="text-sm font-light text-neutral-600">MAIN MENU</p>
                    {/* Home */}
                    <div className="group flex items-center space-x-2 w-full text-black font-light hover:font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="group-hover:stroke-violet-600 group-hover:stroke-2 transition-colors size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <Link to="/home" className="group-hover:text-violet-600 transition-colors">
                            Home
                        </Link>
                    </div>
                    {/* Organizations*/}
                    {userRole === 'SUPERADMIN' &&
                        <div className="group flex items-center space-x-2 w-full text-black font-light hover:font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="group-hover:stroke-violet-600 group-hover:stroke-2 transition-colors size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                            </svg>
                            <button
                                onClick={() => setIsOrgs(!isOrgs)}
                                className="group-hover:text-violet-600 transition-colors"
                            >
                                Organizations
                            </button>
                        </div>
                    }
                </div>

                {/* PREFERENCE*/}
                <div className="space-y-4 px-8 pt-8 pb-8">
                    <p className="text-sm font-light text-neutral-600">PREFERENCE</p>
                    {/* Settings*/}
                    <button
                        className=" group flex items-center  text-black font-light hover:font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="group-hover:stroke-violet-600 group-hover:stroke-2 transition-colors size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span className="ml-1 group-hover:text-violet-600 transition-colors">Settings</span>
                    </button>

                </div>

            </div>
        </div>
    );
};
// return (
//     <div className="flex flex-col h-screen border-r-2 border-neutral-100 min-w-72">
//         <p className="text-3xl font-semibold p-8">Kloyz.io</p>

//         {/* MAIN MENU */}
//         <div className="flex-grow space-y-4 px-8 border-b-2 border-neutral-100">
//             <p className="text-sm font-light text-neutral-600">MAIN MENU</p>
//             {/* Home */}
//             <div className="group flex items-center space-x-2 w-full text-black font-light hover:font-semibold">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="group-hover:stroke-violet-600 group-hover:stroke-2 transition-colors size-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
//                 </svg>
//                 <Link to="/home" className="group-hover:text-violet-600 transition-colors">
//                     Home
//                 </Link>
//             </div>
//             {/* Organizations*/}
//             <div className="group flex items-center space-x-2 w-full text-black font-light hover:font-semibold">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="group-hover:stroke-violet-600 group-hover:stroke-2 transition-colors size-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
//                 </svg>
//                 <button
//                     onClick={() => setIsOrgs(!isOrgs)}
//                     className="group-hover:text-violet-600 transition-colors"
//                 >
//                     Organizations
//                 </button>
//             </div>
//         </div>

//         {/* PREFERENCE*/}
//         <div className="space-y-4 px-8 pt-8 pb-8">
//             <p className="text-sm font-light text-neutral-600">PREFERENCE</p>
//             {/* Settings*/}
//             <button
//                 className=" group flex items-center  text-black font-light hover:font-semibold">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="group-hover:stroke-violet-600 group-hover:stroke-2 transition-colors size-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 </svg>
//                 <span className="ml-1 group-hover:text-violet-600 transition-colors">Settings</span>
//             </button>

//         </div>
//     </div>
// );
// }