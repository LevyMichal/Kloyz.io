import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import organizationsData from "../../../mockData/orgsData"; // Mock data

import useAxios from "../../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import Table from "../../common/Table";
import orgColumns from "./OrgTableColumns";

const tableSize = 10;

export default function OrganizationsTable() {
    const [organizations, setOrganizations] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    const axiosInstance = useAxios();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const userRole = useSelector((store) => store.user.currentUser?.role);

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

    const handleRowClick = (record) => {
        dispatch({ type: "SET_ORG", payload: record });
        navigate(`/org/${record.id}`);
    };

    const addNewOrg = () => {
        //TODO: handle new organization
    };

    return (
        <div>
            <div className="flex flex-row items-center">
                <div className="flex-grow">
                    <p className="text-xl font-bold">All Organizations</p>
                </div>
                <div className="relative mb-8 pr-3">
                    <input
                        type="text"
                        placeholder="Search Dashboard"
                        className="pl-10 text-neutral-100 text-sm bg-neutral-50 hover:bg-neutral-200 p-3 rounded-full"
                    />
                </div>
                <button
                    className="text-neutral-100 text-sm bg-violet-500 p-3 mb-8 rounded-full hover:bg-violet-700"
                    onClick={addNewOrg}
                >+ New Organization
                </button>
            </div>
            <div className="border-2 border-neutral-100 rounded-xl p-8">
                <div
                    id="scrollableDiv"
                    style={{ height: '550px', overflowY: 'auto', scrollbarWidth: "none" }}
                >
                    <InfiniteScroll
                        dataLength={organizations.length}
                        next={loadMoreData}
                        hasMore={hasMore}
                        loader={<p>Loading...</p>}
                        scrollableTarget="scrollableDiv"
                    >
                        <Table
                            columns={orgColumns}
                            data={organizations}
                            onRowClick={handleRowClick}
                        />
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    );
}
