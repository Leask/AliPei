// Flora AliPei by LeaskH.com

var timer = setTimeout(function() {
    var docLogin  = null;
    var domLogin  = null;
    var txtPaswd  = null;
    var chkCtrol  = null;
    if ((docLogin = document.getElementById('loginIframe'))
     && (domLogin = docLogin.contentDocument)
     && (txtPaswd = domLogin.getElementById('password_input'))
     && (chkCtrol = domLogin.getElementById('safeSignCheck'))) {
        txtPaswd.onpaste = null;
        if (chkCtrol.checked) {
            chkCtrol.click();
        }
        clearTimeout(timer);
    }
}, 1000);
