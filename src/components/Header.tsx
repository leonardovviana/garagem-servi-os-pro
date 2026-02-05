import { MapPin } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <h1 className="text-xl font-bold tracking-wider text-gold-gradient uppercase">
          GARAGEM SERVIÇOS
        </h1>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          <span>Afogados da Ingazeira-PE</span>
        </div>
      </div>
    </header>
  );
}
