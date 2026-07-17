import { Container } from "../provider/container";

const Footer = () => {
  return (
    <footer className="border-t bg-background mt-10 bg-gradient-to-br from-background via-background to-primary/20">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-muted-foreground md:flex-row py-4">
          <p>
            © {new Date().getFullYear()} <span className="font-medium text-foreground">Md. Samiul Islam</span>. All rights reserved.
          </p>

          <p>Creating clean, scalable, and high-performance web applications.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

