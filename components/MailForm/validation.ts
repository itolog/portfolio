import * as Yup from 'yup';

const MailSchema = Yup.object().shape({
  email: Yup.string().email('Неверный формат email').required('Заполните'),
  name: Yup.string().min(2, 'Слишком короткое имя!').required('Заполните'),
  message: Yup.string()
    .min(10, 'Слишком мало текста!')
    .max(500, 'Слишком много текста!')
    .required('Заполните'),
});

export default MailSchema;
