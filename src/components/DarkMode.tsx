import React from "react";

const DarkModeCommands = () => {
  const getPreferredTheme = (storedTheme: any) => {
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const setTheme = (theme: any) => {
    if (
      theme === "dark" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      console.log("dark");
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  };

  const showActiveTheme = (theme: any) => {
    const activeThemeIcon: any = document.querySelector(
      ".theme-icon-active use"
    );
    const btnToActive: any = document.querySelector(
      `[data-bs-theme-value="${theme}"]`
    );
    const svgOfActiveBtn: any = btnToActive
      .querySelector("svg use")
      .getAttribute("href");

    document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
      element.classList.remove("active");
    });

    btnToActive.classList.add("active");
    activeThemeIcon.setAttribute("href", svgOfActiveBtn);
  };

  const bs_toggle = (storedTheme: any) => {
    console.log("getPreferredTheme", getPreferredTheme(storedTheme));
    setTheme(getPreferredTheme(storedTheme));
  };

  React.useEffect(() => {
    const storedTheme: any = localStorage.getItem("theme");
    bs_toggle(storedTheme);

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        if (storedTheme !== "light" || storedTheme !== "dark") {
          setTheme(getPreferredTheme(storedTheme));
        }
      });

    window.addEventListener("DOMContentLoaded", () => {
      showActiveTheme(getPreferredTheme(storedTheme));

      document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
        toggle.addEventListener("click", () => {
          const theme = toggle.getAttribute("data-bs-theme-value");
          localStorage.setItem("theme", String(theme));
          setTheme(theme);
          showActiveTheme(theme);
        });
      });
    });
  }, []);

  return (
    <div className="form-check form-switch">
      {
        <input
          type="checkbox"
          role="switch"
          className="form-check-input"
          onClick={(e: any) => {
            bs_toggle(e.target.checked ? "light" : "dark");
          }}
        ></input>
      }
    </div>
  );
};

export default DarkModeCommands;
