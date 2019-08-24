const app = Sammy("#main", function () {

    this.use('Handlebars', 'hbs');

    // Home
    this.get('#/home', homeController.getHome);

    // User
    this.get('#/register', userController.getRegister);
    this.get('#/login', userController.getLogin);

    this.post('#/register', userController.postRegister);
    this.post('#/login', userController.postLogin);
    this.get('#/logout', userController.logout);

    //Cause
    this.get('#/create', causeController.getCreate);
    this.post('#/create', causeController.postCreate);

    this.get('#/dashboard', causeController.loadCause);

    this.get('#/details/:id', causeController.getDetails)
  
    this.post('#/edit/:id', causeController.postEdit);

    this.get('#/delete/:id', causeController.postDelete);
});

(() => {
    app.run('#/home');
})();