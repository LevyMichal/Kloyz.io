import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Input from '../common/Input';

export default function CurrentUserProfile() {

    const { name, email, password, role, org } = useSelector((store) => store.user.currentUser);


    const [isSetting, setIsSetting] = useState(false)
    const [updatedUserInfo, setUpdatedUserInfo] = useState({
        name, email, password, role, org
    });


    const closeUserInfo = () => {
        setUpdatedUserInfo({ name, email, password, role, org });
        setIsSetting(false);
    };

    const handleInputChange = (field, value) => {
        setUpdatedUserInfo(prevUser => ({ ...prevUser, [field]: value }));
    };

    const handleUpdateUserInfo = (e) => {
        e.preventDefault();

        const { name, email, password, role, org } = updatedUserInfo;

        if (!name || !email || !password || !role || !org) {
            alert("Please fill out all required fields.");
            return;
        }

        // updatedUserInfo
        //TODO: handle update User Info (with redux)
    };

    return (
        <div className='flex' >
            <div className='flex flex-col pr-3'>
                <span className='font-bold text-right'>
                    {name}
                </span>
                <button
                    onClick={() => setIsSetting(true)}
                    className="font-light text-sm text-neutral-500 text-right hover:text-violet-600 hover:font-normal ">
                    View Profile
                </button>
            </div>

            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-500 ">
                <span className='font-medium text-white text-2xl'>
                    {name[0]}
                </span>
            </div>

            {/* user setting */}
            {isSetting && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" >
                    </div>
                    <div className="h-3/4 w-3/5 bg-white border border-neutral-300 rounded-xl z-10 overflow-hidden">

                        {/* close icon */}
                        <div className="flex justify-end items-center pr-4 pt-4">
                            <button onClick={closeUserInfo}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex-1 flex justify-center items-center px-20">
                            <div className="w-full max-w-lg md:max-w-xl"
                                style={{ maxWidth: '100vw', minWidth: '300px' }}
                            >

                                {/* header */}
                                <div className="flex justify-left mb-6">
                                    <p className="text-2xl font-semibold">
                                        User Profile
                                    </p>
                                </div>

                                {/* form */}
                                <form
                                    onSubmit={handleUpdateUserInfo}
                                    className=" space-y-6 overflow-y-scroll max-h-[60vh]"
                                >

                                    {/* input fields */}
                                    <div className="pt-4 -mb-4">
                                        <Input
                                            type="text"
                                            value={updatedUserInfo.name}
                                            placeholder="Name"
                                            required
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                        />
                                        <Input
                                            type="text"
                                            value={updatedUserInfo.email}
                                            placeholder="Email"
                                            required
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                        />
                                        {/* <Input
                                            type="text"
                                            value={updatedUserInfo.password}
                                            placeholder="Password"
                                            required
                                            onChange={(e) => handleInputChange('password', e.target.value)}
                                        /> */}

                                        {/* org & role fields */}
                                        <div className='-mt-4'>
                                            <label className="block pb-1 px-2 text-xs font-normal text-neutral-600">
                                                Organization
                                            </label>
                                            <p className="py-3 px-2 w-full mb-6 text-base font-normal text-neutral-900 bg-transparent border border-neutral-300 rounded-lg cursor-not-allowed">
                                                {org}
                                            </p>
                                        </div>
                                        <div className='-mt-4'>
                                            <label className="block pb-1 px-2 text-xs font-normal text-neutral-600">
                                                Role
                                            </label>
                                            <p className="py-3 px-2 w-full mb-6 text-base font-normal text-neutral-900 bg-transparent border border-neutral-300 rounded-lg cursor-not-allowed">
                                                {role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex justify-end gap-5 py-6">
                                        <button
                                            onClick={closeUserInfo}
                                            className=" border border-neutral-300 text-black py-3 px-10 rounded-lg hover:shadow-lg">
                                            Cancel
                                        </button>
                                        <button
                                            type='submit'
                                            className=" bg-violet-500 text-white py-3 px-10 rounded-lg hover:shadow-lg">
                                            Update
                                        </button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
