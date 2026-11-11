
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const previousPath = useRef(null);

  // Initial page loading
  useEffect(() => {
    let fallback;
    let minimumDisplay;

    const hideLoader = () => {
      minimumDisplay = setTimeout(() => {
        setLoading(false);
      }, 350);
    };

    const pageReady = () => {
      Promise.resolve(document.fonts?.ready)
        .catch(() => {})
        .finally(hideLoader);
    };

    if (document.readyState === "complete") {
      pageReady();
    } else {
      window.addEventListener("load", pageReady, { once: true });
    }

    // Prevent loader from remaining indefinitely
    fallback = setTimeout(() => setLoading(false), 8000);

    return () => {
      window.removeEventListener("load", pageReady);
      clearTimeout(fallback);
      clearTimeout(minimumDisplay);
    };
  }, []);

  // Detect page navigation
  useEffect(() => {
    if (previousPath.current === null) {
      previousPath.current = pathname;
      return;
    }

    if (previousPath.current !== pathname) {
      previousPath.current = pathname;

      const timer = setTimeout(() => {
        setLoading(false);
      }, 450);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Detect internal link clicks and browser history navigation
  useEffect(() => {
    const handleNavigation = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = event.target.closest("a[href]");

      if (!link) return;

      if (
        link.target === "_blank" ||
        link.hasAttribute("download")
      ) {
        return;
      }

      const url = new URL(link.href, window.location.href);

      if (url.origin !== window.location.origin) return;

      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        return;
      }

      setLoading(true);
    };

    const handleHistory = () => {
      setLoading(true);
    };

    document.addEventListener("click", handleNavigation);
    window.addEventListener("popstate", handleHistory);

    return () => {
      document.removeEventListener("click", handleNavigation);
      window.removeEventListener("popstate", handleHistory);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className="ah-loader"
      role="status"
      aria-label="Loading AFTERHOURS"
      aria-live="polite"
    >
      <div className="ah-loader-content">

        <div className="ah-loader-brand">
          <span className="ah-loader-mark">AH</span>

          <span className="ah-loader-word">
            AFTERHOURS
          </span>
        </div>

        <div className="ah-loader-progress">
          <div className="ah-loader-progress-fill" />
        </div>

        <div className="ah-loader-footer">
          <span>NO CURFEW. NO RULES.</span>
          <span>LOADING EXPERIENCE</span>
        </div>

      </div>
    </div>
  );
}
