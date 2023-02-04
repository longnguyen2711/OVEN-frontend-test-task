import { Chat } from "./types";

export const dataChatInternal: Chat = {
    title: "Title",
    nodesList: [
        {
            firstName: "First Name 1",
            lastName: "Last Name 1",
            age: 1,
            birthDate: "1/1/1111",
            shoppingItemsList: [
              {
                title: "Title 1.1",
                price: 1,
                currency: "Currency 1.1",
                date: "Sat Feb 04 2023 23:21:01 GMT+0700",
              },
              {
                title: "Title 1.2",
                price: 1.2,
                currency: "Currency 1",
                date: "Sat Feb 04 2023 23:21:01 GMT+0700",
              },
            ],
          },
          {
            firstName: "First Name 2",
            lastName: "Last Name 2",
            age: 2,
            birthDate: "2/2/2",
          }
    ]
}

