import * as Api from "../../api/Api";

export function init() {
  return async dispatch => {
    try{
      Api.initApi();

      const user = await Api.User.getCurrent();

      // add it to redux


    } catch (e) {
      Api.removeToken();
    }
  };
}