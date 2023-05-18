# RESTful-API

Express &amp; Node.js to create a sleek CRUD RESTful API.

## What is difference between req.query & req.params in mongoose controllers?

.params only get the route parameters while .query gets query strings passed.

### .query

GET localhost:3000/contact/contactId/?contactId=6445253611bf9415c392c52e

crmRoutes.js

```
app.route("/contact/contactId")
.get(getContactById)
```

crmControllers.js

```
export const getContactById = (req, res) => {
    const Id = req.query.contactId
    console.log(Id)
    const name = req.query.fname
    Contact.findById(Id).then(contact => res.json(contact)).catch(err => (console.log(err)));
}
```

### .params

GET localhost:3000/contact/6445253611bf9415c392c52e

crmRoutes.js

```
  app.route("/contact/:contactId")
```

crmControllers.js

```
export const getContactById = (req, res) => {
    const Id = req.params.contactId
    console.log(Id)
    Contact.findById(Id).then(contact => res.json(contact)).catch(err => (console.log(err)));
}

```
