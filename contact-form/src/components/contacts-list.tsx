import { Card, CardContent, CardTitle, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { getContacts, updataContact } from "@/actions";
import { ContactDTO } from "@/types/contact";
const ContactsList = async () => {
	const contacts: ContactDTO[] = await getContacts();

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-bold">Contact messages</h2>

				<Badge variant={"secondary"}>{contacts.length}</Badge>
			</div>
			{contacts.length === 0 ? (
				<Card>
					<CardContent className="flex flex-col items-center justify-center py-12">
						<Mail className="h-12 w-12 text-muted-foreground mb-4" />
						<h3 className="text-xl font-bold">No messaged yet</h3>
					</CardContent>
				</Card>
			) : (
				<div className="grid gap-4">
					{contacts.map((contact) => (
						<Card key={contact._id}>
							<CardHeader className="pb-3">
								<div className="flex items-center justify-between">
									<div>
										<CardTitle className="text-lg">{contact.subject}</CardTitle>
										<p className="text-sm text-muted-foreground">
											From: {contact.name} {contact.email}
										</p>
									</div>
									<Badge
										variant={contact.status === "new" ? "default" : "secondary"}
									>
										{contact.status}
									</Badge>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground mb-4">
									{contact.message}
								</p>
								<div className="flex items-center justify-between pt-4 border-t">
									<p className="text-sm text-muted-foreground mb-4">
										{new Date(contact.createdAt).toLocaleDateString()}
									</p>

									<div>
										{contact.status === "new" && (
											<form
												action={async () => {
													"use server";
													await updataContact(contact._id, "read");
												}}
											>
												<Button size={"sm"} type="submit" variant={"outline"}>
													Mark as read
												</Button>
											</form>
										)}

										{contact.status === "read" && (
											<form
												action={async () => {
													"use server";
													await updataContact(contact._id, "replied");
												}}
											>
												<Button size={"sm"} type="submit" variant={"outline"}>
													Mark as replied
												</Button>
											</form>
										)}
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			)}
		</div>
	);
};

export default ContactsList;
