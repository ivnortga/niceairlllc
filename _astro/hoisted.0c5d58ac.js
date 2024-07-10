// Verificar que el archivo JavaScript se carga correctamente
console.log("JavaScript is loaded and running");

// Función para alternar el tema
const h = document.querySelector("[data-switch-theme]");
if (localStorage.getItem("appTheme") === "dark" || (!("appTheme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}

if (h) {
    h.addEventListener("click", o => {
        o.preventDefault();
        const e = document.documentElement;
        if (e) {
            if (localStorage.getItem("appTheme")) {
                if (localStorage.getItem("appTheme") === "light") {
                    e.classList.add("dark");
                    localStorage.setItem("appTheme", "dark");
                } else {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("appTheme", "light");
                }
            } else {
                if (e.classList.contains("dark")) {
                    e.classList.remove("dark");
                    localStorage.setItem("appTheme", "light");
                } else {
                    e.classList.add("dark");
                    localStorage.setItem("appTheme", "dark");
                }
            }
        }
        updateLogo();
    });
}

// Función para actualizar el logo según el tema
function updateLogo() {
    const t = document.querySelector(".logo-image");
    if (document.documentElement.classList.contains("dark")) {
        t.style.backgroundImage = "url('logos/Logo_nice_white.png')";
    } else {
        t.style.backgroundImage = "url('logos/Logo_nice_black.png')";
    }
}
updateLogo();

// Navbar toggle
const s = document.querySelector("[data-toggle-nav]");
const n = document.querySelector("[data-navbar]");
const r = document.querySelector("[data-nav-overlay]");

if (s) {
    s.addEventListener("click", o => {
        o.preventDefault();
        if (s.getAttribute("data-open-nav") === "false") {
            s.setAttribute("data-open-nav", "true");
            r.setAttribute("data-is-visible", "true");
            document.body.classList.add("!overflow-y-hidden");
            n.style.height = `${n.scrollHeight}px`;
        } else {
            s.setAttribute("data-open-nav", "false");
            r.setAttribute("data-is-visible", "false");
            document.body.classList.remove("!overflow-y-hidden");
            n.style.height = "0px";
        }
    });

    n.addEventListener("click", () => {
        s.setAttribute("data-open-nav", "false");
        r.setAttribute("data-is-visible", "false");
        document.body.classList.remove("!overflow-y-hidden");
        n.style.height = "0px";
    });

    r.addEventListener("click", () => {
        s.setAttribute("data-open-nav", "false");
        r.setAttribute("data-is-visible", "false");
        document.body.classList.remove("!overflow-y-hidden");
        n.style.height = "0px";
    });
}

// Contadores
document.addEventListener("DOMContentLoaded", o => {
    document.querySelectorAll(".counter-value").forEach(a => {
        const d = () => {
            const t = +a.parentElement.getAttribute("data-counter");
            const i = a.parentElement.getAttribute("data-prefix") || "";
            const l = a.parentElement.hasAttribute("data-descend");
            const m = +a.innerText.replace(i, "");
            const g = l ? -1 : 1;
            const u = new Date().getFullYear();
            let c = m + g;
            if (l) {
                c = u - (u - t + (m - t));
            }
            if ((!l && c <= t) || (l && c >= t)) {
                a.innerText = i + c;
                setTimeout(d, 1);
            } else if (l) {
                a.innerText = i + t;
            }
        };
        d();
    });
});

// Navbar transparente
document.addEventListener("DOMContentLoaded", o => {
    const e = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            e.classList.remove("header-transparent");
            e.classList.add("header-translucent");
        } else {
            e.classList.add("header-transparent");
            e.classList.remove("header-translucent");
        }
    });
});
