class Footer {
  constructor() {
    this.footer = document.querySelector(".footer");
    this.render();
  }
  render() {
    const logoAddress = document.createElement("div");
    const phoneNslogan = document.createElement("div");
    const socialMedias = document.createElement("div");
    const logo = document.createElement("img");
    logo.src = "./images/TardisCateringLogo-white.svg";
    const address = document.createElement("p");
    address.innerHTML = `140 Florida St<br>Farmingdale, NY 11735`;
    logoAddress.appendChild(logo);
    logoAddress.appendChild(address);
    phoneNslogan.innerHTML = `<h4>Contact Us</h4><h3>631-777-2244</h3><p>Off-Premise Catering Now Available</p>`;
    socialMedias.innerHTML = `<h4>Connect with Us</h4><div><i class="bi bi-instagram"></i><i class="bi bi-facebook"></i></div><p>Or <br> Email us at  info@tardiscatering.com</p>`;
    this.footer.appendChild(logoAddress);
    this.footer.appendChild(phoneNslogan);
    this.footer.appendChild(socialMedias);
  }
}

window.footer = new Footer();
