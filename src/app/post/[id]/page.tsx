type Props = {
  params: {
    id: number;
  };
};

function PostDetailPage({ params }: Props) {
  return (
    <div>
      <div>ID:{params.id} Page</div>
    </div>
  );
}

export default PostDetailPage;
