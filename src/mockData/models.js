const tenant = {
    token: "",
    id: '',
    name: '',
    crn: '',
    pwd: '',
    email: '',
    phone: '',
    address: '',
    BankDetails: {
        bank: '',
        branch: '',
        acc: ''
    }
};

const client = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    BankDetails: {
        bank: '',
        branch: '',
        acc: ''
    },
    tenantId: '',
    apartmentIds: []
};

const apartment = {
    id: '',
    address: { fullAddress: '', city: '', country: '' },
    roomsNumber: null,
    entranceCode: '',
    safeCode: '',
    parkingNumber: '',
    clientId: '',
    tenantId: '',
    isRented: null
};

const renter = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    tenantId: '',
    apartmentId: '',
    contractId: ''
};

const contract = {
    id: '',
    startDate: '',
    endDate: '',
    contractAmount: '',
    apartmentId: '',
    tenantId: '',
    contractPdf: ''
};

const provider = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    fieldOfWork: '',
    activityArea: '',
    customerReviews: [
        { rating: null, comment: '' }
    ],
    tenantIds: []
};

const intervention = {
    id: '',
    step: '',
    status: '',
    problemType: '',
    apartmentId: '',
    contractId: '',
    providerId: '',
    quoteId: ''
};

const quote = {
    id: '',
    amount: '',
    status: '',
    interventionId: '',
    providerId: ''
};

