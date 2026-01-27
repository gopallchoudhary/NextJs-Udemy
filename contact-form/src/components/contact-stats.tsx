import { getCachedStats } from "@/actions";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { stat } from "fs";

const ContactStats = async () => {
	const stats = await getCachedStats();
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 mt-5">
			<Card>
				<CardHeader className="pb-3">
					<CardTitle className="text-sm font-medium">Total</CardTitle>
				</CardHeader>
				<CardContent className="text-2x font-bold">{stats.total}</CardContent>
			</Card>

			<Card>
				<CardHeader className="pb-3">
					<CardTitle className="text-sm font-medium">New</CardTitle>
				</CardHeader>
				<CardContent className="text-2x font-bold text-yellow-500">
					{stats.newCount}
				</CardContent>
			</Card>

			<Card>
				<CardHeader className="pb-3">
					<CardTitle className="text-sm font-medium">Read</CardTitle>
				</CardHeader>
				<CardContent className="text-2x font-bold text-blue-500">
					{stats.readCount}
				</CardContent>
			</Card>

			<Card>
				<CardHeader className="pb-3">
					<CardTitle className="text-sm font-medium">Replied</CardTitle>
				</CardHeader>
				<CardContent className="text-2x font-bold text-green-500">
					{stats.repliedCount}
				</CardContent>
			</Card>
		</div>
	);
};

export default ContactStats;
