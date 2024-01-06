import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"outline"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle className="pb-4 text-left">Menu</SheetTitle>
          </SheetHeader>
          <Button
            className="mb-3 flex w-full justify-start gap-2"
            variant={"outline"}
          >
            <LogInIcon size={16} />
            Fazer login
          </Button>
          <Button
            className="mb-3 flex w-full justify-start gap-2"
            variant={"outline"}
          >
            <HomeIcon size={16} />
            Início
          </Button>
          <Button
            className="mb-3 flex w-full justify-start gap-2"
            variant={"outline"}
          >
            <PercentIcon size={16} />
            Ofertas
          </Button>
          <Button
            className="mb-3 flex w-full justify-start gap-2"
            variant={"outline"}
          >
            <ListOrderedIcon size={16} />
            Catálogo
          </Button>
        </SheetContent>
      </Sheet>

      <h1>
        <span className="text-primary font-bold">FSW</span> Store
      </h1>

      <Button size={"icon"} variant={"outline"}>
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
