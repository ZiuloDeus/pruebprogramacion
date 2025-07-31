document.getElementById('reserva-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const cantidad = parseInt(document.getElementById('cantidad').value);
  const tipo = document.getElementById('tipo').value;
  const codigo = document.getElementById('codigo').value.trim();
  const mensajeDiv = document.getElementById('mensaje');

  const precios = {
    general: 1000,
    vip: 2000,
    platino: 3000
  };

  mensajeDiv.textContent = '';
  mensajeDiv.className = 'mensaje';

  // Validación de nombre solo letras y espacios
  const nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre);

  if (!nombreValido || isNaN(cantidad) || cantidad < 1) {
    mensajeDiv.textContent = 'Por favor, ingresa un nombre válido (solo letras) y una cantidad mayor a 0.';
    mensajeDiv.classList.add('error');
    return;
  }

  let total = precios[tipo] * cantidad;

  // Descuento SOLO si el código es exactamente ROCK10
  if (codigo === 'ROCK10') {
    total *= 0.9;
  }

  mensajeDiv.textContent = `¡Gracias ${nombre}! Tu reserva fue confirmada. Total a pagar: $${total.toFixed(2)}`;
  mensajeDiv.classList.add('confirmacion');
});
