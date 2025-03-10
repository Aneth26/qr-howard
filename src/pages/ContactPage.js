import React from "react";

const ContactPage = () => {
    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", textAlign: "center", border: "1px solid #ddd", borderRadius: "10px" }}>
            <h2>Nombre de la Empresa</h2>
            <p>Descripción breve de la empresa.</p>
            <p><strong>Teléfono:</strong> +123 456 789</p>
            <p><strong>Email:</strong> contacto@empresa.com</p>
            <p><strong>Dirección:</strong> Calle Ejemplo 123, Ciudad</p>
            <a href="https://maps.google.com/?q=Tu%20Dirección" target="_blank" rel="noopener noreferrer">Ver en Google Maps</a>
            <br />
            <a href="https://instagram.com/tuempresa" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
    );
};

export default ContactPage;