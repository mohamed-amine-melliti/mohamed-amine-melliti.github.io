import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'uk',
  messages: {
    en: {
      about: 'about me',
      allAchievements: 'Achievements and Honors',
      allAchievementsStyled: 'Achievements <br> and <span class="orange-color">Honors</span>',
      back: 'back',
      backToHome: 'Back to home',
      cases: 'cases',
      clients: 'clients',
      close: 'close',
      contactUs: 'contact us',
      detailed: 'more detailed',
      here: 'here',
      howToFindUs: 'how to find us?',
      home: 'home',
      menu: 'Menu',
      notFound: 'The page you are looking for does not exist.',
      ourCases: 'our cases',
      ourPartners: 'our partners',
      ourServices: 'My Skills',
      partners: 'partners',
      services: 'My Skills',
      updatedAt: 'last updated at'
    },
    uk: {
      about: 'Sur moi',
      allAchievements: 'Toutes mes réalisations',
      allAchievementsStyled: 'Toutes <br> Mes <span class="orange-color">réalisations</span>',
      back: 'Retour',
      backToHome: 'Accueil',
      cases: 'кейси',
      clients: 'замовники',
      close: 'закрити',
      contactUs: 'напишіть нам листа',
      detailed: 'детальніше',
      here: 'тут',
      howToFindUs: 'де нас знайти?',
      home: 'на головну',
      menu: 'Меню',
      notFound: 'Сторінка, яку Ви шукаєте, не існує.',
      ourCases: 'наші кейси',
      ourPartners: 'наші партнери',
      ourServices: 'наші послуги',
      partners: 'партнери',
      services: 'послуги',
      updatedAt: 'останній апдейт'
    }
  }
});
