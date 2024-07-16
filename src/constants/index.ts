import Anonymous from "../assets/icons/Anonymous";
import Chat from "../assets/icons/Chat";
import DMs from "../assets/icons/DMs";

export const navigateChat = [
  {
    icon: Chat,
    title: "Chats",
    to: "/chat-board",
  },
  {
    icon: DMs,
    title: "DMs",
    to: "/chat-board/dms",
  },
  {
    icon: Anonymous,
    title: "Anonymous",
    to: "/chat-board/anonymous",
  },
];

export const friends = [
  "Ajayi Damilola",
  "Segun Ajala",
  "Kingsley Alex",
  "Adriana Jones",
  "Divine Kings",
];

export const switching = [
  { route: "/login", name: "login" },
  { route: "/", name: "register" },
];

export const spaces = [
  {
    id: 1,
    title: "The Portals",
    description:
      "In The Portals, we discuss matters arising in tech space. Join us for a tooth-aching, brain bursting discussion",
    active: false,
  },
  {
    id: 2,
    title: "NielBS",
    active: true,
  },
];
