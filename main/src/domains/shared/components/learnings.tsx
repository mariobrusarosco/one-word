import { useQuery } from "@tanstack/react-query";

export const loaderLearnings = async () => {
  const result = await fetch(`${import.meta.env.VITE_ONE_WORD_API}/learnings`);

  return await result.json();
};

export const Learnings = () => {
  const { data, error, isFetching } = useQuery({
    queryKey: ["learnings"],
    queryFn: loaderLearnings,
  });

  if (error) {
    return <div>Ops! Something went wrong</div>;
  }

  console.log("isFetching", isFetching);
  console.log("data", data);

  return (
    <div>
      <h2>Learnings</h2>
      <h3>Username: {data?.name}</h3>
    </div>
  );
};
