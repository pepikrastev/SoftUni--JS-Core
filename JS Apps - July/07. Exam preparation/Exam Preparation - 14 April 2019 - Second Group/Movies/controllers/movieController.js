const movieController = function () {

    const createGet = function (context) {

        helper.addHeaderInfo(context);

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/movies/create.hbs')
        })
    }

    const createPost = function (context) {
        
        const payload = {
            title: context.params.title,
            imageUrl: context.params.imageUrl,
            description: context.params.description,
            tickets: Number(context.params.tickets),
            genres: context.params.genres
        };

        requester.post('movies', 'appdata', 'Kinvey', payload)
            .then(helper.handler)
            .then((data) => {
                
                context.redirect('#/home');
            });
    };

    const loadCinema = function (context) {
        helper.addHeaderInfo(context);

        const sortCriteriaDescending = JSON.stringify({
            tickets: -1
        });
        const endpoint = `movies?query={}&sort=${sortCriteriaDescending}`;

        requester.get(endpoint, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((movies) => {

                context.movies = movies;
                context.loadPartials({
                    header: "../views/common/header.hbs",
                    footer: "../views/common/footer.hbs",
                    'single-movie': "../views/movies/single-movie.hbs"
                }).then(function () {
                    this.partial('../views/movies/cinema.hbs');
                });
            });

    };

    const myMovies = function (context) {
        helper.addHeaderInfo(context);
        const endpoint = `movies?query={"_acl.creator":"${sessionStorage.getItem('userId')}"}`;

        requester.get(endpoint, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((myMovies) => {
                context.movies = myMovies;
                context.loadPartials({
                    header: "../views/common/header.hbs",
                    footer: "../views/common/footer.hbs",
                    'my-movie': "../views/movies/my-movie.hbs"
                }).then(function () {
                    this.partial('../views/movies/my-movies.hbs');
                });
            });
    };

    const editGet = function (context) {
        const movieId = context.params.id;

        helper.addHeaderInfo(context);

        requester.get(`movies/${movieId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((singleMovie) => {
                context.movie = singleMovie;

                helper.loadPartials(context)
                    .then(function () {
                        this.partial('../views/movies/edit.hbs');
                    })
            });
    };

    const editPost = function (context) {
        const movieId = context.params.id;
        const payload = {
            title: context.params.title,
            imageUrl: context.params.imageUrl,
            description: context.params.description,
            tickets: Number(context.params.tickets),
            genres: context.params.genres
        };

        requester.put(`movies/${movieId}`, 'appdata', 'Kinvey', payload)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/movie/user');
            })
    };

    const deleteGet = function (context) {
        const movieId = context.params.id;

        helper.addHeaderInfo(context);

        requester.get(`movies/${movieId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((singleMovie) => {
                context.movie = singleMovie;

                helper.loadPartials(context)
                    .then(function () {
                        this.partial('../views/movies/delete.hbs');
                    })
            });
    };

    const deletePost = function (context) {
        const movieId = context.params.id;

        requester.del(`movies/${movieId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((count) => {
                
                context.redirect('#/home');
            })
    };

    const detailsGet = function (context) {
        const movieId = context.params.id;

        helper.addHeaderInfo(context);

        requester.get(`movies/${movieId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((singleMovie) => {
                context.movie = singleMovie;

                helper.loadPartials(context)
                    .then(function () {
                        this.partial('../views/movies/details.hbs');
                    })
            });
    };

    const buyTicket = (context) => {
        const movieId = context.params.id;

        requester.get(`movies/${movieId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((movieById) => {
                movieById.tickets--;

                return requester.put(`movies/${movieId}`, 'appdata', 'Kinvey', movieById)
            })
            .then(helper.handler)
            .then(() => {
                context.redirect('#/cinema')
            });
    };

    return {
        createGet,
        createPost,
        loadCinema,
        myMovies,
        editGet,
        editPost,
        deleteGet,
        deletePost,
        detailsGet,
        buyTicket
    }
}();