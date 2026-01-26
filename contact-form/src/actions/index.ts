"use server"
import Contact from "@/models/SchemaModels"
import dbConnect from "@/lib/db"

export async function createContact(formData: FormData) {

    try {
        await dbConnect()
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const subject = formData.get('subject') as string
        const message = formData.get('message') as string

        if (!name || !email || !subject || !message) {
            return {
                success: false,
                error: 'All fields are required'
            }
        }

        const contact = await Contact.create({
            name: name.trim(),
            email: email.trim(),
            subject: subject.trim(),
            message: message.trim()
        })

        return {
            success: true,
            message: 'message sent successfully',
            contactId: contact._id.toString()
        }
    } catch (error) {
        return {
            success: false,
            error: 'Something went wrong, please try again'
        }
    }
}