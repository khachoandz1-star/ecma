function Header() {
  return (
    <nav className="bg-white shadow-md">
      <ul className="flex justify-center gap-10 py-4 text-lg font-semibold">
        <li>
          <a className="hover:text-orange-500 transition" href="#">Home</a>
        </li>
        <li>
          <a className="hover:text-orange-500 transition" href="#">Contact</a>
        </li>
        <li>
          <a className="hover:text-orange-500 transition" href="#">Đặt vé</a>
        </li>
        <li>
          <a className="hover:text-orange-500 transition" href="#">Thông tin</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
 