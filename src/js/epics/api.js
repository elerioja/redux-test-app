import { combineEpics, ofType } from "redux-observable";
import { mergeMap, map, withLatestFrom } from "rxjs";
import { actions } from "../redux/apiState";

export const fetchApiEpic = (actions$, _, { fetchApi }) =>
  actions$.pipe(
    ofType(actions.fetchPhotos.toString()),
    mergeMap(() => fetchApi("nature")),
    map((apiState) => actions.photosReceived(apiState))
  );

export const fetchApiByUpdatedSearchKeyword = (
  actions$,
  store$,
  { fetchApi }
) =>
  actions$.pipe(
    // observable action -> observable action
    ofType(actions.performSearch.toString()),
    // obsrvable action -> [observable action, observable state]
    withLatestFrom(store$),
    // [observable action, observable state]
    mergeMap(([action, { api }]) => fetchApi(api.inputValue)),
    map((searchState) => actions.searchPerformed(searchState))
  );

export default combineEpics(fetchApiEpic, fetchApiByUpdatedSearchKeyword);
