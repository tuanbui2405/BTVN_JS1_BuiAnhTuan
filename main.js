// Bài 1: Tính tiền lương nhân viên
/**
 * B1: Input
 * - luongMotNgay, soNgayLam
 * 
 * B2: Handle
 * - Tạo biến luongMotNgay, soNgayLam, luongThucNhan
 * - Tính lương thực nhận: luongThucNhan = luongMotNgay * soNgayLam
 * B3: Output
 * - Xuất tiền lương thực nhận
 */

 console.log("=============== BÀI 1 =============")
 var luongMotNgay = 100000;
 var soNgayLam = 23;
 var luongThucNhan;
 
 luongThucNhan = luongMotNgay * soNgayLam;
 console.log('Lương thực nhận là: ', luongThucNhan + ' VNĐ')
 
 // Bài 2: Tính giá trị trung bình 
 /**
  * B1: Input: Giá trị 5 số thực
  * B2: Handle:
  * - Tạo biến a, b, c, d, e, giaTriTrungBinh
  * - Tính trung bình của 5 số thực: giaTriTrungBinh = (a + b + c + d + e)/5
  * B3: Output: Xuất giá trị trung bình
  */
 
 console.log("=============== BÀI 2 =============");
 
 var a = 1;
 var b = 2;
 var c = 3;
 var d = 4;
 var e = 5;
 var giaTriTrungBinh;
 
 giaTriTrungBinh = (a + b + c + d + e) / 5;
 
 console.log('Giá trị TB của 5 số thực đã cho là: ', giaTriTrungBinh);
 
 
 // Bài 3: Quy đổi tiền
 /**
  * B1: Input: giaTriUSD, soTienQuyDoi
  * B2: Handle:
  - Tạo biến giaTriUSD, soTienQuyDoi, soTienSauQuyDoi
  - Tính số tiền cần quy đổi: soTienSauQuyDoi = soTienCanQuyDoi * giaTriUSD;
  * B3: Output: Xuất số tiền sau quy đổi
  */
 
 
 console.log("=============== BÀI 3 =============");
 
 var giaTriUSD = 23500;
 var soTienCanQuyDoi = 500000000;
 var soTienSauQuyDoi = 0;
 
 soTienSauQuyDoi = soTienCanQuyDoi * giaTriUSD;
 
 console.log('Giá trị sau quy đổi ' + soTienSauQuyDoi + 'VNĐ')

 //Bài 4. Tính diện tích, chu vi hình chữ nhật
 /**
  * B1: Input: chieuDai, chieuRong
  * B2: Handle:
  *     - Tạo biến chieuDai, chieuRong, dienTich, chuVi
  *     - Tính chuVi = (chieuDai + chieuRong) * 2;
  *     - Tính dienTich = chieuDai * chieuRong;
  * B3: Output:
  * Diện tích, chu vi HCN
  */
  console.log("=============== BÀI 4 =============");

  var chieuDai = 5;
  var chieuRong = 3;
  var chuVi = 0;
  var dienTich = 0;

  chuVi = (chieuDai + chieuRong) * 2;
  dienTich = chieuRong * chieuDai;

  console.log('Chu vi là: ' + chuVi);
  console.log('Diện tích là: ' + dienTich);

//Bài 5: Tính tổng 2 ký số
/**
 * B1: Input: soThuNhat, soThuHai
 * B2: Handle:
 *      - Tạo biến soThuNhat, soThuHai, soHangDv1, ...
 * B3: Output: Tổng của 2 chữ số
 */

 console.log("=============== BÀI 5 =============");

 var soThuNhat = 12;
 var soThuHai = 44;
 var soHangDv1 = 1;
 var soHangChuc1 = 1;
 var soHangDv2 = 0;
 var soHangChuc2 = 0;
 var tongSo1 = 0;
 var tongSo2 = 0;

 soHangDv1 = soThuNhat % 10;
 soHangChuc1 = parseInt(soThuNhat / 10);
 soHangDv2 = soThuHai % 10;
 soHangChuc2 = parseInt(soThuHai / 10);
 
 console.log(soHangDv1);
 console.log(soHangChuc1);

 tongSo1 = soHangDv1 + soHangChuc1;
 tongSo2 = soHangDv2 + soHangChuc2;

 console.log('Tổng ký số của ' + soThuNhat + ' là: ' + tongSo1);
 console.log('Tổng ký số của ' + soThuHai + ' là: ' + tongSo2);
 