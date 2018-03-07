//action creater
import { createAction } from "redux-act";

export const getTrackList = createAction("stateTrackList");
export const getTrackDetails = createAction();
export const getInfo = createAction("info");
// export const getString = createAction("string");
export const getString = createAction("info", id => ({ id: 2 }));
