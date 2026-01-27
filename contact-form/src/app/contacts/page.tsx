import ContactStats from "@/components/contact-stats";
import ContactsList from "@/components/contacts-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Contacts = () => {
	return (
		<main className="min-h-screen py-8 px-4">
			<div className="container mx-auto max-w-xl">
				<div className="mb-8">
					<Link href={"/"}>
						<Button
							variant={"outline"}
							size={"sm"}
							className="mb-4 bg-transparent"
						>
							Back to Form
						</Button>
					</Link>
				</div>
				<ContactStats />
				<ContactsList />
			</div>
		</main>
	);
};

export default Contacts;
