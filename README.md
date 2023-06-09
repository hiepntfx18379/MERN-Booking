# MERN-Booking
Gồm có 3 mục chính:
- server: sử dụng frameword express 
   + Tạo server
   + Kết nối cơ sở dữ liệu
   + Tạo API gọi phía client
   + Thêm, sửa, xóa, tìm kiếm dữ liệu
   + Tạo cơ chế bảo mật,phân quyền, xác thực người dùng bằng token

- client: sử dụng thư viện React
   + Tạo giao diện người dùng: đăng kí, đăng nhập, trang chủ, trang vệ tinh
   + Gọi API cho hiển thị, tìm kiếm dữ liệu
   + Hiển thị dữ liệu phía người dùng
   + Gửi email otp phía người dùng

- admin: sử dụng template, thư viện React
   + Quản lý dữ liệu người dùng: thêm, sửa, xóa người dùng
   + Quản lý dữ liệu khách sạn: thêm, sửa, xóa khách sạn
   + Quản lý đặt phòng của người dùng: tính doanh thu, số người dùng

Luồng chạy:
- server: mô hình M-V-C
   + Kết nối mongo
   + Tạo đường dẫn api
   + Xử lý logic mỗi phần tại Controller: 

- client: 
   + hiện thị dữ liệu
   + Xem toàn bộ khách sạn khi click nút khách sạn
   + người dùng tìm kiếm theo địa điểm, ngày bắt đầu và kết thúc, số phòng muốn đặt -> click search 
   -> tại trang tìm kiếm: có thể tìm kiếm lại điểm điểm và giá phòng -> danh sách ks
   -> click ks để xem chi tiết -> click reserve để chọn phòng lại ngày, điền thông tin người dùng, chọn phòng, thanh toán
   -> đc chuyển về trang tổng hợp: toàn bộ các ks người dùng đã từng đặt và hiển thị trạng thái ks
  
- admin:
   + cần đăng nhập tài khoản admin
   + thêm sửa xóa dữ liệu
