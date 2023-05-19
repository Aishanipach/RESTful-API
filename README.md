# RESTful-API

Express &amp; Node.js to create a sleek CRUD RESTful API.

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) ![Studio](https://img.shields.io/badge/Studio3T-16b57f?style=for-the-badge&logo=studio3t&logoColor=white) ![VS](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) ![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

## What is difference between req.query & req.params in mongoose controllers?

.params only get the route parameters while .query gets query strings passed.

### .query

GET localhost:3000/contact/contactId/?contactId=_(Id)_

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

GET localhost:3000/contact/_(Id)_

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

### Resources:

1. https://mongoosejs.com/docs/tutorials/findoneandupdate.html
2. https://www.geeksforgeeks.org/mongoose-findoneandupdate-function/
