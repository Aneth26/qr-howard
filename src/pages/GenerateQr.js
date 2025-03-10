import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const GenerateQr = () => {
    const url = "http://localhost:3000/contact"; // URL FIJA DEL QR

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Generar Código QR</h2>
            <QRCodeCanvas value={url} size={200} level="H" />
            <p>Escanea el código para ver la tarjeta de presentación.</p>
        </div>
    );
};

export default GenerateQr;
