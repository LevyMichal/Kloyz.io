import { useState } from "react";
import Input from "../../common/Input";
import organizationsData from "../../../mockData/orgsData";
import NewUserForm from "./NewUserForm";

export default function NewUserModal({ isVisible, onClose, formType, orgName, newOrg, prevStep }) {
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
                        <div
                            className="w-full max-w-lg md:max-w-xl"
                            style={{ maxWidth: '100vw', minWidth: '300px' }}
                        >
                            <div className="flex justify-left mb-6">
                                <p className="text-2xl font-semibold">
                                    {isEditing
                                        ? 'Edit New User'
                                        : 'New User'}
                                </p>
                            </div>
                            <NewUserForm />
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
}




