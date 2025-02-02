import React from "react";
import Logo from "./logo";

const Footer = () => {
  const menuItems = [
    { name: "Terminal Pizza", link: "/urun/1" },
    { name: "5 Kişilik Hackathlon Pizza", link: "/urun/3" },
    { name: "useEffect Tavuklu Pizza", link: "/urun/3" },
    { name: "Beyaz Console Frosty", link: "/urun/3" },
    { name: "Testler Geçti Mutlu Burger", link: "/urun/3" },
    { name: "Position Absolute Acı Burger", link: "/urun/3" },
  ];

  const contactDetails = [
    { icon: "📍", text: "341 Londonderry Road, Istanbul Türkiye", link: "https://maps.google.com/?q=341+Londonderry+Road+Istanbul+Türkiye" },
    { icon: "✉️", text: "aciktim@teknolojikyemekler.com", link: "mailto:aciktim@teknolojikyemekler.com" },
    { icon: "📞", text: "+90 216 123 45 67", link: "tel:+902161234567" },
  ];

  const instagramImages = [
    "/images/iteration-2-images/footer/insta/li-0.png",
    "/images/iteration-2-images/footer/insta/li-1.png",
    "/images/iteration-2-images/footer/insta/li-2.png",
    "/images/iteration-2-images/footer/insta/li-3.png",
    "/images/iteration-2-images/footer/insta/li-4.png",
    "/images/iteration-2-images/footer/insta/li-5.png",
  ];

  return (
    <footer style={{ backgroundColor: "#1c1c1c", color: "#fff", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        <div>
          <Logo />
          {contactDetails.map((detail, index) => (
            <p key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{detail.icon}</span> 
              <a href={detail.link} style={{ color: "#fff", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                {detail.text}
              </a>
            </p>
          ))}
        </div>

        <div>
          <h3>Hot Menu</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.link} style={{ color: "#fff", textDecoration: "none" }}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>Instagram</a>
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "5px" }}>
            {instagramImages.map((src, index) => (
              <img key={index} src={src} alt={`Instagram ${index + 1}`} style={{ width: "80px", height: "80px", objectFit: "cover" }} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px", borderTop: "1px solid #444", paddingTop: "10px" }}>
        <p>© 2025 Teknolojik Yemekler.</p>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>
          <img src="/images/twitter-icon.png" alt="Twitter" style={{ width: "20px", height: "20px" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
