import { addNewContact, getcontacts, getContactById, updateContact, deleteContact } from "../controllers/crmController"

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


    app.route("/contact/contactId")
        .get(getContactById)
        .put(updateContact)
        .delete(deleteContact)


}

export default routes