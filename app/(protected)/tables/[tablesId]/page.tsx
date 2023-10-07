import { Button } from "@/domains/shared/components/ui/button";

interface Props {
  params: { tablesId: string };
}

const TableScreen = ({ params }: Props) => {
  return (
    <main>
      <h2>
        Table:
        {params.tablesId}
        <Button variant="default">Start Round</Button>
        <Button variant="secondary">Start Round</Button>
      </h2>
    </main>
  );
};

export default TableScreen;
