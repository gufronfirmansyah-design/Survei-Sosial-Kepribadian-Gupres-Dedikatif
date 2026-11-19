
    // =========================================================================
    // URL DEPLOYMENT WEB APP APPS SCRIPT SURVEI GTK KAPUAS 2026
    // =========================================================================
    const GAS_SURVEI_API_URL = window.SURVEI_WEB_CONFIG.apiUrl;

    // BANK PERNYATAAN ANGKET A, B, DAN C (1-8 KEPRIBADIAN, 9-15 SOSIAL)
    const BANK_ANGKET = {
      A: {
        title: "Angket A — Penilaian Guru Berprestasi & Guru Berdedikasi (Oleh Atasan / Rekan Sejawat)",
        instruction: "Berikan skor berdasarkan perilaku peserta yang Anda amati selama 6 bulan terakhir. Pilih angka lebih tinggi jika perilaku lebih konsisten, atau pilih TDM jika belum pernah mengamati situasi tersebut.",
        items: [
          "Ketika tugas belum selesai, menyampaikan keadaan sebenarnya saat diminta melaporkan perkembangannya.",
          "Menyelesaikan bagian tugas yang menjadi tanggung jawabnya dalam kepanitiaan atau kegiatan sekolah.",
          "Hadir tepat waktu pada rapat atau kegiatan sekolah yang telah dijadwalkan.",
          "Ketika terjadi perbedaan pendapat dalam rapat, menyampaikan tanggapan tanpa membentak.",
          "Mematuhi aturan sekolah yang juga dimintanya dipatuhi oleh murid.",
          "Setelah menerima masukan tentang cara kerjanya, menunjukkan perubahan pada pelaksanaan tugas berikutnya.",
          "Ketika melakukan kesalahan dalam tugas bersama, mengakui bagian kesalahannya tanpa menyalahkan rekan lain.",
          "Ketika murid mengalami kesulitan mengikuti kegiatan, menyesuaikan bantuan dengan kebutuhan murid tersebut.",
          "Ketika menegur kesalahan rekan kerja, menggunakan kata-kata yang tidak merendahkan.",
          "Saat berdiskusi, memberi kesempatan rekan menyelesaikan penjelasannya sebelum menanggapi.",
          "Memberikan kesempatan kepada murid dari berbagai latar belakang untuk terlibat dalam kegiatan yang dibimbingnya.",
          "Ketika rekan mengalami kesulitan menyelesaikan tugas sekolah, memberikan bantuan sesuai kemampuannya.",
          "Ketika tugas bersama mengalami kendala, ikut mencari penyelesaian bersama anggota tim.",
          "Ketika orang tua menyampaikan keluhan tentang anaknya, menanggapi dengan penjelasan yang berkaitan dengan keluhan tersebut.",
          "Ketika rekan membutuhkan contoh bahan atau cara kerja yang pernah digunakannya, bersedia membagikannya."
        ]
      },
      B: {
        title: "Angket B — Penilaian Kepala Sekolah Berprestasi (Oleh Atasan / Rekan Sejawat)",
        instruction: "Berikan skor berdasarkan perilaku Kepala Sekolah yang Anda amati selama 6 bulan terakhir. Pilih angka lebih tinggi jika perilaku lebih konsisten, atau pilih TDM jika belum pernah mengamati situasi tersebut.",
        items: [
          "Ketika program sekolah belum terlaksana, menyampaikan keadaan sebenarnya dalam laporan atau rapat evaluasi.",
          "Menindaklanjuti masalah yang sudah disepakati menjadi tanggung jawabnya dalam rapat sekolah.",
          "Hadir tepat waktu pada rapat atau kegiatan sekolah yang telah dijadwalkan.",
          "Ketika menerima keberatan atas keputusannya, menanggapi tanpa membentak.",
          "Mematuhi aturan sekolah yang juga dimintanya dipatuhi oleh guru dan tenaga kependidikan.",
          "Setelah menerima masukan tentang pelaksanaan kegiatan sekolah, memperbaiki pelaksanaan kegiatan berikutnya.",
          "Ketika keputusan yang dibuatnya menimbulkan masalah, mengakui kekeliruannya tanpa melimpahkan kesalahan kepada bawahan.",
          "Ketika menerima laporan murid kesulitan mengikuti kegiatan sekolah, menindaklanjuti agar murid tersebut tetap dapat terlayani.",
          "Ketika menegur kesalahan guru atau tenaga kependidikan, menggunakan kata-kata yang tidak merendahkan.",
          "Saat rapat, memberi kesempatan peserta menyelesaikan penjelasannya sebelum menanggapi.",
          "Memberikan kesempatan kepada guru dan tenaga kependidikan untuk mengikuti kegiatan berdasarkan kriteria yang disampaikan secara terbuka.",
          "Ketika guru atau tenaga kependidikan melaporkan kesulitan kerja, membantu mencari jalan keluarnya.",
          "Ketika kegiatan sekolah mengalami kendala, mengajak pihak yang terlibat untuk mencari penyelesaian bersama.",
          "Ketika orang tua menyampaikan keluhan tentang layanan sekolah, menanggapi dengan penjelasan yang berkaitan dengan keluhan tersebut.",
          "Ketika guru atau tenaga kependidikan menawarkan gagasan kegiatan, memberi kesempatan untuk menjelaskan gagasan tersebut."
        ]
      },
      C: {
        title: "Angket C — Penilaian oleh Murid",
        instruction: "Nilailah berdasarkan pengalamanmu selama 6 bulan terakhir. Bapak/Ibu pada pernyataan di bawah berarti guru atau kepala sekolah yang namanya tertulis di atas. Pilih TDM jika kamu belum pernah mengalami situasi tersebut.",
        items: [
          "Bapak/Ibu menepati janji yang disampaikan kepada murid.",
          "Bapak/Ibu menindaklanjuti urusan murid yang sudah disanggupinya.",
          "Bapak/Ibu hadir sesuai waktu kegiatan yang telah diberitahukan.",
          "Bapak/Ibu tetap tenang ketika menghadapi murid yang melakukan kesalahan.",
          "Bapak/Ibu memberi contoh menaati aturan sekolah.",
          "Bapak/Ibu memperbaiki hal yang dikeluhkan murid setelah mengetahui masalahnya.",
          "Bapak/Ibu bersedia meminta maaf ketika melakukan kesalahan.",
          "Bapak/Ibu memperhatikan kebutuhan murid yang mengalami kesulitan.",
          "Bapak/Ibu berbicara dengan sopan kepada murid.",
          "Bapak/Ibu mendengarkan pendapat murid sampai selesai.",
          "Bapak/Ibu memperlakukan murid dengan adil tanpa pilih kasih.",
          "Bapak/Ibu membantu murid yang membutuhkan pertolongan.",
          "Bapak/Ibu mengajak murid bekerja sama dalam kegiatan sekolah.",
          "Penjelasan Bapak/Ibu mudah saya pahami.",
          "Bapak/Ibu memberi kesempatan kepada murid untuk menyampaikan ide."
        ]
      }
    };

    let STATE = {
      selectedPeserta: null,
      selectedRole: '',
      activeAngketType: 'A',
      answers: Array(15).fill(null),
      selfieData: null,
      adminToken: sessionStorage.getItem('gtk_survei_adm_token') || '',
      adminData: null
    };

    async function callSurveiApi(action, payload = {}) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), action === 'submitSurveiResponse' ? 300000 : 60000);
      try {
        const res = await fetch(GAS_SURVEI_API_URL, {
          method: 'POST', credentials: 'omit', redirect: 'follow',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          signal: controller.signal,
          body: JSON.stringify({ action, token: STATE.adminToken, payload })
        });
        if (!res.ok) throw new Error('Layanan gagal merespons (HTTP ' + res.status + ').');
        let data;
        try { data = await res.json(); }
        catch (_) { throw new Error('Respons backend bukan JSON. Periksa URL dan akses deployment survei.'); }
        if (!data || typeof data.success !== 'boolean') throw new Error('Format respons backend survei tidak sesuai.');
        return data;
      } catch (err) {
        if (err.name === 'AbortError') throw new Error('Waktu tunggu habis. Jika sedang mengirim jawaban, konfirmasikan kepada panitia sebelum mengulang.');
        if (err instanceof TypeError) throw new Error('Layanan tidak dapat dihubungi. Periksa internet dan akses deployment survei.');
        throw err;
      } finally { clearTimeout(timer); }
    }

    async function checkConnection() {
      const el = document.getElementById('connection-status');
      el.textContent = 'Memeriksa koneksi...';
      try {
        const res = await callSurveiApi('getPublicStatus');
        if (!res.success || !['BUKA', 'TUTUP'].includes(res.status_survei)) throw new Error(res.message || 'Respons bukan layanan survei.');
        el.textContent = 'Terhubung • Pengisian survei ' + res.status_survei.toLowerCase();
      } catch (err) { el.textContent = err.message; }
    }

    window.addEventListener('DOMContentLoaded', () => {
      checkConnection();
      if (STATE.adminToken) {
        loadAdminDashboard();
      } else {
        showView('search');
      }
    });

    function showToast(msg, type = 'info') {
      const container = document.getElementById('toast-container');
      const colors = {
        success: 'bg-emerald-600 text-white border-emerald-500',
        error: 'bg-rose-600 text-white border-rose-500',
        info: 'bg-slate-900 text-white border-slate-700'
      };
      const el = document.createElement('div');
      el.className = `pointer-events-auto px-4 py-3.5 rounded-2xl shadow-xl border text-xs font-semibold transition-all fade-in ${colors[type] || colors.info}`;
      el.textContent = msg;
      container.appendChild(el);
      setTimeout(() => {
        el.classList.add('opacity-0');
        setTimeout(() => el.remove(), 300);
      }, 4200);
    }

    function setLoading(show, text = 'Memproses data...') {
      document.getElementById('loader-text').textContent = text;
      document.getElementById('global-loader').classList.toggle('hidden', !show);
    }

    function showView(v) {
      ['search', 'form-angket', 'success', 'admin'].forEach(id => {
        document.getElementById('view-' + id).classList.add('hidden');
      });
      document.getElementById('view-' + v).classList.remove('hidden');
    }

    function closeModal(id) {
      document.getElementById(id).classList.add('hidden');
    }

    function resetToHome() {
      ++selfieReadVersion;
      STATE.selectedPeserta = null;
      STATE.selectedRole = '';
      STATE.answers = Array(15).fill(null);
      STATE.selfieData = null;
      document.getElementById('search-kta-input').value = '';
      document.getElementById('eval-nama').value = '';
      document.getElementById('eval-info').value = '';
      document.getElementById('eval-selfie').value = '';
      document.getElementById('eval-selfie-preview').classList.add('hidden');
      document.getElementById('evaluator-identity-fields').classList.add('hidden');
      document.getElementById('form-kuisioner').classList.add('hidden');
      showView('search');
    }

    let selfieReadVersion = 0;
    function previewSelfie(e) {
      const version = ++selfieReadVersion;
      STATE.selfieData = null;
      const file = e.target.files[0];
      const imgPrev = document.getElementById('eval-selfie-preview');
      if (!file) {
        STATE.selfieData = null;
        imgPrev.classList.add('hidden');
        return;
      }
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
        showToast('Berkas harus berupa foto/gambar (JPG/PNG/WebP).', 'error');
        e.target.value = '';
        STATE.selfieData = null;
        imgPrev.classList.add('hidden');
        return;
      }
      const reader = new FileReader();
      reader.onerror = () => { if (version === selfieReadVersion) showToast('Foto gagal dibaca. Silakan pilih ulang.', 'error'); };
      reader.onload = function(evt) {
        if (version !== selfieReadVersion) return;
        const dataUrl = evt.target.result;
        imgPrev.src = dataUrl;
        imgPrev.classList.remove('hidden');
        STATE.selfieData = {
          fileName: file.name,
          mimeType: file.type || 'image/jpeg',
          base64: dataUrl.split(',')[1]
        };
      };
      reader.readAsDataURL(file);
    }

    // ==================== 1. PENCARIAN PESERTA ====================
    async function handleSearchPeserta(e) {
      e.preventDefault();
      const kta = document.getElementById('search-kta-input').value.trim();
      setLoading(true, 'Mencari data peserta...');
      try {
        const res = await callSurveiApi('findPesertaByKTA', { no_kta: kta });
        setLoading(false);
        if (!res.success) {
          showToast(res.message, 'error');
          return;
        }
        STATE.selectedPeserta = res.peserta;
        renderPesertaTarget();
        showView('form-angket');
      } catch (err) {
        setLoading(false);
        showToast(err.message, 'error');
      }
    }

    function renderPesertaTarget() {
      const p = STATE.selectedPeserta;
      document.getElementById('dsp-nama').textContent = p.nama;
      document.getElementById('dsp-kta').textContent = p.no_kta;
      document.getElementById('dsp-kategori').textContent = p.kategori;
      document.getElementById('dsp-jenjang').textContent = p.jenjang;
      document.getElementById('dsp-sekolah').textContent = `${p.asal_sekolah} (${p.utusan_cabang})`;
      document.getElementById('dsp-angket-badge').textContent = 'Pilih Peran Anda di Bawah';

      let tersedia = 0;
      ['Atasan','Guru','Murid'].forEach(role => {
        const btn = document.getElementById('btn-role-' + role);
        const status = document.getElementById('progres-' + role);
        const kuota = p.progres?.[role];
        const berlaku = role !== 'Murid' || p.allow_murid;
        btn.disabled = !berlaku || !kuota || kuota.terisi >= kuota.batas;
        btn.className = 'p-4 rounded-2xl border-2 text-left ' + (btn.disabled
          ? 'border-slate-200 bg-slate-100 cursor-not-allowed'
          : 'bg-white border-slate-200 hover:border-blue-500');
        if (!berlaku) status.textContent = 'Tidak berlaku untuk jenjang ini.';
        else if (!kuota) status.textContent = 'Progres belum tersedia.';
        else {
          const jumlah = kuota.terisi + ' dari ' + kuota.batas;
          status.textContent = role === 'Atasan'
            ? (kuota.terisi ? 'Sudah mengisi' : 'Belum mengisi') + ' (' + jumlah + ')'
            : jumlah + ' sudah mengisi' + (btn.disabled ? ' · Kuota penuh' : '');
        }
        if (!btn.disabled) tersedia++;
      });
      if (!tersedia) document.getElementById('dsp-angket-badge').textContent = p.progres ? 'Semua kuota pengisian sudah penuh' : 'Progres kuota belum tersedia';
    }

    function selectEvaluatorRole(role) {
      const p = STATE.selectedPeserta;
      if (document.getElementById('btn-role-' + role).disabled) return;

      STATE.selectedRole = role;
      STATE.answers = Array(15).fill(null);

      // Highlight tombol peran terpilih
      ['Atasan', 'Guru', 'Murid'].forEach(r => {
        const btn = document.getElementById('btn-role-' + r);
        if (btn.disabled) return;
        btn.className = r === role
          ? 'p-4 rounded-2xl border-2 border-blue-600 bg-blue-50/60 text-left shadow-2xs transition'
          : 'p-4 rounded-2xl border-2 border-slate-200 bg-white text-left hover:border-blue-400 transition';
      });

      // Tentukan Angket A, B, atau C
      let type = 'A';
      if (role === 'Murid') {
        type = 'C';
      } else if (p.kategori.toLowerCase().includes('kepala sekolah') || p.kategori.toLowerCase().includes('kepsek')) {
        type = 'B';
      } else {
        type = 'A';
      }
      STATE.activeAngketType = type;

      document.getElementById('dsp-angket-badge').textContent = `Formulir Aktif: Angket ${type} (${role})`;
      document.getElementById('evaluator-identity-fields').classList.remove('hidden');

      const infoLabel = document.getElementById('eval-info-label');
      const infoInput = document.getElementById('eval-info');
      if (role === 'Murid') {
        infoLabel.textContent = 'Kelas Anda Saat Ini *';
        infoInput.placeholder = 'Contoh: Kelas VIII B / XI IPA 1';
      } else if (role === 'Atasan') {
        infoLabel.textContent = 'Jabatan Atasan *';
        infoInput.placeholder = 'Contoh: Kepala Sekolah / Pengawas Sekolah';
      } else {
        infoLabel.textContent = 'Jabatan / Guru Mapel *';
        infoInput.placeholder = 'Contoh: Guru Kelas / Guru Matematika';
      }

      renderQuestionsForm(type);
      document.getElementById('form-kuisioner').classList.remove('hidden');
    }

    function renderQuestionsForm(type) {
      const angket = BANK_ANGKET[type];
      document.getElementById('angket-title-header').textContent = angket.title;
      document.getElementById('angket-instruction-text').textContent = angket.instruction;

      const container = document.getElementById('questions-container');
      container.innerHTML = angket.items.map((text, idx) => {
        const aspekLabel = idx < 8
          ? '<span class="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100 text-[10px] font-extrabold">ASPEK KEPRIBADIAN</span>'
          : '<span class="px-2 py-0.5 rounded-md bg-teal-50 text-teal-700 border border-teal-100 text-[10px] font-extrabold">ASPEK SOSIAL</span>';

        const scaleButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'TDM'].map(val => {
          const isTDM = val === 'TDM';
          return `
            <button type="button" id="qbtn-${idx}-${val}" onclick="setAnswer(${idx}, '${val}')"
              class="${isTDM ? 'px-3' : 'w-9'} h-9 rounded-xl border border-slate-300 bg-slate-50 hover:bg-blue-50 hover:border-blue-400 text-xs font-extrabold text-slate-700 transition">
              ${val}
            </button>
          `;
        }).join('');

        return `
          <div class="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-3.5" id="qcard-${idx}">
            <div class="flex items-start justify-between gap-2">
              <div class="space-y-1.5">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-lg bg-slate-900 text-white text-xs font-extrabold flex items-center justify-center">${idx + 1}</span>
                  ${aspekLabel}
                </div>
                <p class="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed pt-1">${text}</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-1.5 pt-1">
              ${scaleButtons}
            </div>
          </div>
        `;
      }).join('');
    }

    function setAnswer(qIdx, val) {
      STATE.answers[qIdx] = val;
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'TDM'].forEach(opt => {
        const btn = document.getElementById(`qbtn-${qIdx}-${opt}`);
        const isSelected = String(opt) === String(val);
        const isTDM = opt === 'TDM';
        if (isSelected) {
          btn.className = isTDM
            ? 'px-3 h-9 rounded-xl border-2 border-amber-600 bg-amber-500 text-white text-xs font-extrabold shadow-xs transition'
            : 'w-9 h-9 rounded-xl border-2 border-blue-600 bg-blue-600 text-white text-xs font-extrabold shadow-xs transition';
        } else {
          btn.className = `${isTDM ? 'px-3' : 'w-9'} h-9 rounded-xl border border-slate-300 bg-slate-50 hover:bg-blue-50 hover:border-blue-400 text-xs font-extrabold text-slate-700 transition`;
        }
      });
      document.getElementById(`qcard-${qIdx}`).classList.remove('border-rose-400', 'bg-rose-50/20');
    }

    let submitting = false;
    async function handleSubmitSurvei(e) {
      e.preventDefault();
      if (submitting) return;
      const namaPenilai = document.getElementById('eval-nama').value.trim();
      const infoPenilai = document.getElementById('eval-info').value.trim();

      if (!STATE.selectedRole || !namaPenilai || !infoPenilai) {
        showToast('Lengkapi Peran, Nama Penilai, dan Jabatan/Kelas Anda.', 'error');
        return;
      }

      if (!STATE.selfieData || !STATE.selfieData.base64) {
        showToast('Wajib mengunggah foto selfie penilai sebelum mengirim jawaban.', 'error');
        document.getElementById('eval-selfie').scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      // Cek apakah ada butir yang belum diisi
      const firstEmpty = STATE.answers.findIndex(v => v === null);
      if (firstEmpty !== -1) {
        const card = document.getElementById(`qcard-${firstEmpty}`);
        card.classList.add('border-rose-400', 'bg-rose-50/20');
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        showToast(`Pernyataan nomor ${firstEmpty + 1} belum dipilih nilainya.`, 'error');
        return;
      }

      if (STATE.answers.every(v => v === 'TDM')) return showToast('Minimal satu pernyataan harus dinilai dengan angka.', 'error');
      submitting = true;
      setLoading(true, 'Mengunggah foto selfie & menyimpan penilaian...');
      try {
        const res = await callSurveiApi('submitSurveiResponse', {
          no_kta: STATE.selectedPeserta.no_kta,
          peran_penilai: STATE.selectedRole,
          nama_penilai: namaPenilai,
          info_penilai: infoPenilai,
          selfieData: STATE.selfieData,
          answers: STATE.answers
        });
        setLoading(false);
        if (!res.success) {
          if (res.progres) {
            const peserta = {...STATE.selectedPeserta, progres:res.progres};
            resetToHome();
            STATE.selectedPeserta = peserta;
            renderPesertaTarget();
            showView('form-angket');
          }
          showToast(res.message, 'error');
          return;
        }
        document.getElementById('success-message-text').textContent = res.message;
        showView('success');
      } catch (err) {
        setLoading(false);
        showToast(err.message, 'error');
      } finally { submitting = false; }
    }

    // ==================== 2. PANEL ADMIN PANITIA ====================
    function openModalAdminLogin() {
      document.getElementById('modal-admin-login').classList.remove('hidden');
    }

    async function handleAdminLogin(e) {
      e.preventDefault();
      const u = document.getElementById('adm-username').value;
      const p = document.getElementById('adm-password').value;
      setLoading(true, 'Memverifikasi akun admin...');
      try {
        const res = await callSurveiApi('loginAdmin', { username: u, password: p });
        setLoading(false);
        if (!res.success) return showToast(res.message, 'error');

        STATE.adminToken = res.token;
        sessionStorage.setItem('gtk_survei_adm_token', res.token);
        closeModal('modal-admin-login');
        showToast('Selamat datang, ' + res.admin.nama, 'success');
        loadAdminDashboard();
      } catch (err) {
        setLoading(false);
        showToast(err.message, 'error');
      }
    }

    function handleAdminLogout() {
      callSurveiApi('logoutAdmin').catch(() => {});
      sessionStorage.removeItem('gtk_survei_adm_token');
      STATE.adminToken = '';
      STATE.adminData = null;
      document.getElementById('btn-nav-admin-login').classList.remove('hidden');
      document.getElementById('btn-nav-admin-logout').classList.add('hidden');
      resetToHome();
    }

    async function loadAdminDashboard() {
      setLoading(true, 'Memuat rekapitulasi survei...');
      try {
        const res = await callSurveiApi('getAdminDashboard');
        setLoading(false);
        if (!res.success) {
          showToast(res.message, 'error');
          handleAdminLogout();
          return;
        }
        STATE.adminData = res;
        document.getElementById('btn-nav-admin-login').classList.add('hidden');
        document.getElementById('btn-nav-admin-logout').classList.remove('hidden');

        const btnStatus = document.getElementById('btn-toggle-survei');
        const isOpen = res.status_survei === 'BUKA';
        btnStatus.textContent = 'Status Survei: ' + res.status_survei;
        btnStatus.className = isOpen
          ? 'px-4 py-2 rounded-xl text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200'
          : 'px-4 py-2 rounded-xl text-xs font-extrabold bg-rose-50 text-rose-700 border border-rose-200';

        renderAdminRekapTable();
        renderAdminLogsTable();
        showView('admin');
      } catch (err) {
        setLoading(false);
        showToast(err.message, 'error');
      }
    }

    function renderAdminRekapTable() {
      const kat = document.getElementById('adm-filter-kat').value;
      const list = STATE.adminData.rekap.filter(r => !kat || r.kategori === kat);

      document.getElementById('adm-rekap-tbody').innerHTML = list.map(r => `
        <tr class="hover:bg-slate-50">
          <td class="p-3">
            <div class="font-extrabold text-slate-900">${r.nama}</div>
            <div class="text-[11px] text-slate-500">KTA: ${r.no_kta} | ${r.asal_sekolah} (${r.utusan_cabang})</div>
          </td>
          <td class="p-3">
            <div class="font-bold text-slate-800">${r.kategori}</div>
            <div class="text-[11px] text-slate-500">${r.jenjang}</div>
          </td>
          <td class="p-3 text-center font-bold">${r.jml_atasan} / ${r.jml_guru} / ${r.jml_murid}</td>
          <td class="p-3 text-center font-semibold text-indigo-700">${r.rata_kepribadian}</td>
          <td class="p-3 text-center font-semibold text-teal-700">${r.rata_sosial}</td>
          <td class="p-3 text-center">${r.skor_atasan}</td>
          <td class="p-3 text-center">${r.skor_guru}</td>
          <td class="p-3 text-center">${r.skor_murid}</td>
          <td class="p-3 text-center font-extrabold text-blue-700 bg-blue-50/50 text-sm">${r.nilai_akhir}</td>
        </tr>
      `).join('');
    }

    function renderAdminLogsTable() {
      document.getElementById('adm-log-tbody').innerHTML = STATE.adminData.recent_responses.map(l => `
        <tr class="hover:bg-slate-50">
          <td class="p-3 whitespace-nowrap text-slate-500">${l.waktu}</td>
          <td class="p-3 font-bold text-slate-800">${l.nama_peserta} <span class="font-normal text-slate-400">(${l.no_kta})</span></td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold">Angket ${l.jenis_angket}</span></td>
          <td class="p-3">
            <div class="font-bold text-slate-800">${l.nama_penilai}</div>
            <div class="text-[11px] text-slate-500">${l.peran_penilai} — ${l.info_penilai}</div>
          </td>
          <td class="p-3 text-center">${l.butir_valid} / ${l.butir_tdm}</td>
          <td class="p-3 text-center font-extrabold text-emerald-700">${l.skor_total}</td>
          <td class="p-3 text-center">
            ${l.selfie_link
              ? `<a href="${l.selfie_link}" target="_blank" rel="noopener" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-[11px] font-bold">Lihat Foto</a>`
              : '<span class="text-slate-400">-</span>'}
          </td>
        </tr>
      `).join('');
    }

    async function toggleSurveiStatus() {
      if (!STATE.adminData) return;
      const target = STATE.adminData.status_survei === 'BUKA' ? 'TUTUP' : 'BUKA';
      setLoading(true, 'Mengubah status survei...');
      try {
        const res = await callSurveiApi('adminToggleSurveiStatus', { status_survei: target });
        setLoading(false);
        if (!res.success) return showToast(res.message, 'error');
        showToast(res.message, 'success');
        loadAdminDashboard();
      } catch (err) {
        setLoading(false);
        showToast(err.message, 'error');
      }
    }

    async function refreshAdminRekap() {
      setLoading(true, 'Menyinkronkan ulang rekapitulasi...');
      try {
        const res = await callSurveiApi('adminRefreshRekap');
        setLoading(false);
        if (!res.success) return showToast(res.message, 'error');
        showToast(res.message, 'success');
        loadAdminDashboard();
      } catch (err) {
        setLoading(false);
        showToast(err.message, 'error');
      }
    }

    function exportSurveiCSV() {
      if (!STATE.adminData || !STATE.adminData.rekap) return;
      const headers = [
        'ID_Peserta', 'No_KTA_PGRI', 'Nama', 'Asal_Sekolah', 'Utusan_Cabang', 'Kategori', 'Jenjang',
        'Jml_Atasan', 'Jml_Guru', 'Jml_Murid', 'Total_Responden',
        'Rata_Kepribadian', 'Rata_Sosial', 'Skor_Atasan', 'Skor_Guru', 'Skor_Murid', 'Nilai_Akhir_Survei'
      ];
      const csvLines = [headers.join(',')];
      STATE.adminData.rekap.forEach(r => {
        const vals = [
          r.id_peserta, r.no_kta, r.nama, r.asal_sekolah, r.utusan_cabang, r.kategori, r.jenjang,
          r.jml_atasan, r.jml_guru, r.jml_murid, r.total_responden,
          r.rata_kepribadian, r.rata_sosial, r.skor_atasan, r.skor_guru, r.skor_murid, r.nilai_akhir
        ].map(v => `"${String(v ?? '').replace(/"/g, '""')}"`);
        csvLines.push(vals.join(','));
      });
      const blob = new Blob([csvLines.join('\n')], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Rekap_Survei_GTK_Kapuas_2026_${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
    }

