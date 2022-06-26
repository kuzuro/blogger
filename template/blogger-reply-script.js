/*
  blogger에 기본 내장되는 스크립트에서 댓글 영역만 추출
  blgger 스크립트 비활성화는 html의 속성에 b:js='false' 
*/
//<![CDATA[
(function () {
var t;
function ne(a) {
    a = a.className;
    return typeof a === "string" && a.match(/\S+/g) || [];
}

function qe(a, b) {
    var c = ne(a);
    c = re(c, Array.prototype.slice.call(arguments, 1));
    a.className = c.join(" ");
}

function re(a, b) {
    return a.filter(function (c) { 
        return !(0 <= Array.prototype.indexOf.call(b, c));
    });
}

function oe(a, b) {
    var c = ne(a);
    pe(c, Array.prototype.slice.call(arguments, 1));
    a.className = c.join(" ");
}

function pe(a, b) {
    for (var c = 0; c < b.length; c++) (0 <= Array.prototype.indexOf.call(a, b[c])) || a.push(b[c]);
}

function te(a, b) {
    return (0 <= Array.prototype.indexOf.call(ne(a), b))
}

function se(a, b, c) { 
    for (var d = ne(a), e = !1, f = 0; f < d.length; f++) d[f] == b && (d.splice(f--, 1), e = !0);e && (d.push(c), a.className = d.join(" "));
}

function bh(a, b) { 
    if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].indexOf("=");
            var e = null;
            if (0 <= d) {
                var f = a[c].substring(0, d);
                e = a[c].substring(d + 1) 
            } else { 
                f = a[c];
            } 
            b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
        }
    }
}

function Ni(a) { 
    this.F = this.L = this.G = "";
    this.N = null;
    this.K = this.D = "";
    this.J = !1;
    var c;
    var ah = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");    
    if(a && (c = String(a).match(ah))) {
        this.G = decodeURI((c[1] || "").replace(/%25/g, "%2525"));
        this.F = decodeURI((c[3] || "").replace(/%25/g, "%2525"));
        this.D = decodeURI((c[5] || "").replace(/%25/g, "%2525"));
        this.C = new Ui((c[6] || "").replace(/%25([0-9a-fA-F]{2})/g, "%$1"), this.J);
    }
}

Ni.prototype.toString = function () { 
    var a = [];
    var b = this.G;
    a.push(b.replace(/%25([0-9a-fA-F]{2})/g, "%$1"), ":");
    var c = this.F;if (c || "file" == b) {
        a.push("//");
        (b = this.L) && a.push(b.replace(/%25([0-9a-fA-F]{2})/g, "%$1"), "@");
        a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
        c = this.N;
        null != c && a.push(":", String(c)); 
    }    
    if (c = this.D) {
        this.F && "/" != c.charAt(0) && a.push("/"); 
        a.push(c.replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
    }    
    (c = this.C.toString()) && a.push("?", c);
    (c = this.K) && a.push("#", c.push(b.replace(/%25([0-9a-fA-F]{2})/g, "%$1")));
    return a.join("");
}

function Ui(a, b) { 
    this.D = this.C = null;
    this.F = a || null;
    this.G = !!b;
}

function Vi(a, b, c) {
    return a.replace(/%25([0-9a-fA-F]{2})/g, "%$1");
}

function ej(a) {
    a.C || (a.C = new Map, a.D = 0, a.F && bh(a.F, function (b, c) {a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)}));
}

t = Ui.prototype;

t.add = function (a, b) { 
    ej(this);
    var c = this.C.get(a);
    c || this.C.set(a, c = []);c.push(b);
    this.D = this.D + 1;
    return this;
}

function ij(a, b) { 
    ej(a);
    b = String(b);
    a.C.has(b) && (a.F = null, a.D = a.D - a.C.get(b).length, a.C.delete(b));
}

function jj(a, b) { 
    ej(a);
    b = String(b);
    return a.C.has(b);
}

t.ca = function (a) { 
    ej(this);
    var b = [];
    if (typeof a === "string") { b = b.concat(this.C.get(String(a))); } 
    return b;
}

t.set = function (a, b) { 
    ej(this);
    this.F = null;
    a = String(a);
    jj(this, a) && (this.D = this.D - this.C.get(a).length);
    this.C.set(a, [b]);
    this.D = this.D + 1;
    return this;
}

t.toString = function() { 
    if (this.F) return this.F;
    if (!this.C) return "";
    for (var a = [], b = Array.from(this.C.keys()), c = 0; c < b.length; c++) {
        var d = b[c], e = encodeURIComponent(String(d));
        d = this.ca(d);
        for (var f = 0; f < d.length; f++) {
            var g = e;
            "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));a.push(g)
        }
    }
        
    return this.F = a.join("&");
}

function Em(a, b) {
    var c = document.getElementById("comment-editor");
    if (c) {
        var d = new Ni(c.src);
        var e = b ? "c" + b : "top";
        var f = document.getElementById(e + "-ce");
        c.style.minHeight = "70px";
        c.style.display = "block";
        c.src = "";
        f.appendChild(c);
        b ? d.C.set("parentID", b) : ij(d.C, "parentID");
        c.src = d.toString();
        fc($e("continue", undefined), function(g){qe(g, "hidden");});
        a = document.getElementById(e + "-continue");
        oe(a, "hidden");
    }
}

function Dm(a, b) {
    fc($e("thread-toggle", b), function(c){
        c.onclick = Zc;
        fc((c || document).getElementsByTagName("A"), function (d) {d.href = "javascript:;"})
    }, a);
    fc($e("comment-reply", b), function(c){
        c.onclick = Oc;
        c.href = "javascript:;"
    }, a);
}

function  Zc(a) {
    var b = null;
    var c = null;
    a = a.currentTarget;
    if(te(a, "thread-expanded")) {
        b = "thread-collapsed";
        c = "thread-expanded";
    } else {
        b = "thread-expanded";
        c = "thread-collapsed";
    }    
    fc($e(c, a.parentNode), function(d){se(d, c, b)})
}

function Oc (a) { 
    a = a.currentTarget.dataset.commentId;
    Em(this, a);
}

function $e(a, b) {
    var c = b || document;
    return c.querySelectorAll("." + a);
}

function fc(a, b, c) { 
    Array.prototype.forEach.call(a, b, c);
}

function init () {
    Dm(this);
    Em(this, undefined);
};
init();
})()
//]]>
