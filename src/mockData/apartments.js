const apartments = [
    {
        id: '1',
        address: { fullAddress: 'Herzl St 10, Tel Aviv', city: 'Tel Aviv', country: 'Israel' },
        roomsNumber: 3,
        entranceCode: '1234',
        safeCode: 'safe001',
        parkingNumber: 'P1',
        clientId: '1',
        tenantId: '1',
        isRented: true
    },
    {
        id: '2',
        address: { fullAddress: 'Ben Gurion St 20, Haifa', city: 'Haifa', country: 'Israel' },
        roomsNumber: 2,
        entranceCode: '5678',
        safeCode: 'safe002',
        parkingNumber: 'P2',
        clientId: '1',
        tenantId: '1',
        isRented: false
    },
    {
        id: '3',
        address: { fullAddress: 'Jabotinsky St 12, Ramat Gan', city: 'Ramat Gan', country: 'Israel' },
        roomsNumber: 4,
        entranceCode: '9012',
        safeCode: 'safe003',
        parkingNumber: 'P3',
        clientId: '1',
        tenantId: '1',
        isRented: true
    },
    {
        id: '4',
        address: { fullAddress: 'Arlozorov St 55, Holon', city: 'Holon', country: 'Israel' },
        roomsNumber: 2,
        entranceCode: '3456',
        safeCode: 'safe004',
        parkingNumber: 'P4',
        clientId: '1',
        tenantId: '1',
        isRented: false
    },
    {
        id: '5',
        address: { fullAddress: 'King George St 80, Jerusalem', city: 'Jerusalem', country: 'Israel' },
        roomsNumber: 3,
        entranceCode: '7890',
        safeCode: 'safe005',
        parkingNumber: 'P5',
        clientId: '1',
        tenantId: '1',
        isRented: true
    },
    {
        id: '6',
        address: { fullAddress: 'Herzl St 15, Beersheba', city: 'Beersheba', country: 'Israel' },
        roomsNumber: 3,
        entranceCode: '2345',
        safeCode: 'safe006',
        parkingNumber: 'P6',
        clientId: '2',
        tenantId: '1',
        isRented: false
    },
    {
        id: '7',
        address: { fullAddress: 'Rothschild St 1, Rishon LeZion', city: 'Rishon LeZion', country: 'Israel' },
        roomsNumber: 4,
        entranceCode: '6789',
        safeCode: 'safe007',
        parkingNumber: 'P7',
        clientId: '2',
        tenantId: '1',
        isRented: true
    },
    {
        id: '8',
        address: { fullAddress: 'Allenby St 34, Bat Yam', city: 'Bat Yam', country: 'Israel' },
        roomsNumber: 2,
        entranceCode: '1234',
        safeCode: 'safe008',
        parkingNumber: 'P8',
        clientId: '3',
        tenantId: '1',
        isRented: false
    },
    {
        id: '9',
        address: { fullAddress: 'Shenkar St 8, Rahanana', city: 'Rahanana', country: 'Israel' },
        roomsNumber: 3,
        entranceCode: '5678',
        safeCode: 'safe009',
        parkingNumber: 'P9',
        clientId: '3',
        tenantId: '1',
        isRented: true
    },
    {
        id: '10',
        address: { fullAddress: 'Weizmann St 45, Netanya', city: 'Netanya', country: 'Israel' },
        roomsNumber: 4,
        entranceCode: '9012',
        safeCode: 'safe010',
        parkingNumber: 'P10',
        clientId: '3',
        tenantId: '1',
        isRented: false
    },
    {
        id: '11',
        address: { fullAddress: 'Menachem Begin St 2, Ashdod', city: 'Ashdod', country: 'Israel' },
        roomsNumber: 3,
        entranceCode: '3456',
        safeCode: 'safe011',
        parkingNumber: 'P11',
        clientId: '4',
        tenantId: '1',
        isRented: true
    },
    {
        id: '12',
        address: { fullAddress: 'HaNassi St 3, Kfar Saba', city: 'Kfar Saba', country: 'Israel' },
        roomsNumber: 2,
        entranceCode: '7890',
        safeCode: 'safe012',
        parkingNumber: 'P12',
        clientId: '4',
        tenantId: '1',
        isRented: false
    },
    {
        id: '13',
        address: { fullAddress: 'Dizengoff St 15, Herzliya', city: 'Herzliya', country: 'Israel' },
        roomsNumber: 5,
        entranceCode: '2345',
        safeCode: 'safe013',
        parkingNumber: 'P13',
        clientId: '5',
        tenantId: '1',
        isRented: true
    }
];

export default apartments;