import { useState } from "react";
import Input from "../../common/Input";
import NewUserForm from "./NewUserForm";

export default function NewOrgForm() {

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
        <div>
            {/* {step === 1 && */}
            <div className="flex flex-row items-center justify-between mb-4 ">
                <p className="text-xl pt-1 font-bold mr-4">
                    New Organization
                </p>

                {/* Close Icon */}
                <button onClick={''} >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="border-2 border-neutral-100 rounded-xl p-8 mb-8" >
                <form className="w-1/3 space-y-8 overflow-y-scroll ">

                    {/* Organization Information */}
                    <div className="border-b pb-8">
                        <p className="text-lg bg-neutral-100 py-2 px-3 w-fit rounded-lg">
                            Organization Information
                        </p>

                        {/* input fields */}
                        <div className="pt-8 ">
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
                                Status
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

                        <button
                            onClick={handleNext}
                            className=" bg-violet-500 text-white py-2 px-5  rounded-lg hover:shadow-lg">
                            Next
                        </button>
                    </div>

                    {/* step 2 - add user */}
                    {step === 2 && (
                        <div>
                            {/* User Information */}
                            <p className="text-lg bg-neutral-100 py-2 px-3 w-fit rounded-lg mb-8">
                                User Information
                            </p>

                            <NewUserForm
                                isVisible={true}
                                formType={"add org second step"}
                                orgName={newOrg.name}
                                newOrg={newOrg}
                                prevStep={() => setStep(1)}
                                onClose={''} />

                            {/* Action Buttons */}
                            <div className="flex justify-end gap-5 py-6 h-fit">
                                <button
                                    onClick={''}
                                    className=" border border-neutral-300 text-black py-3 px-10 rounded-lg hover:shadow-lg">
                                    Cancel
                                </button>
                                <button
                                    onClick={handleNext}
                                    className=" bg-violet-500 text-white py-3 px-10 rounded-lg hover:shadow-lg">
                                    Save
                                </button>
                            </div>

                        </div>
                    )}

                </form>
            </div >

            {/* } */}
        </div >
    );
}

{/* close icon */ }
{/* <div className="flex justify-end items-center pr-4 pt-4">
                        <button onClick={''}>
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
                    </div> */}




{/* step 2 - add user */ }
{/* {step === 2 &&
                <NewUserForm
                    isVisible={true}
                    formType={"page"}
                    orgName={newOrg.name}
                    newOrg={newOrg}
                    prevStep={() => setStep(1)}
                    onClose={''} />
            } */}