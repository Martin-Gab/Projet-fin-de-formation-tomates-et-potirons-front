// Middleware to handle the membership

const membershipMiddleware = (store) => (next) => (action) => {
  console.log(`on a intercepté l'action : ${action.type} dans le membershipMiddleware`);

  next(action);
};

export default membershipMiddleware;
