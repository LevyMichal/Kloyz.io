import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import organizationsData from "../../../mockData/orgsData"; // Mock data

import useAxios from "../../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import Table from "../../common/Table";
import orgColumns from "./OrgTableColumns";
import FilterSearch from "../../common/FilterSearch";

const tableSize = 10;

export default function OrganizationsTable() {
    const [organizations, setOrganizations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [hasMore, setHasMore] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    const axiosInstance = useAxios();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const userRole = useSelector((store) => store.user.currentUser?.role);

    const filteredOrganizations = organizations.filter(org =>
        org.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        if (userRole === "SUPERADMIN") {
            loadMoreData();
        }
    }, [userRole]);

    const loadMoreData = async () => {
        // mock data fetch
        const nextIndex = currentIndex + tableSize;
        const moreOrgs = organizationsData.slice(currentIndex, nextIndex);

        /* 
        REAL API REQUEST 
        const loadMoreData = async () => {
          try {
            const { data } = await axiosInstance.post('api/organizations', {
              index: currentIndex,
              limit: tableSize
            });
            const moreOrgs = data.organizations; // Fetching organizations from your real API
          } catch (error) {
            console.error('Error fetching organizations:', error);
          }
        };
        */

        if (moreOrgs.length === 0) {
            setHasMore(false);
        } else {
            setOrganizations([...organizations, ...moreOrgs]);
            setCurrentIndex(nextIndex);
        }
    };

    const handleRowClick = (org) => {
        dispatch({ type: "SET_ORG", payload: org });
        navigate(`/org/${org.id}`);
    };


    return (
        <div>
            <div className="flex flex-row  items-center justify-center mb-4">
                <div className="flex-grow">
                    <p className="text-xl font-bold">
                        All Organizations
                    </p>
                </div>

                <FilterSearch
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="border-2 border-neutral-100 rounded-xl p-8" >
                <Table
                    columns={orgColumns}
                    data={filteredOrganizations.length > 0 && filteredOrganizations}
                    onRowClick={handleRowClick}
                    loadMoreData={loadMoreData}
                    hasMore={hasMore}
                />
            </div>
        </div>
    );
}
