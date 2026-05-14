// ===== i18n dictionary =====
const I18N = {
  ru: {
    brand: "Руслан Рощупкин",
    hero_role: "Product Manager роста · Т-Инвестиции · «Накопить и Инвестировать»",
    hero_pitch: "Принёс +810 млн ₽ AUM и вывел Open Broker на 1 100 MAU без маркетинга.",
    hero_sub: "Веду продуктовые гипотезы и A/B-тесты, разбираю воронки и метрики, превращаю данные в инсайты и решения.",
    m_mln: "млн ₽",
    m_aum: "доп. AUM от growth-механик",
    m_mau: "MAU Open Broker без маркетинга",
    m_crypto: "MAU крипто-раздела после запуска",
    m_ret: "retention Open Broker, CSAT 4+",
    cta_cv: "Скачать резюме (PDF)",
    cta_cases: "Смотреть кейсы",

    about_title: "О себе",
    about_p1: "Product Manager роста в Т-Инвестициях, направление «Накопить и Инвестировать». Запускаю международные продукты, внешние интеграции и growth-механики.",
    about_p2: "Формирую дорожные карты под стратегические цели бизнеса и под устранение проблем в ключевых пользовательских сценариях — проблемы нахожу через аналитику, customer research и эксперименты.",
    about_p3: "Работаю на двух горизонтах сразу: долгий продуктовый — выход на новые рынки, white-label и платформенные решения; короткий цикл улучшений — A/B-тесты, воронки, вовлечение, удержание и рост AUM.",

    cases_title: "Кейсы",
    cases_lead: "Четыре запуска, разобранные по логике: проблема → инсайт → решение → результат → что вынес.",
    lbl_problem: "Проблема",
    lbl_insight: "Инсайт",
    lbl_solution: "Решение",
    lbl_result: "Результат",
    lbl_takeaway: "Что вынес",

    c1_title: "Open Broker — консолидация портфельной аналитики",
    c1_problem: "У инвесторов с несколькими брокерами не было единой картины портфеля — аналитика разорвана между приложениями.",
    c1_insight: "Точкой входа может стать импорт чужих данных: брокерские отчёты и API готовы отдавать историю сделок и позиций.",
    c1_solution: "Вывел продукт на рынок: загрузка брокерских отчётов и API-интеграции с Цифра Брокер и Bybit, сценарий депозитарных переводов.",
    c1_result: "1 100 MAU без отдельного маркетинга, +90 млн ₽ AUM, удержание 90% пользователей с CSAT 4+ из 5, rolling retention 30–35% на 45-й день.",
    c1_takeaway: "импорт внешних данных — недооценённый, но дешёвый канал привлечения и удержания.",

    c2_title: "Growth-механики в инвестиционных сценариях",
    c2_problem: "Ключевые сценарии — пополнение брокерского счёта, ПДС, покупка фондов — не дотягивали по конверсии и объёму притока.",
    c2_insight: "Разбор воронок показал конкретные точки отвала, где механика-стимул окупается с понятным NPV.",
    c2_solution: "Сформировал и запустил growth-механики в пополнении счёта, ПДС и покупке фондов Т-Капитала, проверяя гипотезы A/B-тестами.",
    c2_result: "+810 млн ₽ дополнительного AUM и 24 млн ₽ NPV.",
    c2_takeaway: "привязка каждой механики к NPV дисциплинирует приоритизацию и снимает споры о ценности.",

    c3_title: "Сущность «криптовалюта» в модели данных",
    c3_problem: "Система учёта активов Т-Инвестиций не умела работать с криптовалютой — это блокировало целый класс продуктов.",
    c3_insight: "Узкое место — не интерфейсы, а модель данных: расширение на уровне сущности открывает платформу, а не одну фичу.",
    c3_solution: "Инициировал и лидировал расширение модели данных, добавив сущность «криптовалюта» как платформенную основу.",
    c3_result: "Заведено 100+ криптовалют, раздел вырос до 10 000 MAU, продуктовые экраны крипты — до 50 000 MAU; создан фундамент для следующих стратегических продуктов.",
    c3_takeaway: "инвестиция в модель данных окупается кратно — на ней потом строятся продукты годами.",

    c4_title: "White-label криптопродукт для Казахстана",
    c4_problem: "Нужно было выйти на новый рынок через партнёра, но продукт не соответствовал требованиям местного регулятора.",
    c4_insight: "Барьер выхода — onboarding и KYC под локальное регулирование; экономику делает прозрачная revenue-share модель.",
    c4_solution: "Локализовал onboarding и KYC под требования регулятора, собрал revenue-share модель и подготовил продукт к передаче партнёру.",
    c4_result: "Решение полностью продано партнёру.",
    c4_takeaway: "для white-label важнее не фичи, а упаковка — соответствие регулятору и понятная экономика партнёрства.",

    more_title: "Ещё запуски",
    more_1: "Сценарий присвоения статуса квалифицированного инвестора на базе Open Broker через обработку отчётов других брокеров — +300 клиентов в месяц, PV 3 800 ₽ на клиента.",
    more_2: "«Маскированное» приложение Т-Инвестиций под брендом Open Broker (основное недоступно в App Store) — ожидаемая экономия 33 млн ₽ на повторных выездах представителей.",

    how_title: "Как я работаю",
    how_1_t: "Гипотезы",
    how_1_p: "Формулирую продуктовые гипотезы с явными ожиданиями по метрике и критерием успеха — до старта разработки.",
    how_2_t: "A/B-тесты",
    how_2_p: "Проверяю гипотезы экспериментами, чтобы решения опирались на эффект, а не на мнение.",
    how_3_t: "Воронки и метрики",
    how_3_p: "Разбираю воронки и метрики, нахожу точки отвала и считаю, где улучшение окупается.",
    how_4_t: "Инсайты в решения",
    how_4_p: "Свожу аналитику, customer research и эксперименты в инсайты и переношу их в дорожную карту.",

    cv_title: "Опыт, образование, навыки",
    cv_exp: "Опыт",
    cv_exp_date: "04.2022 — настоящее время",
    cv_exp_role: "Growth Product Manager",
    cv_edu: "Образование",
    cv_hse: "Высшая школа экономики",
    cv_msc: "Master of Data Analytics for Business and Economics — GPA 9/10, с отличием",
    cv_bsc: "Бакалавр экономики — GPA 8/10, майнор Data Science",
    cv_skills: "Навыки",
    sk_1: "Product strategy",
    sk_2: "Roadmap prioritization",
    sk_3: "Product analytics",
    sk_eng: "English C1",

    footer_title: "Связаться",
    footer_lead: "Открыт к сильным продуктовым задачам в росте и платформенных продуктах.",
  },

  en: {
    brand: "Ruslan Roshchupkin",
    hero_role: "Growth Product Manager · T-Investments · Save & Invest",
    hero_pitch: "Drove +810M ₽ in AUM and grew Open Broker to 1,100 MAU with zero marketing.",
    hero_sub: "I run product hypotheses and A/B tests, break down funnels and metrics, and turn data into insights and decisions.",
    m_mln: "M ₽",
    m_aum: "extra AUM from growth mechanics",
    m_mau: "MAU on Open Broker, no marketing",
    m_crypto: "MAU of the crypto section after launch",
    m_ret: "Open Broker retention, CSAT 4+",
    cta_cv: "Download résumé (PDF)",
    cta_cases: "See case studies",

    about_title: "About",
    about_p1: "Growth Product Manager at T-Investments, Save & Invest area. I launch international products, external integrations and growth mechanics.",
    about_p2: "I build roadmaps that serve strategic business goals and fix problems in key user journeys — problems I surface through analytics, customer research and experiments.",
    about_p3: "I work on two horizons at once: the long product horizon — new markets, white-label and platform solutions; and the short improvement cycle — A/B tests, funnels, engagement, retention and AUM growth.",

    cases_title: "Case studies",
    cases_lead: "Four launches, structured the same way: problem → insight → solution → result → takeaway.",
    lbl_problem: "Problem",
    lbl_insight: "Insight",
    lbl_solution: "Solution",
    lbl_result: "Result",
    lbl_takeaway: "Takeaway",

    c1_title: "Open Broker — consolidating portfolio analytics",
    c1_problem: "Investors with multiple brokers had no single view of their portfolio — analytics were scattered across apps.",
    c1_insight: "The entry point could be importing external data: broker statements and APIs already expose trade and position history.",
    c1_solution: "Brought the product to market: broker statement uploads, API integrations with Tsifra Broker and Bybit, and a custody-transfer flow.",
    c1_result: "1,100 MAU with no dedicated marketing, +90M ₽ AUM, 90% retention with CSAT 4+ out of 5, and 30–35% rolling retention on day 45.",
    c1_takeaway: "importing external data is an underrated yet cheap acquisition and retention channel.",

    c2_title: "Growth mechanics in investment journeys",
    c2_problem: "Key journeys — brokerage top-ups, long-term savings, fund purchases — underperformed on conversion and inflow volume.",
    c2_insight: "Funnel analysis revealed specific drop-off points where an incentive mechanic pays back with a clear NPV.",
    c2_solution: "Designed and launched growth mechanics across top-ups, long-term savings and T-Capital fund purchases, validating hypotheses with A/B tests.",
    c2_result: "+810M ₽ in additional AUM and 24M ₽ NPV.",
    c2_takeaway: "tying every mechanic to NPV disciplines prioritization and ends debates about value.",

    c3_title: "A \"cryptocurrency\" entity in the data model",
    c3_problem: "T-Investments' asset-accounting system couldn't handle cryptocurrency — which blocked a whole class of products.",
    c3_insight: "The bottleneck wasn't the UI but the data model: extending it at the entity level unlocks a platform, not just one feature.",
    c3_solution: "Initiated and led the data-model extension, adding a \"cryptocurrency\" entity as a platform foundation.",
    c3_result: "100+ cryptocurrencies onboarded, the section grew to 10,000 MAU, crypto product screens to 50,000 MAU — and a foundation for the next strategic products.",
    c3_takeaway: "investing in the data model pays back many times over — products are built on it for years.",

    c4_title: "White-label crypto product for Kazakhstan",
    c4_problem: "We needed to enter a new market through a partner, but the product didn't meet the local regulator's requirements.",
    c4_insight: "The entry barrier is onboarding and KYC under local regulation; a transparent revenue-share model makes the economics work.",
    c4_solution: "Localized onboarding and KYC to the regulator's requirements, built a revenue-share model and prepared the product for handover to the partner.",
    c4_result: "The solution was fully sold to the partner.",
    c4_takeaway: "for white-label, packaging matters more than features — regulatory fit and clear partnership economics.",

    more_title: "More launches",
    more_1: "A qualified-investor status flow on top of Open Broker, processing other brokers' statements — +300 clients per month, 3,800 ₽ PV per client.",
    more_2: "A \"masked\" T-Investments app under the Open Broker brand (the main app is unavailable on the App Store) — expected savings of 33M ₽ on repeat field-rep visits.",

    how_title: "How I work",
    how_1_t: "Hypotheses",
    how_1_p: "I frame product hypotheses with explicit metric expectations and a success criterion — before development starts.",
    how_2_t: "A/B tests",
    how_2_p: "I validate hypotheses with experiments so decisions rest on measured effect, not opinion.",
    how_3_t: "Funnels & metrics",
    how_3_p: "I break down funnels and metrics, find drop-off points and quantify where an improvement pays back.",
    how_4_t: "Insights into decisions",
    how_4_p: "I combine analytics, customer research and experiments into insights and move them onto the roadmap.",

    cv_title: "Experience, education, skills",
    cv_exp: "Experience",
    cv_exp_date: "Apr 2022 — present",
    cv_exp_role: "Growth Product Manager",
    cv_edu: "Education",
    cv_hse: "HSE University",
    cv_msc: "Master of Data Analytics for Business and Economics — GPA 9/10, with honors",
    cv_bsc: "BSc in Economics — GPA 8/10, minor in Data Science",
    cv_skills: "Skills",
    sk_1: "Product strategy",
    sk_2: "Roadmap prioritization",
    sk_3: "Product analytics",
    sk_eng: "English C1",

    footer_title: "Get in touch",
    footer_lead: "Open to strong product roles in growth and platform products.",
  },
};

// ===== Language =====
function applyLang(lang) {
  const dict = I18N[lang] || I18N.ru;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

// ===== Theme =====
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const icon = document.querySelector(".theme-icon");
  if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";
  try { localStorage.setItem("theme", theme); } catch (e) {}
}

// ===== Init =====
(function init() {
  let savedLang;
  let savedTheme;
  try {
    savedLang = localStorage.getItem("lang");
    savedTheme = localStorage.getItem("theme");
  } catch (e) {}

  applyLang(savedLang === "en" ? "en" : "ru");
  // Светлая тема по умолчанию; тёмную включает пользователь и она запоминается.
  applyTheme(savedTheme === "dark" ? "dark" : "light");

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }
})();
