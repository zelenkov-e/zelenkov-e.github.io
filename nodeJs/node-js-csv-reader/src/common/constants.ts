import { DataUpdateNotifiler } from "./types";

export const DefaultDataNotifier: DataUpdateNotifiler = {
  eventId: "99bf7db1-d03a-4584-8d7a-1dbf36d7768c",
  eventName: "TEST_SUPPLIER_AST",
  dataUrl: "./public/assets/vrd.csv",
  dataOtput: "./public/assets/file.csv",
  dataFileName: "vrd.csv",
  dataLength: 102234543,
  timestamp: "2024-03-25T17:57:14.161299800Z",
  attributes: {
    taskId: "112233",
    taskIds: "112233,223344",
  },
};
