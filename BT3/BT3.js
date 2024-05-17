let moneyVND=0;
let menhGia=23500;
// Input nhập số tiền USD
document.getElementById("btnConvert").onclick =function(){
    let moneyUSD= document.getElementById("soTienUSD").value*1;
    //xử lý quy đổi
    moneyVND=moneyUSD*menhGia;
    //xuất ra kết quả sau quy đổi
    document.getElementById("result").innerHTML=`Số tiền sau khi quy đổi: ${moneyVND.toLocaleString("vi",{style:"currency",
        currency:"VND"
    })}`
};
