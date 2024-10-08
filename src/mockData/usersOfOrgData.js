const usersOfOrgData = [
    {
        orgId: 1,
        users: [
            { id: 1, name: "Sarah Cohen", email: "sarah.cohen1@gmail.com", role: "admin", quotesCreated: 45, proposalsCreated: 67 },
            { id: 2, name: "David Levi", email: "david.levi1@gmail.com", role: "user", quotesCreated: 21, proposalsCreated: 30 },
            { id: 3, name: "Rivka Goldman", email: "rivka.goldman1@gmail.com", role: "user", quotesCreated: 32, proposalsCreated: 12 },
            { id: 4, name: "Jonathan Bar", email: "jonathan.bar1@gmail.com", role: "admin", quotesCreated: 56, proposalsCreated: 45 },
        ],
    },
    {
        orgId: 2,
        users: [
            { id: 5, name: "Rachel Green", email: "rachel.green2@gmail.com", role: "admin", quotesCreated: 42, proposalsCreated: 50 },
            { id: 6, name: "Ethan Shalev", email: "ethan.shalev2@gmail.com", role: "user", quotesCreated: 37, proposalsCreated: 55 },
            { id: 7, name: "Noa Blum", email: "noa.blum2@gmail.com", role: "user", quotesCreated: 49, proposalsCreated: 60 },
            { id: 8, name: "Michael Raz", email: "michael.raz2@gmail.com", role: "admin", quotesCreated: 68, proposalsCreated: 73 },
            { id: 9, name: "Daniel Katz", email: "daniel.katz2@gmail.com", role: "user", quotesCreated: 22, proposalsCreated: 15 },
        ],
    },
    {
        orgId: 3,
        users: [
            { id: 10, name: "Yael Kaplan", email: "yael.kaplan3@gmail.com", role: "admin", quotesCreated: 39, proposalsCreated: 55 },
            { id: 11, name: "Oren Kadosh", email: "oren.kadosh3@gmail.com", role: "user", quotesCreated: 21, proposalsCreated: 18 },
            { id: 12, name: "Ariel Fine", email: "ariel.fine3@gmail.com", role: "user", quotesCreated: 33, proposalsCreated: 25 },
            { id: 13, name: "Lior Gold", email: "lior.gold3@gmail.com", role: "admin", quotesCreated: 40, proposalsCreated: 50 },
            { id: 14, name: "Tali Sharon", email: "tali.sharon3@gmail.com", role: "user", quotesCreated: 36, proposalsCreated: 44 },
        ],
    },
    {
        orgId: 4,
        users: [
            { id: 15, name: "Ella Rubin", email: "ella.rubin4@gmail.com", role: "user", quotesCreated: 60, proposalsCreated: 47 },
            { id: 16, name: "Adam Tzur", email: "adam.tzur4@gmail.com", role: "admin", quotesCreated: 52, proposalsCreated: 43 },
            { id: 17, name: "Maya Mizrahi", email: "maya.mizrahi4@gmail.com", role: "user", quotesCreated: 41, proposalsCreated: 53 },
            { id: 18, name: "Shay Rosen", email: "shay.rosen4@gmail.com", role: "admin", quotesCreated: 70, proposalsCreated: 62 },
        ],
    },
    {
        orgId: 5,
        users: [
            { id: 19, name: "Amir Shoham", email: "amir.shoham5@gmail.com", role: "admin", quotesCreated: 34, proposalsCreated: 23 },
            { id: 20, name: "Niv Meir", email: "niv.meir5@gmail.com", role: "user", quotesCreated: 22, proposalsCreated: 17 },
            { id: 21, name: "Shani Azulay", email: "shani.azulay5@gmail.com", role: "admin", quotesCreated: 61, proposalsCreated: 45 },
            { id: 22, name: "Tal Ben", email: "tal.ben5@gmail.com", role: "user", quotesCreated: 36, proposalsCreated: 50 },
            { id: 23, name: "Gil Peretz", email: "gil.peretz5@gmail.com", role: "user", quotesCreated: 27, proposalsCreated: 30 },
            { id: 24, name: "Hadar Naim", email: "hadar.naim5@gmail.com", role: "admin", quotesCreated: 40, proposalsCreated: 63 },
        ],
    },
    {
        orgId: 6,
        users: [
            { id: 25, name: "Itay Mor", email: "itay.mor6@gmail.com", role: "user", quotesCreated: 28, proposalsCreated: 29 },
            { id: 26, name: "Yoni Segal", email: "yoni.segal6@gmail.com", role: "user", quotesCreated: 45, proposalsCreated: 67 },
            { id: 27, name: "Tomer Lev", email: "tomer.lev6@gmail.com", role: "admin", quotesCreated: 35, proposalsCreated: 20 },
            { id: 28, name: "Alon Saar", email: "alon.saar6@gmail.com", role: "user", quotesCreated: 42, proposalsCreated: 41 },
            { id: 29, name: "Oded Cohen", email: "oded.cohen6@gmail.com", role: "admin", quotesCreated: 37, proposalsCreated: 53 },
            { id: 30, name: "Nir Zeevi", email: "nir.zeevi6@gmail.com", role: "user", quotesCreated: 22, proposalsCreated: 24 },
            { id: 31, name: "Dana Ziv", email: "dana.ziv6@gmail.com", role: "user", quotesCreated: 49, proposalsCreated: 45 },
        ],
    },
    {
        orgId: 7,
        users: [
            { id: 32, name: "Noam Harari", email: "noam.harari7@gmail.com", role: "admin", quotesCreated: 52, proposalsCreated: 47 },
            { id: 33, name: "Gal Rosen", email: "gal.rosen7@gmail.com", role: "user", quotesCreated: 61, proposalsCreated: 70 },
            { id: 34, name: "Aviv Shani", email: "aviv.shani7@gmail.com", role: "admin", quotesCreated: 29, proposalsCreated: 23 },
            { id: 35, name: "Shahar Levi", email: "shahar.levi7@gmail.com", role: "user", quotesCreated: 48, proposalsCreated: 36 },
        ],
    },
    {
        orgId: 8,
        users: [
            { id: 36, name: "Talia Nevo", email: "talia.nevo8@gmail.com", role: "admin", quotesCreated: 32, proposalsCreated: 50 },
            { id: 37, name: "Roni Neeman", email: "roni.neeman8@gmail.com", role: "user", quotesCreated: 39, proposalsCreated: 45 },
            { id: 38, name: "Eden Azulay", email: "eden.azulay8@gmail.com", role: "admin", quotesCreated: 40, proposalsCreated: 33 },
            { id: 39, name: "Shira White", email: "shira.white8@gmail.com", role: "user", quotesCreated: 66, proposalsCreated: 76 },
            { id: 40, name: "Lior Saar", email: "lior.saar8@gmail.com", role: "user", quotesCreated: 22, proposalsCreated: 29 },
        ],
    },
    {
        orgId: 9,
        users: [
            { id: 41, name: "Itai Moran", email: "itai.moran9@gmail.com", role: "user", quotesCreated: 50, proposalsCreated: 66 },
            { id: 42, name: "Shai Gold", email: "shai.gold9@gmail.com", role: "user", quotesCreated: 28, proposalsCreated: 22 },
            { id: 43, name: "Dani White", email: "dani.white9@gmail.com", role: "admin", quotesCreated: 55, proposalsCreated: 77 },
            { id: 44, name: "Eli Sharon", email: "eli.sharon9@gmail.com", role: "user", quotesCreated: 35, proposalsCreated: 39 },
            { id: 45, name: "Rina Naim", email: "rina.naim9@gmail.com", role: "admin" },]
    },
    {
        orgId: 10,
        users: [
            {
                id: 46,
                name: "Lior Yellow",
                email: "lioryellow10@gmail.com",
                role: "admin",
                quotesCreated: 53,
                proposalsCreated: 77,
            },
            {
                id: 47,
                name: "Ron Green",
                email: "rongreen10@gmail.com",
                role: "user",
                quotesCreated: 70,
                proposalsCreated: 63,
            },
            {
                id: 48,
                name: "Tomer Red",
                email: "tomerred10@gmail.com",
                role: "admin",
                quotesCreated: 82,
                proposalsCreated: 54,
            },
            {
                id: 49,
                name: "Amit Blue",
                email: "amitblue10@gmail.com",
                role: "user",
                quotesCreated: 91,
                proposalsCreated: 65,
            },
            {
                id: 50,
                name: "Shira White",
                email: "shirawhite10@gmail.com",
                role: "admin",
                quotesCreated: 66,
                proposalsCreated: 76,
            },
        ],
    },
];
export default usersOfOrgData;

