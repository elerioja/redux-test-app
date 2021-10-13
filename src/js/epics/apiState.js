import { combineEpics, ofType } from "redux-observable";
import { mergeMap, map } from "rxjs";
import { actions } from "../redux/apiState";

export const fetchApiStateEpic = (actions$, _, { fetchApi }) =>
  actions$.pipe(
    ofType(actions.fetchPhotos.toString()),
    mergeMap(() => fetchApi()),
    map((apiState) => actions.photosReceived(apiState))
  );

export default combineEpics(fetchApiStateEpic);
