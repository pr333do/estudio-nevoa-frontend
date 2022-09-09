/* eslint-disable @next/next/no-img-element */

import { useState } from 'react'

import GrafismoIcon from 'assets/grafismo.svg'

export default function Home() {
  const [aboutSectionOpened, setAboutSectionOpened] = useState<string>(null)
  const [teamIdx, setTeamIdx] = useState(0)

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

          <a href="#about" className="home__scroll-btn">
            \/
          </a>
        </section>

        <section className="home__section" id="about">
          <h1 className="home__title" data-section="about">
            Sobre nós
          </h1>

          <div className="home__about">
            <GrafismoIcon
              className="home__about__icon"
              data-selected={!!aboutSectionOpened}
              data-section="about"
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
                  onClick={() => setAboutSectionOpened('team')}
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

            <div
              className="home__about__team"
              data-open={aboutSectionOpened === 'team'}
            >
              <button
                className="home__about__close-btn"
                type="button"
                onClick={() => setAboutSectionOpened(null)}
                data-section="about-team"
              >
                x
              </button>

              <div className="home__about__controls">
                <button
                  className="home__about__controls__prev-btn"
                  type="button"
                  onClick={() =>
                    setTeamIdx(state => (state - 1 >= 0 ? state - 1 : 2))
                  }
                >
                  &lt;
                </button>
                <button
                  className="home__about__controls__next-btn"
                  type="button"
                  onClick={() =>
                    setTeamIdx(state => (state + 1 <= 2 ? state + 1 : 0))
                  }
                >
                  &gt;
                </button>
              </div>

              <div className="home__about__team__wrapper">
                <ul className="home__about__team__list">
                  <li
                    className="home__about__team__item"
                    data-visible={teamIdx === 0}
                  >
                    <article className="home__about__team__member">
                      <img
                        className="home__about__team__member__img"
                        src="/images/felipe.jpg"
                        alt="Felipe Fernandes"
                      />
                      <h1 className="home__about__team__member__title">
                        Felipe
                        <br /> Fernandes
                      </h1>

                      <div className="home__about__team__member__body">
                        <p className="home__about__team__member__paragraph">
                          Felipe Fernandes é músico, produtor musical,
                          compositor e arranjador. É fundador, diretor musical,
                          guitarrista e vocalista do Bloco do Sargento Pimenta,
                          que anualmente leva centenas de milhares de pessoas ao
                          Aterro do Flamengo no carnaval. Lançou em 2020 seus
                          primeiros singles de música eletrônica sob a alcunha
                          de Petrogrado e prepara um álbum de canções. Em
                          estúdio, trabalhou nos álbuns de Caetano Veloso,
                          Gilberto Gil, Jorge Ben, Wilson das Neves, Adriana
                          Calcanhotto, Jesse Harris, Pedro Miranda, Do Amor e
                          diversos outros. Produziu os discos Monstera
                          Deliciosa, de Laura Petit, e Esquina do Mundo, de
                          Aloizio e a Rede.
                        </p>

                        <p className="home__about__team__member__paragraph">
                          Nos palcos, em mais de 10 anos de atuação profissional
                          já acompanhou bandas e artistas como Nina Becker,
                          Vitor Araujo, Julio Secchin, Iara Rennó e Baleia. Para
                          o cinema, compõs a trilha do longa-metragem Mãe Só Há
                          Uma, de Anna Muylaert e do documentário Ailton Krenak
                          — O Sonho da Pedra, de Marco Altberg, e colaborou com
                          as trilhas de Campo Grande, de Sandra Kogut, e Os
                          Penetras 2, de Andrucha Waddington. Assinou também as
                          trilhas sonoras dos programas Seleção Brasileira —
                          Paixão de um Povo (HBO), Jogos do Mundo e Globo
                          Educação (TV Globo), Olhar (Arte 1), As Canalhas (GNT)
                          e Os Suburbanos (Multishow)
                        </p>
                      </div>
                    </article>
                  </li>
                  <li
                    className="home__about__team__item"
                    data-visible={teamIdx === 1}
                  >
                    <article className="home__about__team__member">
                      <img
                        className="home__about__team__member__img"
                        src="/images/caire.jpg"
                        alt="Felipe Fernandes"
                      />
                      <h1 className="home__about__team__member__title">
                        Cairê
                        <br /> Rego
                      </h1>

                      <div className="home__about__team__member__body">
                        <p className="home__about__team__member__paragraph">
                          Felipe Fernandes é músico, produtor musical,
                          compositor e arranjador. É fundador, diretor musical,
                          guitarrista e vocalista do Bloco do Sargento Pimenta,
                          que anualmente leva centenas de milhares de pessoas ao
                          Aterro do Flamengo no carnaval. Lançou em 2020 seus
                          primeiros singles de música eletrônica sob a alcunha
                          de Petrogrado e prepara um álbum de canções. Em
                          estúdio, trabalhou nos álbuns de Caetano Veloso,
                          Gilberto Gil, Jorge Ben, Wilson das Neves, Adriana
                          Calcanhotto, Jesse Harris, Pedro Miranda, Do Amor e
                          diversos outros. Produziu os discos Monstera
                          Deliciosa, de Laura Petit, e Esquina do Mundo, de
                          Aloizio e a Rede.
                        </p>

                        <p className="home__about__team__member__paragraph">
                          Nos palcos, em mais de 10 anos de atuação profissional
                          já acompanhou bandas e artistas como Nina Becker,
                          Vitor Araujo, Julio Secchin, Iara Rennó e Baleia. Para
                          o cinema, compõs a trilha do longa-metragem Mãe Só Há
                          Uma, de Anna Muylaert e do documentário Ailton Krenak
                          — O Sonho da Pedra, de Marco Altberg, e colaborou com
                          as trilhas de Campo Grande, de Sandra Kogut, e Os
                          Penetras 2, de Andrucha Waddington. Assinou também as
                          trilhas sonoras dos programas Seleção Brasileira —
                          Paixão de um Povo (HBO), Jogos do Mundo e Globo
                          Educação (TV Globo), Olhar (Arte 1), As Canalhas (GNT)
                          e Os Suburbanos (Multishow)
                        </p>
                      </div>
                    </article>
                  </li>
                  <li
                    className="home__about__team__item"
                    data-visible={teamIdx === 2}
                  >
                    <article className="home__about__team__member">
                      <img
                        className="home__about__team__member__img"
                        src="/images/pacheco.jpg"
                        alt="Felipe Fernandes"
                      />
                      <h1 className="home__about__team__member__title">
                        Felipe
                        <br /> Pacheco Ventura
                      </h1>

                      <div className="home__about__team__member__body">
                        <p className="home__about__team__member__paragraph">
                          Felipe Fernandes é músico, produtor musical,
                          compositor e arranjador. É fundador, diretor musical,
                          guitarrista e vocalista do Bloco do Sargento Pimenta,
                          que anualmente leva centenas de milhares de pessoas ao
                          Aterro do Flamengo no carnaval. Lançou em 2020 seus
                          primeiros singles de música eletrônica sob a alcunha
                          de Petrogrado e prepara um álbum de canções. Em
                          estúdio, trabalhou nos álbuns de Caetano Veloso,
                          Gilberto Gil, Jorge Ben, Wilson das Neves, Adriana
                          Calcanhotto, Jesse Harris, Pedro Miranda, Do Amor e
                          diversos outros. Produziu os discos Monstera
                          Deliciosa, de Laura Petit, e Esquina do Mundo, de
                          Aloizio e a Rede.
                        </p>

                        <p className="home__about__team__member__paragraph">
                          Nos palcos, em mais de 10 anos de atuação profissional
                          já acompanhou bandas e artistas como Nina Becker,
                          Vitor Araujo, Julio Secchin, Iara Rennó e Baleia. Para
                          o cinema, compõs a trilha do longa-metragem Mãe Só Há
                          Uma, de Anna Muylaert e do documentário Ailton Krenak
                          — O Sonho da Pedra, de Marco Altberg, e colaborou com
                          as trilhas de Campo Grande, de Sandra Kogut, e Os
                          Penetras 2, de Andrucha Waddington. Assinou também as
                          trilhas sonoras dos programas Seleção Brasileira —
                          Paixão de um Povo (HBO), Jogos do Mundo e Globo
                          Educação (TV Globo), Olhar (Arte 1), As Canalhas (GNT)
                          e Os Suburbanos (Multishow)
                        </p>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>
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
