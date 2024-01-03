import type { Schema, Attribute } from '@strapi/strapi';

export interface ContainersBlogPreview extends Schema.Component {
  collectionName: 'components_containers_blog_previews';
  info: {
    displayName: 'BlogPreview';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Latest from the blog'>;
    cardLeft: Attribute.Component<'elements.blog-card-with-image'> &
      Attribute.Required;
    cardCenter: Attribute.Component<'elements.blog-card-with-image'> &
      Attribute.Required;
    cardRightTop: Attribute.Component<'elements.blog-card-without-image'> &
      Attribute.Required;
    cardRightBottom: Attribute.Component<'elements.blog-card-with-image'> &
      Attribute.Required;
  };
}

export interface ContainersContactUs extends Schema.Component {
  collectionName: 'components_containers_contactuses';
  info: {
    displayName: 'ContactUs';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Contact Us'>;
    subtitle: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Ask a question, discuss your project with an expert, or request a quote.'>;
    nameInputPlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Name'>;
    emailInputPlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Email'>;
    phoneInputPlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Phone'>;
    countryInputPlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Country'>;
    messageTextareaPlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Message'>;
    successMessage: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Message has been sent.'>;
    selectInput: Attribute.Component<'elements.select-input'> &
      Attribute.Required;
    button: Attribute.Component<'elements.butto'> & Attribute.Required;
  };
}

export interface ContainersFooter extends Schema.Component {
  collectionName: 'components_containers_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    logo: Attribute.Component<'elements.image'> & Attribute.Required;
    companyName: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Path Padel Sports International Limited'>;
    regNumber: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Reg. number: 08821795'>;
    companyAddress: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Address: Brent House, 382 Gloucester Road, Cheltenham, Gloucestershire, GL51 7AY'>;
    links: Attribute.Component<'elements.footer-nav'> & Attribute.Required;
  };
}

export interface ContainersGoToConfigurator extends Schema.Component {
  collectionName: 'components_containers_go_to_configurators';
  info: {
    displayName: 'goToConfigurator';
    description: '';
  };
  attributes: {
    image: Attribute.Component<'elements.image'> & Attribute.Required;
    title: Attribute.Component<'elements.go-to-configurator-title'> &
      Attribute.Required;
    button: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Go to Configurator'>;
    buttonLink: Attribute.Component<'elements.link'> & Attribute.Required;
  };
}

export interface ContainersHeader extends Schema.Component {
  collectionName: 'components_containers_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    logo: Attribute.Component<'elements.image'> & Attribute.Required;
    nav: Attribute.Component<'elements.header-nav-item', true> &
      Attribute.Required;
    button: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Contact Us'>;
  };
}

export interface ContainersProductsCarousel extends Schema.Component {
  collectionName: 'components_containers_products_carousels';
  info: {
    displayName: 'productsCarousel';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'elements.products-carousel-item', true> &
      Attribute.Required;
  };
}

export interface ContainersProjectsPreview extends Schema.Component {
  collectionName: 'components_containers_projects_previews';
  info: {
    displayName: 'projectsPreview';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Projects'>;
    cardLeftTop: Attribute.Component<'elements.project-card'> &
      Attribute.Required;
    cardLeftCenter: Attribute.Component<'elements.project-card'> &
      Attribute.Required;
    cardLeftBottom: Attribute.Component<'elements.project-card'> &
      Attribute.Required;
    cardCenterTop: Attribute.Component<'elements.project-card'> &
      Attribute.Required;
    cardCenterBottom: Attribute.Component<'elements.project-card'> &
      Attribute.Required;
    cardRightTop: Attribute.Component<'elements.project-card'> &
      Attribute.Required;
    cardRightBottom: Attribute.Component<'elements.project-card'> &
      Attribute.Required;
  };
}

export interface ContainersServicePreview extends Schema.Component {
  collectionName: 'components_containers_service_previews';
  info: {
    displayName: 'ServicePreview';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'elements.service-item', true> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Services'>;
    subtitle: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'We help design, build, install, transport and maintain padel courts.'>;
  };
}

export interface ContainersSubscriptionForm extends Schema.Component {
  collectionName: 'components_containers_subscription_forms';
  info: {
    displayName: 'subscriptionForm';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Need help?'>;
    subtitle: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Leave your email, and we will get back to you.'>;
    emailPlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Email'>;
    button: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Let\u2019s Talk'>;
    successMessage: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Message has been sent.'>;
  };
}

export interface ContainersWelcome extends Schema.Component {
  collectionName: 'components_containers_welcomes';
  info: {
    displayName: 'welcome';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'elements.welcome-title'> & Attribute.Required;
    button: Attribute.Component<'elements.welcome-button'> & Attribute.Required;
    partners: Attribute.Component<'elements.partners-footer'> &
      Attribute.Required;
  };
}

export interface ElementsBlogCardWithImage extends Schema.Component {
  collectionName: 'components_elements_blog_card_with_images';
  info: {
    displayName: 'BlogCardWithImage';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'5 Tips for a  Successful Padel Court Installation'>;
    image: Attribute.Component<'elements.image'> & Attribute.Required;
    link: Attribute.Component<'elements.link'> & Attribute.Required;
  };
}

export interface ElementsBlogCardWithoutImage extends Schema.Component {
  collectionName: 'components_elements_blog_card_without_images';
  info: {
    displayName: 'BlogCardWithoutImage';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'PATH Excels in Development for Stratford Pavilion'>;
    link: Attribute.Component<'elements.link'> & Attribute.Required;
  };
}

export interface ElementsButto extends Schema.Component {
  collectionName: 'components_elements_buttos';
  info: {
    displayName: 'buttonWithIcon';
    description: '';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Contact Us'>;
    icon: Attribute.Component<'elements.image'> & Attribute.Required;
  };
}

export interface ElementsFooterNavColumn extends Schema.Component {
  collectionName: 'components_elements_footer_nav_columns';
  info: {
    displayName: 'FooterNavColumn';
  };
  attributes: {
    links: Attribute.Component<'elements.link', true> & Attribute.Required;
  };
}

export interface ElementsFooterNav extends Schema.Component {
  collectionName: 'components_elements_footer_navs';
  info: {
    displayName: 'FooterNav';
  };
  attributes: {
    columns: Attribute.Component<'elements.footer-nav-column', true> &
      Attribute.Required;
  };
}

export interface ElementsGoToConfiguratorTitle extends Schema.Component {
  collectionName: 'components_elements_go_to_configurator_titles';
  info: {
    displayName: 'goToConfiguratorTitle';
  };
  attributes: {
    titleLine1: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Launch our Configurator'>;
    titleLine2: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'to customize your court'>;
    titleLine3: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'online, easily.'>;
  };
}

export interface ElementsHeaderNavItem extends Schema.Component {
  collectionName: 'components_elements_header_nav_items';
  info: {
    displayName: 'HeaderItem';
    description: '';
  };
  attributes: {
    link: Attribute.Component<'elements.link'> & Attribute.Required;
    subnav: Attribute.Component<'elements.link', true>;
  };
}

export interface ElementsImage extends Schema.Component {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    alt: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Discuss with an expert'>;
  };
}

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    href: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/coming-soon'>;
    text: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Coming soon'>;
  };
}

export interface ElementsPartnersFooter extends Schema.Component {
  collectionName: 'components_elements_partners_footers';
  info: {
    displayName: 'partnersFooter';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'In partnership with'>;
    partnerIcon: Attribute.Component<'elements.image', true> &
      Attribute.Required;
  };
}

export interface ElementsProductsCarouselItem extends Schema.Component {
  collectionName: 'components_elements_products_carousel_items';
  info: {
    displayName: 'ProductsCarouselItem';
    description: '';
  };
  attributes: {
    image: Attribute.Component<'elements.image'> & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Classic'>;
    text: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Easy to install & maintain, durable, and 100% compliant with the International Padel Federation specifications.'>;
  };
}

export interface ElementsProjectCard extends Schema.Component {
  collectionName: 'components_elements_project_cards';
  info: {
    displayName: 'ProjectCard';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Sport Clubs'>;
    icon: Attribute.Component<'elements.image'>;
    link: Attribute.Component<'elements.link'>;
  };
}

export interface ElementsSelectInput extends Schema.Component {
  collectionName: 'components_elements_select_inputs';
  info: {
    displayName: 'selectInput';
    description: '';
  };
  attributes: {
    placeholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Subject'>;
    items: Attribute.Component<'elements.select-item', true> &
      Attribute.Required;
  };
}

export interface ElementsSelectItem extends Schema.Component {
  collectionName: 'components_elements_select_items';
  info: {
    displayName: 'SelectItem';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Subject 1'>;
  };
}

export interface ElementsServiceItem extends Schema.Component {
  collectionName: 'components_elements_service_items';
  info: {
    displayName: 'ServiceItem';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Design'>;
    text: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Use our online Court Configurator or request a completely custom design that fits your indoor or outdoor layout, terrain, landscape design, and goals.'>;
  };
}

export interface ElementsWelcomeButton extends Schema.Component {
  collectionName: 'components_elements_welcome_buttons';
  info: {
    displayName: 'welcomeButton';
    description: '';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Discuss with an expert'>;
    icon: Attribute.Component<'elements.image'> & Attribute.Required;
  };
}

export interface ElementsWelcomeTitle extends Schema.Component {
  collectionName: 'components_elements_welcome_titles';
  info: {
    displayName: 'welcomeTitle';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Perfect Padel Courts for'>;
    typedTitle1: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'your Sport club'>;
    typedTitle2: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'your Sport center'>;
    typedTitle3: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'your Tennis Club'>;
    typedTitle4: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'your Paddel Tennis Club'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'containers.blog-preview': ContainersBlogPreview;
      'containers.contact-us': ContainersContactUs;
      'containers.footer': ContainersFooter;
      'containers.go-to-configurator': ContainersGoToConfigurator;
      'containers.header': ContainersHeader;
      'containers.products-carousel': ContainersProductsCarousel;
      'containers.projects-preview': ContainersProjectsPreview;
      'containers.service-preview': ContainersServicePreview;
      'containers.subscription-form': ContainersSubscriptionForm;
      'containers.welcome': ContainersWelcome;
      'elements.blog-card-with-image': ElementsBlogCardWithImage;
      'elements.blog-card-without-image': ElementsBlogCardWithoutImage;
      'elements.butto': ElementsButto;
      'elements.footer-nav-column': ElementsFooterNavColumn;
      'elements.footer-nav': ElementsFooterNav;
      'elements.go-to-configurator-title': ElementsGoToConfiguratorTitle;
      'elements.header-nav-item': ElementsHeaderNavItem;
      'elements.image': ElementsImage;
      'elements.link': ElementsLink;
      'elements.partners-footer': ElementsPartnersFooter;
      'elements.products-carousel-item': ElementsProductsCarouselItem;
      'elements.project-card': ElementsProjectCard;
      'elements.select-input': ElementsSelectInput;
      'elements.select-item': ElementsSelectItem;
      'elements.service-item': ElementsServiceItem;
      'elements.welcome-button': ElementsWelcomeButton;
      'elements.welcome-title': ElementsWelcomeTitle;
    }
  }
}
