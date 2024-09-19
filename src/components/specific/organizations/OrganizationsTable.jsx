import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Spin, Empty } from "antd";
import TableColumns from "./TableColumns";
import InfiniteScroll from "react-infinite-scroll-component";
import organizationsData from "../../../mockData/orgsData"; // Mock data

import useAxios from "../../../hooks/useAxios";
import { useNavigate } from "react-router-dom";

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
        dispatch({ type: "SET_ORG", payload: record }); // Dispatch the organization data
        navigate(`/org/${record.id}`); // Navigate to the organization page
    };



    return (
        <>
            <div id="scrollableDiv" style={{ height: 600, overflow: "auto" }}>
                <p className='text-xl font-bold' > Organizations</p>
                <InfiniteScroll
                    dataLength={organizations.length}
                    next={loadMoreData}
                    hasMore={hasMore}
                    loader={<p>Loading...</p>}
                    scrollableTarget="scrollableDiv"
                >
                    <Table
                        columns={TableColumns()}
                        dataSource={organizations}
                        pagination={false}
                        rowKey="id"
                        onRow={(record) => ({
                            onClick: () => handleRowClick(record),
                        })}
                        locale={{
                            emptyText: <Empty description="No organizations available" />,
                        }}
                    />
                </InfiniteScroll>
            </div>
        </>
    );
}
