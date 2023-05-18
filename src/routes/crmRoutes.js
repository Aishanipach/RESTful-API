import { addNewContact, getcontacts, getContactById, updateContact } from "../controllers/crmController"

const routes = (app) => {
    app.route("/contact")
        .get((req, res, next) => {
            //middleware
            console.log(`Request from ${req.originalUrl}`)
            req.map((key, val) =>
                console.log(`Request Obj is ${val}`))


            next();

        }, getcontacts)

        .post(addNewContact)


    app.route("/contact/:contactId")
        .get(getContactById)
        .put(updateContact)
        .delete((req, res) => {
            res.send("DELETE req successful")
        })


}

export default routes