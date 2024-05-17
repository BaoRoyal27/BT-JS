let diemTrungBinh=0;
//Input:Nhập vào 5 số 
document.getElementById("btnAve").onclick =function(){
    let num1 = document.getElementById("num1").value*1;
    let num2 = document.getElementById("num2").value*1;
    let num3 = document.getElementById("num3").value*1;
    let num4 = document.getElementById("num4").value*1;
    let num5 = document.getElementById("num5").value*1;
    // xử lý tính toán
    diemTrungBinh=(num1+num2+num3+num4+num5)/5;
    // Output: xuất ra điểm trung bình
    document.getElementById("diemAve").innerHTML=`Điểm trung bình là: ${diemTrungBinh}`

};