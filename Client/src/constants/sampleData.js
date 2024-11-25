import { Attachment, Public } from "@mui/icons-material";

export const sampleChats = [
{
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Rohit Singh",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
},
{
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Sooraj sikarwar",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
},

];

export const sampleUsers = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Rohit Singh",
        _id: "1",
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Sooraj sikarwar",
        _id: "2",
    },
];
export const sampleNotifications = [
    {
        sender: {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Rohit Singh",
        },
        _id: "1",
    },
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Sooraj sikarwar",
        },
        _id: "2",
    },
];

export const sampleMessages = [
    {
        attachments: [
        ],
    content: "this is the content of the text message jo IS00 ne issue kiya hai",
        _id: "messageid_ZindagiNaMilegiDobara",
        sender: {
            _id: "user._id",
            name: "Chaman",
        },
        chat: "chatId",
        createdAt: "2024-10-15T20:51:45.630Z",
    },

    {
        attachments: [
            {
                Public_id: "public id_2",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "",
        _id: "messageid_ZindagiNaMilegiDobara634643",
        sender: {
            _id: "ThisIsTheChatId",
            name: "Chaman6346545",
        },
        chat: "chatId",
        createAt: "2024-10-15T20:51:45.632Z",
    },
 ];


 export const dashboardData = {
    users: [
        {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "Rohit Singh",
            _id: "1",
            username: "Rohit_Singh",
            groups: 5,
            friends: 20,

        },
        {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Sooraj sikarwar",
        _id: "2",
        username: "Sooraj_Sikarwar",
        groups: 12,
        friends: 53,
        },
    ],

    chats:[{
        name: "Rajput Group",
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        _id: "1",
        groupChat: false,
        members: [
            {_id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
            {_id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
        ],
        totalMembers: 3,
        totalMessages: 259,
        creator: {
            name: "Nitin",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
    },
    {
        name: "Hindu Group",
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        _id: "2",
        groupChat: true,
        members: [
            {_id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
            {_id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
        ],
        totalMembers: 54,
        totalMessages: 8943,
        creator: {
            name: "Shyam",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
    },
],

messages:[
    {
        attachments: [],
        content: "Hey! It’s been a while since we last caught up.",
        _id: "thisIsTheNewIdForTheChatApp",
        sender: {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "John Keswick",
        },
        chat: "chatId",
        groupChat: true,
        createdAt: "2024-08-02t15:49:12.630Z",
    },
    {
        attachments: [
            {
                public_id: "adkfjk",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "How’s everything going on your end? Would love to hear what you’ve been up to!",
        _id: "thisIsTheOnlyId",
        sender: {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "Jordan Peterson",
        },
        chat: "chatId",
        groupChat: false,
        createdAt: "2024-08-02t15:49:12.630Z",
    },
]
};
