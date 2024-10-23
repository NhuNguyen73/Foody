const subscribeBtn = document.getElementById('subscribeBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const emailInput = document.getElementById('emailInput');
const message = document.getElementById('message');

subscribeBtn.onclick = function() {
    modal.style.display = 'flex';
};

closeBtn.onclick = function() {
    modal.style.display = 'none';
    emailInput.value = '';
    message.textContent = '';
    emailInput.classList.remove('success'); // Xóa lớp success khi đóng modal
};

document.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        emailInput.value = '';
        message.textContent = '';
        emailInput.classList.remove('success'); // Xóa lớp success khi đóng modal
    }
};

document.getElementById('submitBtn').onclick = function() {
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = 'Please enter an correct email !';
        emailInput.classList.remove('success'); // Xóa lớp success nếu email không hợp lệ
    } else {
        message.textContent = 'Subcribe Successful !';
        
        emailInput.classList.add('success'); // Thêm lớp success khi nhập thành công
        // Thực hiện gửi email hoặc xử lý thêm ở đây
        // Thực hiện gửi email hoặc xử lý thêm ở đây
    }
};