import { MapPin, Clock, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-12">
      <div className="container py-8 px-4">
        <h3 className="text-lg font-bold text-gold-gradient uppercase mb-6 text-center">
          GARAGEM SERVIÇOS
        </h3>

        <div className="space-y-4 text-sm text-muted-foreground">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p>
              Rua Principal, 123 - Centro
              <br />
              Afogados da Ingazeira - PE
              <br />
              CEP: 56800-000
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary shrink-0" />
            <p>Segunda a Sábado: 8h às 18h</p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary shrink-0" />
            <p>(87) 99927-4678</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Garagem Serviços. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
