import { Link } from "react-router-dom";

const TableColumns = () => {
    return [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <Link to={`/org/${record.id}`} className="font-semibold hover:underline">
                    {text}
                </Link>
            ),
        },
        {
            title: 'Users',
            dataIndex: 'users',
            key: 'users',
        },
        {
            title: 'Admins',
            dataIndex: 'admins',
            key: 'admins',
        },
        {
            title: 'Quotes Sent',
            dataIndex: 'quotesSent',
            key: 'quotesSent',
        },
        {
            title: 'Proposals Sent',
            dataIndex: 'proposalsSent',
            key: 'proposalsSent',
        },
        {
            title: 'Money Generated',
            dataIndex: 'moneyGenerated',
            key: 'moneyGenerated',
        },
    ];
};

export default TableColumns;