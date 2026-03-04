export function Footer() {
  return (
    <footer className="bg-planara-dark border-t border-white/10">
      <div className="container mx-auto px-6 max-w-5xl py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">
            Built for Yamaha Marine. Powered by Planara.
          </p>
          <a
            href="mailto:hello@planara.com"
            className="text-xs text-white/30 hover:text-planara-teal transition-colors mt-1 inline-block"
          >
            Other equipment lines? hello@planara.com
          </a>
        </div>
        <p className="text-xs text-white/20">
          &copy; {new Date().getFullYear()} Planara. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
