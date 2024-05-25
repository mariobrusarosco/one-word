import { useQuery } from "@tanstack/react-query";
import { loaderTables } from "../api/loader";
import { NavLink, Outlet } from "react-router-dom";
import { Table } from "../typing/interfaces";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/domains/ui-system/components/ui/popover";

export const TablesScreen = () => {
  const { data, error, isFetching } = useQuery<Table[]>({
    queryKey: ["tables"],
    queryFn: loaderTables,
  });

  if (error) {
    console.error({ error });
    return <div>{error.message}</div>;
  }

  if (isFetching) {
    return <div>loading...</div>;
  }

  return (
    <div className="bg-primary tablet:bg-secondary desktop:bg-cyan-800">
      <h2 className="font-serif">Available tables</h2>
      <div>
        <aside>
          <ul>
            {data?.map((table) => (
              <li
                key={table?.name}
                className="font-sans only-m:text-cyan-200 only-t:bg-cyan-200"
              >
                <NavLink to={`/tables/${table?.id}`}>{table?.name}</NavLink>
              </li>
            ))}
          </ul>
        </aside>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe nesciunt
        suscipit eveniet ab officiis earum facilis, accusamus vitae unde eaque
        ipsam! Iste maxime impedit delectus quae possimus, nesciunt id eligendi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, animi sed.
        Dolorem, quam illo. Accusamus ratione fugiat unde recusandae explicabo
        quam tempora eligendi est, beatae porro dolor magni minima maxime! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolorem et ratione
        aspernatur voluptas repudiandae quidem minima doloremque voluptatem
        debitis id! Illum qui distinctio quasi tenetur expedita illo aut
        blanditiis eum! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Soluta dolore quo minima illum ea impedit, optio ad placeat veniam
        officia doloremque consequuntur distinctio dolorem vitae. Fuga, dolorem
        vero? Distinctio, reiciendis. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Possimus iusto vero ipsam voluptas quo? A, rerum
        omnis! Distinctio numquam ad incidunt id odio accusantium quae? Harum
        expedita enim consequuntur similique? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Accusantium, iusto sint possimus beatae
        ducimus quis dolor cumque vitae facere sed iste! Sapiente aut natus
        asperiores dolorem? Numquam totam modi dicta!
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
        <Outlet />
      </div>
    </div>
  );
};
