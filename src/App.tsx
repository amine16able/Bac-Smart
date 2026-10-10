
import { useState } from 'react'
import './index.css'

const subjects = [
  { icon: '📚', name: 'اللغة العربية', detail: 'أدب، نقد، بلاغة ونصوص', color: 'rose' },
  { icon: '💭', name: 'الفلسفة', detail: 'مقالات وطرق المعالجة', color: 'violet' },
  { icon: '🌍', name: 'التاريخ والجغرافيا', detail: 'دروس، مصطلحات وخرائط', color: 'amber' },
  { icon: '🇫🇷', name: 'اللغة الفرنسية', detail: 'Compréhension et expression', color: 'blue' },
  { icon: '🇬🇧', name: 'اللغة الإنجليزية', detail: 'Grammar, writing and reading', color: 'green' },
  { icon: '🕌', name: 'التربية الإسلامية', detail: 'دروس ومفاهيم أساسية', color: 'teal' },
]

const features = [
  { icon: '📝', title: 'مواضيع البكالوريا', text: 'تدرّب على مواضيع السنوات السابقة مع التصحيح.' },
  { icon: '🧠', title: 'تدرّب بذكاء', text: 'اختبر معلوماتك بأسئلة تفاعلية ومتدرجة.' },
  { icon: '✍️', title: 'منهجية المقال', text: 'تعلّم تنظيم الإجابة وتطوير أفكارك خطوة بخطوة.' },
]

function App() {
  const [active, setActive] = useState('الرئيسية')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState('')

  const nav = ['الرئيسية', 'المواد', 'الفلسفة', 'مواضيع البكالوريا']

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.includes(search) || subject.detail.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app" dir="rtl">
      <header className="topbar">
        <a className="brand" href="#" onClick={() => setActive('الرئيسية')}>
          <span className="brand-mark">B</span>
          <span>
            <strong>Bac Smart</strong>
            <small>طريقك نحو النجاح</small>
          </span>
        </a>

        <nav className="nav-links">
          {nav.map((item) => (
            <button
              key={item}
              className={active === item ? 'nav-link active' : 'nav-link'}
              onClick={() => {
                setActive(item)
                setSelected('')
                document.getElementById(item === 'الرئيسية' ? 'home' : 'subjects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {item}
            </button>
          ))}
        </nav>

        <a className="header-cta" href="#subjects">ابدأ المراجعة ←</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow"><span className="status-dot" /> منصة تعليمية جزائرية</div>
            <h1>
              مستقبلك يبدأ
              <br />
              <span>بخطوة ذكية.</span>
            </h1>
            <p className="hero-text">
              كل ما تحتاجه للتحضير لبكالوريا شعبة الآداب والفلسفة،
              من الدروس والمنهجيات إلى التمارين والمواضيع السابقة.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#subjects">اكتشف المواد <span>←</span></a>
              <a className="secondary-btn" href="#features">اكتشف المنصة</a>
            </div>
            <div className="hero-note">
              <span className="note-icon">✦</span>
              تعلّم بفهم، تدرّب بثقة، واستعد للنجاح.
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="study-card">
              <div className="study-card-top">
                <span className="study-label">رحلتك نحو البكالوريا</span>
                <span className="study-spark">✦</span>
              </div>
              <div className="book-illustration">📖</div>
              <h3>كل يوم فرصة جديدة</h3>
              <p>خطّط لمراجعتك وابدأ بتحقيق أهدافك.</p>
              <div className="mini-subjects">
                <span>الفلسفة</span><span>الأدب</span><span>اللغات</span>
              </div>
              <div className="study-footer"><span>خطوة بخطوة</span><span>2027 ✦</span></div>
            </div>
            <div className="floating-card floating-top"><span>✍️</span><div><strong>تدرّب باستمرار</strong><small>الممارسة تصنع الفرق</small></div></div>
            <div className="floating-card floating-bottom"><span>🎯</span><div><strong>هدفك واضح</strong><small>استعد بثقة</small></div></div>
          </div>
        </section>

        <section className="trust-strip">
          <div><span className="trust-icon">🎓</span><span><strong>3AS</strong><small>السنة الثالثة ثانوي</small></span></div>
          <div><span className="trust-icon">📘</span><span><strong>شعبة الآداب والفلسفة</strong><small>محتوى موجّه لشعبتك</small></span></div>
          <div><span className="trust-icon">🇩🇿</span><span><strong>محتوى جزائري</strong><small>للتحضير للبكالوريا الوطنية</small></span></div>
        </section>

        <section className="section subjects-section" id="subjects">
          <div className="section-heading">
            <div>
              <span className="section-kicker">تعلّم بطريقتك</span>
              <h2>اكتشف <span>موادك الدراسية</span></h2>
              <p>اختر المادة التي تريد مراجعتها وابدأ رحلتك.</p>
            </div>
            <label className="search-box">
              <span>⌕</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="ابحث عن مادة..."
                aria-label="البحث عن مادة"
              />
            </label>
          </div>

          <div className="subjects-grid">
            {filteredSubjects.map((subject) => (
              <button
                className={`subject-card ${selected === subject.name ? 'chosen' : ''}`}
                key={subject.name}
                onClick={() => {
                  setSelected(subject.name)
                  setActive('المواد')
                }}
              >
                <div className={`subject-icon ${subject.color}`}>{subject.icon}</div>
                <h3>{subject.name}</h3>
                <p>{subject.detail}</p>
                <span className="card-arrow">←</span>
              </button>
            ))}
          </div>

          {filteredSubjects.length === 0 && <p className="empty-state">لم نجد مادة بهذا الاسم. جرّب كلمة أخرى.</p>}

          {selected && (
            <div className="selection-panel">
              <div>
                <strong>اخترت: {selected}</strong>
                <p>هذه الواجهة قيد التطوير. سنضيف الدروس والتمارين والتصحيحات الخاصة بهذه المادة.</p>
              </div>
              <button onClick={() => setSelected('')} aria-label="إغلاق">✕</button>
            </div>
          )}
          <p className="content-notice">سيُستكمل فهرس المواد وفق البرنامج الرسمي لشعبة الآداب والفلسفة.</p>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading centered">
            <div>
              <span className="section-kicker">أدواتك للنجاح</span>
              <h2>مراجعة أذكى، <span>نتائج أفضل</span></h2>
              <p>موارد تساعدك على الفهم والتطبيق والاستعداد الجيد.</p>
            </div>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <span className="feature-number">0{index + 1}</span>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <span className="feature-arrow">←</span>
              </article>
            ))}
          </div>
        </section>

        <section className="philosophy-banner">
          <div className="philosophy-symbol">“</div>
          <div>
            <span className="section-kicker">مساحة التفكير</span>
            <h2>الفلسفة ليست حفظًا فقط، بل طريقة للتفكير.</h2>
            <p>تعرّف على منهجيات المقال الفلسفي وتدرّب على بناء حجة واضحة ومنظمة.</p>
          </div>
          <button onClick={() => {
            setActive('الفلسفة')
            setSelected('الفلسفة')
            document.getElementById('subjects')?.scrollIntoView({ behavior: 'smooth' })
          }}>اكتشف الفلسفة ←</button>
        </section>

        <section className="closing-cta">
          <span>✦ بداية صغيرة، طموح كبير</span>
          <h2>استثمر في فهمك اليوم.</h2>
          <p>رحلة البكالوريا تحتاج إلى تنظيم وممارسة. ابدأ بخطوتك الأولى.</p>
          <a className="primary-btn" href="#subjects">ابدأ الآن ←</a>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">B</span><span><strong>Bac Smart</strong><small>طريقك نحو النجاح</small></span></a>
        <p>منصة تعليمية قيد التطوير لخدمة تلاميذ البكالوريا في الجزائر.</p>
        <span>© {new Date().getFullYear()} Bac Smart</span>
      </footer>
    </div>
  )
}

export default App
