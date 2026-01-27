
interface IParams {
	params: {
		slugs: string;
	};
}

export async function generateMetadata({
	params,
}: IParams) {
	const { slugs } = await params;
	return {
		title: `Blogs ${slugs}`,
		description: "BlogsPage",
	};
}

const BlogsPage = ({ params }: { params: { slug: string } }) => {
	return <div>BlogsPage</div>;
};

export default BlogsPage;
