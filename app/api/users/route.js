const users =[
  {
    id: 1,
    name: "Alibek Olimov",
    email: "alibek@gmail.com",
  },
  {
    id: 2,
    name: "Firdavs Normurodov",
    email: "firdavs.normurodov@gmail.com",
  },
  {
    id: 3,
    name: "Firdavs Shuxratov",
    email: "firdavs.shuxdatov@gmail.com",
  },
  {
    id: 4,
    name: "Axliddinov Oyatulloh",
    email: "oyatulloh@gmail.com",
  },
  {
    id: 5,
    name: "Abdullayev Nuriddin",
    email: "nuriddin@gmail.com",
  },
  {
    id: 6,
    name: "Abduxoliqov Kamron",
    email: "kamron@gmail.com",
  },
  {
    id: 7,
    name: "Ne'matov Yahyo",
    email: "yahyo@gmail.com",
  },
  {
    id: 8,
    name: "Bahodirov Abdulloh",
    email: "abdulloh@gmail.com",
  },
  {
    id: 9,
    name: "Faxriddinov Miraziz",
    email: "miraziz@gmail.com",
  },
  {
    id: 10,
    name: "Yaminjonov Muhammadali",
    email: "muhammadali@gmail.com",
  },
  {
    id: 11,
    name: "Jurayev Davron",
    email: "davron@gmail.com",
  },
  {
    id: 12,
    name: "Sheronov Akbarali",
    email: "akbarali@gmail.com",
  },
  {
    id: 13,
    name: "Yusupov Asadbek",
    email: "asadbek@gmail.com",
  },
];
export async function GET() {
  return Response.json(users);
}