import { Suspense } from "react";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const List = async () => {
  const posts = await loadPosts();

  return (
    <>
      <h2>Tables</h2>;
      {posts.map((post: any) => (
        <div key={post.id} className="post-listing">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </>
  );
};

const TablesScreen = async () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="w-screen h-screen bg-gray-800 text-white">
            <h2>Loading...</h2>
          </div>
        }
      >
        <List />
      </Suspense>
    </>
  );
};

export default TablesScreen;
