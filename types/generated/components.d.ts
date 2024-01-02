import type { Schema, Attribute } from '@strapi/strapi';

export interface ContainersWelcome extends Schema.Component {
  collectionName: 'components_containers_welcomes';
  info: {
    displayName: 'welcome';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'elements.welcome-title'>;
    button: Attribute.Component<'elements.welcome-button'>;
    partners: Attribute.Component<'elements.partners-footer'>;
  };
}

export interface ElementsImage extends Schema.Component {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'Image';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    alt: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Discuss with an expert'>;
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
      'containers.welcome': ContainersWelcome;
      'elements.image': ElementsImage;
      'elements.partners-footer': ElementsPartnersFooter;
      'elements.welcome-button': ElementsWelcomeButton;
      'elements.welcome-title': ElementsWelcomeTitle;
    }
  }
}
