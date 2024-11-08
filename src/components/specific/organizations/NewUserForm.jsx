import { useState } from "react";
import Input from "../../common/Input";
import organizationsData from "../../../mockData/orgsData";

export default function NewUserForm({ isVisible, onClose, popupType, orgName, newOrg, prevStep }) {
    if (!isVisible) return null;

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAddUser, setIsAddUser] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editUserEmail, setEditUserEmail] = useState(null); // State to track user being edited
    const [newUsersList, setNewUsersList] = useState([]);
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
        setIsAddUser(false);
    };

    const handleUpdateUser = (user) => {
        setNewUser(user);
        setIsEditing(true);
        setEditUserEmail(user.email);
        setIsAddUser(true);
    };

    const handleAddAnotherUser = (e) => {
        e.preventDefault();
        clearFormFields();
        setIsAddUser(true);
        setIsEditing(false);
    };

    const handleDeleteUser = (email) => {
        const updatedNewUsers = newUsersList.filter(user => user.email !== email);
        setNewUsersList(updatedNewUsers);

        if (updatedNewUsers.length === 0) {
            clearFormFields();
            setIsAddUser(true);
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

            {/* New user form */}
            <form
                onSubmit={handleSubmit}
                className="space-y-6 overflow-y-scroll max-h-[60vh]">

                {isAddUser || isEditing
                    ? (
                        <div>

                            {/* Other input fields */}
                            <Input
                                type="text"
                                value={newUser.firstName}
                                placeholder="First Name"
                                required
                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                            />
                            <Input
                                type="text"
                                value={newUser.lastName}
                                placeholder="Last Name"
                                required
                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                            />
                            <Input
                                type="text"
                                value={newUser.nickName}
                                placeholder="Nick Name"
                                required
                                onChange={(e) => handleInputChange('nickName', e.target.value)}
                            />
                            <Input
                                type="email"
                                value={newUser.email}
                                placeholder="Email"
                                required
                                onChange={(e) => handleInputChange('email', e.target.value)}
                            />

                            {/* Role select */}
                            <div className="pb-6 -mt-5">
                                <label className="block pb-1 px-2 text-xs font-normal text-neutral-600">
                                    Role
                                </label>

                                <div className="flex items-center gap-x-10 py-3 border border-neutral-300 rounded-lg">
                                    {["Admin", "User"].map((roleOption) => (
                                        <div
                                            key={roleOption}
                                            className="flex items-center pl-3 gap-x-2"
                                        >
                                            <input
                                                type="radio"
                                                name="role"
                                                value={roleOption === "Admin"
                                                    ? "ADMIN"
                                                    : "USER"}
                                                checked={newUser.role ===
                                                    (roleOption === "Admin"
                                                        ? "ADMIN"
                                                        : "USER")}
                                                required
                                                onChange={(e) => handleInputChange('role', e.target.value)}
                                                className="h-3 w-3 text-violet-500 focus:ring-violet-700"
                                            />
                                            <label
                                                htmlFor={roleOption}
                                                className="text-base font-normal text-neutral-600"
                                            >
                                                {roleOption}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Accreditation field */}
                            <Input
                                type="number"
                                value={newUser.accreditation}
                                placeholder="Accreditation"
                                required
                                onChange={(e) => handleInputChange('accreditation', e.target.value)}
                            />


                            {/* Action Buttons */}


                            <div className="flex w-1/3 justify-center items-center gap-5 py-6">
                                {newUsersList.length > 0 &&
                                    <button
                                        onClick={() => {
                                            setIsEditing(false);
                                            setIsAddUser(false);
                                        }}
                                        className="w-full py-3 border rounded-lg hover:shadow-md"
                                    >
                                        Cancel
                                    </button>
                                }
                                <button
                                    onClick={handleAddNewUser}
                                    className="w-full bg-violet-500 text-white py-3 border rounded-lg hover:shadow-md"
                                >
                                    {isEditing
                                        ? 'Update User'
                                        : 'Add User'
                                    }
                                </button>
                            </div>
                        </div>
                    )
                    : (
                        <button
                            onClick={handleAddAnotherUser}
                            className="w-1/3 bg-violet-500 text-white py-3 border rounded-lg hover:shadow-md"
                        >
                            Add Another User
                        </button>
                    )
                }





                {/* New Users List */}
                {newUsersList.length > 0 && (
                    !isEditing && (
                        <div className="w-full border border-violet-500 rounded-lg">
                            <div className="table w-full border-collapse rounded-lg">
                                <div className="table-row-group">
                                    {newUsersList.map((user, index) => (
                                        <div key={index}
                                            className="table-row border-b border-neutral-300 hover:shadow-md cursor-pointer"
                                        >
                                            <div className="table-cell p-3">
                                                {user.organization}
                                            </div>
                                            <div className="table-cell p-3 border-l">
                                                {user.firstName} {user.lastName}
                                            </div>
                                            <div className="table-cell p-3">
                                                {user.email}
                                            </div>
                                            <div className="table-cell p-3 text-right">
                                                <button
                                                    onClick={() => handleUpdateUser(user)}
                                                    className="mr-2 px-3 hover:text-violet-600">
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteUser(user.email)} className="hover:text-violet-600">
                                                    Delete
                                                </button>
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
                            <button
                                onClick={prevStep}
                                className=" border border-neutral-300 text-black py-3 px-10 rounded-lg hover:shadow-md"
                            >
                                Back
                            </button>
                        ) : (
                            <button
                                onClick={onClose}
                                className=" border border-neutral-300 text-black py-3 px-10 rounded-lg hover:shadow-md"
                            >
                                Cancel
                            </button>)
                    }
                    <button
                        onClick={onClose}
                        className={`${isAddUser
                            ? "bg-violet-400 cursor-not-allowed"
                            : " bg-violet-500"}
                                             text-white py-3 px-10 rounded-lg hover:shadow-md`}
                    >
                        Save
                    </button>
                </div>
            </form>

        </>
    );
}




