import app from '../firebaseConfig';
import { getDatabase, ref, set, update } from 'firebase/database';

const db = getDatabase(app);

export const createUser = async email => {
  const userId = crypto.randomUUID();

  await set(ref(db, `users/${userId}`), {
    email,
    phone: '',
    otp: '',
    createdAt: new Date().toISOString(),
  });

  localStorage.setItem('userId', userId);

  return userId;
};

export const savePhone = async phone => {
  const userId = localStorage.getItem('userId');

  await update(ref(db, `users/${userId}`), {
    phone,
  });
};

export const sendOtp = async otp => {
  const userId = localStorage.getItem('userId');

  await update(ref(db, `users/${userId}`), {
    otp,
  });
};
