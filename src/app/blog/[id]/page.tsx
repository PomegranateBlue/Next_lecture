type Props = {
  params: {
    id: number;
  };
};

export default function BlogPage({ params }: Props) {
  return (
    <div>
      <h1>Blog Page</h1>
      <div>This page id is {params.id}</div>
    </div>
  );
}
