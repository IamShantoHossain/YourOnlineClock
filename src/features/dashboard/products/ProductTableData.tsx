import { getAllProducts } from "@/action/products.actions";
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { P } from "@/components/ui/typography";
import { format } from "date-fns";
import Image from "next/image";

const ProductTableData = async () => {
  const { data, meta } = await getAllProducts({
    params: {
      per_page: 10,
    },
  });

  const products = data?.products || [];
  return (
    <>
      {products.map((product) => (
        <TableRow key={product.id}>
          <TableCell className="">
            <div className="flex items-center gap-0.5">
              <span className="text-primary">#</span>
              <p>{product.id}</p>
            </div>
          </TableCell>
          <TableCell className="flex items-center gap-2">
            <Image
              unoptimized
              height={900}
              width={900}
              src={product.images[0].src}
              alt={product.name}
              className="h-8 w-8 rounded-sm object-cover"
            />
            <div>
              <P className="max-w-xl truncate">{product.name}</P>
              <div className="flex gap-1">
                <span className="text-muted-foreground text-sm">
                  ${product.price.toLocaleString() || "_"}
                </span>
              </div>
            </div>
          </TableCell>

          <TableCell className="">
            <div className="flex max-w-sm flex-col gap-2">
              {product.categories.map((category) => (
                <Badge
                  key={category.id}
                  className="bg-primary/40 text-primary-foreground"
                  variant={"secondary"}
                >
                  {category.name}
                </Badge>
              ))}
            </div>
          </TableCell>

          <TableCell className="">
            <div className="flex max-w-sm flex-col gap-2">
              {product.brands.length > 0 ? (
                product.brands.map((brand) => (
                  <Badge
                    key={brand.id}
                    className="bg-primary/40 text-primary-foreground"
                    variant={"secondary"}
                  >
                    {brand.name}
                  </Badge>
                ))
              ) : (
                <span className="text-muted-foreground text-center text-sm">
                  __
                </span>
              )}
            </div>
          </TableCell>
          <TableCell>
            <P className="text-muted-foreground text-center text-sm">
              {format(new Date(product.date_created), "PPp")}
            </P>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default ProductTableData;
