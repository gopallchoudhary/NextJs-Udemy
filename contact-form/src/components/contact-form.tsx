"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { createContact } from "@/actions";

const ContactForm = () => {
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("");

	async function onSubmit(formData: FormData) {
		setIsSubmitting(true);
		setMessage("");

		const result = await createContact(formData);
		console.log(result);
		if (result.success) {
			setMessage("Message sent successfully");

			const form = document.getElementById("contact-form") as HTMLFormElement;
			form.reset();
		} else {
			setMessage(result.error || "something went wrong");
		}

		setIsSubmitting(false);
	}

	return (
		<Card className="w-fit mx-auto">
			<CardHeader>
				<CardTitle>Contact Us</CardTitle>
			</CardHeader>
			<CardContent>
				{message && (
					<div
						className={`${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}
					>
						{message}
					</div>
				)}
				<form id="contact-form" className="space-y-6" action={onSubmit}>
					{/* Name & Email */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="flex flex-col">
							<label className="text-sm font-medium mb-1">Name</label>
							<input
								type="text"
								placeholder="Your name"
								className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
								name="name"
							/>
						</div>

						<div className="flex flex-col">
							<label className="text-sm font-medium mb-1">Email</label>
							<input
								type="email"
								placeholder="you@example.com"
								className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
								name="email"
							/>
						</div>
					</div>

					{/* Subject */}
					<div className="flex flex-col">
						<label className="text-sm font-medium mb-1">Subject</label>
						<input
							type="text"
							placeholder="Subject"
							className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
							name="subject"
						/>
					</div>

					{/* Message */}
					<div className="flex flex-col">
						<label className="text-sm font-medium mb-1">Message</label>
						<textarea
							rows={5}
							placeholder="Write your message..."
							className="border rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-black"
							name="message"
						/>
					</div>

					{/* Button */}
					<Button className="w-full" disabled={isSubmitting} type="submit">
						{isSubmitting ? "sending..." : "Submit"}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
};

export default ContactForm;
