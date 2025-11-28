(function() {
    var password = 'tamsin';
    var storageKey = 'site_authenticated';

    if (sessionStorage.getItem(storageKey) === 'true') {
        return;
    }

    var overlay = document.createElement('div');
    overlay.id = 'password-overlay';
    overlay.innerHTML =
        '<div class="password-modal">' +
            '<h2>Password Required</h2>' +
            '<p>This site is currently in development.</p>' +
            '<form id="password-form">' +
                '<input type="password" id="password-input" placeholder="Enter password" autocomplete="off">' +
                '<button type="submit">Enter</button>' +
            '</form>' +
            '<p id="password-error" style="display: none; color: #c0392b;">Incorrect password</p>' +
        '</div>';

    var style = document.createElement('style');
    style.textContent =
        '#password-overlay {' +
            'position: fixed;' +
            'top: 0;' +
            'left: 0;' +
            'width: 100%;' +
            'height: 100%;' +
            'background: #fff;' +
            'display: flex;' +
            'align-items: center;' +
            'justify-content: center;' +
            'z-index: 999999;' +
        '}' +
        '.password-modal {' +
            'text-align: center;' +
            'padding: 40px;' +
            'max-width: 400px;' +
        '}' +
        '.password-modal h2 {' +
            'margin-bottom: 10px;' +
            'font-family: inherit;' +
        '}' +
        '.password-modal p {' +
            'margin-bottom: 20px;' +
            'color: #666;' +
        '}' +
        '#password-form {' +
            'display: flex;' +
            'gap: 10px;' +
            'justify-content: center;' +
        '}' +
        '#password-input {' +
            'padding: 12px 16px;' +
            'font-size: 16px;' +
            'border: 1px solid #ccc;' +
            'border-radius: 4px;' +
            'width: 200px;' +
        '}' +
        '#password-form button {' +
            'padding: 12px 24px;' +
            'font-size: 16px;' +
            'background: #2c3e50;' +
            'color: #fff;' +
            'border: none;' +
            'border-radius: 4px;' +
            'cursor: pointer;' +
        '}' +
        '#password-form button:hover {' +
            'background: #34495e;' +
        '}';

    document.head.appendChild(style);
    document.body.appendChild(overlay);

    document.getElementById('password-form').addEventListener('submit', function(e) {
        e.preventDefault();
        var input = document.getElementById('password-input').value;

        if (input === password) {
            sessionStorage.setItem(storageKey, 'true');
            overlay.remove();
            style.remove();
        } else {
            document.getElementById('password-error').style.display = 'block';
            document.getElementById('password-input').value = '';
        }
    });

    document.getElementById('password-input').focus();
})();
