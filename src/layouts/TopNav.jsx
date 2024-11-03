import React, { useState } from 'react'
import SearchInput from '../components/common/SearchInput';
import Button from '../components/common/Button';
import { useDispatch } from 'react-redux';
import AddOrgPopup from '../components/specific/organizations/AddOrgPopup';
import AddUserPopup from '../components/specific/organizations/AddUserPopup';
import CurrentUserProfile from '../components/specific/CurrentUserProfile';

export default function TopNav({ userRole, userAccreditation }) {

    const [showAddOrgPopup, setShowAddOrgPopup] = useState(false)
    const [showAddUserPopup, setShowAddUserPopup] = useState(false)

    const openAddOrgPopup = () => setShowAddOrgPopup(true)
    const closeAddOrgPopup = () => setShowAddOrgPopup(false)

    const openAddUserPopup = () => setShowAddUserPopup(true)
    const closeAddUserPopup = () => setShowAddUserPopup(false)

    // Using redux to add org popup display mode:
    // const dispatch = useDispatch()

    // const isAddNewOrg = () => {
    //     dispatch({ type: "IS_ADD_ORG", payload: true })
    // };

    const isAddNewUser = () => {
        //TODO: handle new user
    };


    return (
        // <>
        //     <div className="h-[8.3333vh] fixed top-0 right-0 left-[16.6667%] bg-white border-b-2 border-neutral-100 flex items-center justify-between p-4">

        //         {/* add organization button */}
        //         {userRole === 'SUPERADMIN' && userAccreditation < 10 &&
        //             <div className='pl-4 space-x-4'>
        //                 <Button text={"+ New Organization"} onClick={openAddOrgPopup} />
        //                 <Button text={"+ New User"} onClick={openAddUserPopup} />
        //             </div>
        //         }

        //         {/* search input */}
        //         <div className="flex-1 flex justify-center">
        //             <SearchInput placeholder={"Search Dashboard"} />
        //         </div>

        //         {/* current user info */}
        //         <div className="flex items-center space-x-2 pr-4">
        //             <CurrentUserInfo />
        //         </div>
        //     </div>

        //     <AddOrgPopup isVisible={showAddOrgPopup} onClose={closeAddOrgPopup} />
        //     <AddUserPopup isVisible={showAddUserPopup} onClose={closeAddUserPopup} popupType={'standalone'} />
        // </>

        <>
            <div className="h-[8.3333vh] fixed top-0 right-0 left-[16.6667%] bg-white border-b-2 border-neutral-100 flex items-center justify-between p-4 space-x-4 md:space-x-6">

                {/* Add organization and user buttons */}
                {userRole === 'SUPERADMIN' && userAccreditation < 10 && (
                    <div className="flex space-x-2 md:space-x-4">
                        <Button
                            text={"+ New Organization"}
                            onClick={openAddOrgPopup}
                            className="hidden sm:inline-block" />
                        <Button
                            text={"+ New User"}
                            onClick={openAddUserPopup}
                            className="hidden sm:inline-block" />
                    </div>
                )}

                {/* Search input */}
                <div className="flex-1 flex justify-center px-2 md:px-4">
                    <SearchInput
                        placeholder="Search Dashboard"
                        className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]" />
                </div>

                {/* Current user info */}
                <div className="flex items-center space-x-2 md:space-x-4 pr-2 md:pr-4">
                    <CurrentUserProfile />
                </div>
            </div>

            {/* Popups */}
            <AddOrgPopup
                isVisible={showAddOrgPopup}
                onClose={closeAddOrgPopup} />
            <AddUserPopup
                isVisible={showAddUserPopup}
                onClose={closeAddUserPopup}
                popupType="standalone" />
        </>

    );
};
