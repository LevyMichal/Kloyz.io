import React from 'react';
import SideBar from './SideBar';
import Topbar from './TopBar';
import { useSelector } from 'react-redux';


export default function Layout({ children, showOrgTable, setShowOrgTable }) {
    const { role, accreditation } = useSelector(store => store.user.currentUser)

    return (
        <div className="h-screen w-screen flex">
            {/* Sidebar */}
            <SideBar userRole={role} userAccreditation={accreditation} showOrgTable={showOrgTable}
                setShowOrgTable={setShowOrgTable} />

            {/* Main Content Area */}
            <div className="flex-1 h-full flex flex-col ml-[16.6667%]">

                {/* Topbar */}
                <Topbar userRole={role} userAccreditation={accreditation} />

                {/* Children Area */}
                <div className="mt-[8.3333vh] p-8 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};
