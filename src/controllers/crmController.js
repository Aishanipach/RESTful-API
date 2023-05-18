import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModels"



const Contact = mongoose.model('Contact', ContactSchema)

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save().then(contact => res.json(contact)).catch(err => (console.log(err)))
}

export const getcontacts = (req, res) => {
    Contact.find().then(contact => res.json(contact)).catch(err => console.log(err))
}

export const getContactById = (req, res) => {
    const Id = req.params.contactId
    console.log(Id)
    const name = req.query.fname
    Contact.findById(Id).then(contact => res.json(contact)).catch(err => (console.log(err)));
}

export const updateContact = (req, res) => {
    const Id = req.query.contactId
    Contact.findOneAndUpdate({ _id: Id }, req.body, { new: true }, (err, contact) => {
        if (err) {
            res.send(err);

        }
        res.json(contact)
    });
}