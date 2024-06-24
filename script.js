document.getElementById('ver-historico').addEventListener('click', function() {
    const historicoDiv = document.getElementById('historico');
    historicoDiv.innerHTML = `
        <ul>
            <li>Transação 1: R$ 100,00 - Cartão de Crédito</li>
            <li>Transação 2: R$ 50,00 - PIX</li>
        </ul>
    `;
});

document.getElementById('gerar-qrcode').addEventListener('click', function() {
    const qrcodeDiv = document.getElementById('qrcode');
    qrcodeDiv.innerHTML = `
       <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FC%25C3%25B3digo_QR&psig=AOvVaw2J1rxN5DhYNmgxRSD8DyI1&ust=1719264518902000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMD-o8nV8oYDFQAAAAAdAAAAABAE" alt="QR Code">
        <p>Escaneie este QR Code para efetuar o pagamento via PIX.</p>
    `;
});

document.getElementById('integrar-cartao').addEventListener('click', function() {
    const provedoresDiv = document.getElementById('provedores');
    provedoresDiv.innerHTML = `
        <ul>
            <li>Google Pay</li>
            <li>Apple Pay</li>
            <li>PayPal</li>
            <li>Stripe</li>
        </ul>
    `;
});
