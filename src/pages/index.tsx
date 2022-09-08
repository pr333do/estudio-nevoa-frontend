/* eslint-disable @next/next/no-img-element */

import { useState } from 'react'

import GrafismoIcon from 'assets/grafismo.svg'

export default function Home() {
  const [aboutSectionOpened, setAboutSectionOpened] = useState<string>(null)

  return (
    <main className="home">
      <div className="home__wrapper">
        <section className="home__section --col" id="index">
          <h1 className="home__title">
            <span className="sr-only">Estúdio Névoa</span>
            <img
              className="home__img"
              src="/images/logo.png"
              alt="Estúdio Névoa"
            />
          </h1>

          <button className="home__scroll-btn" type="button">
            \/
          </button>
        </section>

        <section className="home__section" id="about">
          <h1 className="home__title" data-section="about">
            Sobre nós
          </h1>

          <div className="home__about">
            <GrafismoIcon
              className="home__about__icon"
              data-selected={!!aboutSectionOpened}
            />

            <ul
              className="home__about__list"
              data-hidden={!!aboutSectionOpened}
            >
              <li className="home__about__item">
                <button
                  className="home__about__btn"
                  type="button"
                  onClick={() => setAboutSectionOpened('studio')}
                >
                  1<span className="home__about__btn__tooltip">O Estúdio</span>
                </button>
              </li>
              <li className="home__about__item">
                <button
                  className="home__about__btn"
                  type="button"
                  onClick={() => setAboutSectionOpened('who-are-us')}
                >
                  2{' '}
                  <span className="home__about__btn__tooltip">Quem somos</span>
                </button>
              </li>
            </ul>

            <div
              className="home__about__studio"
              data-open={aboutSectionOpened === 'studio'}
            >
              <h2 className="home__about__title">O estúdio</h2>
              <p className="home__about__paragraph">
                Soluções em trilhas, identidades sonoras e desenho de som para
                produções audiovisuais. <br /> <br /> Composições originais
                feitas sob medida para cada necessidade e finalizadas para todas
                as plataformas.
              </p>

              <button
                className="home__about__close-btn"
                type="button"
                onClick={() => setAboutSectionOpened(null)}
              >
                x
              </button>
            </div>
          </div>
        </section>

        <section className="home__section" id="projects">
          <h1 className="home__title" data-section="projects">
            Port folio
          </h1>

          <div className="home__projects">
            <GrafismoIcon
              className="home__projects__icon"
              data-section="projects"
            />

            <ul className="home__projects__list">
              <li className="home__projects__item"></li>
              <li className="home__projects__item"></li>
              <li className="home__projects__item"></li>
              <li className="home__projects__item"></li>
              <li className="home__projects__item"></li>
              <li className="home__projects__item"></li>
            </ul>
          </div>
        </section>

        <section className="home__section" id="contact">
          <h1 className="home__title" data-section="contact">
            Con tato
          </h1>

          <address className="home__address">
            <a
              className="home__address__link"
              href="mailto:contato@estudionevoa.com"
            >
              contato@estudionevoa.com
            </a>
            <br />
            <br />
            Felipe Fernandes |
            <a
              className="home__address__link"
              href="https://www.instagram.com/fffelipefernandes/"
              target="_blank"
              rel="noreferrer"
            >
              @fffelipefernandes
            </a>
            <br /> Cairê Rego |
            <a
              className="home__address__link"
              href="https://www.instagram.com/cairerego/"
              target="_blank"
              rel="noreferrer"
            >
              @cairerego
            </a>
            <br />
            Felipe Pacheco Ventura |
            <a
              className="home__address__link"
              href="https://www.instagram.com/felpacven/"
              target="_blank"
              rel="noreferrer"
            >
              @felpacven
            </a>
          </address>
        </section>
      </div>
    </main>
  )
}
