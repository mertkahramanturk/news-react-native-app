import i18next from 'i18next';

export const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined);
export const required = value => value ? true : i18next.languages[0] === 'en' || i18next.languages[0] === 'en-EN' ? 'This field shouldn’t be empty' : 'Bu alan boş bırakılmamalıdır';
export const required_select = value => (value) ? undefined : i18next.languages[0] === 'en'  || i18next.languages[0] === 'en-EN'? 'Please make a choice' : 'Lütfen bir seçim yapın';
export const email = value => (value && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(value) ? i18next.languages[0] === 'en' || i18next.languages[0] === 'en-EN' ? 'Invalid email address' : 'Geçersiz e-posta adresi' : undefined);

  
