const providers = [
    {
        id: '1',
        firstName: 'Adam',
        lastName: 'Johnson',
        email: 'adam.johnson@electrician.com',
        phone: '0501234567',
        fieldOfWork: 'Electricity',
        activityArea: 'Tel Aviv and surrounding areas',
        customerReviews: [
            { rating: 5, comment: 'Excellent service, quick response time!' },
            { rating: 4, comment: 'Great work, but a bit expensive.' },
        ],
        tenantIds: ['1'],
    },
    {
        id: '2',
        firstName: 'Beatrice',
        lastName: 'Williams',
        email: 'beatrice.williams@plumber.com',
        phone: '0522345678',
        fieldOfWork: 'Plumbing',
        activityArea: 'Jerusalem and surrounding areas',
        customerReviews: [
            { rating: 4, comment: 'Very reliable, fixed the issue quickly.' },
            { rating: 3, comment: 'Good service, but not very communicative.' },
        ],
        tenantIds: ['1'],
    },
    {
        id: '3',
        firstName: 'Charlie',
        lastName: 'Miller',
        email: 'charlie.miller@carpenter.com',
        phone: '0533456789',
        fieldOfWork: 'Carpentry',
        activityArea: 'Haifa and surrounding areas',
        customerReviews: [
            { rating: 5, comment: 'Fantastic craftsmanship, highly recommend!' },
            { rating: 5, comment: 'Very professional and clean work.' },
        ],
        tenantIds: ['1'],
    },
    {
        id: '4',
        firstName: 'Diana',
        lastName: 'Davis',
        email: 'diana.davis@cleaningservices.com',
        phone: '0544567890',
        fieldOfWork: 'Cleaning',
        activityArea: 'Eilat and surrounding areas',
        customerReviews: [
            { rating: 4, comment: 'Good service, thorough cleaning.' },
            { rating: 4, comment: 'Friendly team, very effective.' },
        ],
        tenantIds: ['1'],
    },
    {
        id: '5',
        firstName: 'Eli',
        lastName: 'Rosen',
        email: 'eli.rosen@painter.com',
        phone: '0555678901',
        fieldOfWork: 'Painting',
        activityArea: 'Netanya and surrounding areas',
        customerReviews: [
            { rating: 5, comment: 'Amazing results, transformed the space!' },
            { rating: 4, comment: 'Great work, but took longer than expected.' },
        ],
        tenantIds: ['1'],
    }
];

export default providers;