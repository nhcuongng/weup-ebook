'use client';

import './styles.scss';

import { useTranslations } from 'next-intl';

import { footerData } from '@/components/Footer/mock';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';

import FImage from '../shared/FImage';
import FooterIcon from './FooterIcon/index';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer
      className="text-white font-sans"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container className="">
        <div
          className="py-[100px] relative z-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-9 xl:px-0 px-8">
            {/* Company Info */}
            <div id="left-col" className="flex flex-col space-y-4 justify-between">
              <div id="company-info" className="flex flex-col space-y-4">
                <FImage src="books/logo-E-learning.png" width={199} height={70} className="text-white" alt="fint-logo" />
                <p>{t('company_description')}</p>
                <div className="space-y-3 pt-2 content-medium-16">
                  <div className="flex items-center space-x-3">
                    <FooterIcon iconName="isax-call-calling" />
                    <span className="text-sm">{footerData.companyInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FooterIcon iconName="isax-sms" />
                    <span className="text-sm">{footerData.companyInfo.email}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FooterIcon iconName="isax-location" />
                    <a href={footerData.companyInfo.address.url} target="_blank">
                      <span className="text-sm hover:underline">
                        {t('company_address')}
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Socials Icons */}
              <div id="social-media" className="hidden md:flex items-center justify-between ">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <span className="font-semibold">
                    {t('social_label')}
                    :
                  </span>
                  {footerData.socials.map(social => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors"
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
                <p className="text-gray-400 block content-regular-14">{t('copyright')}</p>
              </div>
            </div>

            <div
              id="right-col"
              className="flex flex-col justify-around items-stretch text-sm xl:pl-6 gap-12"
            >
              <div className="flex flex-row gap-8 justify-between">
                {/* Navigation Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">{t('library_title')}</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/books/latest" className="text-sm text-gray-300 hover:text-white transition-colors">
                        {t('latest_books')}
                      </a>
                    </li>
                    <li>
                      <a href="/books/bestseller" className="text-sm text-gray-300 hover:text-white transition-colors">
                        {t('bestseller_books')}
                      </a>
                    </li>
                    <li>
                      <a href="/books/free" className="text-sm text-gray-300 hover:text-white transition-colors">
                        {t('free_books')}
                      </a>
                    </li>
                    <li>
                      <a href="/categories" className="text-sm text-gray-300 hover:text-white transition-colors">
                        {t('categories')}
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">{t('about_title')}</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                        {t('about_us')}
                      </a>
                    </li>
                    <li>
                      <a href="/terms" className="text-sm text-gray-300 hover:text-white transition-colors">
                        {t('terms_of_service')}
                      </a>
                    </li>
                    <li>
                      <a href="/privacy" className="text-sm text-gray-300 hover:text-white transition-colors">
                        {t('privacy_policy')}
                      </a>
                    </li>
                    <li>
                      <a href="/careers" className="text-sm text-gray-300 hover:text-white transition-colors">
                        {t('careers')}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Map */}
              <a
                href={footerData.companyInfo.address.url}
                target="_blank"
                className="group relative block rounded-lg overflow-hidden shadow-lg"
              >
                {/* The Image */}
                <FImage
                  src="books/google-map.png"
                  aspectRatio={151 / 63}
                  alt={t('company_address')}
                  className="block w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                />

                {/* The Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-60">
                </div>

                {/* The Icon and Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Icon name="isax-map" size="5xl" />
                  <p className="mt-2 font-semibold">{t('show_on_map')}</p>
                </div>
              </a>

              <div id="social-media" className="md:hidden flex items-center justify-between flex-col sm:flex-row gap-2">
                <div className="flex items-center space-x-4 sm:mb-0">
                  <span className="font-semibold">
                    {t('social_label')}
                    :
                  </span>
                  {footerData.socials.map(social => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors"
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
                <p className="text-gray-400 block content-regular-14">{t('copyright')}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
