import ContactForm from "@/components/ContactForm";
import PartnerCarousel from "@/components/PartnerCarousel";

/** Obsah stránky /. Upravujte přímo; původní export není za běhu používán. */
export default function Content() {
  return (
    <>
      {/* INSTALACE NABÍJECÍCH STANIC NA MÍRU */}
      <section
        id="home-instalace-nabijecich-stanic-na-miru-section-1"
        className="section layout-row-have-ext-bg"
      >
        <div className="layout-row-overlay"></div>
        <div className="layout-row-container">
          <div className="layout-row">
            <div
              className="layout-col-md-12  ui-hidden-lg ui-hidden-md "
              id="home-instalace-nabijecich-stanic-na-miru-grid-2"
            >
              <div
                id="home-instalace-nabijecich-stanic-na-miru-column-3"
                className="layout-column  "
              >
                <div className="layout-column-addons"></div>
              </div>
            </div>
            <div
              className="layout-row-column  "
              id="home-instalace-nabijecich-stanic-na-miru-grid-4"
            >
              <div
                id="home-instalace-nabijecich-stanic-na-miru-column-5"
                className="layout-column   ui-wow fadeInDown"
                data-motion-duration="800ms"
                data-motion-delay="300ms"
              >
                <div className="layout-column-addons">
                  <div
                    id="home-instalace-nabijecich-stanic-na-miru-wrap-6"
                    className="block-wrap  addon-root-heading"
                  >
                    <div
                      id="home-instalace-nabijecich-stanic-na-miru-block-7"
                      className="clearfix  ui-wow fadeInDown  "
                      data-motion-duration="800ms"
                      data-motion-delay="600ms"
                    >
                      <div className="block block-header">
                        <h1 className="block-title">
                          {"INSTALACE NABÍJECÍCH STANIC "}
                          <span style={{ color: "#919191" }}>{"NA MÍRU"}</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div
                    id="home-instalace-nabijecich-stanic-na-miru-wrap-8"
                    className="block-wrap  addon-root-text-block"
                  >
                    <div
                      id="home-instalace-nabijecich-stanic-na-miru-block-9"
                      className="clearfix  ui-wow fadeInDown  "
                      data-motion-duration="800ms"
                      data-motion-delay="600ms"
                    >
                      <div className="block block-text-block ">
                        <div className="block-content  ">
                          <p>
                            {
                              "Konzultace, projektová dokumentace, PBŘ, realizace instalačních a zemních prací pro domácnosti, firmy i veřejný sektor."
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="home-instalace-nabijecich-stanic-na-miru-wrap-10"
                    className="block-wrap  addon-root-raw-html"
                  >
                    <div
                      id="home-instalace-nabijecich-stanic-na-miru-block-11"
                      className="clearfix  ui-wow fadeInDown  "
                      data-motion-duration="800ms"
                      data-motion-delay="600ms"
                    >
                      <div className="block block-raw-html ">
                        <div className="block-content">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "30px",
                              flexWrap: "wrap",
                              padding: "40px 0 40px 20px",
                            }}
                          >
                            <a
                              href="#kontakt"
                              className="btn-contact"
                              style={{
                                backgroundColor: "#6ea6e7",
                                color: "white",
                                padding: "15px 30px",
                                textDecoration: "none",
                                borderRadius: "4px",
                                fontSize: "18px",
                                fontWeight: "500",
                                display: "inline-block",
                                transition: "background-color 0.3s ease",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {"\n    Chcete se zeptat?\n  "}
                            </a>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "10px",
                                  fontSize: "18px",
                                  color: "#333",
                                }}
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <a
                                  href="tel:+420774966547"
                                  style={{
                                    color: "#333",
                                    textDecoration: "none",
                                  }}
                                >
                                  {"+420 774 966 547"}
                                </a>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "10px",
                                  fontSize: "18px",
                                  color: "#333",
                                }}
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                  <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <a
                                  href="mailto:info@powerdrive.cz"
                                  style={{
                                    color: "#333",
                                    textDecoration: "none",
                                  }}
                                >
                                  {"info@powerdrive.cz"}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 320+ */}
      <div id="home-restored-1-1" className="section">
        <div className="ui-container-inner">
          <div className="layout-row">
            <div className="layout-row-column  " id="home-restored-1-2">
              <div id="home-restored-1-3" className="layout-column ">
                <div className="layout-column-addons">
                  <div
                    id="home-restored-1-4"
                    className="block-wrap  addon-root-divider"
                  >
                    <div id="home-restored-1-5" className="clearfix  ">
                      <div className="block-divider-wrap divider-position">
                        <div
                          className="ui-divider ui-divider-border "
                          role="none"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="home-320-section-1" className="section">
        <div className="layout-row-container">
          <div className="layout-row ui-no-gutter">
            <div className="layout-col-md-12  " id="home-320-grid-2">
              <div id="home-320-column-3" className="layout-column  ">
                <div className="layout-column-addons">
                  <div
                    id="home-320-wrap-4"
                    className="block-wrap  addon-root-feature"
                  >
                    <div
                      id="home-320-block-5"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="600ms"
                    >
                      <div className="block-content-align-before block block-feature service-item">
                        <div className="block-content">
                          <div className="ui-media-content">
                            <h3 className="block-title ui-feature-box-title">
                              {"320+"}
                            </h3>
                            <div className="block-text">
                              <p>
                                <span style={{ color: "#667489" }}>
                                  {"instalací"}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-row-column  " id="home-320-grid-6">
              <div id="home-320-column-7" className="layout-column  ">
                <div className="layout-column-addons">
                  <div
                    id="home-320-wrap-8"
                    className="block-wrap  addon-root-feature"
                  >
                    <div
                      id="home-320-block-9"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="600ms"
                    >
                      <div className="block-content-align-left block block-feature ui-text-left service-item">
                        <div className="block-content">
                          <div className="ui-media">
                            <div className="pull-left"></div>
                            <div className="ui-media-body">
                              <div className="ui-media-content">
                                <h3 className="block-title ui-feature-box-title">
                                  <span style={{ color: "#6ea6e7" }}>
                                    {"★"}
                                  </span>
                                  {" 4,9"}
                                </h3>
                                <div className="block-text">
                                  <p>
                                    <span style={{ color: "#667489" }}>
                                      {"průměrné hodnocení"}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-row-column  " id="home-320-grid-10">
              <div id="home-320-column-11" className="layout-column ">
                <div className="layout-column-addons">
                  <div
                    id="home-320-wrap-12"
                    className="block-wrap  addon-root-feature"
                  >
                    <div
                      id="home-320-block-13"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="600ms"
                    >
                      <div className="block-content-align-before block block-feature service-item">
                        <div className="block-content">
                          <div className="ui-media-content">
                            <h3 className="block-title ui-feature-box-title">
                              {"75+"}
                            </h3>
                            <div className="block-text">
                              <p>
                                <span style={{ color: "#667489" }}>
                                  {"spokojených zákazníků"}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Co děláme */}
      <div id="home-restored-2-1" className="section">
        <div className="ui-container-inner">
          <div className="layout-row">
            <div className="layout-row-column  " id="home-restored-2-2">
              <div id="home-restored-2-3" className="layout-column ">
                <div className="layout-column-addons">
                  <div
                    id="home-restored-2-4"
                    className="block-wrap  addon-root-divider"
                  >
                    <div id="home-restored-2-5" className="clearfix  ">
                      <div className="block-divider-wrap divider-position">
                        <div
                          className="ui-divider ui-divider-border "
                          role="none"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="home-restored-3-1" className="section">
        <div className="ui-container-inner">
          <div className="layout-row">
            <div className="layout-col-md-12  " id="home-restored-3-2">
              <div id="home-restored-3-3" className="layout-column ">
                <div className="layout-column-addons">
                  <div
                    id="home-restored-3-4"
                    className="block-wrap  addon-root-divider"
                  >
                    <div id="home-restored-3-5" className="clearfix  ">
                      <div className="block-divider-wrap divider-position">
                        <div
                          className="ui-divider ui-divider-border "
                          role="none"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        id="home-co-delame-section-1"
        className="section ui-wow fadeInLeft"
        data-motion-duration="600ms"
        data-motion-delay="300ms"
      >
        <div className="layout-row-overlay"></div>
        <div className="layout-row-container">
          <div className="layout-row">
            <div className="layout-col-md-12  " id="home-co-delame-grid-2">
              <div id="home-co-delame-column-3" className="layout-column ">
                <div className="layout-column-addons">
                  <div
                    id="home-co-delame-wrap-4"
                    className="block-wrap  addon-root-heading"
                  >
                    <div id="home-co-delame-block-5" className="clearfix  ">
                      <div className="block block-header">
                        <h2 className="block-title">{"Co děláme"}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="layout-col-md-4 layout-col-sm-4  "
              id="home-co-delame-grid-6"
            >
              <div id="home-co-delame-column-7" className="layout-column  ">
                <div className="layout-column-addons">
                  <div
                    id="home-co-delame-wrap-8"
                    className="block-wrap  addon-root-button"
                  >
                    <div id="home-co-delame-block-9" className="clearfix  ">
                      <div className="ui-button-wrapper">
                        <a
                          href="/#kontakt"
                          id="home-co-delame-button-10"
                          className="button  button-custom button-rounded"
                        >
                          {"Poptat řešení"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="layout-col-md-4 layout-col-sm-4  "
              id="home-co-delame-grid-11"
            >
              <div id="home-co-delame-column-12" className="layout-column  ">
                <div className="layout-column-addons">
                  <div
                    id="home-co-delame-wrap-13"
                    className="block-wrap  addon-root-raw-html"
                  >
                    <div
                      id="home-co-delame-block-14"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="400ms"
                    >
                      <div className="block block-raw-html ">
                        <div className="block-content">
                          <div className="consultation-card" tabIndex={0}>
                            <div className="icon-container">
                              <i
                                className="fa-solid fa-user-group"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <h2>{"01. ANALÝZA ⬇️"}</h2>
                            <p className="description">
                              {
                                "Spojíme se s klientem a probereme konkrétní potřeby."
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="layout-col-md-4 layout-col-sm-4  "
              id="home-co-delame-grid-15"
            >
              <div id="home-co-delame-column-16" className="layout-column  ">
                <div className="layout-column-addons">
                  <div
                    id="home-co-delame-wrap-17"
                    className="block-wrap  addon-root-raw-html"
                  >
                    <div
                      id="home-co-delame-block-18"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="400ms"
                    >
                      <div className="block block-raw-html ">
                        <div className="block-content">
                          <div className="consultation-card" tabIndex={0}>
                            <div className="icon-container">
                              <i
                                className="fas fa-money-bill-1-wave"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <h2>{"02. NABÍDKA ⬇️"}</h2>
                            <p className="description">
                              {
                                "Zkalkulujeme finanční nabídku ušitou přesně na míru konkrétnímu zákazníkovi."
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-row-column  " id="home-co-delame-grid-19">
              <div id="home-co-delame-column-20" className="layout-column  ">
                <div className="layout-column-addons">
                  <div
                    id="home-co-delame-wrap-21"
                    className="block-wrap  addon-root-raw-html"
                  >
                    <div
                      id="home-co-delame-block-22"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="400ms"
                    >
                      <div className="block block-raw-html ">
                        <div className="block-content">
                          <div className="consultation-card" tabIndex={0}>
                            <div className="icon-container">
                              <i
                                className="fas fa-toolbox"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <h2>{"03. PROJEKT ⬇️"}</h2>
                            <p className="description">
                              {
                                "Vytvoříme projektovou dokumentaci či PBŘ reflektující zadání a všechny potřebné normy."
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-row-column  " id="home-co-delame-grid-23">
              <div id="home-co-delame-column-24" className="layout-column  ">
                <div className="layout-column-addons">
                  <div
                    id="home-co-delame-wrap-25"
                    className="block-wrap  addon-root-raw-html"
                  >
                    <div
                      id="home-co-delame-block-26"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="400ms"
                    >
                      <div className="block block-raw-html ">
                        <div className="block-content">
                          <div className="consultation-card" tabIndex={0}>
                            <div className="icon-container">
                              <i
                                className="fas fa-screwdriver-wrench"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <h2>{"04. REALIZACE ⬇️"}</h2>
                            <p className="description">
                              {
                                "Realizujeme přímo na místě a řešíme případné komplikace."
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-row-column  " id="home-co-delame-grid-27">
              <div id="home-co-delame-column-28" className="layout-column  ">
                <div className="layout-column-addons">
                  <div
                    id="home-co-delame-wrap-29"
                    className="block-wrap  addon-root-raw-html"
                  >
                    <div
                      id="home-co-delame-block-30"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="400ms"
                    >
                      <div className="block block-raw-html ">
                        <div className="block-content">
                          <div className="consultation-card" tabIndex={0}>
                            <div className="icon-container">
                              <i
                                className="fas fa-repeat"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <h2>{"05. SERVIS ⬇️"}</h2>
                            <p className="description">
                              {
                                "Zajišťujeme záruční i pozáruční servis.\n\nNedáváme od naší práce ruce pryč."
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Naše realizace */}
      <div id="home-restored-4-1" className="section">
        <div className="ui-container-inner">
          <div className="layout-row">
            <div className="layout-col-md-12  " id="home-restored-4-2">
              <div id="home-restored-4-3" className="layout-column ">
                <div className="layout-column-addons">
                  <div
                    id="home-restored-4-4"
                    className="block-wrap  addon-root-divider"
                  >
                    <div id="home-restored-4-5" className="clearfix  ">
                      <div className="block-divider-wrap divider-position">
                        <div
                          className="ui-divider ui-divider-border "
                          role="none"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        id="realizace"
        className="section ui-wow fadeInLeft"
        data-motion-duration="600ms"
        data-motion-delay="300ms"
      >
        <div className="layout-row-overlay"></div>
        <div className="layout-row-container">
          <div className="layout-row">
            <div className="layout-col-md-12  " id="home-nase-realizace-grid-1">
              <div
                id="home-nase-realizace-column-2"
                className="layout-column  "
              >
                <div className="layout-column-addons">
                  <div
                    id="home-nase-realizace-wrap-3"
                    className="block-wrap  addon-root-heading"
                  >
                    <div
                      id="home-nase-realizace-block-4"
                      className="clearfix  "
                    >
                      <div className="block block-header">
                        <h2 className="block-title">{"Naše realizace"}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="layout-col-md-4 layout-col-sm-4  "
              id="home-nase-realizace-grid-5"
            >
              <div
                id="home-nase-realizace-column-6"
                className="layout-column  "
              >
                <div className="layout-column-addons">
                  <div
                    id="home-nase-realizace-wrap-7"
                    className="block-wrap  addon-root-button"
                  >
                    <div
                      id="home-nase-realizace-block-8"
                      className="clearfix  "
                    >
                      <div className="ui-button-wrapper">
                        <a
                          href="/nase-realizace"
                          id="home-nase-realizace-button-9"
                          className="button  button-link button-rounded"
                        >
                          {"Všechny realizace "}
                          <i
                            className="fas fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="layout-col-md-4 layout-col-sm-4  "
              id="home-nase-realizace-grid-10"
            >
              <div
                id="home-nase-realizace-column-11"
                className="layout-column  "
              >
                <div className="layout-column-addons">
                  <div
                    id="home-nase-realizace-wrap-12"
                    className="block-wrap  addon-root-feature"
                  >
                    <div
                      id="home-nase-realizace-block-13"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="400ms"
                    >
                      <div className="block-content-align-before block block-feature ">
                        <div className="block-content">
                          <span className="ui-img-container">
                            <img
                              className="ui-img-responsive"
                              style={{ display: "inline-block" }}
                              src="/files/2025/09/10/mybox-post_office-cam-17_3k_final-1.jpg"
                              alt="Firemní DC hub 150 kW"
                              width="3500"
                              height="1968"
                              loading="lazy"
                              decoding="async"
                            />
                          </span>
                          <div className="ui-media-content">
                            <p className="block-title ui-feature-box-title">
                              {"Firemní DC hub 150 kW"}
                            </p>
                            <div className="block-text">
                              {
                                "2× DC + 4× AC, řízení výkonu, rozúčtování uživatelů."
                              }
                            </div>
                            <a
                              href="/nase-realizace"
                              id="home-nase-realizace-button-14"
                              className="button  button-link button-rounded"
                            >
                              {"Detail "}
                              <i
                                className="fas fa-angle-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="layout-row-column  "
              id="home-nase-realizace-grid-15"
            >
              <div
                id="home-nase-realizace-column-16"
                className="layout-column "
              >
                <div className="layout-column-addons">
                  <div
                    id="home-nase-realizace-wrap-17"
                    className="block-wrap  addon-root-feature"
                  >
                    <div
                      id="home-nase-realizace-block-18"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="400ms"
                    >
                      <div className="block-content-align-before block block-feature ">
                        <div className="block-content">
                          <span className="ui-img-container">
                            <img
                              className="ui-img-responsive"
                              style={{ display: "inline-block" }}
                              src="/files/2025/09/10/mybox-ebike-office-cam-3_3k_final.jpg"
                              alt="Rezidenční wallboxy 22 kW"
                              width="3500"
                              height="1968"
                              loading="lazy"
                              decoding="async"
                            />
                          </span>
                          <div className="ui-media-content">
                            <p className="block-title ui-feature-box-title">
                              {"Rezidenční wallboxy 22 kW"}
                            </p>
                            <div className="block-text">
                              {
                                "12 jednotek v garážích, dynamické řízení dle hlavního jističe."
                              }
                            </div>
                            <a
                              href="/nase-realizace"
                              id="home-nase-realizace-button-19"
                              className="button  button-link button-rounded"
                            >
                              {"Detail "}
                              <i
                                className="fas fa-angle-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="layout-row-column  "
              id="home-nase-realizace-grid-20"
            >
              <div
                id="home-nase-realizace-column-21"
                className="layout-column "
              >
                <div className="layout-column-addons">
                  <div
                    id="home-nase-realizace-wrap-22"
                    className="block-wrap  addon-root-feature"
                  >
                    <div
                      id="home-nase-realizace-block-23"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="400ms"
                    >
                      <div className="block-content-align-before block block-feature ">
                        <div className="block-content">
                          <span className="ui-img-container">
                            <img
                              className="ui-img-responsive"
                              style={{ display: "inline-block" }}
                              src="/files/2025/09/10/mybox-profi_office-cam-4_3k_final.jpg"
                              alt="Veřejné dobíjení"
                              width="3500"
                              height="1968"
                              loading="lazy"
                              decoding="async"
                            />
                          </span>
                          <div className="ui-media-content">
                            <p className="block-title ui-feature-box-title">
                              {"Veřejné dobíjení"}
                            </p>
                            <div className="block-text">
                              {
                                "Platební terminál, OCPP backend, obchodní centrum."
                              }
                            </div>
                            <a
                              href="/nase-realizace"
                              id="home-nase-realizace-button-24"
                              className="button  button-link button-rounded"
                            >
                              {"Detail "}
                              <i
                                className="fas fa-angle-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reference */}
      <section
        id="reference"
        className="section ui-wow fadeInLeft"
        data-motion-duration="600ms"
        data-motion-delay="300ms"
      >
        <div className="layout-row-container">
          <div className="layout-row">
            <div className="layout-col-md-12  " id="home-reference-grid-1">
              <div id="home-reference-column-2" className="layout-column ">
                <div className="layout-column-addons">
                  <div
                    id="home-reference-wrap-3"
                    className="block-wrap  addon-root-heading"
                  >
                    <div id="home-reference-block-4" className="clearfix  ">
                      <div className="block block-header">
                        <h2 className="block-title">{"Reference"}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="layout-col-md-4 layout-col-sm-4  "
              id="home-reference-grid-5"
            >
              <div id="home-reference-column-6" className="layout-column  ">
                <div className="layout-column-addons">
                  <div
                    id="home-reference-wrap-7"
                    className="block-wrap  addon-root-feature"
                  >
                    <div
                      id="home-reference-block-8"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="400ms"
                    >
                      <div className="block-content-align-before block block-feature ">
                        <div className="block-content">
                          <div className="ui-media-content">
                            <div className="block-title ui-feature-box-title">
                              <span style={{ color: "#facc15" }}>
                                {"★★★★★"}
                              </span>
                            </div>
                            <div className="block-text">
                              <p>
                                <span style={{ color: "#2b303c" }}>
                                  {
                                    "„Rychlá instalace DC stanice, perfektní zaškolení. Přechod flotily na EV šel hladce.“"
                                  }
                                </span>
                              </p>
                              <p>{"LogiTrans a.s."}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="layout-col-md-4 layout-col-sm-4  "
              id="home-reference-grid-9"
            >
              <div id="home-reference-column-10" className="layout-column ">
                <div className="layout-column-addons">
                  <div
                    id="home-reference-wrap-11"
                    className="block-wrap  addon-root-feature"
                  >
                    <div
                      id="home-reference-block-12"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="400ms"
                    >
                      <div className="block-content-align-before block block-feature ">
                        <div className="block-content">
                          <div className="ui-media-content">
                            <div className="block-title ui-feature-box-title">
                              <span style={{ color: "#facc15" }}>
                                {"★★★★★"}
                              </span>
                            </div>
                            <div className="block-text">
                              <p>
                                <span style={{ color: "#2b303c" }}>
                                  {
                                    "„V garážích máme 10 wallboxů s dynamickým řízením – bez výpadků.“"
                                  }
                                </span>
                              </p>
                              <p>{"SVJ Na Výsluní"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-row-column  " id="home-reference-grid-13">
              <div id="home-reference-column-14" className="layout-column ">
                <div className="layout-column-addons">
                  <div
                    id="home-reference-wrap-15"
                    className="block-wrap  addon-root-feature"
                  >
                    <div
                      id="home-reference-block-16"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="400ms"
                    >
                      <div className="block-content-align-before block block-feature ">
                        <div className="block-content">
                          <div className="ui-media-content">
                            <div className="block-title ui-feature-box-title">
                              <span style={{ color: "#facc15" }}>
                                {"★★★★★"}
                              </span>
                            </div>
                            <div className="block-text">
                              <p>
                                <span style={{ color: "rgb(43,48,60)" }}>
                                  {
                                    "„Skvělý monitoring a rychlý servis. Na dálku vyřešili problém s čtečkou.“"
                                  }
                                </span>
                              </p>
                              <p>{"Retail Park Štěrboholy"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sekce 6 */}
      <section
        id="home-section-6-section-1"
        className="section ui-wow fadeInLeft"
        data-motion-duration="600ms"
        data-motion-delay="300ms"
      >
        <div className="layout-row-container">
          <div className="layout-row">
            <div className="layout-col-md-12  " id="home-section-6-grid-2">
              <div id="home-section-6-column-3" className="layout-column ">
                <div className="layout-column-addons">
                  <div
                    id="home-section-6-wrap-4"
                    className="block-wrap  addon-root-clients"
                  >
                    <div id="home-section-6-block-5" className="clearfix  ">
                      <PartnerCarousel
                        logos={[
                          {
                            src: "/files/klienti/pre_logo2.png",
                            alt: "Spolupráce s PRE",
                          },
                          {
                            src: "/files/klienti/zentiva.png",
                            alt: "Spolupráce s Zentiva",
                          },
                          {
                            src: "/files/klienti/mybox-logo2.png",
                            alt: "Spolupráce s MyBox",
                          },
                          {
                            src: "/files/klienti/ppl_spoluprace.png",
                            alt: "Spolupráce s PPL",
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Produkty */}
      <section
        id="produkty"
        className="section ui-wow fadeInLeft"
        data-motion-duration="600ms"
        data-motion-delay="300ms"
      >
        <div className="layout-row-overlay"></div>
        <div className="layout-row-container">
          <div className="layout-row">
            <div className="layout-col-md-12  " id="home-produkty-grid-1">
              <div id="home-produkty-column-2" className="layout-column  ">
                <div className="layout-column-addons">
                  <div
                    id="home-produkty-wrap-3"
                    className="block-wrap  addon-root-heading"
                  >
                    <div id="home-produkty-block-4" className="clearfix  ">
                      <div className="block block-header">
                        <h2 className="block-title">{"Produkty"}</h2>
                      </div>
                    </div>
                  </div>
                  <div
                    id="home-produkty-wrap-5"
                    className="block-wrap  addon-root-raw-html"
                  >
                    <div id="home-produkty-block-6" className="clearfix  ">
                      <div className="block block-raw-html ">
                        <div className="block-content">
                          <div className="brand-row">
                            <div className="brand-label">
                              {"Dobíjecí stanice značky:"}
                            </div>
                            <div className="brand-pills">
                              <span className="pill">{"ALFEN"}</span>
                              <span className="pill">{"VOLTDRIVE"}</span>
                              <span className="pill">{"MYBOX"}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="layout-col-md-4 layout-col-sm-4  "
              id="home-produkty-grid-7"
            >
              <div id="home-produkty-column-8" className="layout-column  ">
                <div className="layout-column-addons">
                  <div
                    id="home-produkty-wrap-9"
                    className="block-wrap  addon-root-feature"
                  >
                    <div
                      id="home-produkty-block-10"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="400ms"
                    >
                      <div className="block-content-align-before block block-feature ">
                        <div className="block-content">
                          <span className="ui-img-container">
                            <img
                              className="ui-img-responsive"
                              style={{ display: "inline-block" }}
                              src="/files/produkty/mybox/mybox_wallbox_22kw.png"
                              alt=""
                              width="318"
                              height="462"
                              loading="lazy"
                              decoding="async"
                            />
                          </span>
                          <div className="ui-media-content">
                            <div className="block-text">
                              <p></p>
                            </div>
                            <a
                              href="/produkty#MYBOX"
                              id="home-produkty-button-11"
                              className="button  button-link button-rounded"
                            >
                              {"Detail "}
                              <i
                                className="fas fa-angle-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="layout-col-md-4 layout-col-sm-4  "
              id="home-produkty-grid-12"
            >
              <div id="home-produkty-column-13" className="layout-column ">
                <div className="layout-column-addons">
                  <div
                    id="home-produkty-wrap-14"
                    className="block-wrap  addon-root-feature"
                  >
                    <div
                      id="home-produkty-block-15"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="400ms"
                    >
                      <div className="block-content-align-before block block-feature ">
                        <div className="block-content">
                          <span className="ui-img-container">
                            <img
                              className="ui-img-responsive"
                              style={{ display: "inline-block" }}
                              src="/files/produkty/silentium/silentium_wds_basic1.jpg"
                              alt=""
                              width="318"
                              height="462"
                              loading="lazy"
                              decoding="async"
                            />
                          </span>
                          <div className="ui-media-content">
                            <div className="block-text">
                              <p></p>
                            </div>
                            <a
                              href="/produkty#VOLTDRIVE"
                              id="home-produkty-button-16"
                              className="button  button-link button-rounded"
                            >
                              {"Detail "}
                              <i
                                className="fas fa-angle-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-row-column  " id="home-produkty-grid-17">
              <div id="home-produkty-column-18" className="layout-column ">
                <div className="layout-column-addons">
                  <div
                    id="home-produkty-wrap-19"
                    className="block-wrap  addon-root-feature"
                  >
                    <div
                      id="home-produkty-block-20"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="400ms"
                    >
                      <div className="block-content-align-before block block-feature ">
                        <div className="block-content">
                          <span className="ui-img-container">
                            <img
                              className="ui-img-responsive"
                              style={{ display: "inline-block" }}
                              src="/files/produkty/alfen/eve_single_s-line1.jpg"
                              alt=""
                              width="318"
                              height="462"
                              loading="lazy"
                              decoding="async"
                            />
                          </span>
                          <div className="ui-media-content">
                            <div className="block-text">
                              <p></p>
                            </div>
                            <a
                              href="/produkty#ALFEN"
                              id="home-produkty-button-21"
                              className="button  button-link button-rounded"
                            >
                              {"Detail "}
                              <i
                                className="fas fa-angle-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-row-column  " id="home-produkty-grid-22">
              <div id="home-produkty-column-23" className="layout-column ">
                <div className="layout-column-addons">
                  <div
                    id="home-produkty-wrap-24"
                    className="block-wrap  addon-root-feature"
                  >
                    <div
                      id="home-produkty-block-25"
                      className="clearfix  ui-wow fadeIn  "
                      data-motion-duration="800ms"
                      data-motion-delay="400ms"
                    >
                      <div className="block-content-align-after block block-feature ">
                        <div className="block-content">
                          <p className="block-title ui-feature-box-title">
                            {"…a další produkty"}
                          </p>
                          <div className="ui-media-content">
                            <div className="block-text">
                              {
                                "Wallboxy, DC stanice, příslušenství a software. Prohlédněte kompletní nabídku."
                              }
                            </div>
                            <a
                              href="/produkty"
                              id="home-produkty-button-26"
                              className="button  button-primary button-rounded button-block"
                            >
                              {"Detail "}
                              <i
                                className="fas fa-angle-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Napište nám */}
      <section
        id="kontakt"
        className="section ui-wow fadeInLeft"
        data-motion-duration="600ms"
        data-motion-delay="300ms"
      >
        <div className="layout-row-container">
          <div className="layout-row">
            <div className="layout-row-column  " id="home-napiste-nam-grid-1">
              <div id="home-napiste-nam-column-2" className="layout-column  ">
                <div className="layout-column-addons">
                  <div
                    id="home-napiste-nam-wrap-3"
                    className="block-wrap  addon-root-heading"
                  >
                    <div id="home-napiste-nam-block-4" className="clearfix  ">
                      <div className="block block-header">
                        <h2 className="block-title">{"Napište nám"}</h2>
                      </div>
                    </div>
                  </div>
                  <div
                    id="home-napiste-nam-wrap-5"
                    className="block-wrap  addon-root-text-block"
                  >
                    <div id="home-napiste-nam-block-6" className="clearfix  ">
                      <div className="block block-text-block ">
                        <div className="block-content  ">
                          {
                            "Ozveme se do 1 pracovního dne. Upřesníme záměr a navrhneme nejvhodnější řešení."
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="home-napiste-nam-wrap-7"
                    className="block-wrap  addon-root-divider"
                  >
                    <div id="home-napiste-nam-block-8" className="clearfix  ">
                      <div className="block-divider-wrap divider-position">
                        <div
                          className="ui-divider ui-divider-border "
                          role="none"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="layout-row-column  ui-hidden-xs "
              id="home-napiste-nam-grid-9"
            >
              <div id="home-napiste-nam-column-10" className="layout-column ">
                <div className="layout-column-addons"></div>
              </div>
            </div>
            <div className="layout-row-column  " id="home-napiste-nam-grid-11">
              <div id="home-napiste-nam-column-12" className="layout-column ">
                <div className="layout-column-addons">
                  <div
                    id="home-napiste-nam-wrap-13"
                    className="block-wrap  addon-root-form-builder"
                  >
                    <div id="home-napiste-nam-block-14" className="clearfix  ">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-row-column  " id="home-napiste-nam-grid-16">
              <div id="home-napiste-nam-column-17" className="layout-column ">
                <div className="layout-column-addons"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
