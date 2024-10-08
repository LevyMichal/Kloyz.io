import React from 'react';
import SideBar from './SideBar';
import Topbar from './TopBar';
import { useSelector } from 'react-redux';


export default function Layout({ children }) {
    const userRole = useSelector(store => store.user.currentUser?.role)

    return (
        <div className="h-screen w-screen flex">
            {/* Sidebar */}
            <SideBar userRole={userRole} />

            {/* Main Content Area */}
            <div className="flex-1 h-full flex flex-col ml-[16.6667%]">
                {/* Topbar */}
                <Topbar />

                {/* Children Area */}
                <div className="mt-[8.3333vh] p-8 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

//     return (
//         <div className="h-screen w-screen flex">
//             {/* Sidebar */}
//             <div className="w-1/6 h-full fixed top-0 left-0 bottom-0 bg-gray-800 text-white">
//                 <div className="p-4">Sidebar Content</div>
//             </div>

//             {/* Main Content Area */}
//             <div className="ml-1/6 w-5/6 h-full flex flex-col">
//                 {/* Topbar */}
//                 <div className="h-1/6 fixed top-0 right-0 left-0 bg-gray-700 text-white">
//                     <div className="p-4">Topbar Content</div>
//                 </div>

//                 {/* Children Area */}
//                 <div className="mt-1/6 p-4 overflow-y-auto">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// };


//     return (
//         <div className="grid grid-rows-[auto_1fr] grid-cols-[1fr_5fr] h-screen">
//             {/* Sidebar */}
//             <div className="row-span-2 col-span-1 fixed top-0 left-0 h-screen w-1/6 bg-white z-10">
//                 <SideBar />
//             </div>

//             {/* Navbar */}
//             <div className="col-start-2 col-span-1 fixed top-0 left-[16.67%] w-5/6 h-16 z-10">
//                 <Topbar />
//             </div>

//             {/* Main Content */}
//             <div className="col-start-2 row-start-2 mt-[4rem] ml-[16.67%] p-4 overflow-auto">
//                 {children}
//             </div>
//         </div>
//     );
// }

// export default function Layout({ children }) {
//     return (
//         <div className="grid grid-rows-[auto_1fr] grid-cols-[1fr_5fr] h-screen">
//             {/* Sidebar */}
//             <div className="row-span-2 col-span-1 fixed top-0 left-0 h-screen w-1/6 bg-white z-10">
//                 <SideBar />
//             </div>

//             {/* Navbar */}
//             <div className="col-span-2 fixed top-0 left-1/6 w-5/6 z-10">
//                 <Topbar />
//             </div>

//             {/* Main Content */}
//             <div className="col-start-2 row-start-2 mt-[4rem] ml-[16.67%] p-4 overflow-auto">
//                 {children}
//             </div>
//         </div>
//     );
// }
//     return (
//         <div className='relative flex'>
//             {/* Sidebar */}
//             <div className='w-1/6 h-screen'>
//                 <SideBar />
//             </div>

//             {/* Main content */}
//             <div className='flex-1'>
//                 {/* Navbar */}
//                 <div className='fixed top-0 left-1/6 w-5/6'>
//                     <Topbar />
//                 </div>

//                 {/* Content passed as children */}
//                 <div className='mt-14 p-4 '>
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// }
