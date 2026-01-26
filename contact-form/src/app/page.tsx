import ContactForm from "@/components/contact-form";

export default async function Home() {
	return (
		<main className="min-h-screen px-4 py-12">
			<div className="mx-auto container">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold mb-4">Server Actions with Demo</h1>
					<p className="text-xl text-gray-600 max-2xl mx-auto">
						Contact form with mongodb and revalidation
					</p>
				</div>
				<ContactForm />
			</div>
		</main>
	);
}
