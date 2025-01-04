const data = [
  {
    title: "Medis Tanggap",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis eaque facere ipsa iure laudantium minus necessitatibus odit quae suscipit!",
    image: "/assets/medis-tanggap.jpg",
    technologies: [
      { name: "Reactjs", logo: "/assets/reactjs.webp" },
      { name: "Bootstrap", logo: "/assets/bootstrap.png" },
      { name: "Mysql", logo: "/assets/mysql.png" },
      { name: "Figma", logo: "/assets/figma.webp" },
    ],
  },
  {
    title: "Restaurant App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis eaque facere ipsa iure laudantium minus necessitatibus odit quae suscipit!",
    image: "/assets/restoran-finder.png",
    technologies: [
      { name: "JavaScript", logo: "/assets/js.webp" },
      { name: "HTML", logo: "/assets/html.webp" },
      { name: "CSS", logo: "/assets/css.png" },
    ],
  },
  {
    title: "SecondLife App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis eaque facere ipsa iure laudantium minus necessitatibus odit quae suscipit!",
    image: "/assets/second.png",
    technologies: [
      { name: "Reactjs", logo: "/assets/reactjs.webp" },
      { name: "Tailwind", logo: "/assets/tailwind.svg" },
      { name: "Figma", logo: "/assets/figma.webp" },
    ],
  },
  {
    title: "Vending Machine App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis eaque facere ipsa iure laudantium minus necessitatibus odit quae suscipit!",
    image: "/assets/vend.png",
    technologies: [
      { name: "Reactjs", logo: "/assets/reactjs.webp" },
      { name: "Tailwind", logo: "/assets/tailwind.svg" },
      { name: "Figma", logo: "/assets/figma.webp" },
    ],
  },
  {
    title: "Split Bill App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis eaque facere ipsa iure laudantium minus necessitatibus odit quae suscipit!",
    image: "/assets/split-bill.png",
    technologies: [
      { name: "Reactjs", logo: "/assets/reactjs.webp" },
      { name: "Tailwind", logo: "/assets/tailwind.svg" },
      { name: "Figma", logo: "/assets/figma.webp" },
    ],
  },
  {
    title: "TokoCat App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis eaque facere ipsa iure laudantium minus necessitatibus odit quae suscipit!",
    image: "/assets/tokocat.png",
    technologies: [
      { name: "Reactjs", logo: "/assets/reactjs.webp" },
      { name: "Tailwind", logo: "/assets/tailwind.svg" },
      { name: "Figma", logo: "/assets/figma.webp" },
    ],
  },
];

const sertif = [
  {
    img: "/assets/expert.png",
    title: "Menjadi Front-End Web Developer Expert",
    platform: "Dicoding Indonesia",
  },
  {
    img: "/assets/dasarjs.png",
    title: "Belajar Dasar Pemrograman JavaScript",
    platform: "Dicoding Indonesia",
  },
  {
    img: "/assets/backend.png",
    title: "Belajar Back-End Pemula dengan Javascript",
    platform: "Dicoding Indonesia",
  },
  {
    img: "/assets/git.png",
    title: "Belajar Dasar Git dengan GitHub",
    platform: "Dicoding Indonesia",
  },
];

export function Home() {
  return (
    <>
      <div className="mx-5 mt-4">
        <figure className="aspect-square md:w-[30%] md:mx-auto overflow-hidden rounded-sm lg:mx-auto lg:w-[20%]">
          <img
            src="/assets/profile.jpg"
            alt="Foto Profile"
            className="object-cover"
          />
        </figure>
        <div className="lg:mt-5 lg:text-2xl lg:w-1/2 lg:mx-auto">
          <h6 className="my-3 font-semibold">Halo, saya Ari Rizwan 👋</h6>
          <p className="text-sm lg:text-lg ">
            Seorang Front-End Developer yang memiliki antusias 🎨. Saya siap
            mengubah ide menjadi pengalaman web yang interaktif dan menarik
            secara visual. Setiap harinya, saya merancang antarmuka pengguna
            yang bersih dan responsif, serta berkolaborasi dengan tim untuk
            mewujudkan desain yang fungsional dan menarik. <br />
            Saya terus belajar dan mengeksplorasi hal baru di dunia pengembangan
            web. Selain coding, saya juga tertarik dalam topik pemecahan
            masalah, dan pengembangan diri untuk tetap berkembang dan inovatif.
          </p>
        </div>
        <div>
          <h6 className="text-center mt-10 font-bold relative after:content-[''] after:block after:mt-2 after:bg-[#fca311] after:w-10 after:h-1 after:rounded-sm after:mx-auto lg:text-2xl">
            Experience
          </h6>
          <div className="mt-6 lg:w-1/2 lg:mx-auto lg:text-lg">
            <div className="flex items-start gap-x-4 ">
              <figure className="w-40 mt-1">
                <img src="/assets/logodicoding.jpg" alt="Logo Dicoding" />
              </figure>
              <div className=" ">
                <p className="font-semibold text-sm">
                  Front-End & Back-End Web Developer Cohort
                </p>
                <p className="text-sm">Dicoding Indonesia</p>
                <p className="text-sm font-semibold">
                  September 2024 - Desember 2024
                </p>
                <ul className="list-disc text-xs mt-1 text-justify">
                  <li>
                    Berhasil menyelesaikan seluruh kelas wajib dalam program SIB
                    Dicoding Indonesia dengan tepat waktu dan nilai akhir
                    rata-rata 93.25.
                  </li>
                  <li>
                    Memimpin project akhir untuk membuat sebuah website layanan
                    kesehatan dan berhasil menyelesaikan semua fitur seperti,
                    crud artikel, crud profile, pencarian rumah sakit, diagnosis
                    penyakit dan pendaftaran klinik.
                  </li>
                  <li>
                    Membangun website layanan masyarakat yang berfokus pada
                    pendeteksian penyakit pada ibu hamil dengan memanfaatkan
                    sistem pakar dan website dapat mencari ketersediaan rumah
                    sakit secara realtime dengan memanfaatkan API
                  </li>
                  <li>
                    Berperan sebagai fullstack developer sekaligus project
                    manager pada project akhir.
                  </li>
                  <li>
                    Mendapatkan reward peserta aktif pada setiap sesi diskusi
                  </li>
                </ul>
              </div>
            </div>{" "}
            <div className="flex items-start gap-x-4 mt-5">
              <figure className="w-36 mt-1">
                <img src="/assets/logounsika.png" alt="Logo Dicoding" />
              </figure>
              <div>
                <p className="font-semibold text-sm">
                  Asisten Praktikum Jaringan Komputer & Pemrograman Berbasis Web
                </p>
                <p className="text-sm">
                  Laboratorium Komputer Universitas Singaperbangsa Karawang
                </p>
                <p className="text-sm font-semibold">2024 - Sekarang</p>
                <ul className="list-disc text-xs mt-1 text-justify">
                  <li>
                    Melakukan instalasi software, penggantian hardware, dan
                    konfigurasi jaringan untuk memastikan operasional lab
                    berjalan lancar, meningkatkan efisiensi operasional hingga
                    mendukung kebutuhan praktikum mahasiswa.
                  </li>
                  <li>
                    Mengelola jaringan Mikrotik, termasuk pembagian bandwidth
                    untuk mendukung praktikum mahasiswa dan pemasangan jaringan
                    baru di lab komputer.
                  </li>
                  <li>
                    Mengelola praktikum Jaringan Komputer, mencakup pembuatan
                    modul, penyampaian materi, absensi, penilaian UTS dan UAS,
                    serta evaluasi tengah semester untuk mengukur hasil
                    pembelajaran.
                  </li>
                  <li>
                    Mengelola praktikum Pemrograman Berbasis Web, meliputi
                    pembuatan modul pembelajaran (HTML, CSS, JavaScript, PHP,
                    Bootstrap), penyampaian materi, absensi, penilaian UTS dan
                    UAS, serta evaluasi tengah semester.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" mb-20">
          <h6 className="text-center mt-10 font-bold relative after:content-[''] after:block after:mt-2 after:bg-[#fca311] after:w-10 after:h-1 after:rounded-sm after:mx-auto lg:text-2xl">
            Projects
          </h6>
          <div className="mt-6 md:grid md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 ">
            {data.map((item, index) => (
              <div
                key={index}
                className="mt-8 bg-[#252632] p-3 shadow-xl rounded-lg border border-[#252632]"
              >
                <figure>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-sm w-full h-auto"
                  />
                </figure>
                <div className="mt-2 bg-[#252632]">
                  <h2 className="text-lg">{item.title}</h2>
                  <p className="text-xs">{item.description}</p>
                  <div className="bg-[#252632] flex items-center gap-x-4 mt-3">
                    {item.technologies.map((tech, techIndex) => (
                      <figure key={techIndex} className="w-7">
                        <img src={tech.logo} alt={tech.name} />
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*  Sertifikat*/}
        <div>
          <h6 className="text-center mt-10 font-bold relative after:content-[''] after:block after:mt-2 after:bg-[#fca311] after:w-10 after:h-1 after:rounded-sm after:mx-auto lg:text-2xl">
            Certification
          </h6>
          <div className="mt-6 md:grid md:grid-cols-2 md:gap-x-4 lg:grid-cols-3">
            {sertif.map((item, index) => (
              <div
                key={index}
                className="mt-8 bg-[#252632] p-3 shadow-xl rounded-lg border border-[#252632]"
              >
                <figure>
                  <img src={item.img} alt={item.title} />
                </figure>
                <div className="mt-2 text-center">
                  <h2 className="text-lg ">{item.title}</h2>
                  <p className="text-xs mt-2">{item.platform}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
