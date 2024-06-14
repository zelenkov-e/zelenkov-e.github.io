export interface Attributes {
  taskId: string;
  taskIds: string;
}

export interface DataUpdateNotifiler {
  eventId: string;
  eventName: string;
  dataUrl: string;
  dataOtput: string;
  dataFileName: string;
  dataLength: number;
  timestamp: string;
  attributes: Attributes;
}
