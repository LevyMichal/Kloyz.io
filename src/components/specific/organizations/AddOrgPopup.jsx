import { useState } from "react";
import Input from "../../common/Input";
import AddUserPopup from "./NewUserForm";

export default function AddOrgPopup({ isVisible, onClose }) {

    if (!isVisible) return null;

    const [step, setStep] = useState(1);

    const [newOrg, SetNewOrg] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        website: '',
        status: ''
    });

    // Handle input changes
    const handleInputChange = (field, value) => {
        SetNewOrg(prevOrg => ({ ...prevOrg, [field]: value }));
    };

    // Handle next step with validation
    const handleNext = (e) => {
        e.preventDefault();

        // Basic form validation
        const { name, address, phone, email, status } = newOrg;
        if (!name || !address || !phone || !email || !status) {
            alert("Please fill out all required fields.");
            return;
        }

        // Move to the next step
        setStep(2);
    };

    return (
        <>
            {step === 1 &&
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" >
                    </div>
                    <div className="h-3/4 w-3/5 bg-white border border-neutral-300 rounded-xl z-10 overflow-hidden">

                        {/* close icon */}
                        <div className="flex justify-end items-center pr-4 pt-4">
                            <button onClick={onClose}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="size-6">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex-1 flex justify-center items-center px-20">
                            <div className="w-full max-w-lg md:max-w-xl"
                                style={{ maxWidth: '100vw', minWidth: '300px' }}
                            >
                                <div className="flex justify-left mb-6">
                                    <p className="text-2xl font-semibold">
                                        New Organization
                                    </p>
                                </div>

                                <form className=" space-y-6 overflow-y-scroll max-h-[60vh]">
                                    <div className="border border-neutral-300 rounded-lg pt-4 pb-2 px-6">
                                        {/* input fields */}
                                        <div className="pt-4 -mb-4">
                                            <Input
                                                type="text"
                                                value={newOrg.name}
                                                placeholder="Name"
                                                required
                                                onChange={(e) => handleInputChange('name', e.target.value)} />
                                            <Input
                                                type="text"
                                                value={newOrg.address}
                                                placeholder="Address"
                                                required
                                                onChange={(e) => handleInputChange('address', e.target.value)} />
                                            <Input
                                                type="number"
                                                value={newOrg.phone}
                                                placeholder="Phone"
                                                required
                                                onChange={(e) => handleInputChange('phone', e.target.value)} />
                                            <Input
                                                type="email"
                                                value={newOrg.email}
                                                placeholder="Email"
                                                required
                                                onChange={(e) => handleInputChange('email', e.target.value)} />
                                            <Input
                                                type="text"
                                                value={newOrg.website}
                                                placeholder="Website"
                                                required
                                                onChange={(e) => handleInputChange('website', e.target.value)} />
                                        </div>

                                        {/* status select */}
                                        <div className="pb-6 -mt-5 ">
                                            <label className="block pb-1 px-2 text-xs font-normal text-neutral-600">
                                                Role
                                            </label>
                                            <div className="flex items-center gap-x-10 py-3 border border-neutral-300 rounded-lg">
                                                {["Activ", "Inactiv"].map((statusOption) => (
                                                    <div className="flex items-center pl-3 gap-x-2"
                                                        key={statusOption}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="status"
                                                            value={statusOption === "Activ"
                                                                ? 'activ'
                                                                : "inactiv"
                                                            }
                                                            checked={newOrg.status === (statusOption === "Activ"
                                                                ? 'activ'
                                                                : "inactiv"
                                                            )}
                                                            required
                                                            onChange={(e) => handleInputChange('status', e.target.value)}
                                                            className="h-3 w-3 text-violet-500 focus:ring-violet-700"
                                                        />
                                                        <label
                                                            htmlFor={statusOption}
                                                            className="text-base font-normal text-neutral-600">
                                                            {statusOption}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex justify-end gap-5 py-6">
                                        <button
                                            onClick={onClose}
                                            className=" border border-neutral-300 text-black py-3 px-10 rounded-lg hover:shadow-lg">
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            className=" bg-violet-500 text-white py-3 px-10 rounded-lg hover:shadow-lg">
                                            Next
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* step 2 - add user */}
            {step === 2 &&
                <AddUserPopup
                    isVisible={true}
                    formType={"add org second step"}
                    orgName={newOrg.name}
                    newOrg={newOrg}
                    prevStep={() => setStep(1)}
                    onClose={onClose} />
            }
        </>
    );
}
