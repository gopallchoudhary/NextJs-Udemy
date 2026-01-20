import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
	// const response = await fetch("http://localhost:3000/api/timer", {
	// 	cache: "force-cache",
	// });

	// const response = await fetch("http://localhost:3000/api/timer", {
	// 	next: { revalidate: 10 },
	// });
	// const data = await response.json();

	const [fresh, cached, revalidate] = await Promise.all([
		fetch("http://localhost:3000/api/timer/utc", { cache: "no-store" }).then(
			(res) => res.json(),
		),
		fetch("http://localhost:3000/api/timer/iso", { cache: "force-cache" }).then(
			(res) => res.json(),
		),
		fetch("http://localhost:3000/api/timer/local", {
			next: { revalidate: 5 },
		}).then((res) => res.json()),
	]);

	let authenticated = false
	if(!authenticated) {
		return redirect("/login")
	}
	return (
		
		<div className="flex flex-col gap-10">
			<div>
				<h3>Fresh Time (no-store)</h3>
				<p>Time: {fresh.time}</p>
				<p>RequestId: {fresh.requestId}</p>
			</div>
			<div>
				<h3>Cache (force-cache)</h3>
				<p>Time: {cached.time}</p>
				<p>RequestId: {cached.requestId}</p>
			</div>
			<div>
				<h3>Revalidate</h3>
				<p>Time: {revalidate.time}</p>
				<p>RequestId: {revalidate.requestId}</p>
			</div>
		</div>
	);
}
