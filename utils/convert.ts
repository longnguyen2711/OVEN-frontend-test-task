import {
  Timestamp,
  ShopingItemType,
  ExtShopingItemType,
  INodeElement,
  IExtNodeElement,
  Chat,
  ExtChat,
} from "../types";

const convertTimestamp = (date: string): Timestamp => {
  const timeInNanos = new Date(date).getTime();
  const timeInSeconds = timeInNanos / 1000;
  return {
    seconds: timeInSeconds,
    nanos: timeInNanos,
  };
};

const convertShopingItem = (item: ShopingItemType): ExtShopingItemType => {
  return {
    Title: item.title,
    Price: item.price,
    Currency: item.currency,
    Date: convertTimestamp(item.date),
  };
};

const convertNodeElement = (node: INodeElement): IExtNodeElement => {
  return {
    FirstName: node.firstName,
    LastName: node.lastName,
    Age: node.age,
    BirthDate: convertTimestamp(node.birthDate),
    ShoppingItems: node.shoppingItemsList?.map(convertShopingItem) || [],
  };
};

export const convertChat = (chat: Chat): ExtChat => {
  return {
    Title: chat.title,
    ChatItems: chat.nodesList.map(convertNodeElement),
  };
};
