let tongTien=0;
//Input: nhập số ngày làm
let luongMotNgay= 100000;
document.getElementById("btnPost").onclick= function(){
    let soNgayLam=document.getElementById("soNgayLam").value*1;
    //xử lý
    tongTien=luongMotNgay*soNgayLam;
    //Output: xuất ra tongTien
    document.getElementById("tongTien").innerHTML=`Lương nhân viên là: ${tongTien.toLocaleString("vi",{
        style:"currency",
        currency:"VND"
    })}`
};