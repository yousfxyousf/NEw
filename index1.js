
$("#cn1").click(function(){
aim180()
})
$("#cn2").click(function(){
s100s()
})
$("#cn3").click(function(){
aimcopeawm()
})
$("#cn4").click(function(){
aimscope()
})
$("#cn5").click(function(){
aimlock()
})
$("#cn6").click(function(){
antennam()
})
$("#cn7").click(function(){
antennu()
})
$("#cn8").click(function(){
antenav1()
})
$("#cn9").click(function(){
antenav2()
})
$("#cn10").click(function(){
antenv3()
})
$("#cn11").click(function(){
nhetam()
})
$("#cn12").click(function(){
buffman1()
})
$("#cn13").click(function(){
doisungnhanh()
})
$("#cn14").click(function(){
magic()
})
$("#cn15").click(function(){
doisungawmnhanh()
})
$("#cn16").click(function(){
buffman2()
})
$("#cn17").click(function(){
danthang()
})
$("#cn18").click(function(){
hscu()
})
$("#cn19").click(function(){
sesp()
})
$("#cn20").click(function(){
xoasp()
})
$("#cn21").click(function(){
x2()
})
$("#cn22").click(function(){
x10()
})
$("#cn23").click(function(){
so05()
})
$("#close").click(function () {
    document.write()
})
$("#ctn1").click(function () {
    $(".dva, .tri, .chyetyrye, .pyat").hide()
    $(".odin").show()
})
$("#ctn2").click(function () {
    $(".odin, .tri, .chyetyrye, pyat").hide()
    $(".dva").show()
})
$("#ctn3").click(function () {
    $(".odin, .dva, .chyetyrye, pyat").hide()
    $(".tri").show()
})
$("#ctn4").click(function () {
    $(".odin, .dva, .tri, .pyat").hide()
    $(".chyetyrye").show()
})
$("#ctn5").click(function () {
    $(".odin, .dva, .tri, .chyetyrye").hide()
    $(".pyat").show()
})

function ActiveCodePatch(fpath, vaddr, bytes) {
        if(!h5frida.ActiveCodePatch(fpath, vaddr, bytes)) {
            var result = h5frida.ApplyCodePatch(fpath, vaddr, bytes);
    
        } return true;
    }
    function DeactiveCodePatch(fpath, vaddr, bytes) {
        return h5frida.DeactiveCodePatch(fpath, vaddr, bytes);
    }
 
    var codeStatus = false;
    
    function aim180() { 
      function searchAndReplace(searchValue, replaceValue, type) { 
            h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) { 
            h5gg.setValue(results[i].address, replaceValue.toString(), type)}} 
            searchAndReplace(1053273620, -2000, 'I32') 
      searchAndReplace(1057048494, -2000, 'I32') 
            searchAndReplace(1054951342, -2000, 'I32') 
     
      }
 function s100s() {
    h5gg.clearResults();
    h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 36);
        var dizhi1 = (Number(addr1) + 40);
        var dizhi2 = (Number(addr1) + -308);



        {
            h5gg.setValue(dizhi0, 0.01, "F32");
            h5gg.setValue(dizhi1, 0.01, "F32");
            h5gg.setValue(dizhi2, 0, "I32");

        }
    }
    vant.showNotify({
        type: 'success',
        message: 'AWM快切準心'
    });


}

function s101s() {
    h5gg.clearResults();
    h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 36);
        var dizhi1 = (Number(addr1) + 40);



        {
            h5gg.setValue(dizhi0, 0.01, "F32");
            h5gg.setValue(dizhi1, 0.01, "F32");

        }
    }
    vant.showNotify({
        type: 'success',
        message: 'AWM快切'
    });


}
function aimcopeawm() {
h5gg.clearResults();
h5gg.searchNumber('31101603021', 'I64', '0x100000000', '0x160000000');
var count = h5gg.getResultsCount();
var r = h5gg.getResults(count);
var cnt = 0;
for(var i=0; i<count; i++) {
    var addr1 = r[i].address;

var dizhi0 = (Number(addr1) + 8);

   


{
h5gg.setValue(dizhi0, 2139095040, "I32");

   }
}
vant.showNotify({
        type: 'success',
        message: 'ĐÃ BẬT AIM AWM'
    });
}
function aimscope() {
        h5gg.clearResults();
        h5gg.searchNumber('0.09','F32','0x0', '0x20000000000');
        h5gg.editAll('180', 'F32'); 
        h5gg.clearResults();
    }
function aimlock() { 
    modifyValue(1077936128, -20000, 'A04');  
    modifyValue(1069547520, 1148829696, 'A10')}

function antennam(){
let rangeStart = '0x100000000';
let rangeEnd = '0x160000000';

let searchValue1 = '5.9762459e-7';
let searchValue2 = '1';
let searchValue3 = '1';

let modifyValue = '200';

h5gg.setFloatTolerance('0.0');

h5gg.clearResults();

h5gg.searchNumber(searchValue1, 'F32', rangeStart, rangeEnd);
h5gg.searchNearby(searchValue2, 'F32', '0x20');
h5gg.searchNumber(searchValue3, 'F32', rangeStart, rangeEnd);
let resultsCount = h5gg.getResultsCount();
if (resultsCount > 0) {
    let results = h5gg.getResults(resultsCount.toString(), '0');
    for (let i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, modifyValue, 'F32');
    }
    h5gg.clearResults();
} else {
    console.log('Không tìm thấy kết quả nào từ tìm kiếm.');
}

}

function antennu() {
let rangeStart = '0x100000000';
let rangeEnd = '0x160000000';

let searchValue1 = '7.5538861e-7';
let searchValue2 = '1';
let searchValue3 = '1';

let modifyValue = '200';

h5gg.setFloatTolerance('0.0');
h5gg.clearResults();
h5gg.searchNumber(searchValue1, 'F32', rangeStart, rangeEnd);
h5gg.searchNearby(searchValue2, 'F32', '0x20');
h5gg.searchNumber(searchValue3, 'F32', rangeStart, rangeEnd);
let resultsCount = h5gg.getResultsCount();
if (resultsCount > 0) {
    let results = h5gg.getResults(resultsCount.toString(), '0');
    for (let i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, modifyValue, 'F32');
    }
    h5gg.clearResults();
} else {
    console.log('Không tìm thấy kết quả nào từ tìm kiếm.');
}

}   
function antenav1() {
    h5gg.clearResults();
    h5gg.searchNumber('4575657222469899220', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848124999925814228', 'I64');
    h5gg.clearResults();
    h5gg.searchNumber('4575657222469336965', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848124999925251973', 'I64');
    vant.showNotify({
        type: 'success',
        message: '肩膀天線'
    });


}



function antenav2() {
    h5gg.clearResults();
    h5gg.searchNumber('1051196712', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 20);




        {
            h5gg.setValue(dizhi0, 200, "F32");
        }
    }
    h5gg.clearResults();
    h5gg.searchNumber('4575657224610966592', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848125002066881600', 'I64');
    vant.showNotify({
        type: 'success',
        message: '超細手線'
    });


}

function antenv3() {
    h5gg.clearResults();
    h5gg.searchNumber('4575657222443971598', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('4848124999899886606', 'I64');
    h5gg.clearResults();
    h5gg.searchNumber('4575657224578539469', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('4848125002034454477', 'I64');
    vant.showNotify({
        type: 'success',
        message: '微粗手線'
    });


}
function nhetam() {
    h5gg.clearResults();
    h5gg.searchNumber('4728779608739021057', 'I64', '0x100000000', '0x150000000');

    alert('Sear(' + h5gg.getResultsCount() + ')');

    var count = h5gg.getResultsCount(); //获取总共搜索结果个数

    var r = h5gg.getResults(count); //获取总共搜索结果个数的数组

    //开始循环遍历

    for (var i = 0; i < count; i++) {

        var addr1 = r[i].address; //获取每个搜索结果的地址 address弟子 value值 type类型

        var weishu = /18$/; //设置置顶结尾

        var pd = weishu.test(addr1); //判断地址是否包含指定结尾



        var dizhi1 = (Number(addr1) + 4);




        if (pd) {
            h5gg.setValue(dizhi1, 100, "F32");


        }
    }
    vant.showNotify({
        type: 'success',
        message: '跳躍靈敏'
    });


}
function buffman1() {
    h5gg.clearResults();
    var hk1 = prompt("請輸入想要的靈敏");
    h5gg.searchNumber('4417130516484980736', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;
        var dizhi0 = (Number(addr1) + -4);
        var dizhi1 = (Number(addr1) + -8);
        var dizhi2 = (Number(addr1) + -12);
        var dizhi3 = (Number(addr1) + -0);




        {
            h5gg.setValue(dizhi0, hk1, "F32");
            h5gg.setValue(dizhi1, hk1, "F32");
            h5gg.setValue(dizhi2, hk1, "F32");
            h5gg.setValue(dizhi3, hk1, "F32");

        }
    }
    vant.showNotify({
        type: 'success',
        message: '遊戲靈敏'
    });

}
function doisungnhanh() {
    h5gg.clearResults();
    h5gg.searchNumber('72340173878198272', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('72340172821233664', 'I64');
    vant.showNotify({
        type: 'success',
        message: '快切'
    });


}
function magic() {
    h5gg.clearResults();
    h5gg.searchNumber('4333543704410193920', 'I64', '0x100000000', '0x160000000');
    h5gg.searchNearby('0.01', 'F32', '0x8');
    h5gg.searchNearby('0.0219~0.02975', 'F32', '0x32')
    h5gg.searchNearby('0.1035~0.1070', 'F32', '0x4');
    h5gg.searchNearby('2.802597e-45', 'F32', '0x4');
    h5gg.searchNumber('0.1035~0.1070', 'F32', '0x100000000', '0x160000000');
    h5gg.editAll('1.875', "F32");
    vant.showNotify({
        type: 'success',
        message: '人物範圍'
    });
}
function doisungawmnhanh() {
    h5gg.clearResults();
    h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 36);
        var dizhi1 = (Number(addr1) + 40);



        {
            h5gg.setValue(dizhi0, 0.01, "F32");
            h5gg.setValue(dizhi1, 0.01, "F32");

        }
    }
    vant.showNotify({
        type: 'success',
        message: 'AWM快切'
    });


}
function modifyValue(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) { 
    h5gg.clearResults(); h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000'); const results = h5gg.getResults(h5gg.getResultsCount()); let modifiedCount = 0; results.forEach(result=> { 
        if (result.address.endsWith(addressEndsWith) || result.address.endsWith(addressEndsWith2)) { 
            h5gg.setValue(result.address, replaceValue.toString(), 'I32'); modifiedCount++; 
        }}); if (modifiedCount > 0) { 
        if (alertMessage)alert(alertMessage)} else if (alertMessage) { 
        alert("Không tìm thấy kết quả phù hợp để thay đổi.")}} 
var Nhayman = 15; 
var nhayngam = 10; 
 
function modifyValue1(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) { 
    h5gg.clearResults(); 
    h5gg.searchNumber(searchValue, 'F32', '0x100000000', '0x160000000'); 
    const results = h5gg.getResults(h5gg.getResultsCount()); 
    let modifiedCount = 0; 
 
    results.forEach(result => { 
        if (result.address.endsWith(addressEndsWith) || (addressEndsWith2 && result.address.endsWith(addressEndsWith2))) { 
            h5gg.setValue(result.address, replaceValue.toString(), 'F32'); 
            modifiedCount++;

if (searchValue === Nhayman) Nhayman = replaceValue; 
            if (searchValue === nhayngam) nhayngam = replaceValue; 
        } 
    }); 
 
    if (modifiedCount > 0 && alertMessage) { 
        alert(alertMessage); 
    } else if (alertMessage) { 
        alert("Không tìm thấy kết quả phù hợp để thay đổi."); 
    } 
} 
 


function buffman2() { 
    modifyValue1(nhayngam, Number(prompt("Nhập Độ Nhạy Màn Hình :", "")), 'BB4', null, 'Đã Thay Đổi Độ Nhạy Màn Hình'); 
    modifyValue1(Nhayman, Number(prompt("Nhập Độ Nhạy Kéo Tâm :", "")), 'BAC', null, 'Đã Thay Đổi Độ Nhạy Kéo Tâm'); 
}
function xoahoatanh() { // xóa hoạt ảnh // 
        function searchAndReplace(searchValue, replaceValue, type) { 
        h5gg.clearResults(); 
        h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); 
        var results = h5gg.getResults(h5gg.getResultsCount()); 
        for (var i = 0; i < results.length && i < 10; i++) { 
            h5gg.setValue(results[i].address, replaceValue.toString(), type); 
        } 
    } 
    searchAndReplace(3145840, 49, 'I32'); 
} 
        function hscu() { 
        function searchAndReplace(searchValue, replaceValue, type) { 
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x200000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) { 
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}} 
        searchAndReplace(2018908708, 96688289, 'I32')}
function danthang() { 
        function searchAndReplace(searchValue, replaceValue, type) { 
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) { 
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}} 
        searchAndReplace(1016018816, 180, 'I32')}

function sesp() {
    h5gg.clearResults();
    h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
    alert('搜索(' + h5gg.getResultsCount() + '/1)');
}

function x10() {
    h5gg.editAll('4397530849749489418', 'I64');

    vant.showNotify({
        type: 'success',
        message: '10x'
    });

}

function xoasp() {
    h5gg.editAll('4397530849764387586', 'I64');
    vant.showNotify({
        type: 'success',
        message: '還原'
    });

}


function so05() {
    h5gg.editAll('4397530849741637681', 'I64');
    vant.showNotify({
        type: 'success',
        message: '50x'
    });

}

function x2() {
    h5gg.editAll('4397530849758414897', 'I64');
    vant.showNotify({
        type: 'success',
        message: '2x'
    });

}

