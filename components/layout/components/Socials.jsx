const socialMediaLinks = [
  {
    id: 1,
    class: "icon-facebook text-14",
    href: "https://www.facebook.com/DetoursTravel",
  },
  // { id: 2, class: "icon-twitter", href: "#" },
  {
    id: 3,
    class: "icon-instagram text-14",
    href: "https://www.instagram.com/detourstravel",
  },
  // { id: 4, class: "icon-linkedin", href: "#" },
];

export default function Socials() {
  return (
    <>
      {socialMediaLinks.map((elm, i) => (
        <a key={i} href={elm.href} target="_blank" className={elm.class}></a>
      ))}
    </>
  );
}
