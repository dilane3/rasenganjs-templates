import Image from "@rasenganjs/image";
import { Link } from "rasengan";

export function Footer() {
  return (
    <section className="h-32 flex items-center justify-between px-5 lg:px-32">
      <Link className="flex items-center gap-2" to="" target="_blank">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <span className="font-bold">Enver</span>
      </Link>
      <nav>
        <ul className="flex items-center gap-4 font-light">
          <li><Link to="">Support</Link></li>
          <li><Link to="">Privacy Policy</Link></li>
          <li><Link to="">Terms and Conditions</Link></li>
        </ul>
      </nav>
      <span>© 2020 Enver, All Rights Reserved</span>
    </section>
  )
}