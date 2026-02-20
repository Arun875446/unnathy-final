import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="layout-container flex min-h-screen items-center justify-center py-12">
      <div className="royal-surface w-full max-w-xl p-8 text-center sm:p-10">
        <span className="section-eyebrow">404</span>
        <h1 className="mt-4">Page Not Found</h1>
        <p className="mt-3 text-muted-foreground">The page you are looking for does not exist or may have been moved.</p>
        <a href="/" className="btn-primary mt-6 inline-flex">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
