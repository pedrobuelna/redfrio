--Native Storage 
--carrito
-- ==>uuidCarrito
-- ==>cantidadCarrito
-- app
-- ==>uuid_usuario
-- ==>nombre_usuario
-- ==>correo

CREATE TABLE IF NOT EXISTS carritoData(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
	cantidadCarrito INT,
	uuid_carrito INT
);
INSERT or IGNORE INTO carritoData(id, cantidadCarrito, uuid_carrito) VALUES (1, 0, "");
