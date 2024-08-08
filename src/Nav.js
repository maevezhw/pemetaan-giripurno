function Nav() {
  return (
    <nav className="w-full h-14 list-none px-44 bg-tosca text-white font-bold flex items-center sticky top-0 z-50">
      <ul className="flex items-center self-center h-full">
        <li className="block px-5 py-4 hover:bg-dark-blue ">
          Home
        </li>
        <li className="block px-5 py-4 hover:bg-dark-blue ">
           Profil
        </li>
        <li className="block px-5 py-4 hover:bg-dark-blue ">
           Informasi Publik
        </li>
        <li className="block px-5 py-4 hover:bg-dark-blue ">
           Berita dan Pengumuman
        </li>
        <li className="block px-5 py-4 hover:bg-dark-blue ">
           Kegiatan
        </li>
        <li className="block px-5 py-4 hover:bg-dark-blue ">
           Kontak
        </li>
      </ul>
    </nav>
  );
}

export default Nav;