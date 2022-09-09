import { CSSProperties, useState } from 'react'

import MenuIcon from 'assets/menu.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__wrapper">
        <button
          className="header__btn"
          type="button"
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="sr-only">open menu</span>
          <MenuIcon />
        </button>

        <div className="header__menu" data-open={isMenuOpen}>
          <nav className="header__menu__nav">
            <ul className="header__menu__list">
              <li
                className="header__menu__item"
                style={{ '--order': 0 } as CSSProperties}
                data-open={isMenuOpen}
              >
                <a
                  href="#studio"
                  className="header__menu__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  O Estúdio
                </a>
              </li>
              <li
                className="header__menu__item"
                style={{ '--order': 1 } as CSSProperties}
                data-open={isMenuOpen}
              >
                <a
                  href="#about"
                  className="header__menu__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Quem somos
                </a>
              </li>
              <li
                className="header__menu__item"
                style={{ '--order': 2 } as CSSProperties}
                data-open={isMenuOpen}
              >
                <a
                  href="#projects"
                  className="header__menu__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </a>
              </li>
              <li
                className="header__menu__item"
                style={{ '--order': 3 } as CSSProperties}
                data-open={isMenuOpen}
              >
                <a
                  href="#contact"
                  className="header__menu__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
