
var r, y, z, h, divName1, x, amtDiv, pwdName;
var uPatn = /^[a-zA-Z]+$/;
var pPatn = /^[0-9]+$/;
var span=$('<span>');
var span1=$('<span>');
function fnName() {
    y = $('#name1').val();
    divName1 = $('#nameDivID');
    span.appendTo(divName1);
    if (y.match(uPatn)) {
        span.attr('class', 'glyphicon glyphicon-ok form-control-feedback');
        divName1.attr('class', ' col-xs-10 row has-success has-feedback');
    } else {
        divName1.attr('class', ' col-xs-10 row has-error has-feedback');
        span.attr('class', 'glyphicon glyphicon-remove form-control-feedback');
    }
}


function fnPwd() {
    h = $('#pwd').val();
    pwdName = $('#pwdDivID');
   span1.appendTo(pwdName);
    if (h.match(pPatn) && h.length > 6) {
        span1.attr('class', 'glyphicon glyphicon-ok form-control-feedback');
        pwdName.attr('class', 'col-xs-10 row has-success has-feedback');
    } else {
        pwdName.attr('class', 'col-xs-10 row has-error has-feedback');
        span1.attr('class', 'glyphicon glyphicon-remove form-control-feedback');
    }
}

function fnAmount() {
    z = $('#amount').val();
    amtDiv = $('#amtDivID');
    if (z.match(pPatn)) {
        amtDiv.attr('class','input-group col-xs-10 row has-success has-feedback');
    } else {
        amtDiv.attr('class','input-group col-xs-10 row has-error has-feedback');
    }
}

function validateForm() {
    if (typeof(Storage) !== 'undefined') {
        localStorage.setItem('fname', y);
        localStorage.setItem('Amount', z);
    } else {
        console.log('storage is not supporting');
    }
    var div = $('#contentID');
    div.text( "Name:" + localStorage.fname +"                 "+"Amount:" + localStorage.Amount + ".00");
}