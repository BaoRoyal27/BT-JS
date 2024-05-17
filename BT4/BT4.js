let dienTich=0;
let chuVi= 0;
//Input: nhập chiều dài và chiều rộng hình chữ nhật
document.getElementById("btnRecTangLe").onclick=function(){
    let chieuDai= document.getElementById("nhapHeight").value*1;
    let chieuRong= document.getElementById("nhapWidth").value*1;
    // xử lý 
    dienTich=chieuDai*chieuRong;
    chuVi=(chieuDai+chieuRong)*2;

    //Output xuất ra chu vi và diện tích hình chữ nhật
    document.getElementById("result").innerHTML=`Diện tích là: ${dienTich} <br> Chu vi là: ${chuVi}`;
};