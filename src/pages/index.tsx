/* eslint-disable @next/next/no-img-element */
import { PrismicRichText } from '@prismicio/react'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import prismicApi, { getDefaults } from 'services/prismic'

import PrevNextButton from 'components/PrevNextButton'

import GrafismoIcon from 'assets/grafismo.svg'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Home({ content, projects }) {
  const [aboutSectionOpened, setAboutSectionOpened] = useState<string>(null)
  const [teamIdx, setTeamIdx] = useState(null)

  return (
    <>
      <div className="bg" />

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
            <PrismicRichText
              field={content[0].primary.title}
              components={{
                heading1: ({ children }) => (
                  <h1 className="home__title" data-section="about">
                    {children}
                  </h1>
                ),
              }}
            />

            <div className="home__about">
              <div className="home__block">
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
                      1
                      <span className="home__about__btn__tooltip">
                        O Estúdio
                      </span>
                    </button>
                  </li>
                  <li className="home__about__item">
                    <button
                      className="home__about__btn"
                      type="button"
                      onClick={() => setAboutSectionOpened('team')}
                    >
                      2{' '}
                      <span className="home__about__btn__tooltip">
                        Quem somos
                      </span>
                    </button>
                  </li>
                </ul>

                <GrafismoIcon
                  className="home__about__icon"
                  data-selected={!!aboutSectionOpened}
                  data-section="about"
                  aria-hidden
                />
              </div>

              <div
                className="home__about__studio"
                data-open={aboutSectionOpened === 'studio'}
              >
                <PrismicRichText
                  field={content[0].primary.summary}
                  components={{
                    heading2: ({ children }) => (
                      <h2 className="home__about__title">{children}</h2>
                    ),
                    paragraph: ({ children }) => (
                      <p className="home__about__paragraph">{children}</p>
                    ),
                  }}
                />

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
                  onClick={() => {
                    setTeamIdx(null)
                    setAboutSectionOpened(null)
                  }}
                  data-section="about-team"
                >
                  x
                </button>

                <div className="home__about__controls">
                  <PrevNextButton
                    className="home__about__controls__prev-btn"
                    onClick={() =>
                      setTeamIdx(state => (state - 1 >= 0 ? state - 1 : 2))
                    }
                    type="prev"
                  >
                    &lt;
                  </PrevNextButton>

                  <PrevNextButton
                    className="home__about__controls__next-btn"
                    onClick={() =>
                      setTeamIdx(state => (state + 1 <= 2 ? state + 1 : 0))
                    }
                    type="next"
                  >
                    &gt;
                  </PrevNextButton>
                </div>

                <div className="home__about__team__wrapper">
                  <ul
                    className="home__about__team__list"
                    data-hidden={teamIdx !== null}
                  >
                    {content[0].items.map((member, idx) => (
                      <li
                        key={member.photo.url}
                        className="home__about__team__item"
                        onClick={() => setTeamIdx(idx)}
                        data-cursor="pointer"
                      >
                        <img
                          className="home__about__team__member__img --thumbnail"
                          src={member.photo.url}
                          alt={member.photo.alt}
                        />

                        <PrismicRichText
                          field={member.name}
                          components={{
                            heading2: ({ children }) => (
                              <h2 className="home__about__team__member__title --thumbnail">
                                {children}
                              </h2>
                            ),
                          }}
                        />
                      </li>
                    ))}
                  </ul>

                  {content[0].items.map((member, idx) => (
                    <div
                      key={member.photo.url}
                      className="home__about__team__focused-item"
                      data-visible={teamIdx === idx}
                    >
                      <article className="home__about__team__member">
                        <img
                          className="home__about__team__member__img"
                          src={member.photo.url}
                          alt={member.photo.alt}
                        />

                        <PrismicRichText
                          field={member.name}
                          components={{
                            heading2: ({ children }) => (
                              <h2 className="home__about__team__member__title">
                                {children}
                              </h2>
                            ),
                          }}
                        />

                        <div className="home__about__team__member__body">
                          <PrismicRichText
                            field={member.description}
                            components={{
                              paragraph: ({ children }) => (
                                <p className="home__about__team__member__paragraph">
                                  {children}
                                </p>
                              ),
                            }}
                          />
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="home__section" id="projects">
            <PrismicRichText
              field={content[1].primary.title}
              components={{
                heading1: ({ children }) => (
                  <h1 className="home__title" data-section="projects">
                    {children}
                  </h1>
                ),
              }}
            />

            <div className="home__projects">
              <GrafismoIcon
                className="home__projects__icon"
                data-section="projects"
              />

              <div className="home__projects__slider-wrapper">
                <Swiper
                  className="home__projects__slider"
                  loop={true}
                  spaceBetween={20}
                  navigation={{
                    enabled: true,
                    prevEl: '.home__projects__prev-btn',
                    nextEl: '.home__projects__next-btn',
                  }}
                  modules={[Pagination, Navigation]}
                >
                  {projects.map(project => (
                    <SwiperSlide
                      className="home__projects__slide"
                      key={project.id}
                    >
                      <div
                        className="home__projects__video"
                        dangerouslySetInnerHTML={{
                          __html: project.data.youtubeURL.html,
                        }}
                      />
                    </SwiperSlide>
                  ))}

                  <PrevNextButton
                    className="home__projects__prev-btn"
                    type="prev"
                  >
                    &lt;
                  </PrevNextButton>

                  <PrevNextButton
                    className="home__projects__next-btn"
                    type="next"
                  >
                    &gt;
                  </PrevNextButton>
                </Swiper>
              </div>
            </div>
          </section>

          <section className="home__section" id="contact">
            <PrismicRichText
              field={content[2].primary.title}
              components={{
                heading1: ({ children }) => (
                  <h1 className="home__title" data-section="contact">
                    {children}
                  </h1>
                ),
              }}
            />

            <address className="home__address">
              <PrismicRichText field={content[2].primary.contacts} />
            </address>
          </section>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const defaults = await getDefaults()
  const data = await prismicApi.getSingle('home_page')
  const projects = await prismicApi.getAllByType('projects')

  return {
    props: { defaults, content: data.data.slices, projects },
  }
}
