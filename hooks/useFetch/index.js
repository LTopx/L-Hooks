function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useState } from 'react';
import { transformFetchOptions } from "./utils";
function useFetch(_ref) {
  var url = _ref.url,
    method = _ref.method,
    _ref$headers = _ref.headers,
    headers = _ref$headers === void 0 ? {
      'Content-Type': 'application/json; charset=utf-8'
    } : _ref$headers;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var run = function run() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _transformFetchOption = transformFetchOptions({
        url: url,
        method: method,
        headers: headers,
        data: data
      }),
      fetchURL = _transformFetchOption.fetchURL,
      fetchConfig = _transformFetchOption.fetchConfig;
    return new Promise(function (resolve, reject) {
      setLoading(true);
      fetch(fetchURL, fetchConfig).then(function (response) {
        var _response$headers$get;
        if ((_response$headers$get = response.headers.get('content-type')) !== null && _response$headers$get !== void 0 && _response$headers$get.includes('/json')) return response.json();
        return response.text();
      }).then(function (res) {
        resolve(res);
      }).catch(function (err) {
        reject(err);
      }).finally(function () {
        setLoading(false);
      });
    });
  };
  return {
    run: run,
    loading: loading
  };
}
export default useFetch;