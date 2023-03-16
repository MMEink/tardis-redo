class Header {
  constructor() {
    this.navbtns = [
      "about",
      "weddings",
      "corporate",
      "mitzvahs",
      "private events",
      "menus",
      "venues",
    ];
    this.render();
  }
  render() {
    const header = document.querySelector("header");
    const navBrand = document.createElement("div");
    const navButtons = document.createElement("ul");
    const navbtn = document.createElement("li");
    const brandImg = document.createElement("img");
    const contactBtn = document.createElement("button");
    const header_container = document.createElement("div");
    header_container.classList.add("header_container");
    brandImg.src = "./images/complete.svg";
    navBrand.appendChild(brandImg);
    header_container.appendChild(navBrand);
    header_container.appendChild(navButtons);
    header_container.appendChild(contactBtn);
    header.appendChild(header_container);
    navBrand.classList.add("navbrand");
    navButtons.classList.add("navbuttons");
    contactBtn.innerHTML = `Contact Us<div class="contactbtn__horizontal"></div>
  <div class="contactbtn__vertical"></div>`;
    contactBtn.classList = "contactbtn";
    this.navbtns.map((btn) => {
      const navbtn = document.createElement("li");
      navbtn.innerHTML = btn;
      navbtn.id = `nav_${btn}`;
      navButtons.appendChild(navbtn);
    });
  }
}

window.header = new Header();
