
const causeController = function () {

    const getCreate = function (context) {

        helper.addHeaderInfo(context)

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
        })
            .then(function () {

                this.partial('../views/cause/create.hbs');
            });
    };

    const postCreate = function (context) {
        causeModel.createCause(context.params)
            .then(helper.handler)
            .then(() => {

                homeController.getHome(context);
            });
    };

    const loadCause = async function (context) {
        helper.addHeaderInfo(context)

        try {
            let response = await causeModel.getAllCauses();

            context.causes = await response.json();

        } catch (e) {
            console.log(e)
        }
        console.log(context.causes)

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs",
            
        }).then(function () {
            this.partial('../views/cause/dashboard.hbs')
        })

    };

    const getDetails = async function(context){
        helper.addHeaderInfo(context)
        //context.isCreator = JSON.parse(storage.getData('userInfo'))._acl.creator === context._id;
       
        try {
            let response = await causeModel.getCause(context.params.id);

            const cause = await response.json();
           // console.log(cause)
            Object.keys(cause).forEach((key) => {
                context[key] = cause[key];
            });

        } catch (e) {
            console.log(e)
        }

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs",
            
        }).then(function () {
            this.partial('../views/cause/details.hbs')
        })
    }

    const postEdit = function(context){
        
        causeModel.editCause(context.params)
        .then(helper.handler)
        .then((data) => {
            console.log(`New data is ${data}`);
            homeController.getHome(context);
        })
    }

    const postDelete = function(context){
        causeModel.deleteCause(context.params.id)
        .then(helper.handler)
        .then((data) => {
           
           homeController.getHome(context);
        });
    };

    return {
        getCreate,
        postCreate,
        loadCause,
        getDetails,
        postEdit,
        postDelete
    }
}();