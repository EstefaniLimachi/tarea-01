function crearUsuario(name: string, ci: string, email: string): { name: string, ci: string, email: string } {
    return {
        name: name,
        ci: ci,
        email: email
    };
}

const usuario = crearUsuario('Juan Pérez', '1234567890', 'juan@example.com');
console.log(usuario);