// function scrollSmoothly() {
        //   window.scrollBy(0, 1); // Gulir ke bawah 1 piksel
        // }
        // setInterval(scrollSmoothly, 10);

        // const carousel = document.querySelector('.carousel');
        // const slides = document.querySelectorAll('.slide');
        // let slideIndex = 0;

        // function showSlide(n) {
        //   slides.forEach((slide) => {
        //     slide.style.transform = `translateX(${100 * n}%`;
        //   });
        // }

        // function startCarousel() {
        //   setInterval(() => {
        //     slideIndex++;
        //     if (slideIndex >= slides.length) {
        //       slideIndex = 0;
        //     }
        //     showSlide(slideIndex);
        //   }, 3000); // Ubah waktu interval sesuai kebutuhan
        // }

        // startCarousel();



        const bg = ["./assets/images/bg.png","./assets/images/bg1.png", "./assets/images/bg2.png"];

        const bege1 = document.getElementById("bgcover");
        const bege2 = document.getElementById("bgprofile");
        const bege3 = document.getElementById("bgwedd");

        let currentImageIndexBG = 0;

        function changeImageBG() {
            bege1.src = bg[currentImageIndexBG];
            bege2.src = bg[currentImageIndexBG];
            bege3.src = bg[currentImageIndexBG];
            currentImageIndexBG = (currentImageIndexBG + 1) % bg.length;
        }
        setInterval(changeImageBG, 3000);

        const cewe = ["./assets/images/cewe.png", "./assets/images/cewe1.png", "./assets/images/cewe2.png"];
        const cowo = ["./assets/images/cowo.png", "./assets/images/cowo1.png", "./assets/images/cowo2.png"];

        const fotocewe = document.getElementById("fotocewe");
        const fotocowo = document.getElementById("fotocowo");

        let currentImageIndex = 0;

        function changeImage() {
            fotocewe.src = cewe[currentImageIndex];
            fotocowo.src = cowo[currentImageIndex];
            currentImageIndex = (currentImageIndex + 1) % cewe.length;
        }
        setInterval(changeImage, 2500);

        const tema = ["betawi", "jawa", "ori"];

        const jawa = ["./assets/images/wayangcowo.png", "./assets/images/wayangcewe.png", "./assets/images/wayang.png"];
        const betawi = ["./assets/images/ondelondelcowo.png", "./assets/images/ondelondelcewe.png", "./assets/images/monas.png"];
        const ori = ["./assets/images/doveleft.png", "./assets/images/doveright.png", "./assets/images/ring.png"];

        const iconRcowo = document.getElementById("iconRcowo");
        const iconLcowo = document.getElementById("iconLcowo");
        const iconRcewe = document.getElementById("iconRcewe");
        const iconLcewe = document.getElementById("iconLcewe");
        const iconRdoa = document.getElementById("iconRdoa");
        const iconLdoa = document.getElementById("iconLdoa");
        const iconRjadwal = document.getElementById("iconRjadwal");
        const iconLjadwal = document.getElementById("iconLjadwal");

        let currentImageicon = 0;

        function changeImageicon() {
            switch(currentImageicon) {
              case 1:
                iconRcowo.src = jawa[2];
                iconLcowo.src = jawa[0];
                iconRcewe.src = jawa[1];
                iconLcewe.src = jawa[2];
                iconRdoa.src = jawa[2];
                iconLdoa.src = jawa[2];
                iconRjadwal.src = jawa[1];
                iconLjadwal.src = jawa[0];
                currentImageicon = 2;
                break;
              case 2:
                iconRcowo.src = ori[2];
                iconLcowo.src = ori[0];
                iconRcewe.src = ori[1];
                iconLcewe.src = ori[2];
                iconRdoa.src = ori[2];
                iconLdoa.src = ori[2];
                iconRjadwal.src = ori[1];
                iconLjadwal.src = ori[0];
                currentImageicon = 0;
                break;
              default:
                iconRcowo.src = betawi[2];
                iconLcowo.src = betawi[0];
                iconRcewe.src = betawi[1];
                iconLcewe.src = betawi[2];
                iconRdoa.src = betawi[2];
                iconLdoa.src = betawi[2];
                iconRjadwal.src = betawi[1];
                iconLjadwal.src = betawi[0];
                currentImageicon = 1;
                break;
            }
            
        }

        setInterval(changeImageicon, 2500);

        var modal = document.getElementById("modal-image");
        var images = document.getElementById("show-modal-image");

        function openModal(img) {
          modal.style.display = "block";
          images.src = img.src;

        }

        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }

        const name = (new URLSearchParams(window.location.search)).get('to');
        const guest = document.getElementById('guest-name');
        if (!name || !guest) {
            guest.remove();
        } else {
            const div = document.createElement('div');
            div.classList.add('m-2');
            div.innerHTML = `<p class="mt-0 mb-1 mx-0 p-0" style="font-size: 0.95rem;">${guest.getAttribute('data-message')}</p><h2>${name}</h2>`;
            guest.appendChild(div);
        }

        const progressBar = document.querySelector('.progress-bar');
        const progresst = document.getElementById('progresst');
        let width = 0;

        const animateProgressBar = () => {
            if (width >= 100) {
                setTimeout(() => {
                    document.getElementById('loading').style.display = "none";
                }, 500); // Waktu tunda sebelum pindah halaman
                return;
            }
            width++;
            progressBar.style.width = width + '%';
            progresst.textContent = width ;
            setTimeout(animateProgressBar, 50);
        };

        animateProgressBar();

        function pindahHalaman() {
                    document.getElementById('welcome').style.display = "none";
                    togglePlayPause();
                    window.scrollTo(0, 0);
        }
        
        // Fungsi untuk memutar audio
    let isPlaying = false;
    const button = document.getElementById("button-music");
        button.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
    

    function togglePlayPause() {
    const audio = document.getElementById("myAudio");
      if (isPlaying) {
        audio.pause();
        isPlaying = false;
        button.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
      } else {
        audio.play();
        audio.loop = true;
        button.innerHTML = '<i class="fa-solid fa-circle-pause spin-button"></i>';
        isPlaying = true;
      }
    }

        function countdown(endDate) {
  // Mengambil elemen HTML yang akan menampilkan hitungan mundur
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  // Fungsi untuk memperbarui hitungan mundur setiap detik
  function updateCountdown() {
    // Mendapatkan tanggal dan waktu saat ini
    const now = new Date().getTime();

    // Menghitung selisih waktu antara tanggal akhir dan tanggal sekarang
    const distance = endDate - now;

    // Menghitung hari, jam, menit, dan detik dari selisih waktu
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Memperbarui teks pada elemen HTML
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

    // Jika waktu telah habis
    if (distance < 0) {
      clearInterval(countdownInterval);
      // Tambahkan aksi yang ingin dilakukan ketika waktu habis (opsional)
      console.log('Waktu telah habis!');
    }

  }

  // Memanggil fungsi updateCountdown setiap detik
  const countdownInterval = setInterval(updateCountdown, 1000);
}

// Contoh penggunaan:
const countDownDate = new Date('December 21, 2024 07:59:59').getTime();
countdown(countDownDate);

        function copyToClipboard(id) {
            var from = document.getElementById(id);
            var range = document.createRange();
            window.getSelection().removeAllRanges();
            range.selectNode(from);
            window.getSelection().addRange(range);
            document.execCommand('copy');
            window.getSelection().removeAllRanges();  
            var x = document.getElementById("snackbar");

          // Add the "show" class to DIV
            x.className = "show";

          // After 3 seconds, remove the show class from DIV
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
         }