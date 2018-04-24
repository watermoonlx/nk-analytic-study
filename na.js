
(function () {
    var params = {};

    if (document) {
        params.domain = document.domain || '';
        params.url = document.URL || '';
        params.title = document.title || '';
        params.referrer = document.referrer || '';
    }

    if (window && window.screen) {
        params.sh = window.screen.height || 0;
        params.sw = window.screen.width || 0;
        params.cd = window.screen.colorDepth || 0;
    }

    if (navigator) {
        params.lang = navigator.language || '';
    }

    if (_naq) {
        for (var i in _naq) {
            switch (_naq[i][0]) {
                case '_setAccount':
                    params.account = _naq[i][1];
                    break;
                default: break;
            }
        }
    }

    console.log(params);
}())