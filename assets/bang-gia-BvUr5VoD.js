const s=`<!-- THÂN TRANG — sinh từ thiet-ke/bang-gia.html (UX/UI, BANG_GIA.md); liên kết đổi sang đường thật của app. -->
<main>
  <section class="dau"><div class="wrap">
    <h1 class="ds-t-hero">Trả theo căn</h1>
    <p class="ds-t-lead">Mỗi căn kích hoạt riêng. Người nhà mở link xem miễn phí. Khoản nào tính thêm đều hiện giá trước khi bạn bấm.</p>
    <div class="ds-alert ds-alert--warning duyet"><svg class="ds-icon" aria-hidden="true"><use href="#i-triangle-alert"/></svg><span class="ds-alert__tieu">Mọi số tiền ❓ — giá chưa chốt · nhánh đang xem: <b id="tenNhanh"></b></span></div>
  </div></section>

  <div class="wrap goi">
    <article class="ds-card--boxed the-gia">
      <h2 class="ds-t-title">Xem link phương án</h2>
      <p class="ds-t-desc">Cho người nhà, khách được gửi link.</p>
      <div class="ds-inset o-gia"><span class="ds-price">Miễn phí</span><span class="ds-t-meta">không cần tài khoản</span></div>
      <ul class="ds-checklist">
        <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span>Mở link là vào thẳng căn 3D đã kê</span></li>
        <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span>Xoay, đổi góc, chạm món xem số</span></li>
        <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span>Thử dời đồ, không làm hỏng bản người gửi</span></li>
        <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span>Mở được trong Zalo, trên điện thoại</span></li>
      </ul>
      <a class="ds-btn ds-btn--secondary" href="/#link-phuong-an">Link phương án là gì?</a>
    </article>

    <article class="ds-card--boxed ds-card--noi-bat the-gia chinh">
      <span class="ds-badge ds-badge--accent">Bắt đầu ở đây</span>
      <h2 class="ds-t-title">Căn của bạn</h2>
      <p class="ds-t-desc">Một căn của chính bạn, gắn với tài khoản.</p>
      <div class="ds-inset o-gia" id="giaCan"></div>
      <ul class="ds-checklist">
        <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span>Căn dựng sẵn đúng số, đã kê sẵn bản mẫu</span></li>
        <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span>Kê đồ, kéo thả, chỉnh từng 10 mm, hoàn tác</span></li>
        <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span>Đo bằng thước bắt cạnh, góc</span></li>
        <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span>Lưu phương án, gửi link cho người nhà</span></li>
        <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span>Báo chỗ chật, sửa một chạm · thêm món, thay mẫu từ kho</span></li>
        <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span>Đổi phong cách, vật liệu · xem thử trước khi áp</span></li>
        <li><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span>Thời hạn dùng: <b id="thoiHan"></b></span></li>
      </ul>
      <a class="ds-btn" href="/tao-can">Tạo căn của bạn</a>
    </article>

    <article class="ds-card--boxed the-gia">
      <h2 class="ds-t-title">Tính thêm khi cần</h2>
      <p class="ds-t-desc">Hai việc tốn chi phí thật, trả theo lượt.</p>
      <dl class="ds-kv">
        <div class="ds-kv__row"><dt>Ảnh phối cảnh theo yêu cầu<br><small class="ds-t-meta">bản thử, ảnh giả lập</small></dt><dd>❓&nbsp;đ/ảnh</dd></div>
        <div class="ds-kv__row"><dt>Gói hồ sơ thi công</dt><dd>❓&nbsp;đ/căn</dd></div>
        <div class="ds-kv__row"><dt>Thêm căn khác, dự án khác</dt><dd>❓&nbsp;đ/căn</dd></div>
      </dl>
      <a class="ds-btn ds-btn--secondary" href="#tinh-them">Xem chi tiết</a>
    </article>
  </div>

  <section class="nhieu"><div class="wrap">
    <svg class="ds-icon" aria-hidden="true"><use href="#i-layers"/></svg>
    <div><h2 class="ds-t-title">Cần nhiều căn?</h2><p class="ds-t-desc">Mỗi căn kích hoạt riêng, cùng một cách tính. Mua thêm căn ngay trong tài khoản của bạn — người mua nhiều căn hay sale bất động sản đều như nhau. Có giảm khi mua nhiều căn không: ❓</p></div>
  </div></section>

  <section class="so-sanh"><div class="wrap">
    <h2 class="ds-t-section khoi-ten">So sánh</h2>
    <div class="ds-table-cuon"><table class="ds-table">
      <thead><tr><th>Việc</th><th>Xem link<small class="ds-t-meta">miễn phí</small></th><th>Căn của bạn<small class="ds-t-meta">❓&nbsp;đ</small></th></tr></thead>
      <tbody>
        <tr class="ds-table__nhom"><th colspan="3">Xem căn</th></tr>
        <tr><td>Căn 3D dựng sẵn đúng số</td><td><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-sr-only">có</span></td><td><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-sr-only">có</span></td></tr>
        <tr><td>Bốn cách xem: xoay, góc chuẩn, đi trong nhà, mặt bằng 2D</td><td><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-sr-only">có</span></td><td><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-sr-only">có</span></td></tr>
        <tr><td>Chạm món xem số</td><td><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-sr-only">có</span></td><td><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-sr-only">có</span></td></tr>
        <tr class="ds-table__nhom"><th colspan="3">Kê và đo</th></tr>
        <tr><td>Kéo thả, chỉnh ±10 mm, hoàn tác</td><td>thử được<small class="ds-t-meta">không lưu</small></td><td><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-sr-only">có</span></td></tr>
        <tr><td>Thước đo bắt cạnh, góc</td><td><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-sr-only">có</span></td><td><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-sr-only">có</span></td></tr>
        <tr><td>Máy báo chỗ chật</td><td><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-sr-only">có</span></td><td><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-sr-only">có</span></td></tr>
        <tr><td>Thêm món, đổi mẫu từ kho</td><td class="ds-t-meta">—</td><td><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-sr-only">có</span></td></tr>
        <tr class="ds-table__nhom"><th colspan="3">Phong cách và phối cảnh</th></tr>
        <tr><td>Đổi phong cách</td><td class="ds-t-meta">❓</td><td><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-sr-only">có</span></td></tr>
        <tr><td>Tạo ảnh phối cảnh <small class="ds-t-meta">bản thử</small></td><td class="ds-t-meta">—</td><td>tính thêm<small class="ds-t-meta">❓ ảnh kèm sẵn</small></td></tr>
        <tr class="ds-table__nhom"><th colspan="3">Lưu và chia sẻ</th></tr>
        <tr><td>Lưu nhiều phương án (bản mẫu · của tôi · đã chốt)</td><td class="ds-t-meta">—</td><td><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-sr-only">có</span></td></tr>
        <tr><td>Gửi link phương án</td><td class="ds-t-meta">—</td><td><svg class="ds-icon" aria-hidden="true"><use href="#i-check"/></svg><span class="ds-sr-only">có</span></td></tr>
        <tr class="ds-table__nhom"><th colspan="3">Thi công</th></tr>
        <tr><td>Gói hồ sơ thi công</td><td class="ds-t-meta">—</td><td>tính thêm</td></tr>
      </tbody>
    </table></div>
  </div></section>

  <section class="le" id="tinh-them"><div class="wrap">
    <h2 class="ds-t-section khoi-ten">Tính thêm khi cần</h2>
    <div class="luoi">
      <article class="ds-card--boxed"><svg class="ds-icon" aria-hidden="true"><use href="#i-camera"/></svg><h3 class="ds-t-title">Ảnh phối cảnh</h3><p class="ds-t-desc">Ảnh như chụp từ đúng căn và đồ bạn đã kê: ảnh thường, 360°, nhìn từ trên. Video làm sau.</p><dl class="ds-kv"><div class="ds-kv__row"><dt>Mỗi ảnh</dt><dd>❓&nbsp;đ</dd></div></dl><p class="ds-t-meta">Giá hiện trước khi bấm tạo. Ảnh kiểm không đạt có tính tiền không: ❓</p></article>
      <article class="ds-card--boxed"><svg class="ds-icon" aria-hidden="true"><use href="#i-file-text"/></svg><h3 class="ds-t-title">Gói hồ sơ thi công</h3><p class="ds-t-desc">Mặt bằng, mặt đứng có kích thước · bản vẽ từng món đồ đóng · danh sách cắt ván · khối lượng và dự toán.</p><dl class="ds-kv"><div class="ds-kv__row"><dt>Mỗi căn</dt><dd>❓&nbsp;đ</dd></div></dl><p class="ds-t-meta">Chỉ xuất khi căn có hồ sơ hoàn công trở lên và không món nào phạm luật. Bản cho máy cắt cần đo laser tại căn.</p></article>
      <article class="ds-card--boxed"><svg class="ds-icon" aria-hidden="true"><use href="#i-box"/></svg><h3 class="ds-t-title">Thêm căn</h3><p class="ds-t-desc">Căn khác cùng dự án hoặc dự án khác, kích hoạt riêng trong cùng tài khoản.</p><dl class="ds-kv"><div class="ds-kv__row"><dt>Mỗi căn</dt><dd>❓&nbsp;đ</dd></div></dl><p class="ds-t-meta">Căn chưa có trong thư viện: gửi hồ sơ căn, trả lúc nào ❓.</p></article>
    </div>
  </div></section>

  <section class="hoi-dap"><div class="wrap"><div class="hep">
    <h2 class="ds-t-section khoi-ten">Câu hỏi về giá</h2>
    <details class="ds-faq" open><summary class="ds-faq__q">Ai phải trả tiền?</summary><p class="ds-faq__a">Chủ căn trả để kích hoạt căn của mình. Người nhà mở link phương án thì xem miễn phí, không cần tài khoản.</p></details>
    <details class="ds-faq"><summary class="ds-faq__q">Sale bất động sản dùng thế nào?</summary><p class="ds-faq__a">Như mọi khách: mỗi căn kích hoạt riêng, cùng một cách tính. Gửi link phương án cho khách xem miễn phí.</p></details>
    <details class="ds-faq"><summary class="ds-faq__q">Có dùng thử miễn phí không?</summary><p class="ds-faq__a">❓ Đang chờ chốt có căn trình diễn (chỉ xem) hay không.</p></details>
    <details class="ds-faq"><summary class="ds-faq__q">Trả một lần hay theo tháng, theo năm?</summary><p class="ds-faq__a">❓ Chưa chốt.</p></details>
    <details class="ds-faq"><summary class="ds-faq__q">Vì sao ảnh phối cảnh và hồ sơ tính riêng?</summary><p class="ds-faq__a">Đó là hai chỗ tốn chi phí thật: tạo ảnh, và trách nhiệm về số liệu khi đem đi thi công.</p></details>
    <details class="ds-faq"><summary class="ds-faq__q">Số đo đủ để đóng đồ chưa?</summary><p class="ds-faq__a">Hồ sơ hoàn công (sai số ±40 mm) đủ để chốt phương án và báo giá. Bản cho máy cắt cần đo laser tại căn (sai số vài mm). Mỗi căn có nhãn ghi rõ đang ở mức nào.</p></details>
    <details class="ds-faq"><summary class="ds-faq__q">Căn của tôi chưa có trong thư viện?</summary><p class="ds-faq__a">Gửi hồ sơ căn (mặt bằng, hoàn công nếu có), đội mình dựng rồi báo bạn. Trả lúc gửi hay khi dựng xong: ❓.</p></details>
    <details class="ds-faq"><summary class="ds-faq__q">Trả bằng gì? Có hoàn tiền không?</summary><p class="ds-faq__a">❓ Chưa chốt cách trả (đề xuất: chuyển khoản mã QR) và điều kiện hoàn tiền.</p></details>
  </div></div></section>

  <section class="cuoi" id="cuoi"><div class="wrap"><div class="ds-band-toi">
    <h2 class="ds-t-section">Bắt đầu với căn của bạn</h2>
    <p class="ds-t-lead">Giá hiện lại đầy đủ ở bước kích hoạt, trước khi bạn trả.</p>
    <a class="ds-btn ds-btn--lg ds-btn--tren-toi" href="/tao-can">Tạo căn của bạn</a>
  </div></div></section>
</main>
`;export{s as default};
