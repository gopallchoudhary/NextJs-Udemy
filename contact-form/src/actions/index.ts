"use server"
import Contact, { ContactStauts, IContactDocument } from "@/models/SchemaModels"
import dbConnect from "@/lib/db"
import { ContactDTO, ContactStats } from "@/types/contact"
import { revalidatePath, revalidateTag, unstable_cache } from "next/cache"

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


export async function getContacts(): Promise<ContactDTO[]> {
    try {
        await dbConnect()
        const contacts = await Contact.find({}).sort({ createdAt: -1 }).lean() // .lean() returns plan js object 


        return contacts.map((contact) => ({

            ...contact,
            _id: contact._id.toString(),
            createdAt: contact.createdAt.toISOString()
        }))
    } catch (error) {
        console.log("Something went wrong")
        return []
    }
}


export async function updataContact(contactId: string, status: ContactStauts): Promise<{ success: boolean, message: string }> {
    try {
        await dbConnect()
        await Contact.findByIdAndUpdate(contactId, {
            status
        })

        revalidateTag("contact-stats")

        return {
            success: true,
            message: 'Contact updated successfully'
        }
    } catch (error) {
        return {
            success: false,
            message: 'Something went wrong, please try again'
        }
    }
}

export async function getCachedStats(): Promise<ContactStats> {
    const cachedStats = unstable_cache(
        async () => {
            await dbConnect()
            const total = await Contact.countDocuments()
            const newCount = await Contact.countDocuments({ status: 'new' })
            const readCount = await Contact.countDocuments({ status: 'read' })
            const repliedCount = await Contact.countDocuments({ status: 'replied' })

            return {
                total,
                newCount,
                readCount,
                repliedCount
            }
        },
        ["contact-stats"],
        { tags: ["contact-stats"] }
    )

    return cachedStats()
}