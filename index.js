/*
Bài 1:
!input: 
dChuan , dToan, dVan, dAnh, dKhuVuc(Nhập x nếu không thuộc vùng ưu tiên), dDoiTuongUuTien.
!Xử lý:
dUuTien = dKhuVuc + dDoiTuongUuTien.
dTongKet = dToan +DVan +dAnh + dUuTien
!ouput: 
KQ(dau, rot), tongDiem.
*/

// function Bài 1
function tongDiem() {
  var dChuan = document.getElementById("dChuan").value * 1;

  var dVan = document.getElementById("dVan").value * 1;
  var dAnh = document.getElementById("dAnh").value * 1;
  var dToan = document.getElementById("dToan").value * 1;

  var dKhuVuc = document.getElementById("chonKhuVuc").value * 1;

  var dDoiTuongUuTien = document.getElementById("chonDoiTuong").value * 1;

  var dUuTien = dKhuVuc + dDoiTuongUuTien;
  var dTongKet = dToan + dVan + dAnh + dUuTien;

  var inKQ = "";

  if (dToan == 0 || dVan == 0 || dAnh == 0) {
    inKQ = "Bạn đã rớt. Do có một môn điểm bằng 0";
  } else if (dTongKet > dChuan) {
    inKQ = "Bạn đã đậu. " + "Tổng điểm: " + dTongKet;
  } else {
    inKQ = "Bạn đã rớt. " + "Tổng điểm: " + dTongKet;
  }

  document.querySelector(".hienThiKG").innerHTML = inKQ;
}
//! -----------------------------------------------------
/*
!Bài 2:
!input: 
teChuHo, kw.
!Xử lý:
| 500 | 650  | 850 | 1100 |  1300
0 => 50 => 100 => 200 => 350 => Infinity

if(kw<=0){
  tienDien = "Nhap lại kw điện đi bn ơi!"
}
1>50
else if(kw<=50){
  tienDien = kw*500;
}
51>100
else if(50<kw<=100){
  tienDien = 50*500 + (kw - 50)*500;
}
101>200
else if(100<kw<=200){
  tienDien = 50*500 + 50*650  + (kw - 100)*850;
}
201>350
else if(200<kw<=350){
  tienDien = 50*500 + 50*650  + 100*850 + (kw - 200)*1100;
}
351 > Infinity
else{
  tienDien = 50*500 + 50*650 + 100*850 + 150*1100 + ((kw-350)*1300);
}
!ouput: 
tenChuHo, tienDien.
*/
function quyDoiTienSangVN(tien) {
  var tienVN = tien.toLocaleString("vn-VN", {
    style: "currency",
    currency: "VND",
  });
  return tienVN;
}
function inTienDienF(tenChuHo, tienDien) {
  return (
    "Họ và tên: " + tenChuHo + "; " + "Tiền điện: " + quyDoiTienSangVN(tienDien)
  );
}
function tinhTienDien() {
  var tenChuHo = document.getElementById("tenChuHo").value;

  var kw = document.getElementById("kw").value * 1;

  var inTienDien = "";
  var tienDien;
  if (kw <= 0) {
    inTienDien = "Nhập lại kw điện đi bn ơi!";
  } else if (kw <= 50) {
    tienDien = kw * 500;
    inTienDien = inTienDienF(tenChuHo, tienDien);
  } else if (kw > 50 && kw <= 100) {
    tienDien = 25000 + (kw - 50) * 650;
    inTienDien = inTienDienF(tenChuHo, tienDien);
  } else if (kw > 100 && kw <= 200) {
    tienDien = 57500 + (kw - 100) * 850;
    inTienDien = inTienDienF(tenChuHo, tienDien);
  } else if (kw > 200 && kw <= 350) {
    tienDien = 142500 + (kw - 200) * 1100;
    inTienDien = inTienDienF(tenChuHo, tienDien);
  } else {
    tienDien = 307500 + (kw - 350) * 1300;
    inTienDien = inTienDienF(tenChuHo, tienDien);
  }

  document.querySelector(".htTienDien").innerHTML = inTienDien;
}

/*
!Bài 3:

!input: 
hoTen, tongThuNhapNam, soNguoiThuHuong.
!Xử lý:
khoangTruThuNhapNam = 4000000 + soNguoiPhuThuoc * 1.6tr
thuNhapChuiThue = thuNhapOfYear - khoangTruThuNhapNam

if (tongThuNhapNam <= khoangTruThuNhapNam) {
    inTienThueTNCN = "Nhap lại tổng thu nhập năm!";
  } else if (thuNhapChiuThue <= 60 * tr) {
    tienThueTNCN = thuNhapChiuThue * 0.05;
    inTienThueTNCN = F_inTienThueTNCN(tenCaNhan, tienThueTNCN);
  } else if (thuNhapChiuThue > 60 * tr && thuNhapChiuThue <= 120 * tr) {
    tienThueTNCN = thuNhapChiuThue * 0.1;
    inTienThueTNCN = F_inTienThueTNCN(tenCaNhan, tienThueTNCN);
  } else if (thuNhapChiuThue > 120 * tr && thuNhapChiuThue <= 210 * tr) {
    tienThueTNCN = thuNhapChiuThue * 0.15;
    inTienThueTNCN = F_inTienThueTNCN(tenCaNhan, tienThueTNCN);
  } else if (thuNhapChiuThue > 210 * tr && thuNhapChiuThue <= 384 * tr) {
    tienThueTNCN = thuNhapChiuThue * 0.2;
    inTienThueTNCN = F_inTienThueTNCN(tenCaNhan, tienThueTNCN);
  } else if (thuNhapChiuThue > 384 * tr && thuNhapChiuThue <= 624 * tr) {
    tienThueTNCN = thuNhapChiuThue * 0.25;
    inTienThueTNCN = F_inTienThueTNCN(tenCaNhan, tienThueTNCN);
  } else if (thuNhapChiuThue > 624 * tr && thuNhapChiuThue <= 960 * tr) {
    tienThueTNCN = thuNhapChiuThue * 0.3;
    inTienThueTNCN = F_inTienThueTNCN(tenCaNhan, tienThueTNCN);
  } else {
    tienThueTNCN = thuNhapChiuThue * 0.35;
    inTienThueTNCN = F_inTienThueTNCN(tenCaNhan, tienThueTNCN);
  }
!ouput: 
sumThuThuNhapCaNhan.
*/
function F_inTienThueTNCN(tenCaNhan, tienThueTNCN) {
  return (
    "Họ và tên: " +
    tenCaNhan +
    "; " +
    "Tiền thuế thu nhập cá nhân: " +
    quyDoiTienSangVN(tienThueTNCN)
  );
}
function tinhTienTTNCN() {
  var inTienThueTNCN = "";
  var tienThueTNCN;
  var tr = 1000000;

  var tenCaNhan = document.getElementById("tenCaNhan").value;

  var tongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;

  var soNguoiThuHuong = document.getElementById("soNguoiThuHuong").value * 1;

  var khoangTruThuNhapNam = 4 * tr + soNguoiThuHuong * 1.6 * tr;
  var thuNhapChiuThue = tongThuNhapNam - khoangTruThuNhapNam;

  if (tongThuNhapNam <= khoangTruThuNhapNam) {
    inTienThueTNCN = "Nhap lại tổng thu nhập năm!";
  } else if (thuNhapChiuThue <= 60 * tr) {
    tienThueTNCN = thuNhapChiuThue * 0.05;
    inTienThueTNCN = F_inTienThueTNCN(tenCaNhan, tienThueTNCN);
  } else if (thuNhapChiuThue > 60 * tr && thuNhapChiuThue <= 120 * tr) {
    tienThueTNCN = thuNhapChiuThue * 0.1;
    inTienThueTNCN = F_inTienThueTNCN(tenCaNhan, tienThueTNCN);
  } else if (thuNhapChiuThue > 120 * tr && thuNhapChiuThue <= 210 * tr) {
    tienThueTNCN = thuNhapChiuThue * 0.15;
    inTienThueTNCN = F_inTienThueTNCN(tenCaNhan, tienThueTNCN);
  } else if (thuNhapChiuThue > 210 * tr && thuNhapChiuThue <= 384 * tr) {
    tienThueTNCN = thuNhapChiuThue * 0.2;
    inTienThueTNCN = F_inTienThueTNCN(tenCaNhan, tienThueTNCN);
  } else if (thuNhapChiuThue > 384 * tr && thuNhapChiuThue <= 624 * tr) {
    tienThueTNCN = thuNhapChiuThue * 0.25;
    inTienThueTNCN = F_inTienThueTNCN(tenCaNhan, tienThueTNCN);
  } else if (thuNhapChiuThue > 624 * tr && thuNhapChiuThue <= 960 * tr) {
    tienThueTNCN = thuNhapChiuThue * 0.3;
    inTienThueTNCN = F_inTienThueTNCN(tenCaNhan, tienThueTNCN);
  } else {
    tienThueTNCN = thuNhapChiuThue * 0.35;
    inTienThueTNCN = F_inTienThueTNCN(tenCaNhan, tienThueTNCN);
  }

  document.querySelector(".htTienThueTNCN").innerHTML = inTienThueTNCN;
}
/*
!Bài 4:

!input: 
loaiKH, maKH, soKenhCaoCap, soKetNoi.
!Xử lý:
tienCapND = 4.5 + 20.5 + thuKeCC*7.5

if(soKetNoi > 0 && soKetNoi <= 10 ){
phiDVbasic = 75;
}
else{
  phiDVbasic = soketNoi-10 * 5
}
tienCapDN = 15 + phiDVbasic + thuKeCC*50
!ouput: 
maKH, tienCap.
*/

function anHienSoKeNoi() {
  var choLoaiKH = document.getElementById("choLoaiKH").value;

  if (choLoaiKH == "nhaDan") {
    document.getElementById("soKetNoi").style.display = "none";
  } else {
    document.getElementById("soKetNoi").style.display = "block";
  }
}
function F_inTienCap(maKH, tienCap) {
  return (
    "Mã khách hàng: " + maKH + "; " + "Tiền cáp: " + quyDoiTienSangVN(tienCap)
  );
}
function tinhTienCap() {
  var tienCapND;
  var tienCapDN;
  var inTienCap = "";
  var phiDVbasic;

  var choLoaiKH = document.getElementById("choLoaiKH").value;
  var maKH = Number(document.getElementById("maKH").value);
  var soKetNoi = Number(document.getElementById("soKetNoi").value);
  var soKenhCaoCap = Number(document.getElementById("soKenhCaoCap").value);

  console.log(soKetNoi);
  if (choLoaiKH == "nhaDan" && choLoaiKH != "doanhNghiep") {
    tienCapND = 4.5 + 20.5 + soKenhCaoCap * 7.5;
    inTienCap = F_inTienCap(maKH, tienCapND);
  } else if (choLoaiKH == "doanhNghiep" && soKetNoi > 0 && soKetNoi <= 10) {
    phiDVbasic = 75;
    tienCapDN = 15 + phiDVbasic + soKenhCaoCap * 50;
    inTienCap = F_inTienCap(maKH, tienCapDN);
  } else {
    phiDVbasic = (soKetNoi - 10) * 5 + 75;
    tienCapDN = 15 + phiDVbasic + soKenhCaoCap * 50;
    inTienCap = F_inTienCap(maKH, tienCapDN);
  }
  document.querySelector(".htTienCap").innerHTML = inTienCap;
}
