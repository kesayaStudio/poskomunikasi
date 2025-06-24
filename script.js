document.addEventListener('DOMContentLoaded', function () {
    
    // --- DATA BERITA DARI ANDA ---
    const mockArticles = {
        politik: [
            { 
                id: 'pol-kaesang-1', 
                author: 'M. Ubaidillah A. M.',
                img: 'images/politik 1.jpg', // <-- GANTI URL GAMBAR DI SINI
                category: 'Politik', 
                title: 'Kaesang Pastikan Jokowi Tak Berebut Kursi Ketum PSI: Anak dan Bapak Tak Akan Bersaing', 
                time: 'Sabtu, 21 Juni 2025', 
                content: '<p>Teka-teki mengenai potensi Presiden ke-7 RI Joko Widodo (Jokowi) mencalonkan diri sebagai Ketua Umum Partai Solidaritas Indonesia (PSI) akhirnya terjawab. Putra bungsu sekaligus Ketua Umum PSI, Kaesang Pangarep, memastikan bahwa sang ayah tidak akan ikut dalam bursa Pemilu Raya PSI 2025. Kaesang beralasan, tidak mungkin seorang anak dan bapak saling berkompetisi memperebutkan posisi yang sama.</p><p>Pernyataan ini disampaikan Kaesang usai menyerahkan berkas pendaftaran calon ketua umum PSI di kantor DPP PSI, Jakarta, Sabtu (21/6/2025). Ia mengaku telah membahas hal tersebut dengan Jokowi selama seminggu terakhir. Kaesang juga menyebut telah meyakinkan Jokowi untuk memberikan kesempatan kepada generasi muda agar menjadi pemimpin masa depan.</p><p>Pengamat Politik Universitas Islam Negeri (UIN) Syarif Hidayatullah Jakarta, Adi Prayitno, turut mengomentari dinamika ini. Menurut Adi, keputusan Jokowi untuk tidak menduduki pucuk pimpinan partai berlambang mawar itu secara langsung terkonfirmasi dari pernyataan Kaesang. "Karena tidak mungkin anak sama bapak bersaing, itu kan pernyataan Kaesang secara eksplisit. Artinya Kaesang maju, Jokowi tidak maju," kata Adi.</p>' 
            },
            { 
                id: 'pol-kediri-1', 
                author: 'M. Ubaidillah A. M.',
                img: 'images/politik 2.jpg', // <-- GANTI URL GAMBAR DI SINI
                category: 'Politik', 
                title: 'Wali Kota dan Wakil Wali Kota Kediri Sowan ke Kiai, Mohon Doa dan Dukungan Jelang 1 Muharram 1447 H', 
                time: 'Senin, 23 Juni 2025', 
                content: '<p>Wali Kota Kediri Vinanda Prameswati, yang akrab disapa Mbak Wali, bersama Wakil Wali Kota Qowimuddin Thoha (Gus Qowim), melakukan kunjungan silaturahmi ke sejumlah ulama dan kiai terkemuka di Kota Kediri pada Senin, 23 Juni 2025. Kunjungan ini bertujuan untuk mempererat tali silaturahmi antara pemerintah daerah dengan tokoh agama, sekaligus mengundang para kiai untuk menghadiri acara doa akbar peringatan Tahun Baru Islam, 1 Muharram 1447 Hijriah.</p><p>Dalam kunjungan tersebut, Mbak Wali dan Gus Qowim tidak hanya menyampaikan undangan, tetapi juga secara khusus memohon doa restu dari para kiai agar Kota Kediri senantiasa berada dalam lindungan Allah SWT, serta terus berkembang menjadi kota yang makmur, aman, dan diberkahi.</p><p>Para kiai menyambut hangat inisiatif pemerintah kota untuk menjalin kolaborasi spiritual dan sosial demi kemajuan Kediri yang lebih baik. Silaturahmi ini menegaskan kembali bentuk penghormatan pemerintah terhadap peran penting ulama dalam menjaga keharmonisan dan kedamaian masyarakat.</p>' 
            }
        ],
        ekonomi: [],
        internasional: [],
        olahraga: [
             { 
                id: 'ola-1', 
                author: 'Tiko Budianto',
                img: 'images/olahraga tiko.png', // <-- GANTI URL GAMBAR DI SINI
                category: 'Olahraga', 
                title: 'China: Negara Adidaya yang Gagal di Sepak Bola', 
                time: 'Jumat, 6 Juni 2025', 
                content: '<p>Langkah tim nasional China menuju Piala Dunia 2026 resmi terhenti setelah takluk dari Indonesia dengan skor tipis 0-1 pada laga ketiga Kualifikasi Piala Dunia 2026 zona Asia. Pertandingan berlangsung di Stadion Utama Gelora Bung Karno (SUGBK), Jakarta, Kamis (5/6/2025) malam. Satu-satunya gol kemenangan tim Garuda dicetak Ole Romeny melalui titik putih pada menit ke-45.</p><p>Salah satu faktor utama yang meniadakan pengembangan sepak bola di Cina adalah kontrol Partai Komunis dalam keputusan kelompok sepak bola nasional. Asosiasi Sepak Bola Tiongkok (CFA), yang seharusnya mandiri, sebenarnya tunduk pada manajemen umum (gas) olahraga. Ini bertentangan dengan prinsip FIFA, yang melarang intervensi politik dalam sepak bola.</p><p>Budaya pendidikan di China yang sangat menekankan prestasi akademik membuat banyak orang tua enggan mendorong anak-anak mereka untuk menekuni sepak bola. Tekanan akademik yang tinggi berarti bahwa partisipasi sepak bola anak -anak akan berkurang, terutama setelah 13 tahun. Ini menyebabkan kurangnya pemain muda berbakat yang dapat tumbuh menjadi pemain profesional.</p>' 
            }
        ],
        entertainment: [
             { 
                id: 'ent-1', 
                author: 'Aghitsna Wildan',
                img: 'images/kuno kini aghis.png', // <-- GANTI URL GAMBAR DI SINI
                category: 'Entertainment', 
                title: 'Kuno Kini Dorong Tumbuhnya Kreativitas Anak Muda dalam Dunia Hiburan', 
                time: 'Selasa, 3 Juni 2025', 
                content: '<p>Festival Kuno Kini 2025 telah resmi ditutup pada hari sabtu malam minggu kemarin. Festival Kuno Kini yang sudah diadakan untuk kedua kalinya ini telah berhasil memberikan dampak yang sangat banyak manfaat terhadap masyarakat. Terutama dalam memberikan ruang bagi para seniman untuk berkesplorasi.</p><p>“ini merupakan sebuah catatan yang sangat membanggakan. Menunjukkan bahwa event ini benar-benar ditunggu dan disukai oleh warga Kediri dan sekitarnya.” Ucap Puspitorini Diann Hartanti manager event Jawa Pos Radar Kediri yang bertindak sebagai ketua panitia.</p><p>“Kedepannya atas permintaan banyak pengunjung, kami akan perbanyak lagi pamean dengan nuansa jadul (jaman dulu). Seperti permainan, makanan jadul, dan lainnya untuk membawa masyarakat semakin mengenang memori masa lalu.” Lanjut Puspitorini Dian Hartanti.</p>' 
            }
        ],
        kesehatan: [
            {
                id: 'kes-febbi-1',
                author: 'Febbi Faelani R.',
                img: 'images/kesehatan febi.png', // <-- GANTI URL GAMBAR DI SINI
                category: 'Kesehatan',
                title: 'Trend Putih & Bersih Faktor Pendorong Overtreatment, Buruk Bagi Kesehatan Kulit Wajah',
                time: 'Sabtu, 31 Mei 2025',
                content: `<p>Dokter SPKK menjelaskan efek buruk akibat overtreatment dapat disebabkan oleh beberapa faktor, dan terjadinya efek samping yang tidak diinginkan dari bahan aktif dalam produk perawatan yang digunakan secara berlebihan. Penting untuk diingat bahwa setiap kulit memiliki toleransi yang berbeda, sehingga apa yang cocok untuk satu orang belum tentu cocok untuk orang lain. Overtreatment dapat memperburuk kondisi kulit yang sudah ada, bahkan memicu munculnya masalah kulit baru.</p><p>"Efek buruk itu efek samping. Seperti perawatan yang harus sangat menghindari matahari setelah treatment, dilakukan treatment secara tidak profesional, kemudian pemberian resep yang kurang di pahami pasien saat pengaplikasiannya sendiri karna pasien juga bisa membeli sendiri resepnya itu juga yang berdampak buruk juga bukan hanya pasien tapi juga bagi dokter juga yang mungkin saja bisa disalahkan" kata dr. Sri. Awalia, M.Kes., Sp.DVE, Subsp.DAI, Ph.D. pada channel YouTube FKKMK UGM Official, Jumat (18/04/2025).</p><p>Peran dokter (SPKK) yang profesional tidak hanya terbatas pada tindakan medis semata, tetapi juga mencakup pemahaman yang mendalam tentang masa pemulihan (downtime) pasca-perawatan. Kemampuan untuk mengantisipasi, menjelaskan, dan meminimalkan downtime merupakan bagian integral dari praktik kedokteran yang bertanggung jawab dan berpusat pada pasien. Seorang dokter SPKK yang profesional akan memberikan informasi yang komprehensif kepada pasien mengenai potensi downtime, termasuk durasi, gejala yang mungkin muncul, dan cara penanganannya.</p><p>"Pastikan keluhan itu penyebabnya apa, Jaga makanan dan pola gaya hidup bagus tidak capek serta stress akan membuat semua keluhan kulit akan membaik, pikiran kembali treatment yang dilakukan akan menghasilkan atau menimbulkan efek seperti apa dikemudian hari makan jadilah bijak untuk memutuskan tindakan yang dilakukan pada saat treatment, terakhir siapkan pertanyaan saat konsultasi jangan gunakan persepsi sendiri penting lalu diskusikan dan sampaikan kronologi sehingga dokter tidak salah penanganan" tandasnya</p>`
            }
        ],
        pendidikan: [
            { 
                id: 'pen-1', 
                author: 'Zulfa',
                img: 'images/pendidikan zuLFA.png', // <-- GANTI URL GAMBAR DI SINI
                category: 'Pendidikan', 
                title: 'Dari TK Sampai SMA, 7 Terobosan Kemendikdasmen untuk Generasi Emas 2045', 
                time: 'Sabtu, 31 Mei 2025', 
                content: '<p>Tujuh program revolusioner Kemendikdasmen siap mengubah wajah pendidikan Indonesia. Mulai dari wajib belajar 13 tahun hingga penguasaan coding dan AI untuk anak SD sampai SMA transformasi besar-besaran ini bukan lagi wacana, melainkan kenyataan yang sedang diwujudkan.</p><p>Dalam acara Konsolidasi Nasional Pendidikan 2025, Menteri Pendidikan Dasar dan Menengah Prof. Abdul Mukti mengungkap 7 program terobosan yang akan mengubah wajah pendidikan Indonesia dari TK hingga SMA. "Lebih dari 30% penduduk Indonesia berusia PAUD hingga pendidikan menengah. Kualitas pendidikan mereka akan menentukan kualitas Indonesia masa depan," tegas Mendikdasmen.</p><p>Yang lebih menarik lagi, mulai tahun ini anak kelas 5-6 SD, SMP, dan SMA/SMK akan diperkenalkan dengan pelajaran coding dan kecerdasan buatan (AI). "Bisa sebagai mata pelajaran pilihan, terintegrasi dengan pelajaran lain, atau ekstrakurikuler," jelas Mendikdasmen.</p>' 
            }
        ],
         budaya: [
            { 
                id: 'bud-1', 
                author: 'Erika',
                img: 'images/adat aceh erika.png', // <-- GANTI URL GAMBAR DI SINI
                category: 'Budaya', 
                title: '"Peusijuek" Menyentuh Hati di Manila: Ketika Pernikahan Adat Aceh Menjadi Diplomasi Budaya', 
                time: 'Sabtu, 31 Mei 2025', 
                content: '<p>Pada malam yang hangat di Wisma Duta Besar RI di Manila, Filipina, suasana istimewa tercipta ketika aroma rempah dan musik tradisional Aceh mengiringi Tari Ranup Lampuan oleh lima penari diaspora Indonesia untuk menyambut para tamu. Dalam momen tersebut, Kedutaan Besar RI menyelenggarakan simulasi pernikahan adat Aceh bertajuk “Peusijuek: The Blessing of a Beginning”.</p><p>Duta Besar RI Agus Widjojo dan sang istri, Ranny Widjojo, yang memerankan orang tua dari mempelai adat. Mereka mengiringi “pengantin” yang diperankan oleh anggota diaspora Indonesia dalam prosesi menuju pelaminan.</p><p>Acara yang dihadiri oleh sekitar 110 tamu undangan ini tak hanya menjadi hiburan semata, tapi juga menjadi jendela yang memperkenalkan wajah Indonesia yang kaya dan beragam. Lewat sebuah prosesi sederhana namun penuh makna, Indonesia menyapa dunia dengan tidak dengan pidato panjang, tetapi dengan doa, tarian, makanan, dan senyuman.</p>' 
            }
        ]
    };
    
    // Membuat kategori Beranda dari gabungan berita baru
    mockArticles.beranda = [
        mockArticles.politik[0],
        mockArticles.kesehatan[0],
        mockArticles.budaya[0],
        mockArticles.olahraga[0]
    ];

    const allArticles = Object.values(mockArticles).flat().reduce((acc, article) => { acc[article.id] = article; return acc; }, {});

    // --- ELEMEN DOM ---
    const mainContent = document.getElementById('main-content');
    const articleView = document.getElementById('article-view');
    const articlesGrid = document.getElementById('articles-grid');
    const sectionTitle = document.getElementById('section-title');
    const allNavLinks = document.querySelectorAll('.main-nav a[data-category]');
    const sidebarCategoryList = document.getElementById('sidebar-category-list');
    const popularList = document.getElementById('popular-list');
    const backButton = document.getElementById('back-button');
    const heroSlider = document.getElementById('hero-slider');
    const hamburgerButton = document.getElementById('hamburger-menu-button');
    const mainNav = document.getElementById('main-nav');
    const dropdownLink = document.querySelector('.nav-link-dropdown');

    // --- FUNGSI RENDER WIDGET DINAMIS ---
    function renderWidgets(){
         const popularArticles = [allArticles['pol-kaesang-1'], allArticles['pol-kediri-1'], allArticles['bud-1'], allArticles['pen-1']];
         popularList.innerHTML = '';
         popularArticles.forEach((article, index) => {
             const li = document.createElement('li');
             li.innerHTML = `<a data-id="${article.id}"><span>${index + 1}</span>${article.title}</a>`;
             popularList.appendChild(li);
         });
    }

    // --- FUNGSI SLIDER ---
    let slideIndex = 0;
    let slideInterval;
    function renderSlider() {
        heroSlider.innerHTML = `<a class="prev" id="slider-prev">&#10094;</a><a class="next" id="slider-next">&#10095;</a><div class="dots-container" id="dots-container"></div>`;
        const sliderArticles = mockArticles.beranda.slice(0, 4); 
        sliderArticles.forEach((article, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.setAttribute('data-id', article.id);
            slide.innerHTML = `<div class="hero-article"><img src="${article.img}" alt="${article.title}"><div class="hero-article-content"><span class="category-tag">${article.category}</span><h2>${article.title}</h2></div></div>`;
            heroSlider.querySelector('#slider-prev').insertAdjacentElement('beforebegin', slide);
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.addEventListener('click', () => { currentSlide(index); });
            heroSlider.querySelector('#dots-container').appendChild(dot);
        });
         heroSlider.querySelector('#slider-prev').addEventListener('click', () => plusSlides(-1));
         heroSlider.querySelector('#slider-next').addEventListener('click', () => plusSlides(1));
    }
    function showSlides() {
        const slides = document.querySelectorAll('.hero-slider .slide');
        const dots = document.querySelectorAll('.dots-container .dot');
        if (slides.length === 0) return;
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        if (slideIndex >= slides.length) { slideIndex = 0; }
        if (slideIndex < 0) { slideIndex = slides.length - 1; }
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
    }
    function plusSlides(n) { slideIndex += n; showSlides(); resetInterval(); }
    function currentSlide(n) { slideIndex = n; showSlides(); resetInterval(); }
    function resetInterval() { clearInterval(slideInterval); slideInterval = setInterval(() => plusSlides(1), 5000); }

    // --- FUNGSI UTAMA LAINNYA ---
    function showArticleDetail(articleId) {
        const article = allArticles[articleId];
        if (!article) return;
        document.getElementById('article-detail-title').textContent = article.title;
        document.getElementById('article-detail-meta').innerHTML = `<strong>Oleh: ${article.author}</strong> | ${article.category} • ${article.time}`;
        const imgElement = document.getElementById('article-detail-image');
        imgElement.src = article.img;
        imgElement.alt = article.title;
        document.getElementById('article-detail-body').innerHTML = article.content;
        mainContent.classList.add('hidden');
        heroSlider.classList.add('hidden');
        articleView.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
    function showMainContent() {
        mainContent.classList.remove('hidden');
        articleView.classList.add('hidden');
    }
    function renderArticles(category) {
        articlesGrid.innerHTML = '';
        const articlesToRender = mockArticles[category];
        if (!articlesToRender || articlesToRender.length === 0) {
            articlesGrid.innerHTML = '<p>Belum ada berita untuk kategori ini.</p>';
            sectionTitle.textContent = `Berita ${category.charAt(0).toUpperCase() + category.slice(1)}`;
            return;
        };
        sectionTitle.textContent = `Berita ${category.charAt(0).toUpperCase() + category.slice(1)}`;
        articlesToRender.forEach(article => {
            const articleCard = document.createElement('article');
            articleCard.className = 'article-card';
            articleCard.setAttribute('data-id', article.id);
            articleCard.innerHTML = `<img src="${article.img}" alt="${article.title}"><div class="article-content"><span class="category-tag">${article.category}</span><h3>${article.title}</h3><span class="article-meta">Oleh: ${article.author}</span></div>`;
            articlesGrid.appendChild(articleCard);
        });
    }
    
    function navigateToCategory(category) {
         if (!category) return;
            
        showMainContent();

        if (category === 'beranda') {
            heroSlider.classList.remove('hidden');
        } else {
            heroSlider.classList.add('hidden');
        }
        
        allNavLinks.forEach(l => l.classList.remove('active'));
        document.querySelector('.nav-link-dropdown')?.classList.remove('active');

        const targetNavLink = document.querySelector(`.main-nav a[data-category="${category}"]`);
        if(targetNavLink){
            targetNavLink.classList.add('active');
            const parentDropdown = targetNavLink.closest('.dropdown');
            if (parentDropdown) {
                parentDropdown.querySelector('.nav-link-dropdown').classList.add('active');
            }
        }
        
        renderArticles(category);

        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            hamburgerButton.querySelector('i').classList.replace('fa-times', 'fa-bars');
            document.querySelector('.dropdown')?.classList.remove('open');
        }
    }

    // --- EVENT LISTENERS ---
    allNavLinks.forEach(link => {
        const category = link.getAttribute('data-category');
        if(category){
            link.addEventListener('click', function(e) {
                e.preventDefault();
                navigateToCategory(category);
            });
        }
    });
    
    sidebarCategoryList.addEventListener('click', e => {
         if(e.target.tagName === 'A'){
            e.preventDefault();
            navigateToCategory(e.target.getAttribute('data-category'));
         }
    });

    popularList.addEventListener('click', e => {
        e.preventDefault();
        const link = e.target.closest('a');
        if (link && link.dataset.id) {
            showArticleDetail(link.dataset.id);
        }
    });
    
    articlesGrid.addEventListener('click', e => { const card = e.target.closest('.article-card'); if (card) showArticleDetail(card.getAttribute('data-id')); });
    heroSlider.addEventListener('click', e => { const slide = e.target.closest('.slide'); if (slide) showArticleDetail(slide.getAttribute('data-id')); });

    backButton.addEventListener('click', () => {
        const activeLink = document.querySelector('.main-nav a.active[data-category]');
        const activeCategory = activeLink ? activeLink.getAttribute('data-category') : 'beranda';
         if (activeCategory === 'beranda') {
            heroSlider.classList.remove('hidden');
        } else {
            heroSlider.classList.add('hidden');
        }
        showMainContent();
    });
    
    // Hamburger & Dropdown Mobile
    hamburgerButton.addEventListener('click', function () {
        mainNav.classList.toggle('active');
        const icon = hamburgerButton.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    if (dropdownLink) {
         dropdownLink.addEventListener('click', function(e){
            if(window.innerWidth <= 767){
                e.preventDefault();
                this.parentElement.classList.toggle('open');
            }
         });
    }


    // --- INISIASI HALAMAN ---
    renderWidgets();
    renderSlider();
    showSlides();
    resetInterval();
    renderArticles('beranda');
});
