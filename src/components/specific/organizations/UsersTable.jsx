import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usersOfOrgData from "../../../mockData/usersOfOrgData"; // Mock data

import useAxios from "../../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import Table from "../../common/Table";
import usersColumns from "./UsersTableColumns";
import FilterSearch from "../../common/FilterSearch";
import Button from "../../common/Button";
import NewUserForm from "./NewUserForm";

const tableSize = 10;

export default function UsersTable({ org }) {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [hasMore, setHasMore] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAddUserPopup, setShowAddUserPopup] = useState(false)

    const userRole = useSelector((store) => store.user.currentUser?.role);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const axiosInstance = useAxios();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const openAddUserPopup = () => setShowAddUserPopup(true)
    const closeAddUserPopup = () => setShowAddUserPopup(false)

    useEffect(() => {
        if (userRole === "SUPERADMIN") {
            loadMoreData();
        }
    }, [userRole]);

    const loadMoreData = async () => {
        // mock data fetch
        const usersOfCurrentOrg = usersOfOrgData.find(orgData => orgData.orgId === org.id)
        const nextIndex = currentIndex + tableSize;
        const moreUsers = usersOfCurrentOrg.users.slice(currentIndex, nextIndex);

        if (moreUsers.length === 0) {
            setHasMore(false);
        } else {
            setUsers([...users, ...moreUsers]);
            setCurrentIndex(nextIndex);
        }
    };

    const handleRowClick = (record) => {
        // TODO: handleRowClick
    };

    return (
        <div>
            <div className="flex flex-row items-center justify-center mb-4">
                <div className="flex">
                    <p className="text-xl pt-1 font-bold mr-4">
                        All Users
                    </p>
                    <Button
                        text={"+ New User"}
                        onClick={openAddUserPopup}
                    />

                </div>
                <div className="flex-1 ">
                    <p className="text-center -ml-32 text-2xl font-bold text-violet-500">
                        {org.name}
                    </p>
                </div>
                <FilterSearch
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="border-x-2 border-t-2 border-neutral-100 rounded-t-xl px-8 pt-8" >
                <Table
                    columns={usersColumns}
                    data={filteredUsers.length > 0 && filteredUsers}
                    onRowClick={handleRowClick}
                    loadMoreData={loadMoreData}
                    hasMore={hasMore}
                />
            </div>

            <NewUserForm
                isVisible={showAddUserPopup}
                onClose={closeAddUserPopup}
                formType={"from organization page"}
                orgName={org.name} />
        </div>
    );
}
