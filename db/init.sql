-- Crear DB objects (PostgreSQL)
CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nombre  VARCHAR(100) NOT NULL,
  correo  VARCHAR(150) UNIQUE NOT NULL,
  clave   VARCHAR(100) NOT NULL
);

-- Datos de prueba
INSERT INTO usuarios (nombre, correo, clave) VALUES
('Usuario Demo', 'demo@correo.com', '123456')
ON CONFLICT (correo) DO NOTHING;
