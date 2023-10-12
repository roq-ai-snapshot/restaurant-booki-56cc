import * as yup from 'yup';

export const tableReservationValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.string().required(),
  number_of_people: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
