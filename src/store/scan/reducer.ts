
// Don't use localStorage in production!
// https://stackoverflow.com/questions/37398427/redux-testing-referenceerror-localstorage-is-not-defined
let localStorage: any = window.localStorage || (function () {
  var store = {};
  return {
    getItem: function (key: string) {
      return store[key];
    },
    setItem: function (key: string, value: any) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key: string) {
      delete store[key];
    }
  };
})();

const handlers = {
  ['SCAN_RECEIVED']: (state: any, action: any) => {
    // console.log(action.payload)
    localStorage.setItem('lastImage', action.payload.base64Image);
    setTimeout(() => {
      let b64Image = localStorage.getItem("lastImage");
      if (b64Image) {
        var urlString = "url(" + b64Image + ")";
        document.body.style.backgroundImage = urlString;
      }
    }, 0);
    return {
      ...state,
      last: action.payload,
    };
  },

};

export const reducer = (state: any, action: any) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return {
    last: localStorage.getItem('lastImage') || null,
    ...state
  };
};
