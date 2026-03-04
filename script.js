document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const msg = document.getElementById('message');
    // Hai tài khoản demo để test
    const demoAccounts = {
        'admin': { password: 'admin123', role: 'admin' },
        'user': { password: 'user123', role: 'user' }
    };

    // In ra console để dễ kiểm tra nhanh (không bắt buộc)
    console.info('Tài khoản demo:', demoAccounts);

    function showMessage(text, type) {
        msg.textContent = text;
        msg.className = 'message ' + (type === 'error' ? 'error' : 'success');
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = form.username.value.trim();
        const password = form.password.value.trim();

        if (!username || !password) {
            showMessage('Vui lòng nhập tên đăng nhập và mật khẩu.', 'error');
            return;
        }

        const account = demoAccounts[username];
        if (account && account.password === password) {
            showMessage('Đăng nhập thành công. Role: ' + account.role, 'success');
            alert('Đăng nhập thành công. Role: ' + account.role);
            form.reset();
        } else {
            showMessage('Tên đăng nhập hoặc mật khẩu không đúng.', 'error');
        }
    });
});
