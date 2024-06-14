import Api from "../../../api/SosApi";
import { DataUpdateNotifiler } from "../../common/types";
import { DefaultDataNotifier } from "../../common/constants";

export class DataUpdateNotifierService {
  async fetchDataUrls(): Promise<DataUpdateNotifiler> {
    // const response = await Api.getStockDetails();
    // return response.data;
    return DefaultDataNotifier;
  }
}
