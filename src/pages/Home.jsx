const data = [
  {
    title: "Medis Tanggap",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis eaque facere ipsa iure laudantium minus necessitatibus odit quae suscipit!",
    image: "/src/assets/medis-tanggap.png",
    technologies: [
      { name: "Reactjs", logo: "/src/assets/reactjs.webp" },
      { name: "Bootstrap", logo: "/src/assets/bootstrap.png" },
      { name: "Mysql", logo: "/src/assets/mysql.png" },
      { name: "Figma", logo: "/src/assets/figma.png" },
    ],
  },
  {
    title: "Restaurant App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis eaque facere ipsa iure laudantium minus necessitatibus odit quae suscipit!",
    image: "/src/assets/restoran-finder.png",
    technologies: [
      { name: "JavaScript", logo: "/src/assets/js.webp" },
      { name: "HTML", logo: "/src/assets/html.webp" },
      { name: "CSS", logo: "/src/assets/css.png" },
    ],
  },
  {
    title: "SecondLife App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis eaque facere ipsa iure laudantium minus necessitatibus odit quae suscipit!",
    image: "/src/assets/second.png",
    technologies: [
      { name: "Reactjs", logo: "/src/assets/reactjs.webp" },
      { name: "Tailwind", logo: "/src/assets/tailwind.png" },
      { name: "Figma", logo: "/src/assets/figma.png" },
    ],
  },
  {
    title: "Vending Machine App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis eaque facere ipsa iure laudantium minus necessitatibus odit quae suscipit!",
    image: "/src/assets/vend.png",
    technologies: [
      { name: "Reactjs", logo: "/src/assets/reactjs.webp" },
      { name: "Tailwind", logo: "/src/assets/tailwind.png" },
      { name: "Figma", logo: "/src/assets/figma.png" },
    ],
  },
  {
    title: "Split Bill App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis eaque facere ipsa iure laudantium minus necessitatibus odit quae suscipit!",
    image: "/src/assets/split-bill.png",
    technologies: [
      { name: "Reactjs", logo: "/src/assets/reactjs.webp" },
      { name: "Tailwind", logo: "/src/assets/tailwind.png" },
      { name: "Figma", logo: "/src/assets/figma.png" },
    ],
  },
  {
    title: "TokoCat App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis eaque facere ipsa iure laudantium minus necessitatibus odit quae suscipit!",
    image: "/src/assets/tokocat.png",
    technologies: [
      { name: "Reactjs", logo: "/src/assets/reactjs.webp" },
      { name: "Tailwind", logo: "/src/assets/tailwind.png" },
      { name: "Figma", logo: "/src/assets/figma.png" },
    ],
  },
];

export function Home() {
  return (
    <>
      <div className="mx-5 ">
        <figure className="aspect-square md:w-[40%] md:mx-auto overflow-hidden rounded-sm">
          <img
            src="/src/assets/profile.jpg"
            alt="Foto Profile"
            className="object-cover"
          />
        </figure>
        <div className="">
          <h6 className="my-3 font-semibold">
            Hi, my name is Ari Rizwan, a front-End Developer
          </h6>
          <p className="text-sm">
            I’m a passionate Front-End Developer who transforms ideas into
            interactive and visually appealing web experiences. By day, I craft
            clean, responsive user interfaces and collaborate with teams to
            bring designs to life. By night, I dive into design tools, explore
            UI/UX trends, or refine my skills in JavaScript frameworks like
            React. As a lifelong learner, I thrive on exploring the latest in
            web development and honing my craft. Beyond coding, I enjoy delving
            into topics like creativity, problem-solving, and self-growth to
            stay inspired and innovative
          </p>
        </div>
        <div>
          <h6 className="text-center mt-10 font-bold relative after:content-[''] after:block after:mt-2 after:bg-amber-300 after:w-10 after:h-1 after:rounded-sm after:mx-auto">
            Experience
          </h6>
          <div className="mt-6">
            <div className="flex items-start gap-x-4">
              <figure className="w-40 mt-1">
                <img src="/src/assets/logodicoding.jpg" alt="Logo Dicoding" />
              </figure>
              <div>
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
                <img src="/src/assets/logounsika.png" alt="Logo Dicoding" />
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
          <h6 className="text-center mt-10 font-bold relative after:content-[''] after:block after:mt-2 after:bg-amber-300 after:w-10 after:h-1 after:rounded-sm after:mx-auto">
            Projects
          </h6>
          <div className="mt-6 ">
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
                <div className="bg-[#252632]">
                  <h2 className="text-lg">{item.title}</h2>
                  <p className="text-xs">{item.description}</p>
                  <div className="bg-[#252632] flex items-center gap-x-4 mt-3">
                    {item.technologies.map((tech, techIndex) => (
                      <figure key={techIndex}>
                        <img src={tech.logo} alt={tech.name} className="w-10" />
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {/*<div className="bg-[#252632] p-3 shadow-xl rounded-lg border border-[#252632]">*/}
            {/*  <figure>*/}
            {/*    <img*/}
            {/*      src="/src/assets/medis-tanggap.png"*/}
            {/*      alt="Website Medis Tanggap"*/}
            {/*      className="rounded-sm w-full h-auto"*/}
            {/*    />*/}
            {/*  </figure>*/}
            {/*  <div className="bg-[#252632]">*/}
            {/*    <h2 className=" text-lg">Medis Tanggap</h2>*/}
            {/*    <p className="text-xs">*/}
            {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
            {/*      Adipisci corporis eaque facere ipsa iure laudantium minus*/}
            {/*      necessitatibus odit quae suscipit!*/}
            {/*    </p>*/}
            {/*    <div className="bg-[#252632] flex items-center gap-x-4 mt-3">*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/reactjs.webp"*/}
            {/*          alt="Logo Reactjs"*/}
            {/*          className="w-10"*/}
            {/*        />*/}
            {/*      </figure>*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/bootstrap.png"*/}
            {/*          alt="Logo Bootstrap "*/}
            {/*          className="w-10"*/}
            {/*        />*/}
            {/*      </figure>{" "}*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/mysql.png"*/}
            {/*          alt="Logo Mysql"*/}
            {/*          className="w-10"*/}
            {/*        />*/}
            {/*      </figure>{" "}*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/figma.png"*/}
            {/*          alt="Logo Figma"*/}
            {/*          className="w-5"*/}
            {/*        />*/}
            {/*      </figure>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>{" "}*/}
            {/*<div className="mt-8 bg-[#252632] p-3 shadow-xl rounded-lg border border-[#252632]">*/}
            {/*  <figure className="overflow-hidden">*/}
            {/*    <img*/}
            {/*      src="/src/assets/restoran-finder.png"*/}
            {/*      alt="Gambar Webstie Restoran App"*/}
            {/*      className="rounded-sm h-auto w-full"*/}
            {/*    />*/}
            {/*  </figure>*/}
            {/*  <div>*/}
            {/*    <h2 className=" text-lg">Restaurant App</h2>*/}
            {/*    <p className="text-xs">*/}
            {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
            {/*      Adipisci corporis eaque facere ipsa iure laudantium minus*/}
            {/*      necessitatibus odit quae suscipit!*/}
            {/*    </p>*/}
            {/*    <div className=" flex items-center gap-x-4 mt-3">*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/js.webp"*/}
            {/*          alt="Logo Js"*/}
            {/*          className="w-12"*/}
            {/*        />*/}
            {/*      </figure>*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/html.webp"*/}
            {/*          alt="Logo HTML "*/}
            {/*          className="w-10"*/}
            {/*        />*/}
            {/*      </figure>{" "}*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/css.png"*/}
            {/*          alt="Logo CSS"*/}
            {/*          className="w-10"*/}
            {/*        />*/}
            {/*      </figure>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="mt-8 bg-[#252632] p-3 shadow-xl rounded-lg border border-[#252632]">*/}
            {/*  <figure className="overflow-hidden">*/}
            {/*    <img*/}
            {/*      src="/src/assets/second.png"*/}
            {/*      alt="Gambar Webstie Restoran App"*/}
            {/*      className="rounded-sm h-auto w-full"*/}
            {/*    />*/}
            {/*  </figure>*/}
            {/*  <div>*/}
            {/*    <h2 className=" text-lg">SecondLife App</h2>*/}
            {/*    <p className="text-xs">*/}
            {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
            {/*      Adipisci corporis eaque facere ipsa iure laudantium minus*/}
            {/*      necessitatibus odit quae suscipit!*/}
            {/*    </p>*/}
            {/*    <div className=" flex items-center gap-x-4 mt-3">*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/reactjs.webp"*/}
            {/*          alt="Logo Reactjs"*/}
            {/*          className="w-10"*/}
            {/*        />*/}
            {/*      </figure>*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/tailwind.png"*/}
            {/*          alt="Logo Tailwind "*/}
            {/*          className="w-10"*/}
            {/*        />*/}
            {/*      </figure>{" "}*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/figma.png"*/}
            {/*          alt="Logo Figma"*/}
            {/*          className="w-5"*/}
            {/*        />*/}
            {/*      </figure>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>{" "}*/}
            {/*<div className="mt-8 bg-[#252632] p-3 shadow-xl rounded-lg border border-[#252632]">*/}
            {/*  <figure className="overflow-hidden">*/}
            {/*    <img*/}
            {/*      src="/src/assets/vend.png"*/}
            {/*      alt="Gambar Webstie Restoran App"*/}
            {/*      className="rounded-sm h-auto w-full"*/}
            {/*    />*/}
            {/*  </figure>*/}
            {/*  <div>*/}
            {/*    <h2 className=" text-lg">Vending Machine App</h2>*/}
            {/*    <p className="text-xs">*/}
            {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
            {/*      Adipisci corporis eaque facere ipsa iure laudantium minus*/}
            {/*      necessitatibus odit quae suscipit!*/}
            {/*    </p>*/}
            {/*    <div className=" flex items-center gap-x-4 mt-3">*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/reactjs.webp"*/}
            {/*          alt="Logo Reactjs"*/}
            {/*          className="w-10"*/}
            {/*        />*/}
            {/*      </figure>*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/tailwind.png"*/}
            {/*          alt="Logo Tailwind "*/}
            {/*          className="w-10"*/}
            {/*        />*/}
            {/*      </figure>{" "}*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/figma.png"*/}
            {/*          alt="Logo Figma"*/}
            {/*          className="w-5"*/}
            {/*        />*/}
            {/*      </figure>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>{" "}*/}
            {/*<div className="mt-8 bg-[#252632] p-3 shadow-xl rounded-lg border border-[#252632]">*/}
            {/*  <figure className="overflow-hidden">*/}
            {/*    <img*/}
            {/*      src="/src/assets/split-bill.png"*/}
            {/*      alt="Gambar Webstie Restoran App"*/}
            {/*      className="rounded-sm h-auto w-full"*/}
            {/*    />*/}
            {/*  </figure>*/}
            {/*  <div>*/}
            {/*    <h2 className=" text-lg">Split Bill App</h2>*/}
            {/*    <p className="text-xs">*/}
            {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
            {/*      Adipisci corporis eaque facere ipsa iure laudantium minus*/}
            {/*      necessitatibus odit quae suscipit!*/}
            {/*    </p>*/}
            {/*    <div className=" flex items-center gap-x-4 mt-3">*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/reactjs.webp"*/}
            {/*          alt="Logo Reactjs"*/}
            {/*          className="w-10"*/}
            {/*        />*/}
            {/*      </figure>*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/tailwind.png"*/}
            {/*          alt="Logo Tailwind "*/}
            {/*          className="w-10"*/}
            {/*        />*/}
            {/*      </figure>{" "}*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/figma.png"*/}
            {/*          alt="Logo Figma"*/}
            {/*          className="w-5"*/}
            {/*        />*/}
            {/*      </figure>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>{" "}*/}
            {/*<div className="mt-8 bg-[#252632] p-3 shadow-xl rounded-lg border border-[#252632]">*/}
            {/*  <figure className="overflow-hidden">*/}
            {/*    <img*/}
            {/*      src="/src/assets/tokocat.png"*/}
            {/*      alt="Gambar Webstie Restoran App"*/}
            {/*      className="rounded-sm h-auto w-full"*/}
            {/*    />*/}
            {/*  </figure>*/}
            {/*  <div>*/}
            {/*    <h2 className=" text-lg">TokoCat App</h2>*/}
            {/*    <p className="text-xs">*/}
            {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
            {/*      Adipisci corporis eaque facere ipsa iure laudantium minus*/}
            {/*      necessitatibus odit quae suscipit!*/}
            {/*    </p>*/}
            {/*    <div className=" flex items-center gap-x-4 mt-3">*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/reactjs.webp"*/}
            {/*          alt="Logo Reactjs"*/}
            {/*          className="w-10"*/}
            {/*        />*/}
            {/*      </figure>*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/tailwind.png"*/}
            {/*          alt="Logo Tailwind "*/}
            {/*          className="w-10"*/}
            {/*        />*/}
            {/*      </figure>{" "}*/}
            {/*      <figure>*/}
            {/*        <img*/}
            {/*          src="/src/assets/figma.png"*/}
            {/*          alt="Logo Figma"*/}
            {/*          className="w-5"*/}
            {/*        />*/}
            {/*      </figure>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </>
  );
}
