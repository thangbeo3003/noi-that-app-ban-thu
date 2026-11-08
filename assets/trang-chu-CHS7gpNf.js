const s=`<!-- THÂN TRANG — sinh từ thiet-ke/trang-chu.html (UX/UI, TRANG_CHU.md); liên kết đổi sang đường thật của app. -->
<main>
  <!-- ═══ 1 · HERO (trắng) ═══ -->
  <section class="hero" id="hero"><div class="wrap">
    <div class="hero-chu">
      <h1 class="ds-t-hero ds-vao">Thiết kế nội thất căn hộ của bạn trong 3D</h1>
      <p class="ds-t-lead ds-vao" style="--i:1">Căn dựng sẵn theo số đo thật của dự án. Kê đồ, đổi phong cách, xem ảnh như chụp — chốt là ra hồ sơ thi công.</p>
      <div class="hero-nut ds-vao" style="--i:2">
        <a class="ds-btn ds-btn--lg" href="/tao-can">Tạo căn của bạn</a>
        <a class="ds-btn ds-btn--lg ds-btn--secondary" href="/can-mau/s6-15-08"><svg class="ds-icon" aria-hidden="true"><use href="#i-box"/></svg>Thử căn mẫu 3D</a>
      </div>
      <p class="ds-t-meta tin-cay ds-vao" style="--i:3"><svg class="ds-icon" aria-hidden="true"><use href="#i-ruler"/></svg>Dựng theo hồ sơ hoàn công</p>
    </div>
    <figure class="hero-hinh ds-vao" style="--i:2">
      <div class="ds-card__media"><img src="@anh:anh/nen-khach-chon.png" alt="Phòng khách căn S6.15.08 nhìn chéo trong 3D, hệ tủ thờ đang được chọn" fetchpriority="high"></div>
      <div class="tren-hinh" aria-hidden="true">
        <span class="ds-label3d ds-label3d--so nhan-so">1900</span>
        <span class="ds-label3d nhan-ten">Hệ tủ thờ</span>
        <svg class="ds-icon con-tro"><use href="#i-mouse-pointer-2"/></svg>
        <span class="ds-tools cong-cu">
          <span class="ds-tools__item" aria-pressed="true"><svg class="ds-icon"><use href="#i-sofa"/></svg><span class="chu-cc">Nội thất</span></span>
          <span class="ds-tools__item" aria-pressed="false"><svg class="ds-icon"><use href="#i-layers"/></svg><span class="chu-cc">Vật liệu</span></span>
          <span class="ds-tools__item" aria-pressed="false"><svg class="ds-icon"><use href="#i-palette"/></svg><span class="chu-cc">Phong cách</span></span>
        </span>
        <span class="ds-hint3d goi-y-3d">Chạm món là thấy số · giữ để kéo</span>
      </div>
    </figure>
  </div></section>

  <!-- ═══ 2 · HÀNG 3 Ý (xám) — thay hàng đánh giá (chưa có đánh giá thật) ═══ -->
  <section class="dai-y" aria-label="Điều app làm được"><div class="wrap">
    <ul class="ba-y">
      <li><svg class="ds-icon" aria-hidden="true"><use href="#i-ruler"/></svg><span><b class="ds-t-title">Căn dựng sẵn đúng số</b><span class="ds-t-meta">theo hồ sơ hoàn công</span></span></li>
      <li><svg class="ds-icon" aria-hidden="true"><use href="#i-smartphone"/></svg><span><b class="ds-t-title">Kê đồ ngay trên điện thoại</b><span class="ds-t-meta">mở được cả trong Zalo</span></span></li>
      <li><svg class="ds-icon" aria-hidden="true"><use href="#i-file-text"/></svg><span><b class="ds-t-title">Ra hồ sơ cho xưởng</b><span class="ds-t-meta">bản vẽ, cắt ván, khối lượng</span></span></li>
    </ul>
  </div></section>

  <!-- ═══ 3 · VIDEO 1 PHÚT (trắng) ═══ -->
  <section class="khoi trang" id="video"><div class="wrap">
    <div class="dau-khoi"><h2 class="ds-t-section">Xem cách thiết kế căn của bạn trong 1 phút</h2></div>
    <div class="ds-card__media khung-video">
      <img src="@anh:luong-vao/anh/K1.jpg" alt="Phòng khách căn S6.15.08 — khung video giới thiệu" loading="lazy">
      <div class="giua-video"><span class="ds-empty__vong"><svg class="ds-icon" aria-hidden="true"><use href="#i-play"/></svg></span><span class="ds-badge">Video đang làm</span></div>
    </div>
    <p class="ds-t-meta chu-video">Video quay màn hình app thật với căn S6.15.08: mở căn → chạm tủ thờ xem số → kéo đồ → xem phối cảnh.</p>
    <p class="nut-thu"><a class="ds-btn ds-btn--secondary" href="/can-mau/s6-15-08"><svg class="ds-icon" aria-hidden="true"><use href="#i-box"/></svg>Tự thử trên căn mẫu</a></p>
  </div></section>

  <!-- ═══ 4 · 3 BƯỚC (trắng) ═══ -->
  <section class="khoi trang" id="cach-dung"><div class="wrap">
    <div class="dau-khoi"><span class="ds-t-group">Cách dùng</span><h2 class="ds-t-section">Thiết kế căn của bạn trong 3 bước</h2></div>
    <!-- máy tính ≥ 1024: 3 thẻ ảnh app thật, rê chuột hiện nút "Bắt đầu" -->
    <div class="buoc-luoi">
      <a class="ds-card" href="/tao-can"><span class="ds-card__media"><img src="@anh:tinh-nang/app/desktop-0-ca-can.jpg" alt="Căn S6.15.08 dựng sẵn trong app, nhìn cả căn" loading="lazy"><span class="ds-card__cta ds-btn ds-btn--nav">Bắt đầu</span></span>
        <span class="ds-card__title"><span class="ds-dot-so">1</span>Chọn căn</span><span class="ds-card__desc">Chọn dự án → toà → căn. Căn đã dựng sẵn đúng số, bạn không phải vẽ.</span></a>
      <svg class="ds-icon" aria-hidden="true"><use href="#i-chevron-right"/></svg>
      <a class="ds-card" href="/tao-can"><span class="ds-card__media"><img src="@anh:tinh-nang/app/desktop-1-the-tu-tho.jpg" alt="Chạm hệ tủ thờ trong app, thẻ số hiện rộng 1900" loading="lazy"><span class="ds-card__cta ds-btn ds-btn--nav">Bắt đầu</span></span>
        <span class="ds-card__title"><span class="ds-dot-so">2</span>Kê đồ và phong cách</span><span class="ds-card__desc">Kéo thả, đổi mẫu, đổi vật liệu, đổi phong cách một chạm.</span></a>
      <svg class="ds-icon" aria-hidden="true"><use href="#i-chevron-right"/></svg>
      <a class="ds-card" href="/tao-can"><span class="ds-card__media"><img src="@anh:luong-vao/anh/K1.jpg" alt="Ảnh phối cảnh phòng khách căn S6.15.08" loading="lazy"><span class="ds-card__cta ds-btn ds-btn--nav">Bắt đầu</span></span>
        <span class="ds-card__title"><span class="ds-dot-so">3</span>Xem ảnh thật và chốt</span><span class="ds-card__desc">Phối cảnh như ảnh chụp, gửi link người nhà, ra hồ sơ thi công.</span></a>
    </div>
    <!-- dưới 1024: 1 ảnh + danh sách bước, chạm đổi ảnh, tự chuyển sau 4 giây -->
    <div class="buoc-dt" id="buocDt">
      <div class="ds-card__media khung-buoc"><img id="anhBuoc" src="@anh:tinh-nang/app/desktop-0-ca-can.jpg" alt="Căn S6.15.08 dựng sẵn trong app, nhìn cả căn" loading="lazy"></div>
      <div class="ds-field chon-buoc" role="radiogroup" aria-label="Ba bước">
        <label class="ds-option"><input class="ds-option__input" type="radio" name="buoc" value="0" checked><span class="ds-dot-so">1</span><span class="ds-option__ten">Chọn căn</span><span class="ds-option__phu">Chọn dự án → toà → căn, căn đã dựng sẵn đúng số.</span></label>
        <label class="ds-option"><input class="ds-option__input" type="radio" name="buoc" value="1"><span class="ds-dot-so ds-dot-so--vien">2</span><span class="ds-option__ten">Kê đồ và phong cách</span><span class="ds-option__phu">Kéo thả, đổi mẫu, đổi phong cách một chạm.</span></label>
        <label class="ds-option"><input class="ds-option__input" type="radio" name="buoc" value="2"><span class="ds-dot-so ds-dot-so--vien">3</span><span class="ds-option__ten">Xem ảnh thật và chốt</span><span class="ds-option__phu">Phối cảnh như ảnh chụp, gửi link, ra hồ sơ.</span></label>
      </div>
    </div>
  </div></section>

  <!-- ═══ 5 · TÌM CĂN CỦA BẠN (xám) — Homestyler không có ═══ -->
  <section class="khoi xam" id="tim-can"><div class="wrap">
    <div class="dau-khoi"><h2 class="ds-t-section">Tìm căn của bạn</h2><p class="ds-t-lead">Gõ tên dự án hoặc mã căn ghi trên hợp đồng mua bán.</p></div>
    <form class="tim-hang" action="/tao-can" role="search">
      <div class="ds-search o-tim">
        <svg class="ds-icon" aria-hidden="true"><use href="#i-search"/></svg>
        <input class="ds-input" type="search" name="ma" placeholder="Ví dụ: Lumi Hanoi, S6.15.08" aria-label="Mã căn hoặc tên dự án" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-controls="goiYTim" autocomplete="off" spellcheck="false" inputmode="search" enterkeyhint="search">
        <button class="ds-btn ds-btn--tertiary ds-btn--icon ds-btn--sm ds-search__xoa" type="button" aria-label="Xoá chữ" hidden><svg class="ds-icon" aria-hidden="true"><use href="#i-x"/></svg></button>
        <ul class="ds-suggest" id="goiYTim" role="listbox" aria-label="Gợi ý" hidden></ul>
      </div>
      <button class="ds-btn" type="submit">Tìm căn</button>
    </form>
    <div class="the-du-an">
      <a class="ds-card" href="/tao-can/lumi-hanoi"><span class="ds-card__media"><span class="ds-card__badge ds-badge ds-badge--success">Đã dựng sẵn</span><img src="@anh:luong-vao/anh/pc-ca-can.jpg" alt="Mặt bằng căn mẫu 3BR-C10CM, Lumi Hanoi" loading="lazy"><span class="ds-card__cta ds-btn ds-btn--nav">Chọn</span></span>
        <span class="ds-card__title">Lumi Hanoi</span><span class="ds-card__meta">Hà Nội · CapitaLand · mẫu 3BR-C10CM</span></a>
      <a class="ds-card ds-card--them" href="/gui-ho-so"><span class="ds-card__media"><svg class="ds-icon" aria-hidden="true"><use href="#i-plus"/></svg></span>
        <span class="ds-card__title">Gửi hồ sơ căn</span><span class="ds-card__meta">Dự án chưa có — đội mình dựng theo hồ sơ</span></a>
    </div>
    <p class="ds-t-label chua-co"><a class="ds-btn ds-btn--link" href="/can-mau/s6-15-08">Thử căn mẫu S6.15.08 →</a> không cần tài khoản · Chưa có dự án của bạn? <a class="ds-btn ds-btn--link" href="/gui-ho-so">Gửi hồ sơ căn</a></p>
  </div></section>

  <!-- ═══ 6 · PHONG CÁCH CÓ SẴN (trắng) ═══ -->
  <section class="khoi trang" id="phong-cach">
    <div class="wrap">
      <div class="dau-khoi"><h2 class="ds-t-section">Phong cách có sẵn</h2><p class="ds-t-lead">Mỗi phong cách đổi đủ màu, vật liệu, dáng đồ và ánh sáng.</p><span class="ds-dot ds-dot--chay">Đổi phong cách trong app: đã chạy</span></div>
      <div class="ds-chips tab-pc" role="group" aria-label="Chọn phong cách">
        <button class="ds-chip" type="button" aria-pressed="true" data-pc="japandi"><svg class="ds-icon ds-chip__dau" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-chip__chu">Japandi</span></button>
        <button class="ds-chip" type="button" aria-pressed="false"><svg class="ds-icon ds-chip__dau" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-chip__chu">Hiện đại tối giản</span></button>
        <button class="ds-chip" type="button" aria-pressed="false"><svg class="ds-icon ds-chip__dau" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-chip__chu">Đông Dương</span></button>
        <button class="ds-chip" type="button" aria-pressed="false"><svg class="ds-icon ds-chip__dau" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-chip__chu">Bắc Âu</span></button>
        <button class="ds-chip" type="button" aria-pressed="false"><svg class="ds-icon ds-chip__dau" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-chip__chu">Tân cổ điển</span></button>
      </div>
    </div>
    <div class="dai-anh" id="daiPc">
      <a class="ds-card" href="/tao-can"><span class="ds-card__media"><img src="@anh:luong-vao/anh/K1.jpg" alt="Japandi — phòng khách căn S6.15.08" loading="lazy"><span class="ds-card__cta ds-btn ds-btn--nav">Áp vào căn của bạn</span></span><span class="ds-card__title">Phòng khách</span><span class="ds-card__meta">Căn S6.15.08 · Lumi Hanoi</span></a>
      <a class="ds-card" href="/tao-can"><span class="ds-card__media"><img src="@anh:luong-vao/anh/K3.jpg" alt="Japandi — góc tủ thờ, bàn ăn căn S6.15.08" loading="lazy"><span class="ds-card__cta ds-btn ds-btn--nav">Áp vào căn của bạn</span></span><span class="ds-card__title">Góc tủ thờ, bàn ăn</span><span class="ds-card__meta">Căn S6.15.08 · Lumi Hanoi</span></a>
      <a class="ds-card" href="/tao-can"><span class="ds-card__media"><img src="@anh:luong-vao/anh/M1.jpg" alt="Japandi — phòng ngủ chính căn S6.15.08" loading="lazy"><span class="ds-card__cta ds-btn ds-btn--nav">Áp vào căn của bạn</span></span><span class="ds-card__title">Phòng ngủ chính</span><span class="ds-card__meta">Căn S6.15.08 · Lumi Hanoi</span></a>
      <a class="ds-card" href="/tao-can"><span class="ds-card__media"><img src="@anh:luong-vao/anh/P1-1.jpg" alt="Japandi — phòng ngủ 1 căn S6.15.08" loading="lazy"><span class="ds-card__cta ds-btn ds-btn--nav">Áp vào căn của bạn</span></span><span class="ds-card__title">Phòng ngủ 1</span><span class="ds-card__meta">Căn S6.15.08 · Lumi Hanoi</span></a>
      <a class="ds-card" href="/tao-can"><span class="ds-card__media"><img src="@anh:luong-vao/anh/P2-1.jpg" alt="Japandi — phòng ngủ 2 căn S6.15.08, giường tầng" loading="lazy"><span class="ds-card__cta ds-btn ds-btn--nav">Áp vào căn của bạn</span></span><span class="ds-card__title">Phòng ngủ 2</span><span class="ds-card__meta">Căn S6.15.08 · Lumi Hanoi</span></a>
    </div>
    <div class="wrap pc-trong" id="pcTrong" hidden>
      <div class="ds-card__media"><div class="ds-empty ds-empty--giua"><span class="ds-empty__vong"><svg class="ds-icon" aria-hidden="true"><use href="#i-palette"/></svg></span><h3 class="ds-empty__tieu">Ảnh mẫu <span id="tenPc">Hiện đại tối giản</span> đang làm</h3><span>Phong cách này đã đổi được trong app (căn mẫu › Phong cách). Ảnh phối cảnh mẫu hôm nay mới có Japandi của căn S6.15.08.</span></div></div>
    </div>
    <div class="wrap nut-giua"><a class="ds-btn" href="/tinh-nang#phong-cach">Xem đổi phong cách</a></div>
  </section>

  <!-- ═══ 7 · KHO ĐỒ ĐÓNG ĐƯỢC (xám) — số món thật của căn mẫu ═══ -->
  <section class="khoi xam" id="kho-do"><div class="wrap">
    <div class="dau-khoi"><h2 class="ds-t-section">Kho đồ nội thất đóng được</h2><p class="ds-t-lead">Mỗi món trong căn có số thật. Đồ đóng chỉnh theo từng mm, đóng được thật.</p></div>
    <div class="bento">
      <a class="ds-card o-k" href="/tinh-nang#ke-do"><span class="ds-card__media"><img src="@anh:luong-vao/anh/K1.jpg" alt="Phòng khách căn S6.15.08" loading="lazy"></span><span class="ds-card__title">Phòng khách · 20 món</span><span class="ds-card__meta">3320 × 6920 mm · tủ thờ, tường TV, mini bar, tủ giày</span></a>
      <a class="ds-card o-m" href="/tinh-nang#ke-do"><span class="ds-card__media"><img src="@anh:luong-vao/anh/M1.jpg" alt="Phòng ngủ chính căn S6.15.08" loading="lazy"></span><span class="ds-card__title">Phòng ngủ chính · 17 món</span><span class="ds-card__meta">2900 × 5510 mm</span></a>
      <a class="ds-card o-p1" href="/tinh-nang#ke-do"><span class="ds-card__media"><img src="@anh:luong-vao/anh/P1-1.jpg" alt="Phòng ngủ 1 căn S6.15.08" loading="lazy"></span><span class="ds-card__title">Phòng ngủ 1 · 13 món</span><span class="ds-card__meta">3360 × 3320 mm</span></a>
      <a class="ds-card o-p2" href="/tinh-nang#ke-do"><span class="ds-card__media"><img src="@anh:luong-vao/anh/P2-1.jpg" alt="Phòng ngủ 2 căn S6.15.08" loading="lazy"></span><span class="ds-card__title">Phòng ngủ 2 · 8 món</span><span class="ds-card__meta">3310 × 2750 mm</span></a>
      <div class="ds-card--boxed o-tong">
        <h3 class="ds-t-title">58 món trong căn mẫu S6.15.08</h3>
        <ul class="ds-checklist">
          <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span>Đồ đóng: tủ thờ, tường TV, tủ áo, giường tầng… chỉnh theo mm</span></li>
          <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span>Đồ mua sẵn: sofa, bàn ăn, ghế, đèn</span></li>
          <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span>Thêm món từ kho, thay mẫu, thêm món từ ảnh (bản thử)</span></li>
        </ul>
        <a class="ds-btn" href="/tinh-nang#ke-do">Xem kho đồ →</a>
      </div>
    </div>
  </div></section>

  <!-- ═══ 8 · TỪ PHƯƠNG ÁN TỚI THI CÔNG (trắng) — thay khối khoá học ═══ -->
  <section class="khoi trang" id="thi-cong"><div class="wrap">
    <div class="dau-khoi"><h2 class="ds-t-section">Từ phương án tới thi công</h2><p class="ds-t-lead">Số nào lấy từ đâu đều ghi rõ. Chốt phương án là ra hồ sơ cho xưởng.</p></div>
    <div class="thi-cong">
      <figure>
        <div class="ds-card__media"><img src="@anh:tinh-nang/app/desktop-3-do-loi-di.jpg" alt="Đo lối đi khu ăn trong app, ngang 783 mm" loading="lazy"></div>
        <figcaption class="ds-t-meta">Ảnh app thật: đo lối đi khu ăn, ngang 783 mm. Máy tự báo chỗ chật (lối đi dưới 750 mm, chỗ ngồi bàn ăn), sửa một chạm.</figcaption>
      </figure>
      <div class="chu-tc">
        <h3 class="ds-t-title">Nguồn số rõ ràng</h3>
        <ol class="ds-timeline">
          <li class="ds-timeline__item" data-xong><span class="ds-timeline__dot"><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg></span><span class="ds-timeline__tieu">Tài liệu bán hàng</span><span class="ds-timeline__phu">Xem, kê thử</span></li>
          <li class="ds-timeline__item" aria-current="step"><span class="ds-timeline__dot"><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg></span><span class="ds-timeline__tieu">Hồ sơ hoàn công</span><span class="ds-timeline__phu">Chốt phương án, báo giá — căn S6.15.08 đang ở mức này</span></li>
          <li class="ds-timeline__item"><span class="ds-timeline__dot"><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg></span><span class="ds-timeline__tieu">Đo laser tại căn</span><span class="ds-timeline__phu">Hồ sơ cho máy cắt</span></li>
        </ol>
        <h3 class="ds-t-title">Hồ sơ cho xưởng</h3>
        <div class="ho-so"><span class="ds-t-desc">DXF · danh sách cắt ván · khối lượng</span><span class="ds-dot ds-dot--chay">Đã chạy</span></div>
        <a class="ds-btn" href="/tinh-nang#ho-so">Xem hồ sơ thi công</a>
      </div>
    </div>
  </div></section>

  <!-- ═══ 9 · LINK PHƯƠNG ÁN (xám) — thay khối thử thách cộng đồng ═══ -->
  <section class="khoi xam" id="link-phuong-an"><div class="wrap">
    <div class="dau-khoi"><h2 class="ds-t-section">Link phương án</h2><p class="ds-t-lead">Cả nhà cùng xem một căn: gửi một link, người nhận không cần tài khoản.</p></div>
    <ol class="buoc-link">
      <li><span class="dau-buoc"><span class="ds-dot-so">1</span><svg class="ds-icon" aria-hidden="true"><use href="#i-share-2"/></svg></span><h3 class="ds-t-title">Kê xong, bấm Chia sẻ</h3><p class="ds-t-desc">Lấy link của phương án đang mở.</p></li>
      <li><span class="dau-buoc"><span class="ds-dot-so">2</span><svg class="ds-icon" aria-hidden="true"><use href="#i-message-circle"/></svg></span><h3 class="ds-t-title">Gửi link qua tin nhắn</h3><p class="ds-t-desc">Zalo, Messenger hay tin nhắn điện thoại.</p></li>
      <li><span class="dau-buoc"><span class="ds-dot-so">3</span><svg class="ds-icon" aria-hidden="true"><use href="#i-smartphone"/></svg></span><h3 class="ds-t-title">Mở là vào thẳng căn 3D</h3><p class="ds-t-desc">Xem miễn phí, thử dời đồ không làm hỏng bản của bạn.</p></li>
    </ol>
    <div class="nut-giua"><a class="ds-btn ds-btn--secondary" href="/#link-phuong-an">Link phương án là gì?</a></div>
  </div></section>

  <!-- ═══ 10 · CĂN ĐÃ LÀM (đen) ═══ -->
  <section class="ds-band-toi khoi-den" id="can-da-lam"><div class="wrap">
    <div class="dau-khoi"><h2 class="ds-t-section">Căn đã làm</h2><p class="ds-t-lead">Phối cảnh thật của căn S6.15.08 · Lumi Hanoi · mẫu 3BR-C10CM</p></div>
    <div class="so-le">
      <a class="ds-card cao" href="/tinh-nang#phoi-canh"><span class="ds-card__media"><span class="ds-card__badge ds-badge">Phòng khách</span><img src="@anh:luong-vao/anh/K1.jpg" alt="Phối cảnh phòng khách căn S6.15.08" loading="lazy"></span></a>
      <a class="ds-card vuong" href="/tinh-nang#phoi-canh"><span class="ds-card__media"><span class="ds-card__badge ds-badge">Tủ thờ, bàn ăn</span><img src="@anh:luong-vao/anh/K3.jpg" alt="Phối cảnh góc tủ thờ và bàn ăn căn S6.15.08" loading="lazy"></span></a>
      <a class="ds-card vuong" href="/tinh-nang#phoi-canh"><span class="ds-card__media"><span class="ds-card__badge ds-badge">Phòng ngủ chính</span><img src="@anh:luong-vao/anh/M1.jpg" alt="Phối cảnh phòng ngủ chính căn S6.15.08" loading="lazy"></span></a>
      <a class="ds-card cao" href="/tinh-nang#phoi-canh"><span class="ds-card__media"><span class="ds-card__badge ds-badge">Phòng ngủ 1</span><img src="@anh:luong-vao/anh/P1-1.jpg" alt="Phối cảnh phòng ngủ 1 căn S6.15.08" loading="lazy"></span></a>
      <a class="ds-card cao" href="/tinh-nang#phoi-canh"><span class="ds-card__media"><span class="ds-card__badge ds-badge">Phòng ngủ 2</span><img src="@anh:luong-vao/anh/P2-1.jpg" alt="Phối cảnh phòng ngủ 2 căn S6.15.08" loading="lazy"></span></a>
      <a class="ds-card vuong" href="/tinh-nang#xem-can"><span class="ds-card__media"><span class="ds-card__badge ds-badge">Mặt bằng cả căn</span><img src="@anh:luong-vao/anh/pc-ca-can.jpg" alt="Mặt bằng cả căn S6.15.08 đã kê đồ" loading="lazy"></span></a>
    </div>
  </div></section>

  <!-- ═══ 11 · BẢNG GIÁ TÓM TẮT (trắng) — khớp BANG_GIA.md, mọi số tiền ❓. Khối lời khách ẩn tới khi có lời thật ═══ -->
  <section class="khoi trang" id="bang-gia"><div class="wrap">
    <div class="dau-khoi"><span class="ds-t-group">Bảng giá</span><h2 class="ds-t-section">Trả theo căn</h2><p class="ds-t-lead">Mỗi căn kích hoạt riêng. Người nhà mở link xem miễn phí. Khoản nào tính thêm đều hiện giá trước khi bạn bấm.</p></div>
    <div class="goi">
      <article class="ds-card--boxed the-gia">
        <h3 class="ds-t-title">Xem link</h3>
        <p class="ds-t-desc">Người nhà, khách được gửi link.</p>
        <div class="ds-inset"><span class="ds-price">Miễn phí</span><span class="ds-t-meta">Không cần tài khoản</span></div>
        <ul class="ds-checklist">
          <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg>Mở link là vào thẳng căn 3D đã kê</li>
          <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg>Xoay, đổi góc, chạm món xem số</li>
          <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg>Mở được trong Zalo, trên điện thoại</li>
        </ul>
      </article>
      <article class="ds-card--boxed ds-card--noi-bat the-gia">
        <span class="ds-badge ds-badge--accent">Bắt đầu ở đây</span>
        <h3 class="ds-t-title">Căn của bạn</h3>
        <p class="ds-t-desc">Một căn của chính bạn. Cần nhiều căn thì mỗi căn tính riêng.</p>
        <div class="ds-inset"><span class="ds-price">❓&nbsp;<small>đ/căn</small></span><span class="ds-t-meta">Giá chưa chốt</span></div>
        <ul class="ds-checklist">
          <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg>Căn dựng sẵn đúng số, kê sẵn bản mẫu</li>
          <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg>Kê đồ, kéo thả, đo bằng thước</li>
          <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg>Lưu phương án, gửi link người nhà</li>
          <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg>Đổi phong cách, vật liệu từng món</li>
        </ul>
      </article>
      <article class="ds-card--boxed the-gia">
        <h3 class="ds-t-title">Tính thêm khi cần</h3>
        <p class="ds-t-desc">Trả theo lượt, giá hiện trước khi bấm.</p>
        <dl class="ds-kv">
          <div class="ds-kv__row"><dt>Ảnh phối cảnh theo yêu cầu</dt><dd>❓&nbsp;đ/ảnh</dd></div>
          <div class="ds-kv__row"><dt>Gói hồ sơ thi công</dt><dd>❓&nbsp;đ/căn</dd></div>
          <div class="ds-kv__row"><dt>Căn khác, dự án khác</dt><dd>❓&nbsp;đ/căn</dd></div>
        </dl>
      </article>
    </div>
    <div class="nut-giua"><a class="ds-btn" href="/bang-gia">Xem bảng giá</a></div>
  </div></section>

  <!-- ═══ 12 · BẮT ĐẦU VỚI CĂN CỦA BẠN (đen, nút trắng) ═══ -->
  <section class="ds-band-toi khoi-cuoi" id="bat-dau">
    <h2 class="ds-t-section">Bắt đầu với căn của bạn</h2>
    <p class="ds-t-lead">Chọn dự án, chọn căn — căn đã dựng sẵn đúng số.</p>
    <a class="ds-btn ds-btn--lg ds-btn--tren-toi" href="/tao-can">Tạo căn của bạn →</a>
  </section>
</main>
`;export{s as default};
