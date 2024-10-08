import React from 'react'
import SearchInput from '../components/common/SearchInput';
import CurrentUserInfo from '../components/specific/CurrentUserInfo';
import Button from '../components/common/Button';

export default function Topbar() {

    const addNewOrg = () => {
        //TODO: handle new organization
    };


    return (
        <div className="h-[8.3333vh] fixed top-0 right-0 left-[16.6667%] bg-white border-b-2 border-neutral-100 flex items-center justify-between p-4">

            {/* add organization button */}
            <div className='pl-4'>
                <Button text={"+ New Organization"} onClick={addNewOrg} />
            </div>

            {/* search input */}
            <div className="flex-1 flex justify-center">
                <SearchInput placeholder={"Search Dashboard"} />
            </div>

            {/* current user info */}
            <div className="flex items-center space-x-2 pr-4">
                <CurrentUserInfo />
            </div>
        </div>
    );
};
