function copyCode() {

    const code = document.getElementById('code-block').textContent;

    const textArea = document.createElement('textarea');
    textArea.value = code;
    document.body.appendChild(textArea);

    textArea.select();

    document.execCommand('copy');

    document.body.removeChild(textArea);

    alert('Kode berhasil disalin');
}
