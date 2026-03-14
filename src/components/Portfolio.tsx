import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.71878-15/608915511_1144509287762526_4568993608900047733_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=MzgwMDAxMTc1MTk0NjM3MDkwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=PL1_LrRngNIQ7kNvwGOHKY1&_nc_oc=AdlahIm3TVXTOb2S_K0TciYDzEbJEa76Hptg6XmoqY12v3VysCLqHmFoa3Hp4s_Ncm8&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=8HSQWUhUMgx8j5iiMD_vsQ&_nc_ss=8&oh=00_AfwNuRoY3zDqH-wLhlcpVLxxgCNCWx6uSAVY-bl5bSNw6g&oe=69BB589D',
    'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.71878-15/606619792_4344625979188643_2676165575990758283_n.jpg?stp=dst-jpegr_e15_tt6&_nc_cat=102&ig_cache_key=Mzc5NjQ5MDUwMTkyNjk5MjAzNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2Lmhkci5DMyJ9&_nc_ohc=_wM8utY_zsgQ7kNvwG-3XS4&_nc_oc=AdlmDTDZH1xJPIRfPIdgXI7-KQuOmah2MLpYhLh02f8XSBWODioXTemXIGAFq2OMmkc&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&se=-1&_nc_ht=instagram.fdac2-2.fna&_nc_gid=8HSQWUhUMgx8j5iiMD_vsQ&_nc_ss=8&oh=00_Afz09xKsHiGWjdO9PD59NX89XvGSTtJPJ2mtBHXBG2AabA&oe=69BB6774',
    'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/580572723_18085619168513287_5288052895693126069_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&ig_cache_key=Mzc2MzkyNjA5MzI0MTg0MDk3NzE4MDg1NjE5MTYyNTEzMjg3.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHg5NTYuc2RyLkMzIn0%3D&_nc_ohc=xbiDLg1sECMQ7kNvwFHhgBy&_nc_oc=AdlBU2SsfPWOrC6pUU_b8MDmhYVerFvmbmHd7O502xsL-59CMpxxboShD53Pv2Hms7A&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=8HSQWUhUMgx8j5iiMD_vsQ&_nc_ss=8&oh=00_AfyKOspwunxa6BPaxIpDk6hjqai-zQirNwZMZO8yv6V8Ow&oe=69BB4E3B',
    'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/559226800_18080763977513287_8682495772333014453_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=108&ig_cache_key=MzczNDc5NTA3OTAyMjM0MDAyMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=afkXfKFFpxQQ7kNvwGWRcqY&_nc_oc=AdkoC1U03ccBTVaFEImest15oFJ4iUKREu8MpRT9BhiHhURW2tLYQJZs8yrYa8rWTo8&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=8HSQWUhUMgx8j5iiMD_vsQ&_nc_ss=8&oh=00_AfzxhP-cIlNEqcrgluSWPUW4hkej3fU9BNxYJiQWN2e_GQ&oe=69BB5A95',
    'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/524394568_18073106591513287_4552120625697216564_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=106&ig_cache_key=MzY4NzY5NTEyNTI3NTk2OTMwNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=VNAfEJgSI1YQ7kNvwEm0IG0&_nc_oc=AdnBbBdA-U5FglK4kDvtctrkxWHeoQXMBhSz8hZZO3iIiCCJX3VsVBl4HonpLjuLg_M&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=8HSQWUhUMgx8j5iiMD_vsQ&_nc_ss=8&oh=00_Afyv8yXAwaN_o6_pUHMdp5UKmbXZLCr9tmO5H3PZIa0PIA&oe=69BB58E5',
    'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/517458300_18071100023513287_5094573213001896628_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ig_cache_key=MzY3NDUwNTEwOTUwMDkxNzE2MTE4MDcxMTAwMDE3NTEzMjg3.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=R7Xiq0fvaVMQ7kNvwFzBIgY&_nc_oc=Adn6keFrBzkkKO0Nd43I0uwjaUHc_HrlwrDuE7GtdPdO-Od8qQy_ybkb8joXGjTDzYQ&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=8HSQWUhUMgx8j5iiMD_vsQ&_nc_ss=8&oh=00_AfzaJN7WgIh8g0gd7XmqYLlfSZGjwItVEe-OO8dnDMrWMA&oe=69BB6961',
    'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.75761-15/504193411_18067177463513287_2500695359161643310_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=102&ig_cache_key=MzY0ODM4MTk1NjkyOTYyMjQyNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=cOjVroIXlngQ7kNvwHB8zqF&_nc_oc=AdmEV1Uy_aXAZ5qRIq4xycG1tvKhymNtHRHn5uH4mvOz-FaC9PyqqGX02iaakxSN4Ac&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=8HSQWUhUMgx8j5iiMD_vsQ&_nc_ss=8&oh=00_AfxbZ2Pt9V1wMR5u2iOFljrQ5i6LNA_n-SlGAntJpwsNow&oe=69BB4E73',
    'https://instagram.fdac2-2.fna.fbcdn.net/v/t39.30808-6/499986018_1168700978602644_4178415834095440402_n.jpg?stp=c0.0.1080.1350a_cp6_dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzYzODkzNjUwMzU4MjcwNDg4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MS5zZHIuQzMifQ%3D%3D&_nc_ohc=USaP6qMhpiwQ7kNvwHOmss4&_nc_oc=Adm-p-K73E8XThlaMf0AAcEHboFJ4dedwQ4b4EGQpQsnwXIUqXZHzrZUJgqMNTQUDLI&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=8HSQWUhUMgx8j5iiMD_vsQ&_nc_ss=8&oh=00_Afwpe-iUR_qLFUY_KmYCFOIn45JSZ4agmymcbsFupmLaKw&oe=69BB5DD1',
    'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.75761-15/497716694_18064854116513287_8553240635821926006_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=MzYzMzc1NDYxMDY5OTYxMjg3NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=0Efb7dP87DEQ7kNvwEMgUSU&_nc_oc=AdmiVeeQaXlIu7qStI7qB4njgOXkeLSqBpb5S7MM8oSnrgZXPs0VFNVwGHaUoONQUSc&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=eVGxN5PXDGHiz-MTt3fsUw&_nc_ss=8&oh=00_AfxS-TvOX0jnf1SOso-X9mcUraj0LyEE6WfXiNOtsimaTQ&oe=69BB4E06',
    'https://instagram.fdac2-2.fna.fbcdn.net/v/t39.30808-6/495037948_1157736193032456_2399186482611821137_n.jpg?stp=c0.0.810.1012a_cp6_dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzYyNzk4MDIzNTMwODYwODQ4MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjgxMHgxMDEzLnNkci5DMyJ9&_nc_ohc=xKHYsBnhk-gQ7kNvwHemL6P&_nc_oc=AdnH90ZBjDT0vgdA_t5y9UtR7h6_y92euHGBfp0H1zO_-RZSeM4z2e3OMGYwGi9l1D0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=eVGxN5PXDGHiz-MTt3fsUw&_nc_ss=8&oh=00_AfxxwXdG0WXtFSsw-ah8SAAqhvWXVMtqvFeE1b_MYpCAXQ&oe=69BB5C09',
    'https://instagram.fdac2-2.fna.fbcdn.net/v/t39.30808-6/495551925_1155865259886216_9189212549525340369_n.jpg?stp=c0.0.1080.1350a_cp6_dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzYyNjEyNzkxNjUzNTY1OTQyMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MS5zZHIuQzMifQ%3D%3D&_nc_ohc=GsNEeFcue9QQ7kNvwFuOgjQ&_nc_oc=AdlSUG3CayJt22i04EOfMWcJ0QW8nBRWbFduHr-5m4SuIcJJZmePwKzKbe58FVWkvF0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=eVGxN5PXDGHiz-MTt3fsUw&_nc_ss=8&oh=00_AfyNEvdKtvDpL1ESiFApPDJWphbezAM1681xNBCgxM6mvQ&oe=69BB3E37',
    'https://instagram.fdac2-2.fna.fbcdn.net/v/t39.30808-6/492219784_1146767497462659_1954211359082099658_n.jpg?stp=c0.0.1080.1350a_cp6_dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzYxNzgzNTE3OTgwNTQ2OTI2NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MS5zZHIuQzMifQ%3D%3D&_nc_ohc=4g7Ek7JCiQwQ7kNvwHWEFk_&_nc_oc=AdnXTWyJAYdfTk9jmYPptZEee5UYeA5nLI99wn-GIKe_mn9JGKSzIUY5badbtjCuzRM&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=eVGxN5PXDGHiz-MTt3fsUw&_nc_ss=8&oh=00_Afz949kswK4RY2rqWR1mblPIrjZt1iN2Mx81GIWsUFR8OQ&oe=69BB6459',
    'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.71878-15/504099452_709393348505335_1919090221676380575_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ig_cache_key=MzYwNzY0NTU5NDEyMTk1NTczNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=fFad2oi7nhoQ7kNvwHDP807&_nc_oc=AdmuFALOSRkFJ7mKilpkBJydU65igQmr9mLZpB90Chbhfx8ODUY1mN_Ahqk2HHke8g4&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=eVGxN5PXDGHiz-MTt3fsUw&_nc_ss=8&oh=00_AfxS98uE6otTuQQ4HcA0_X24jQqFLdLi73HT3vM7xa2LDw&oe=69BB4A7A',
    'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.71878-15/503040652_1204338934236635_3381254833976656150_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ig_cache_key=MzYxMDA5MjI3NDkwNzQ0Mzc3OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=1hUjIG9SqpYQ7kNvwFrpaU2&_nc_oc=AdlSmy4RwnvvXuoxJTPyGh-u4t76lmux1LWt9YrUsotv8YSQkt0muTF0jYXU-pJgnl8&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=eVGxN5PXDGHiz-MTt3fsUw&_nc_ss=8&oh=00_Afw8U-bFOr3JCzhSMQh-Pl6YsuTN3RiJP944WiltZiDIrQ&oe=69BB38F8',
    'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.75761-15/475755132_18053470046513287_4643319283277892703_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzU1ODEwNDg4MzUwMTgwODY2MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyOTB4MTI4OS5zZHIuQzMifQ%3D%3D&_nc_ohc=TpFJTkqAhkwQ7kNvwHlyDK0&_nc_oc=Adn-ig0AylTV0ajsfuO3fVURfdPFtv_tlX5LuDmbhMoXNAdqce5rxY-xTXLm9t3cCN4&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=eVGxN5PXDGHiz-MTt3fsUw&_nc_ss=8&oh=00_Afzq3lBNyQhIxlsEF0XPesGc63dC1fmhgo1Y-Gdx6eRKjQ&oe=69BB4BA9',
    'https://instagram.fdac2-1.fna.fbcdn.net/v/t39.30808-6/494046274_1149333783872697_7451588510119889324_n.jpg?stp=c0.1.1080.1349a_cp6_dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzU5OTA4MzA4MTc2NjI0MzQ3Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MS5zZHIuQzMifQ%3D%3D&_nc_ohc=G4cDcqwYDUIQ7kNvwEo_haU&_nc_oc=AdnBAz4j39nXUfTjCj1eLCtpSjAlLY0HDJuM6OJDn-Up9JdVRChudONpN7g4QVkAUfU&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=eVGxN5PXDGHiz-MTt3fsUw&_nc_ss=8&oh=00_Afx6nUpaJ4PJndqvj6lY0-zEj5U2wVAJD9h5Iteb96WGuA&oe=69BB529F',
    'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.75761-15/472996248_18051087608513287_4876221969128648560_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=102&ig_cache_key=MzU0MjYxMjg5ODgxNTk5NTAxNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=1h94SnZ2ZH4Q7kNvwGz8pS_&_nc_oc=AdkXibzEcu_nWESNUPBLSgtaVymVzbDgGcTKEAjeg1JEWn9sF4vkrwp0XeDzN3tPgdk&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=y-E3CZWSrG_c2NGWraMnBg&_nc_ss=8&oh=00_AfxY3NVnOUaq_W7_Xl0g-QBLMExGmw3pFzX6N4K87O75lw&oe=69BB4657',
    'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.71878-15/624813652_877959405021041_2387471596859665061_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ig_cache_key=MzI5ODI0MzQ0NDQ4MzkzMTU4MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHg5MDAuc2RyLkMzIn0%3D&_nc_ohc=ET-VcDESGR8Q7kNvwFGmKpN&_nc_oc=AdnISP741cq_2QlvEPuQ_V42xsM2x4k4bc__FoYaO3yStDZ_M3E8GtttNI36fKi7Lcs&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=y-E3CZWSrG_c2NGWraMnBg&_nc_ss=8&oh=00_AfxKb5bos9kCfoVKzH5JYqKbnBa_8cf3whJH0JG-W5ikLg&oe=69BB568C',
    'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.29350-15/279625527_316309443950525_7821960323090845468_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MjgzMDI3OTkxMzMxNjQ5MDc4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuZGVmYXVsdF9pbWFnZS5DMyJ9&_nc_ohc=cdtIYQ2-kr4Q7kNvwGbvEzk&_nc_oc=AdmkkSQx0P0zUab4YZTjOVcdvjnTzOFsNR-H4yModstfznEsfOoNnR6SG6WfB7sDaFc&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=y-E3CZWSrG_c2NGWraMnBg&_nc_ss=8&oh=00_Afy8aA-Q9P_ZUCXpAivskZSG-RJZ4hOyw5qzKqqJWHrHyA&oe=69BB6618'
  ];

  return (
    <section id="portfolio" className="py-16 md:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-sm font-bold tracking-widest uppercase text-secondary mb-4 block">Project Gallery</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              A Showcase of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Excellence</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
              Explore our portfolio of meticulously crafted landscapes and outdoor living spaces.
            </p>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            href="#contact" 
            className="group flex items-center gap-3 text-primary font-bold text-lg hover:text-blue-800 transition-colors"
          >
            Start Your Project
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rotate-45">
              <ArrowUpRight size={24} />
            </div>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 50 }}
              className="relative rounded-[2rem] overflow-hidden aspect-[4/5] group shadow-xl shadow-gray-200/50"
            >
              <img
                src={img}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-2 block">Featured Work</span>
                  <h3 className="text-white text-3xl font-bold mb-6">Estate Transformation</h3>
                  <button className="flex items-center gap-2 text-white font-semibold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors">
                    View Details <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
