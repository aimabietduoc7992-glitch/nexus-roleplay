const menuBtn=document.getElementById("menuBtn"),mobileMenu=document.getElementById("mobileMenu"),closeBtn=document.getElementById("closeBtn");
menuBtn?.addEventListener("click",()=>mobileMenu.classList.add("open"));
closeBtn?.addEventListener("click",()=>mobileMenu.classList.remove("open"));
document.querySelectorAll(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>mobileMenu.classList.remove("open")));
window.addEventListener("scroll",()=>document.getElementById("header").style.boxShadow=scrollY>50?"0 20px 80px #000":"0 20px 80px #0008");
let n=128, dir=1; setInterval(()=>{n+=dir*(Math.random()>.55?1:0);if(n>142)dir=-1;if(n<118)dir=1;document.getElementById("players").textContent=n},4000);

/* ===== NEXUS CARD INFO POPUPS ===== */
const nexusModal = document.getElementById('nexusModal');
const nexusModalTitle = document.getElementById('nexusModalTitle');
const nexusModalText = document.getElementById('nexusModalText');
const nexusModalTags = document.getElementById('nexusModalTags');

const nexusInfo = {
  gangs:{title:'GANGS.',text:'Gia nhập hoặc xây dựng một tổ chức ngầm, tranh giành địa bàn, tạo danh tiếng và viết câu chuyện riêng của bạn.',tags:['CREW','TERRITORY','STREET RP']},
  heists:{title:'HEISTS.',text:'Những phi vụ cần đồng đội, kế hoạch và khả năng xử lý tình huống. Thành công càng lớn, rủi ro càng cao.',tags:['PLANNING','TEAMWORK','HIGH RISK']},
  blackmarket:{title:'BLACK MARKET.',text:'Khu vực giao dịch những món hàng không xuất hiện trong cửa hàng thông thường. Mọi giao dịch đều có rủi ro.',tags:['UNDERGROUND','TRADING','RISK']},
  trucking:{title:'TRUCKING.',text:'Vận chuyển hàng hóa giữa các điểm trong thành phố để kiếm tiền và mở khóa những chuyến hàng giá trị hơn.',tags:['DELIVERY','MONEY','CAREER']},
  mechanic:{title:'MECHANIC.',text:'Sửa chữa, bảo dưỡng và nâng cấp phương tiện. Biến kỹ năng cơ khí thành một nghề nghiệp thực sự.',tags:['GARAGE','TUNING','CAREER']},
  fishing:{title:'FISHING.',text:'Đi câu, thu hoạch cá và bán sản phẩm để tạo thu nhập. Một nghề chill nhưng vẫn có chiều sâu kinh tế.',tags:['FISHING','ECONOMY','RELAX']},
  business:{title:'BUSINESS.',text:'Xây dựng và quản lý doanh nghiệp của riêng bạn, tuyển người và tạo dòng tiền trong thành phố.',tags:['OWNERSHIP','STAFF','PROFIT']},
  taxi:{title:'TAXI.',text:'Đưa cư dân đi khắp thành phố, nhận cuốc và kiếm tiền bằng dịch vụ vận chuyển.',tags:['SERVICE','DRIVING','CAREER']},
  construction:{title:'CONSTRUCTION.',text:'Thực hiện các công việc xây dựng và dân sự để kiếm thu nhập hợp pháp.',tags:['CIVIL JOB','WORK','CAREER']}
};

document.querySelectorAll('.nexus-click[data-info]').forEach(card=>{
  card.addEventListener('click',()=>{
    const info=nexusInfo[card.dataset.info];
    if(!info||!nexusModal)return;
    nexusModalTitle.textContent=info.title;
    nexusModalText.textContent=info.text;
    nexusModalTags.innerHTML=info.tags.map(t=>`<span>${t}</span>`).join('');
    nexusModal.classList.add('open');
    nexusModal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  });
});

document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeNexusModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeNexusModal()});
function closeNexusModal(){
  if(!nexusModal)return;
  nexusModal.classList.remove('open');
  nexusModal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}/* ===== NEXUS WL 3D INTERACTION ===== */

const wlCard = document.querySelector('.wl-3d-card');

if (wlCard) {
  wlCard.addEventListener('mousemove', (e) => {
    const rect = wlCard.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    wlCard.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  wlCard.addEventListener('mouseleave', () => {
    wlCard.style.transform =
      'rotateX(0deg) rotateY(0deg) translateY(0)';
  });
}

/* WL FORM */

const whitelistForm = document.getElementById('whitelistForm');
const wlMessage = document.getElementById('wlMessage');

if (whitelistForm) {
  whitelistForm.addEventListener('submit', function (e) {
    e.preventDefault();

    wlMessage.textContent =
      '✓ Đơn Whitelist đã được ghi nhận. Đội ngũ NEXUS sẽ kiểm tra đơn của bạn.';

    whitelistForm.reset();
  });
}
