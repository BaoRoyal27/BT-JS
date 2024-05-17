let hangChuc=0;
let hangDonVi=0;
let tong=0;

//Input: nhập số hàng chục
document.getElementById("btnTotal").onclick = function(){
    let number = document.getElementById("number").value*1;
    //xử lý
    if(number>=10&&number<=99){
        hangChuc=Math.floor(number/10);
        hangDonVi=number%10;
        tong= hangChuc+hangDonVi;
    }else{
        alert("Vui lòng nhập số có 2 chữ số")
        return;
    }
    // Xuất giá trị tổng của 2 ký số
    document.getElementById("total").innerHTML=`Tổng của ${number} là ${tong}`
};