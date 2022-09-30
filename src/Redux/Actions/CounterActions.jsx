// Nombre de las acciones
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// Creadoras de acciones
export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
