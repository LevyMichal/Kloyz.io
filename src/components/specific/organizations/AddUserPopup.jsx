import { useState } from "react";
import Input from "../../common/Input";
import organizationsData from "../../../mockData/orgsData";

export default function AddUserPopup({ isVisible, onClose, popupType, orgName, newOrg, prevStep }) {
    if (!isVisible) return null;

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isInputsFieldsDisplay, setIsFormFieldsDisplay] = useState(true);
    const [newUsersList, setNewUsersList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editUserEmail, setEditUserEmail] = useState(null); // State to track user being edited
    const [newUser, setNewUser] = useState({
        organization: orgName || '',
        firstName: '',
        lastName: '',
        nickName: '',
        email: '',
        role: '',
        accreditation: ''
    });

    const filteredOrganizations = organizationsData.filter(org =>
        org.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const clearFormFields = () => {
        setNewUser({
            organization: orgName || '',
            firstName: '',
            lastName: '',
            nickName: '',
            email: '',
            role: '',
            accreditation: ''
        });
    };

    const handleSelectOrganization = (org) => {
        setNewUser(prevUser => ({ ...prevUser, organization: org.name }));
        setIsDropdownOpen(false);
        setSearchTerm('');
    };

    const handleInputChange = (field, value) => {
        setNewUser(prevUser => ({ ...prevUser, [field]: value }));
    };

    const handleAddNewUser = (e) => {
        e.preventDefault();
        console.log(newUser)
        const { firstName, lastName, nickName, email, organization, role, accreditation } = newUser;

        if (!firstName || !lastName || !nickName || !email || !organization || !role || !accreditation) {
            alert("Please fill out all required fields.");
            return;
        }

        if (!isEditing && newUsersList.find(user => user.email === email)) {
            alert("Email already exists. Please use a different email.");
            return;
        }

        if (isEditing) {
            // Update the user in the list
            const updatedUsers = newUsersList.map(user => user.email === editUserEmail ? newUser : user);
            setNewUsersList(updatedUsers);
            setIsEditing(false);
            setEditUserEmail(null);
        } else {
            setNewUsersList([...newUsersList, newUser]);
        }

        clearFormFields();
        setIsFormFieldsDisplay(false);
    };

    const handleUpdateUser = (user) => {
        setNewUser(user);
        setIsEditing(true);
        setEditUserEmail(user.email);
        setIsFormFieldsDisplay(true);
    };

    const handleAddAnotherUser = (e) => {
        e.preventDefault();
        clearFormFields();
        setIsFormFieldsDisplay(true);
        setIsEditing(false);
    };

    const handleDeleteUser = (email) => {
        const updatedNewUsers = newUsersList.filter(user => user.email !== email);
        setNewUsersList(updatedNewUsers);

        if (updatedNewUsers.length === 0) {
            setIsFormFieldsDisplay(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // newOrg&&
        //TODO: Send new Org to backend or handle further as needed

        //TODO: Send newUsers to backend or handle further as needed
    };

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" ></div>
                <div className="h-3/4 w-3/5 bg-white border border-neutral-300 rounded-xl z-10 overflow-hidden">

                    {/* close icon */}
                    <div className="flex justify-end items-center pr-4 pt-4">
                        <button onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 flex justify-center items-center px-20">
                        <div className="w-full max-w-lg md:max-w-xl" style={{ maxWidth: '100vw', minWidth: '300px' }}>
                            <div className="flex justify-left mb-6">
                                <p className="text-2xl font-semibold">New User</p>
                            </div>

                            {/* New user form */}
                            <form onSubmit={handleSubmit} className="space-y-6 overflow-y-scroll max-h-[60vh]">
                                {isInputsFieldsDisplay && (
                                    <div>
                                        {/* Organization field */}
                                        <label className="block pb-1 px-2 text-xs font-normal text-neutral-600">Organization</label>
                                        {popupType === "from organization page" || popupType === "add org second step" ? (
                                            <p className="py-3 px-2 w-full mb-6 text-base font-medium text-neutral-900 bg-transparent border-2 border-neutral-300 rounded-lg cursor-not-allowed">
                                                {orgName}
                                            </p>
                                        ) : (
                                            <div className="relative pb-6">
                                                <button
                                                    type="button"
                                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                    className="mt-1 block w-full px-2 py-3 text-base text-neutral-600 border-2 border-neutral-300 bg-white rounded-md shadow-sm text-left focus:ring-0 focus:border-violet-500"
                                                >
                                                    {newUser.organization || "Select an organization"}
                                                </button>
                                                {isDropdownOpen && (
                                                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                                                        <input
                                                            type="text"
                                                            value={searchTerm}
                                                            onChange={(e) => setSearchTerm(e.target.value)}
                                                            placeholder="Search organization..."
                                                            className="w-full px-4 py-3 rounded-md focus:ring-0 focus:border-violet-500"
                                                        />
                                                        <ul>
                                                            {filteredOrganizations.length > 0
                                                                ? (
                                                                    filteredOrganizations.map((org) => (
                                                                        <li
                                                                            key={org.id}
                                                                            onClick={() => handleSelectOrganization(org)}
                                                                            className="px-4 py-3 hover:bg-violet-500 hover:text-white cursor-pointer"
                                                                        >
                                                                            {org.name}
                                                                        </li>
                                                                    ))
                                                                ) : (
                                                                    <li className="px-4 py-3 text-neutral-500">No results found</li>
                                                                )}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Other input fields */}
                                        <Input type="text" value={newUser.firstName} placeholder="First Name" required onChange={(e) => handleInputChange('firstName', e.target.value)} />
                                        <Input type="text" value={newUser.lastName} placeholder="Last Name" required onChange={(e) => handleInputChange('lastName', e.target.value)} />
                                        <Input type="text" value={newUser.nickName} placeholder="Nick Name" required onChange={(e) => handleInputChange('nickName', e.target.value)} />
                                        <Input type="email" value={newUser.email} placeholder="Email" required onChange={(e) => handleInputChange('email', e.target.value)} />

                                        {/* Role select */}
                                        <div className="pb-6 -mt-5">
                                            <label className="block pb-1 px-2 text-xs font-normal text-neutral-600">Role</label>
                                            <div className="flex items-center gap-x-10 py-3 border border-neutral-300 rounded-lg">
                                                {["Super Admin", "Admin", "User"].map((roleOption) => (
                                                    <div key={roleOption} className="flex items-center pl-3 gap-x-2">
                                                        <input
                                                            type="radio"
                                                            name="role"
                                                            value={roleOption === "Super Admin"
                                                                ? 'SUPERADMIN'
                                                                :
                                                                roleOption === "Admin"
                                                                    ? "ADMIN"
                                                                    : "USER"}
                                                            required
                                                            checked={newUser.role === (roleOption === "Super Admin"
                                                                ? 'SUPERADMIN'
                                                                : roleOption === "Admin"
                                                                    ? "ADMIN"
                                                                    : "USER")}
                                                            onChange={(e) => handleInputChange('role', e.target.value)}
                                                            className="h-3 w-3 text-violet-500 focus:ring-violet-700"
                                                        />
                                                        <label className="text-base font-normal text-neutral-600">{roleOption}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Accreditation field */}
                                        <Input type="number" value={newUser.accreditation} placeholder="Accreditation" required onChange={(e) => handleInputChange('accreditation', e.target.value)} />
                                    </div>
                                )}

                                {/* Action Buttons */}
                                {isInputsFieldsDisplay ? (
                                    <button onClick={handleAddNewUser} className="w-full bg-violet-500 text-white py-3 border rounded-lg hover:shadow-lg">
                                        {isEditing
                                            ? 'Update User'
                                            : 'Add User'
                                        }
                                    </button>
                                ) : (
                                    <button onClick={handleAddAnotherUser} className="w-full bg-violet-500 text-white py-3 border rounded-lg hover:shadow-lg">
                                        Add Another User
                                    </button>
                                )}

                                {/* New Users List */}
                                {newUsersList.length > 0 && (
                                    !isEditing && (
                                        <div className="w-full border border-violet-500 rounded-lg">
                                            <div className="table w-full border-collapse rounded-lg">
                                                <div className="table-row-group">
                                                    {newUsersList.map((user, index) => (
                                                        <div key={index} className="table-row border-b border-neutral-300 hover:shadow-lg cursor-pointer">
                                                            <div className="table-cell p-3">{user.organization}</div>
                                                            <div className="table-cell p-3 border-l">{user.firstName} {user.lastName}</div>
                                                            <div className="table-cell p-3">{user.email}</div>
                                                            <div className="table-cell p-3 text-right">
                                                                <button onClick={() => handleUpdateUser(user)} className="mr-2 px-3 hover:text-violet-600">Edit</button>
                                                                <button onClick={() => handleDeleteUser(user.email)} className="hover:text-violet-600">Delete</button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}

                                {/* Action Buttons */}
                                <div className="flex justify-end gap-5 py-6">
                                    {popupType === "add org second step"
                                        ? (
                                            <button onClick={prevStep} className=" border border-neutral-300 text-black py-3 px-10 rounded-lg hover:shadow-lg">
                                                Back
                                            </button>
                                        ) : (<button onClick={onClose} className=" border border-neutral-300 text-black py-3 px-10 rounded-lg hover:shadow-lg">
                                            Cancel
                                        </button>)}
                                    <button onClick={onClose} className={`${newUsersList.length > 0 ? " bg-violet-500" : "bg-violet-400 cursor-not-allowed"} text-white py-3 px-10 rounded-lg hover:shadow-lg`}>
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

