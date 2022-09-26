import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      'pk_test_51LGoMIGRovguwmZwQADFx2FBp6UYJwLOZqc0lK4a9zth2vW3Io4AIBpEv0TTbXVfg5AOMxJFqKVouqUW2pQb2zDe008lEwbO1O'
    );
  }
  return stripePromise;
};

export default getStripe;
