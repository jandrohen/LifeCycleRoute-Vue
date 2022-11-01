const isAuthenticatedGuard = (to, from, next) => {

    return new Promise(() => {

        const random = Math.random() * 100;

        if (random > 50) {
            console.log('Acceso permitido ');
            next();
        } else {
            console.log(random, 'Acceso denegado por el isAuthenticatedGuard');
            next({name: 'pokemon-home'});
        }
    })
}

export default isAuthenticatedGuard;
