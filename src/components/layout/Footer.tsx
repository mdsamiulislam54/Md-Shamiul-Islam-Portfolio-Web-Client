
const Footer = () => {
  return (
    <footer className="border-t bg-background mt-10">
      <div className="container py-6">
        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} <span className="font-medium text-foreground">Md. Samiul Islam</span>. All rights reserved.
          </p>

          <p>Creating clean, scalable, and high-performance web applications.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

